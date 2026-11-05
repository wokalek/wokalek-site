<template>
  <article class="prose w-full">
    <GeneralTime class="f-mb-[8px/16px] text-grey-4 caption" :date="post.pubDate" capitalize />
    <MDC :value="post.content" />
  </article>
</template>

<script setup lang="ts">
import type { Post } from '~/types/graphql/blog'

defineProps<{
  post: Post
}>()
</script>
