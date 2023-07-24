<template>
  <picture :id="'id_' + nanoid()" ref="picture">
    <template v-if="originalFormat === 'gif'">
      <img
        class="lazy"
        v-bind="{ ..._base.attrs.value as ImgHTMLAttributes, ...props.imgAttrs}"
        :width="props.width"
        :height="props.height"
        :src="poster.src"
        :data-src="sources[0].src"
      >
    </template>
    <template v-else>
      <source
        v-for="source in sources.slice(1)"
        :key="source.src"
        :data-srcset="source.srcset"
        :data-sizes="sources[0].sizes"
        :type="source.type"
      >
      <img
        class="lazy"
        v-bind="{ ..._base.attrs.value as ImgHTMLAttributes, ...props.imgAttrs}"
        :width="props.width"
        :height="props.height"
        :src="poster.src"
        :data-src="sources[0].src"
        :data-sizes="sources[0].sizes"
        :data-srcset="sources[0].srcset"
      >
    </template>
  </picture>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { ImgHTMLAttributes } from '#app/compat/capi'
import { pictureProps } from '#image/components/nuxt-picture'
import { useBaseImage } from '#image/components/_base'
import { getFileExtension } from '#image'

const props = defineProps({
  ...pictureProps,
  src: { type: String, required: true },
  posterSrc: { type: String, default: '' },
  formats: { type: Array, default: () => ['webp', 'avif'] },
})

const { $lazyLoad } = useNuxtApp()
const picture = ref<HTMLPictureElement>()

const $img = useImage()
const _base = useBaseImage(props)
const originalFormat = computed(() => getFileExtension(props.src))
const isTransparent = computed(() => ['png', 'webp', 'gif'].includes(originalFormat.value))
const format = computed(() => props.format || ['svg', 'gif'].includes(originalFormat.value) ? originalFormat.value : 'webp')
const legacyFormat = computed(() => {
  if (props.legacyFormat) {
    return props.legacyFormat
  }

  const formats = { webp: isTransparent.value ? 'png' : 'jpeg', svg: 'png' } as { [key: string]: string }

  return formats[format.value] || originalFormat.value
})

const sources = computed((): Array<{ src: string, type?: string, sizes?: string, srcset?: string }> => {
  if (['svg', 'gif'].includes(format.value)) {
    return [{ src: props.src }]
  }

  let formats = legacyFormat.value !== format.value ? [legacyFormat.value, format.value] : [format.value]
  if (props.formats.length) {
    formats = useUniq([...formats, ...props.formats as string[]].reverse()).reverse()
  }

  return formats.map((format) => {
    const { srcset, sizes, src } = $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes || $img.options.screens,
      modifiers: { ..._base.modifiers.value, format },
    })

    return { src, type: `image/${format}`, sizes, srcset }
  })
})

const poster = computed(() => {
  if (props.posterSrc) {
    return { src: props.posterSrc }
  }

  const sizes = $img.getSizes(props.src, {
    ..._base.options.value,
    sizes: '30px:30px',
    modifiers: { ..._base.modifiers.value, format: legacyFormat.value, blur: 1.5 },
  })

  return { src: sizes.src }
})

onMounted(() => {
  const images = document.querySelectorAll<HTMLImageElement>(`#${picture.value?.id} img`)

  images[0].addEventListener('load', () => $lazyLoad.update(images))
})
</script>
