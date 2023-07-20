import type { RouteLocationRaw } from 'vue-router'

export function useIsExternalLink (to: RouteLocationRaw): boolean {
  return typeof to === 'string' && to.startsWith('http')
}

export function useRemoveUrlSchema (href: string): string {
  return href.replace(/http(s)?:\/\//, '')
}
