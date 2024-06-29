<template>
  <div class="grid gap-32-32">
    <BlockArticlesItem v-for="article in articles" :key="article._path" :article="article" />
  </div>
</template>

<script setup lang="ts">
// @ts-expect-error: Ошибка из-за алиаса @ при экспорте типов из '@nuxt/content, https://github.com/nuxt/content/issues/2349
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: articles } = useNuxtData<ParsedContent[]>('content__articles')
</script>
