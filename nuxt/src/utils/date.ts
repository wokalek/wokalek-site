export function useDateLongFormat (date: string | number | Date) {
  const formatter = Intl.DateTimeFormat(import.meta.browser ? undefined : 'ru-RU', { timeStyle: 'long', dateStyle: 'long' })

  return formatter.format(new Date(date))
}
