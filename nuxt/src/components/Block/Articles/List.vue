<template>
  <div class="grid gap-32-32">
    <BlockArticlesItem v-for="article in articles" :key="article._path" :article="article" />
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: articles } = useNuxtData<ParsedContent[]>('articles')
</script>
