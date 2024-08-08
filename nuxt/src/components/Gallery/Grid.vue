<template>
  <div class="grid gap-64-32">
    <div v-for="(item, index) in items" :key="item.title">
      <div class="mb-32-16">
        <h2 class="inline">
          {{ item.title }}
        </h2>
        <span class="caption ml-8-4 align-top text-gray-4 select-none">
          {{ item.images.length }}
        </span>
      </div>
      <div :id="ids[index]" ref="lightBoxGallery" class="grid grid-cols-4 mobile-or-tablet:grid-cols-2">
        <a
          v-for="imageItem in item.images"
          :key="imageItem.image.url"
          :href="imageItem.image.url"
          :data-pswp-width="imageItem.imageWidth"
          :data-pswp-height="imageItem.imageHeight"
          data-cropped="true"
          target="_blank"
          class="relative flex object-contain pt-[100%]"
          :aria-label="imageItem.alt ? 'Ссылка на изображение: ' + imageItem.alt : 'Ссылка на изображение'"
        >
          <GalleryPicture
            :image="imageItem.image"
            :width="imageItem.imageWidth"
            :height="imageItem.imageHeight"
            :alt="imageItem.alt"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type PhotoSwipeLightbox from 'photoswipe/lightbox'
import type { ImageField } from '@/types/imagefield'

export interface ItemType {
  title: string
  images: {
    image: ImageField
    imageWidth: number
    imageHeight: number
    alt: string
  }[]
}

const props = withDefaults(defineProps<{
  items: ItemType[] | null
}>(), {
  items: () => [],
})

const lightboxes: PhotoSwipeLightbox[] = []
const lightBoxGallery = ref<HTMLDivElement[]>()

const ids: string[] = reactive([])

props.items?.forEach(() => {
  ids.push(useId())
})

onMounted(() => {
  lightBoxGallery.value?.forEach((el) => {
    const lightbox = useLightbox(el.id.replace(':', '\\:'))

    lightbox.init()
    lightboxes.push(lightbox)
  })
})

onBeforeUnmount(() => {
  lightboxes.forEach((lightbox) => {
    lightbox.destroy()
  })
})
</script>
