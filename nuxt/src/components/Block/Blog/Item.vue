<template>
  <article class="prose w-full">
    <GeneralTime class="mb-16-8 text-gray-4 caption" :date="post.createdAt" capitalize />
    <ContentRenderer :value="post" />
  </article>
</template>

<script setup lang="ts">
// @ts-expect-error: Ошибка из-за алиаса @ при экспорте типов из '@nuxt/content, https://github.com/nuxt/content/issues/2349
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  post: ParsedContent,
}>()
</script>
