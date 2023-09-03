<template>
  <MiniappAge />
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

useSeoMeta({
  title: 'Сколько мне лет?',
  description: 'Узнать сколько мне лет',
})

useSchemaOrg([
  defineWebPage({
    '@id': `#${'Age'}`,
    author: { '@id': `${siteUrl}/#${'Author'}` },
  }),
])
</script>
