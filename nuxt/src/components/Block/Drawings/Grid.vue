<template>
  <div class="w-full">
    <GalleryGrid :items="items" />
  </div>
</template>

<script setup lang="ts">
import type { ItemType } from '@/components/Gallery/Grid.vue'

const drawingsStore = useDrawingsStore()

const items = computed(() => drawingsStore.drawings.reduce((acc, drawing) => {
  const item = acc.find(item => item.title === drawing.section.name)

  const image = usePick(drawing, ['image', 'imageWidth', 'imageHeight', 'alt'])

  if (item) {
    item.images.push(image)
  } else {
    acc.push({ title: drawing.section.name, images: [image] })
  }

  return acc
}, [] as ItemType[]).sort((a, b) => +b.title - +a.title))
</script>
