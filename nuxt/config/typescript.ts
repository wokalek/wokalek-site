import type { NuxtConfig } from '@nuxt/schema'

export default {
  nodeTsConfig: {
    include: [
      '../config/**/*',
    ],
  },
} satisfies NuxtConfig['typescript']
