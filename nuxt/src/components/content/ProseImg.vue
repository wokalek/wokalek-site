<template>
  <span :id="'id_' + nanoid()" ref="lightBoxGallery" class="prose-img">
    <a
      class="link"
      :href="src"
      target="_blank"
      :data-pswp-width="width"
      :data-pswp-height="height"
      data-cropped="true"
    >
      <GeneralPicture
        class="picture"
        :src="refinedSrc"
        :width="width"
        :height="height"
        :alt="'Изображение: ' + alt"
        fit="inside"
        :img-attrs="{ style: { '--max-width': width + 'px' } }"
        sizes="xs:288px sm:405px md:452px lg:545px xl:640px xxl:872px 2xl:2616px"
      />
    </a>
    <span v-if="alt" class="caption">{{ alt }}</span>
  </span>
</template>

<script setup lang="ts">
import type PhotoSwipe from 'photoswipe'
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
let lightbox: PhotoSwipe | null = null

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
  display: flex
  flex-direction: column
  align-items: center
  width: calc(100% + 2 * var(--f-32-8))
  margin-left: calc(-1 * var(--f-32-8))

.link
  @include link-reset
  display: flex
  justify-content: center
  width: 100%

.picture
  display: flex
  justify-content: center
  width: 100%

  & :deep(img)
    width: 100%
    height: auto
    max-width: var(--max-width)
    border: var(--f-1-1) solid var(--invisible-color)
    border-radius: var(--f-4-4)

.caption
  display: block
  box-sizing: border-box
  color: var(--faded-color)
  padding-left: var(--f-32-8)
  padding-right: var(--f-32-8)
  margin-top: var(--f-16-8)
  text-align: center
  white-space: break-spaces
</style>
