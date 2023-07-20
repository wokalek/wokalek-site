<template>
  <div
    ref="slider"
    class="control-range-count lead"
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
  (e: 'change', changeValue: number): void
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
  border: var(--f-1-1) solid var(--faded-color)
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
    border-right: var(--f-1-1) solid var(--faded-color)

  &:last-of-type
    border-left: var(--f-1-1) solid var(--faded-color)

  &.disabled
    color: var(--faded-color)

  &:not(.disabled)
    cursor: pointer

.value
  display: flex
  align-items: center
  padding-left: var(--f-16-8)
  padding-right: var(--f-16-8)
  user-select: none
</style>
