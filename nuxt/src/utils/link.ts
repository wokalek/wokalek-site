import type { RouteLocationRaw } from 'vue-router'

export function useIsExternalLink (to: RouteLocationRaw): boolean {
  return typeof to === 'string' && to.startsWith('http')
}
