import { format, render, cancel, register } from 'timeago.js'
import ru from 'timeago.js/lib/lang/ru'

type ruLocaleFunctionType = typeof ru

register('ru', typeof ru === 'object' ? (ru as { default: ruLocaleFunctionType }).default : ru)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      timeago: {
        format,
        render,
        cancel,
      },
    },
  }
})
