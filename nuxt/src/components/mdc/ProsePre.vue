<template>
  <div class="w-full">
    <div class="mb-4-2 flex items-center justify-between overflow-hidden">
      <div v-if="file" class="flex text-nowrap overflow-hidden mr-16-8">
        <div class="caption text-gray-4 overflow-hidden text-ellipsis">
          {{ file.name }}
        </div>
        <div class="caption text-gray-4">
          {{ '.' + file.extension }}
        </div>
      </div>
      <button class="caption ml-auto text-gray-4 select-none text-nowrap" type="button" @click="copy(code)">
        {{ isCopied ? 'Скопировано ✓' : 'Копировать' }}
      </button>
    </div>
    <div
      class="
        scrollbar relative border-1-1 rounded-0.25em
        border-gray-2 bg-gray-1 bg-opacity-50
        dark:border-gray-5 dark:bg-gray-6 dark:bg-opacity-100
      "
    >
      <pre class="py-32-16 px-32-16 flex overflow-y-auto" :class="$props.class">
        <slot />
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const { copy: clipboard } = useClipboard()

const props = withDefaults(defineProps<{
  code?: string,
  language?: string | null,
  filename?: string | null,
  highlights?: number[] |(() => number[]),
  meta?: string | null,
  class?: string | null,
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
