<template>
  <GeneralHeadline>Статьи</GeneralHeadline>
  <BlockArticlesList />
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

const { data: articles } = await useAsyncData('articles', () => queryContent('/articles').sort({ createdAt: -1, $numeric: false }).find(), { default: () => [] })

useSeoMeta({
  title: 'Статьи',
  description: 'Список статей Александра Вокалька',
})

useSchemaOrg([
  defineItemList({
    itemListElement: articles.value.map(article => defineArticle({
      url: `${siteUrl}${article._path}`,
      headline: article.title,
      description: article.description,
      datePublished: article.createdAt,
      dateModified: article.updatedAt || article.createdAt,
      author: { '@id': `${siteUrl}/#${'Author'}` },
      image: article.image,
    })),
  }),
])
</script>
