import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs,
    },
  }
})
