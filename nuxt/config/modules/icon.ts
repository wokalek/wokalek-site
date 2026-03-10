import type { NuxtConfig } from '@nuxt/schema'

export default {
  mode: 'css',
  cssLayer: 'base',
  provider: 'none',
  clientBundle: {
    scan: true,
  },
  customCollections: [
    {
      prefix: 'icons',
      dir: './app/assets/icons',
      recursive: true,
    },
  ],
} satisfies NuxtConfig['icon']
