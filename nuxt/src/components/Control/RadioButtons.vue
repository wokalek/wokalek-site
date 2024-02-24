<template>
  <div :key="forceUpdate" role="radiogroup" class="grid grid-cols-3 gap-32-16 items-center">
    <div v-for="element in set" :key="element.value" class="flex flex-col items-center">
      <button
        class="
          relative p-16-8 border-1-1 select-none
          border-gray-3 text-gray-6 dark:border-gray-4 dark:text-gray-2
          [&.selected]:border-gray-6 [&.selected]:text-gray-6 dark:[&.selected]:border-gray-2 dark:[&.selected]:text-gray-2
        "
        :class="{ 'selected': value === element.value }"
        role="radio"
        :aria-checked="value === element.value"
        :aria-label="element.label"
        @click="$emit('click', element.value)"
      >
        <span class="emoji text-28-18">{{ element.icon }}</span>
      </button>
      <label v-if="element.label" class="caption select-none mt-8-4">{{ element.label }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
const forceUpdate = ref(0)

defineProps<{
  value?: string,
  set: { value: string, label: string, icon: string }[]
}>()

defineEmits<{
  click: [value: string]
}>()

onMounted(() => {
  forceUpdate.value++
})
</script>
