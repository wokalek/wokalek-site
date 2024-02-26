<template>
  <div class="grid gap-64-32">
    <div v-for="(dataItem, index) in data" :key="index">
      <div class="mb-32-16">
        <h2 class="inline font-lora font-bold leading-1.3 text-38-24 my-1em">
          {{ dataItem.title }}
        </h2>
        <span class="caption ml-8-4 align-top text-gray-4 select-none">
          {{ dataItem.images.length }}
        </span>
      </div>
      <div :id="ids[index]" ref="lightBoxGallery" class="grid grid-cols-4 mobile-or-tablet:grid-cols-2">
        <a
          v-for="image in dataItem.images"
          :key="image.src"
          class="relative flex object-contain pt-[100%]"
          :href="image.src"
          :data-pswp-width="image.width"
          :data-pswp-height="image.height"
          data-cropped="true"
          target="_blank"
          :aria-label="image.alt ? 'Ссылка на изображение: ' + image.alt : 'Ссылка на изображение'"
        >
          <NuxtPicture
            class="img absolute inset-0 *:w-full *:h-full *:object-cover"
            :src="image.src"
            :width="image.width"
            :height="image.height"
            fit="outside"
            :sizes="sizes"
            :alt="image.alt ? 'Изображение: ' + image.alt : ''"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type PhotoSwipeLightbox from 'photoswipe/lightbox'

const { isMobile } = useDevice()

export interface DataItemType {
  title: string,
  images: {
    src: string,
    width: string | number,
    height: string | number,
    alt?: string,
  }[],
}

const props = withDefaults(defineProps<{
  data: DataItemType[] | null,
}>(), {
  data: () => [],
})

const lightboxes: PhotoSwipeLightbox[] = []
const lightBoxGallery = ref<HTMLDivElement[]>()

const ids: string[] = reactive([])

props.data?.forEach(() => {
  ids.push(useId())
})

const sizes = computed(() => {
  return isMobile
    ? 'xs:144px sm:204px md:226px lg:274px xl:320px xxl:370px 2xl:450px'
    : 'xs:72px sm:102px md:114px lg:138px xl:160px xxl:184px 2xl:450px'
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
