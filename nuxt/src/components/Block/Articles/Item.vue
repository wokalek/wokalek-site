<template>
  <article>
    <GeneralLink class="mb-8-4 block lead" :to="(article._path as string)">{{ article.title }}</GeneralLink>
    <GeneralTime class="text-gray-4 caption" :date="article.createdAt" capitalize />
  </article>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  article: ParsedContent,
}>()
</script>
