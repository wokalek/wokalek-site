<template>
  <article class="prose w-full">
    <GeneralTime class="mb-16-8 text-gray-4 caption" :date="post.pubDate" capitalize />
    <MDC :value="post.content" />
  </article>
</template>

<script setup lang="ts">
import type { Post } from '~/types/graphql/blog'

defineProps<{
  post: Post,
}>()
</script>
