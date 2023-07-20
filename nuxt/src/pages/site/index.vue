<template>
  <GeneralHeadline>О сайте</GeneralHeadline>
  <BlockSiteContent />
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

useSeoMeta({
  title: 'О сайте',
  description: 'Основные положения сайта, лицензия, информация о Cookies, статистика и описание из чего сделан сайт',
})

useSchemaOrg([
  defineWebPage({
    '@id': `#${'AboutPage'}`,
    '@type': 'AboutPage',
    author: { '@id': `${siteUrl}/#${'Author'}` },
  }),
])
</script>
