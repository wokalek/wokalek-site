<template>
  <div class="w-full">
    <div class="f-mb-0.5/1 flex items-center justify-between f-gap-2/4 overflow-hidden">
      <div v-if="file" class="flex overflow-hidden text-nowrap">
        <div class="caption overflow-hidden text-ellipsis text-grey-4">
          {{ file.name }}
        </div>
        <div class="caption text-grey-4">
          {{ '.' + file.extension }}
        </div>
      </div>
      <button class="caption ml-auto text-nowrap text-grey-4 select-none" type="button" @click="copy(code)">
        {{ isCopied ? 'Скопировано ✓' : 'Копировать' }}
      </button>
    </div>
    <div
      class="
        scrollbar border-1-1 rounded-0.25em bg-opacity-50
        dark:bg-opacity-100 relative border-grey-2
        bg-grey-1 dark:border-grey-5 dark:bg-grey-6
      "
    >
      <pre class="flex overflow-y-auto f-p-4/8" :class="$props.class">
        <slot />
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const { copy: clipboard } = useClipboard()

const props = withDefaults(defineProps<{
  code?: string
  language?: string | null
  filename?: string | null
  highlights?: number[] | (() => number[])
  meta?: string | null
  class?: string | null
}>(), {
  code: '',
  language: null,
  filename: null,
  highlights: () => [],
  meta: null,
  class: null,
})

const isCopied = ref(false)
let isCopiedTimerId: ReturnType<typeof setTimeout> | undefined

const file = computed(() => {
  if (!props.filename) {
    return null
  }

  const lastDotIndex = props.filename.lastIndexOf('.')
  const name = props.filename.slice(0, lastDotIndex)
  const extension = props.filename.slice(lastDotIndex + 1)

  return { name, extension }
})

function copy(code: string) {
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
