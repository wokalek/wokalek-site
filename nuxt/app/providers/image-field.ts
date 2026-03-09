import { joinURL } from 'ufo'

import { defineProvider } from '@nuxt/image/runtime'

export default defineProvider<{ baseURL?: string }>({
  getImage(src, { modifiers, baseURL }, ctx) {
    const imageKey = `${modifiers.width}_${modifiers.format}`

    return { url: joinURL(baseURL ?? ctx.options.nuxt.baseURL, modifiers.image[imageKey]) }
  },
})
