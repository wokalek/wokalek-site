<template>
  <div
    ref="slider"
    class="lead flex justify-center border-1-1 border-gray-3 dark:border-gray-4"
    role="slider"
    :aria-label="label"
    :aria-valuenow="value"
    :aria-valuemin="minValue"
    :aria-valuemax="maxValue"
    tabindex="0"
  >
    <button
      class="flex justify-center items-center leading-1 select-none size-64-32 text-38-24 font-light"
      :class="{ 'text-gray-4 cursor-default': value === minValue }"
      @click="value !== minValue ? $emit('change', -1) : null"
    >
      -
    </button>
    <div class="px-16-8 flex items-center select-none">{{ value }}</div>
    <button
      class="flex justify-center items-center leading-1 select-none size-64-32 text-38-24 font-light"
      :class="{ 'text-gray-4 cursor-default': value === maxValue }"
      @click="value !== maxValue ? $emit('change', 1) : null"
    >
      +
    </button>
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
