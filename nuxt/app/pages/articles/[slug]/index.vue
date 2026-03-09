<template>
  <BlockArticlesDetail />
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

const router = useRouter()
const route = useRoute('articles-slug')

const articlesStore = useArticlesStore()

await articlesStore.fetchArticle(route.params.slug)

if (isEmpty(articlesStore.article)) {
  throw createError({ statusCode: 404 })
}

useHead({ title: articlesStore.article.title })

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
