<template>
  <BlockArticlesDetail />
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

const router = useRouter()
const route = useRoute('articles-slug')

const articlesStore = useArticlesStore()

await useAsyncData(() => articlesStore.fetchArticle(route.params.slug))

if (isEmpty(articlesStore.article)) {
  throw createError({ statusCode: 404 })
}

useSchemaOrg([
  defineArticle({
    url: router.resolve({ name: 'articles-slug', params: { slug: articlesStore.article.slug } }).href,
    headline: articlesStore.article.title,
    datePublished: articlesStore.article.pubDate,
    dateModified: articlesStore.article.updateDate,
    author: { '@id': `${siteUrl}/#${'Author'}` },
  }),
])
</script>

<style lang="sass">
@import katex/dist/katex.css
</style>
