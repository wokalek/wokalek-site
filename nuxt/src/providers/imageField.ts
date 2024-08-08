import type { ProviderGetImage } from '@nuxt/image'

import { joinURL } from 'ufo'

export const getImage: ProviderGetImage = (src, { modifiers = {} }, ctx) => {
  const imageKey = `${modifiers.width}_${modifiers.format}`

  return {
    url: joinURL(ctx.options.nuxt.baseURL, modifiers.image[imageKey]),
  }
}
