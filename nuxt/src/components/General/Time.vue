<template>
  <div :key="forceUpdate" class="select-none">
    <span :title="useDateLongFormat(date)">
      <slot name="before" />
      <time ref="time" :datetime="(date as string)">{{ getFormattedDate() }}</time>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { TDate } from 'timeago.js'

const props = defineProps<{
  date: TDate,
  capitalize?: boolean,
}>()

const { $timeago } = useNuxtApp()

const forceUpdate = ref(0)

const time = ref<HTMLTimeElement>()
let stopObserver: () => void

function getFormattedDate () {
  const date = $timeago.format(props.date, 'ru')

  return props.capitalize ? useCapitalize(date) : date
}

onMounted(() => {
  forceUpdate.value++
  $timeago.render(time.value as HTMLTimeElement, 'ru')

  if (props.capitalize) {
    time.value!.innerText = getFormattedDate()

    const { stop } = useMutationObserver(time.value, () => {
      time.value!.innerText = getFormattedDate()
    }, { attributes: true, attributeFilter: ['timeago-id'] })

    stopObserver = stop
  }
})

onBeforeUnmount(() => {
  $timeago.cancel(time.value as HTMLTimeElement)

  if (stopObserver) {
    stopObserver()
  }
})
</script>
