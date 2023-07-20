export function useDateLongFormat (date: string | number | Date) {
  const dateTimeFormat = Intl.DateTimeFormat(undefined, { timeStyle: 'long', dateStyle: 'long' })

  return dateTimeFormat.format(new Date(date))
}
