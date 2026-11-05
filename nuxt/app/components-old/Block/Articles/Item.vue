<template>
  <article>
    <GeneralLink class="f-mb-[4px/8px] block lead" :to="{ name: 'articles-slug', params: { slug: article.slug } }">
      {{ article.title }}
    </GeneralLink>
    <GeneralTime class="text-grey-4 caption" :date="article.pubDate" capitalize />
  </article>
</template>

<script setup lang="ts">
import type { Article } from '~/types/graphql/article'

defineProps<{
  article: Article
}>()
</script>
