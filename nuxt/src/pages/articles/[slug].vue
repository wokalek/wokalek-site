<template>
  <BlockArticlesDetail />
</template>

<script setup lang="ts">
// @ts-expect-error: Ошибка из-за алиаса @ при экспорте типов из '@nuxt/content, https://github.com/nuxt/content/issues/2349
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { public: { siteUrl } } = useRuntimeConfig()
const route = useRoute('articles-slug')

const { data: article } = await useAsyncData('content__article', () => queryContent(route.path).findOne(), { default: () => { return {} as ParsedContent } })

if (isEmpty(article.value)) {
  throw createError({ statusCode: 404 })
}

useContentHead(article)

useSchemaOrg([
  defineArticle({
    url: `${siteUrl}${article.value._path}`,
    headline: article.value.title,
    description: article.value.description,
    datePublished: article.value.createdAt,
    dateModified: article.value.updatedAt || article.value.createdAt,
    author: { '@id': `${siteUrl}/#${'Author'}` },
    image: article.value.image,
  }),
])
</script>

<style lang="sass">
@import katex/dist/katex.css
</style>
