import type { NuxtConfig } from '@nuxt/schema'

export default {
  loadStyles: false,
  components: {
    prefix: 'Prime',
  },
  options: {
    unstyled: true,
  },
} satisfies NuxtConfig['primevue']
