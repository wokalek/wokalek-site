import type { NuxtConfig } from '@nuxt/schema'

export default {
  densities: [1],
  providers: {
    imageField: { provider: '~/providers/image-field.ts' },
  },
} satisfies NuxtConfig['image']
