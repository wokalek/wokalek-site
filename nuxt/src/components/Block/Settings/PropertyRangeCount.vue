<template>
  <div :key="forceUpdate">
    <ControlRangeCount
      :value="value"
      :min-value="useMin(steps)"
      :max-value="useMax(steps)"
      :label="label"
      @change="changeValue($event)"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  property: string,
  defaultValue?: number,
  label?: string,
}>(), {
  defaultValue: 100,
  label: undefined,
})

const forceUpdate = ref(0)

const steps = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 175, 200]

const value = useLocalStorage(props.property, props.defaultValue)

const currentValueIndex = computed(() => steps.indexOf(value.value))

function changeValue (indexShift: number) {
  const newValue = steps[unref(currentValueIndex) + indexShift]

  if (!newValue) {
    return
  }

  value.value = newValue
}

onMounted(() => {
  forceUpdate.value++
})
</script>
