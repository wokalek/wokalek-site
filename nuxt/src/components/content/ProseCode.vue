<template>
  <div class="codeblock">
    <span v-if="filename" class="filename caption">{{ filename }}</span>
    <slot />
    <button class="copy-button" type="button" @click="copy(code)">
      <span class="caption">{{ isCopied ? 'Скопировано ✓' : 'Копировать' }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const { copy: clipboard } = useClipboard()

withDefaults(defineProps<{
  code: string,
  language: string | null,
  filename?: string | null,
  highlights?: number[] | (() => number[]),
  meta?: string | null,
}>(), {
  code: '',
  language: null,
  filename: null,
  highlights: () => [],
  meta: null,
})

const isCopied = ref(false)
let isCopiedTimerId: ReturnType<typeof setTimeout> | undefined

function copy (code: string) {
  if (isCopied.value) {
    return
  }

  isCopied.value = true

  clipboard(code)

  isCopiedTimerId = setTimeout(() => {
    isCopied.value = !isCopied.value
  }, 1000)
}

onBeforeUnmount(() => {
  clearTimeout(isCopiedTimerId)
})
</script>

<style lang="sass">
pre
  display: flex
  overflow-x: auto
  padding: var(--f-32-16)
  border-radius: 0.5em
  background-color: var(--invisible-color)

pre code
  display: flex
  flex-direction: column
  font-size: var(--f-18-12)

pre code .line
  display: block
  min-height: 1rem
</style>

<style lang="sass" scoped>
.codeblock
  position: relative

.filename
  position: absolute
  color: var(--faded-color)
  top: var(--f-8-4)
  right: var(--f-8-4)
  backdrop-filter: blur(var(--f-4-4))
  padding: calc(var(--f-8-4) / 2)
  transition: opacity 300ms easeOutBack
  opacity: 1

  .isDesktop .codeblock:hover &:not(:hover)
    opacity: 0

.copy-button
  @include button-reset
  position: absolute
  right: var(--f-8-4)
  bottom: var(--f-8-4)
  color: var(--faded-color)
  padding: calc(var(--f-8-4) / 2)
  backdrop-filter: blur(var(--f-4-4))
  user-select: none
  transition: opacity 300ms easeOutBack
  opacity: 0

  .isMobileOrTablet &,
  .isDesktop .codeblock &:focus,
  .isDesktop .codeblock:hover &
    opacity: 1
</style>
