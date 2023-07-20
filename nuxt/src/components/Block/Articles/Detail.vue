<template>
  <article class="typograph-content">
    <GeneralTime class="time caption" :date="article?.createdAt">
      <template #before>Опубликовано&nbsp;</template>
    </GeneralTime>
    <h1>{{ article?.title }}</h1>
    <ContentRenderer :value="(article as ParsedContent)" />
    <BlockArticlesShare :value="{ title: article?.title, url: article?._path }" />
  </article>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: article } = useNuxtData<ParsedContent>('article')
</script>

<style lang="sass" scoped>
.time
  color: var(--faded-color)
  margin-bottom: var(--f-16-8)
</style>
