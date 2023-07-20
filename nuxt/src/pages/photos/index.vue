<template>
  <GeneralHeadline>Фотографии</GeneralHeadline>
  <BlockPhotosGrid />
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

await useFetch('/api/photos', { key: 'photos' })

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
