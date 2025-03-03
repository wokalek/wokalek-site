import { useNow } from '@vueuse/core'

export default function () {
  const { $dayjs } = useNuxtApp()

  const now = useNow()

  function isWinter(now: Date) {
    const today = $dayjs(now)
    const year = today.year()
    const isYearTurn = today.month() >= 0 && today.month() < 11

    const winterStart = $dayjs(`${year - (isYearTurn ? 1 : 0)}-12-01`)
    const winterEnd = $dayjs(`${year - (isYearTurn ? 0 : 1)}-03-01`)

    return today.isBetween(winterStart, winterEnd, 'day', '[)')
  }

  return {
    isWinter: computed(() => isWinter(now.value)),
  }
}
