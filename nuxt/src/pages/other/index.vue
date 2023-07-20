<template>
  <GeneralHeadline>Другое</GeneralHeadline>
  <div>
    <GeneralLink class="lead" to="#">
      Секретная ссылка на секретную страницу
    </GeneralLink>
  </div>
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

useSeoMeta({
  title: 'Другое',
  description: 'Всякая всячина',
})

useSchemaOrg([
  defineWebPage({
    '@id': `#${'OtherPage'}`,
    author: { '@id': `${siteUrl}/#${'Author'}` },
  }),
])
</script>
