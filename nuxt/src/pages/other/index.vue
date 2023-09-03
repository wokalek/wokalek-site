<template>
  <GeneralHeadline>Другое</GeneralHeadline>
  <ul class="lead">
    <li>
      <GeneralLink :to="{ name: 'age' }">
        Узнать сколько лет Вокальку
      </GeneralLink>
    </li>
    <li>
      <GeneralLink to="#">
        Секретная ссылка на секретную страницу
      </GeneralLink>
    </li>
  </ul>
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
