<template>
  <article>
    <GeneralLink class="mb-8-4 block lead" :to="{ name: 'articles-slug', params: { slug: article.slug } }">
      {{ article.title }}
    </GeneralLink>
    <GeneralTime class="text-gray-4 caption" :date="article.pubDate" capitalize />
  </article>
</template>

<script setup lang="ts">
import type { Article } from '~/types/graphql/article';

defineProps<{
  article: Article,
}>()
</script>
