<template>
  <div :key="forceUpdate" role="radiogroup" class="control-radio-buttons">
    <div v-for="element in set" :key="element.value" class="control-button">
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
      <label v-if="element.label" class="label caption">{{ element.label }}</label>
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

<style lang="sass" scoped>
.control-radio-buttons
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: var(--f-32-16)
  align-items: center

.control-button
  display: flex
  flex-direction: column
  align-items: center

.label
  user-select: none
  pointer-events: none
  margin-top: 0.5em
</style>
