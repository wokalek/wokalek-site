<template>
  <span :id="'id_' + nanoid()" ref="lightBoxGallery" class="prose-img not-prose flex flex-col items-center -ml-32-8">
    <a
      class="flex justify-center w-full"
      :href="src"
      target="_blank"
      :data-pswp-width="width"
      :data-pswp-height="height"
      data-cropped="true"
    >
      <GeneralPicture
        class="picture flex justify-center w-full"
        :src="refinedSrc"
        :width="width"
        :height="height"
        :alt="'Изображение: ' + alt"
        fit="inside"
        :img-attrs="{ style: { '--max-width': width + 'px' } }"
        sizes="xs:288px sm:405px md:452px lg:545px xl:640px xxl:872px 2xl:2616px"
      />
    </a>
    <span v-if="alt" class="caption mt-16-8 px-32-8 block box-border text-center text-balance text-gray-4">
      {{ alt }}
    </span>
  </span>
</template>

<script setup lang="ts">
import type PhotoSwipeLightbox from 'photoswipe/lightbox'

import { withBase } from 'ufo'
import { nanoid } from 'nanoid'

const props = withDefaults(defineProps<{
  src: string,
  alt: string,
  width: string | number,
  height: string | number,
}>(), {
  src: '',
  alt: '',
  width: 0,
  height: 0,
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    return withBase(props.src, useRuntimeConfig().app.baseURL)
  }

  return props.src
})

const lightBoxGallery = ref<HTMLSpanElement | null>(null)
let lightbox: PhotoSwipeLightbox | null = null

onMounted(() => {
  lightbox = useLightbox(lightBoxGallery.value?.id as string)

  lightbox.init()
})

onBeforeUnmount(() => {
  lightbox?.destroy()
  lightbox = null
})
</script>

<style lang="sass" scoped>
.prose-img
  width: calc(100% + 2 * var(--fluid-32-8, 1) * var(--site-scale))

.picture
  & :deep(img)
    @apply w-full h-auto rounded-4-4
    @apply border-1-1 border-gray-1 dark:border-gray-5
    max-width: var(--max-width)
</style>
