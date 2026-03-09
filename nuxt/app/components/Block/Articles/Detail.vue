<template>
  <article v-if="article" class="prose w-full">
    <GeneralTime class="mb-16-8 text-gray-4 caption" :date="article.pubDate">
      <template #before>Опубликовано&nbsp;</template>
    </GeneralTime>
    <h1>{{ article.title }}</h1>
    <MDC :value="article.content" />
    <BlockArticlesShare :value="{ title: article.title, url: $router.resolve({ name: 'articles-slug', params: { slug: article.slug } }).href }" />
  </article>
</template>

<script setup lang="ts">
const articlesStore = useArticlesStore()
const { article } = storeToRefs(articlesStore)
</script>
