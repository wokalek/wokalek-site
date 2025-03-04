<template>
  <div>
    <GeneralHeadline>Статьи</GeneralHeadline>
    <BlockArticlesList />
  </div>
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()
const router = useRouter()

const articlesStore = useArticlesStore()

await articlesStore.fetchArticles()

useSeoMeta({
  title: 'Статьи',
  description: 'Список статей Александра Вокалька',
})

useSchemaOrg([
  defineItemList({
    itemListElement: articlesStore.articles.map(article => defineArticle({
      datePublished: article.pubDate,
      dateModified: article.updateDate,
      url: router.resolve({ name: 'articles-slug', params: { slug: article.slug } }).href,
      headline: article.title,
      author: { '@id': `${siteUrl}/#${'Author'}` },
    })),
  }),
])
</script>
