<template>
  <div
    ref="slider"
    class="control-range-count lead border-1-1 border-gray-6 dark:border-gray-2"
    role="slider"
    :aria-label="label"
    :aria-valuenow="value"
    :aria-valuemin="minValue"
    :aria-valuemax="maxValue"
    tabindex="0"
  >
    <div class="button" :class="{ 'disabled': value === minValue }" @click="value !== minValue ? $emit('change', -1) : null"> - </div>
    <div class="value">{{ value }}</div>
    <div class="button" :class="{ 'disabled': value === maxValue }" @click="value !== maxValue ? $emit('change', 1) : null"> + </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  value: number,
  minValue?: number,
  maxValue?: number,
  label?: string,
}>(), {
  value: 0,
  minValue: undefined,
  maxValue: undefined,
  label: undefined,
})

const emits = defineEmits<{
  change: [changeValue: number],
}>()

let isFocused = ref(false)
const slider = ref<HTMLDivElement>()
const { arrowleft, arrowright } = useMagicKeys()

onMounted(() => {
  const { focused } = useFocus(slider.value)
  isFocused = focused
})

watch(arrowleft, (pressed) => {
  if (!isFocused.value || !pressed) {
    return
  }

  emits('change', -1)
})

watch(arrowright, (pressed) => {
  if (!isFocused.value || !pressed) {
    return
  }

  emits('change', 1)
})
</script>

<style lang="sass" scoped>
.control-range-count
  display: flex
  justify-content: center
  border-radius: var(--f-16-8)

.button
  display: flex
  justify-content: center
  align-items: center
  width: var(--f-64-32)
  height: var(--f-64-32)
  line-height: 100%
  user-select: none

  &:first-of-type
    @apply border-r-1-1 border-r-gray-4

  &:last-of-type
    @apply border-l-1-1 border-l-gray-4

  &.disabled
    @apply text-gray-4

  &:not(.disabled)
    cursor: pointer

.value
  display: flex
  align-items: center
  padding-left: var(--f-16-8)
  padding-right: var(--f-16-8)
  user-select: none
</style>
