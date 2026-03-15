import type { NuxtConfig } from '@nuxt/schema'

import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [
    tailwindcss() as never,
  ],
} satisfies NuxtConfig['vite']
