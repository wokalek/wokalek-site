<template>
  <div :id="id" ref="lightBoxGallery" class="-mx-32-8 not-prose flex flex-col items-center">
    <a
      class="flex justify-center w-full"
      :style="{ maxWidth: width + 'px' }"
      :href="src"
      target="_blank"
      :data-pswp-width="width"
      :data-pswp-height="height"
      data-cropped="true"
    >
      <NuxtPicture
        class="flex justify-center w-full rounded-4-4 border-1-1 border-gray-1 dark:border-gray-5"
        :src="props.src"
        :width="width"
        :height="height"
        sizes="xs:288px sm:405px md:452px lg:545px xl:640px xxl:732px 2xl:1536px"
        :alt="'Изображение: ' + alt"
        loading="lazy"
      />
    </a>
    <span v-if="alt" class="caption mt-16-8 px-32-8 block box-border text-center text-balance text-gray-4">
      {{ alt }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type PhotoSwipeLightbox from 'photoswipe/lightbox'

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

const id = useId()

const lightBoxGallery = ref<HTMLSpanElement | null>(null)
let lightbox: PhotoSwipeLightbox | null = null

onMounted(() => {
  lightbox = useLightbox(lightBoxGallery.value?.id.replace(':', '\\:') as string)

  lightbox.init()
})

onBeforeUnmount(() => {
  lightbox?.destroy()
  lightbox = null
})
</script>
