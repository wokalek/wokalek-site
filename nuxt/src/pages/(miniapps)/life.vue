<template>
  <MiniappLife />
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

useSeoMeta({
  title: 'Календарь жизни',
  description: 'Узнать сколько лет тебе осталось жить',
})

useSchemaOrg([
  defineWebPage({
    '@id': `#${'Life'}`,
    author: { '@id': `${siteUrl}/#${'Author'}` },
  }),
])
</script>
