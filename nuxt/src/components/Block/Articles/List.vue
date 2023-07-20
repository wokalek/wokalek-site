<template>
  <div class="block-articles-list">
    <BlockArticlesItem v-for="article in articles" :key="article._path" :article="article" />
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: articles } = useNuxtData<ParsedContent[]>('articles')
</script>

<style lang="sass" scoped>
.block-articles-list
  display: grid
  gap: var(--f-32-32)
</style>
