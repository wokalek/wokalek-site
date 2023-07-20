<template>
  <GeneralHeadline>Контакты</GeneralHeadline>
  <BlockContactsDescription />
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

useSeoMeta({
  title: 'Контакты',
  description: 'Контакты Александра Вокалька',
})

useSchemaOrg([
  defineWebPage({
    '@id': `#${'ContactPage'}`,
    '@type': 'ContactPage',
    description: 'Контакты Александра Вокалька',
    author: { '@id': `${siteUrl}/#${'Author'}` },
  }),
])
</script>
