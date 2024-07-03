<template>
  <article class="prose w-full">
    <GeneralTime class="mb-16-8 text-gray-4 caption" :date="article?.createdAt">
      <template #before>Опубликовано&nbsp;</template>
    </GeneralTime>
    <h1>{{ article?.title }}</h1>
    <ContentRenderer :value="(article as ParsedContent)" />
    <BlockArticlesShare :value="{ title: article?.title, url: article?._path }" />
  </article>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const { data: article } = useNuxtData<ParsedContent>('content__article')
</script>
