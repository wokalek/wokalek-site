<template>
  <GeneralHeadline>Рисунки</GeneralHeadline>
  <BlockDrawingsGrid />
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

const drawingsStore = useDrawingsStore()

await useAsyncData(drawingsStore.fetchDrawings)

useSeoMeta({
  title: 'Рисунки',
  description: 'Рисунки Александра Вокалька',
})

useSchemaOrg([
  defineWebPage({
    '@id': `#${'ImageGallery'}`,
    '@type': 'ImageGallery' as 'WebPage',
    description: 'Рисунки Александра Вокалька',
    author: { '@id': `${siteUrl}/#${'Author'}` },
  }),
])
</script>
