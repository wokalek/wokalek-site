<template>
  <div class="codeblock scrollbar">
    <span v-if="filename" class="filename caption text-gray-4">{{ filename }}</span>
    <slot />
    <button class="copy-button text-gray-4" type="button" @click="copy(code)">
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
  @apply flex overflow-x-auto p-32-16 rounded-0.5em

pre code
  @apply flex flex-col text-18-12

pre code .line
  @apply block min-h-1em
</style>

<style lang="sass" scoped>
.filename
  position: absolute
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
