<template>
  <div :key="forceUpdate" role="radiogroup" class="control-radio-buttons">
    <div v-for="element in set" :key="element.value" class="control-button">
      <button
        class="button"
        :class="{ 'checked': value === element.value }"
        role="radio"
        :aria-checked="value === element.value"
        :aria-label="element.label"
        @click="$emit('click', element.value)"
      >
        <span class="emoji emoji-icon">{{ element.icon }}</span>
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
  (e: 'click', value: string): void,
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

.button
  @include button-reset
  position: relative
  padding: var(--f-16-8)
  border: var(--f-1-1) solid var(--disabled-color)
  border-radius: var(--f-16-8)
  user-select: none
  color: var(--disabled-color)

  &.checked
    border: var(--f-1-1) solid var(--text-color)
    color: var(--text-color)

.emoji
  font-size: var(--f-26-18)

.label
  user-select: none
  pointer-events: none
  margin-top: 0.5em
</style>
