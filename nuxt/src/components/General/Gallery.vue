<template>
  <div class="list">
    <div v-for="(dataItem, index) in data" :key="index" class="list-item">
      <div class="headline">
        <h2 class="font-lora font-bold leading-1.3 text-38-24 my-1em">
          {{ dataItem.title }}
        </h2>
        <span class="count text-gray-4 caption">{{ dataItem.images.length }}</span>
      </div>
      <div :id="'id_' + nanoid()" ref="lightBoxGallery" class="images-list">
        <a
          v-for="image in dataItem.images"
          :key="image.src"
          class="image-link"
          :href="image.src"
          :data-pswp-width="image.width"
          :data-pswp-height="image.height"
          data-cropped="true"
          target="_blank"
          :aria-label="image.alt ? 'Ссылка на изображение: ' + image.alt : 'Ссылка на изображение'"
        >
          <GeneralPicture
            class="img"
            :src="image.src"
            :width="image.width"
            :height="image.height"
            :alt="image.alt ? 'Изображение: ' + image.alt : ''"
            :poster-src="image.posterSrc"
            sizes="xs:144px sm:204px md:113px lg:140px xl:160px xxl:218px 2xl:500px"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type PhotoSwipe from 'photoswipe'
import { nanoid } from 'nanoid'
// const { isMobile } = useDevice()

export interface DataItemType {
  title: string,
  images: {
    src: string,
    width: string | number,
    height: string | number,
    alt?: string,
    posterSrc?: string
  }[],
}

withDefaults(defineProps<{
  data: DataItemType[] | null,
}>(), {
  data: () => [],
})

const lightboxes: PhotoSwipe[] = []
const lightBoxGallery = ref<HTMLDivElement[]>()

// До лучших времён
// https://github.com/nuxt/image/pull/901
// const sizes = computed(() => {
//   return isMobile ?
//     'xs:144px sm:204px md:226px lg:274px xl:320px xxl:366px 2xl:1098px' :
//     'xs:72px sm:102px md:114px lg:138px xl:160px xxl:184px 2xl:552px'
// })

onMounted(() => {
  lightBoxGallery.value?.forEach((el) => {
    const lightbox = useLightbox(el.id)
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

<style lang="sass" scoped>
.list
  display: grid
  gap: var(--f-64-32)

.headline
  margin-bottom: var(--f-32-16)

h2
  display: inline
  margin: 0

.count
  vertical-align: top
  margin-left: var(--f-8-4)
  user-select: none

.images-list
  display: grid
  grid-template-columns: repeat(4, 1fr)

  .isMobileOrTablet &
    grid-template-columns: repeat(2, 1fr)

.image-link
  position: relative
  display: flex
  @include link-reset
  object-fit: contain
  padding-top: 100%

.img
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%

.img :deep(img)
  display: block
  width: 100%
  height: 100%
  object-fit: cover
</style>
