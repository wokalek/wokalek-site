<template>
  <article>
    <GeneralLink class="mb-8-4 block lead" :to="(article._path as string)">{{ article.title }}</GeneralLink>
    <GeneralTime class="text-gray-4 caption" :date="article.createdAt" capitalize />
  </article>
</template>

<script setup lang="ts">
// @ts-expect-error: Ошибка из-за алиаса @ при экспорте типов из '@nuxt/content, https://github.com/nuxt/content/issues/2349
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  article: ParsedContent,
}>()
</script>
