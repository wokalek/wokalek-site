<template>
  <div class="w-full">
    <GalleryGrid :items="items" />
  </div>
</template>

<script setup lang="ts">
import type { ItemType } from '@/components/Gallery/Grid.vue'

const photosStore = usePhotosStore()

const items = computed(() => photosStore.photos.reduce((acc, photo) => {
  const item = acc.find(item => item.title === photo.section.name)

  const image = usePick(photo, ['image', 'imageWidth', 'imageHeight', 'alt'])

  if (item) {
    item.images.push(image)
  } else {
    acc.push({ title: photo.section.name, images: [image] })
  }

  return acc
}, [] as ItemType[]).sort((a, b) => +b.title - +a.title))
</script>
