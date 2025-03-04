<template>
  <div class="w-full">
    <GeneralHeadline>Фотографии</GeneralHeadline>
    <BlockPhotosGrid />
  </div>
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

const photosStore = usePhotosStore()

await photosStore.fetchPhotos()

useSeoMeta({
  title: 'Фотографии',
  description: 'Фотографии Александра Вокалька',
})

useSchemaOrg([
  defineWebPage({
    '@id': `#${'ImageGallery'}`,
    '@type': 'ImageGallery' as 'WebPage',
    description: 'Фотографии Александра Вокалька',
    author: { '@id': `${siteUrl}/#${'Author'}` },
  }),
])
</script>
