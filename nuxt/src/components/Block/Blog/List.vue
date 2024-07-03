<template>
  <div class="grid grid-cols-1 gap-64-32 w-full">
    <template v-for="(post, index) in posts" :key="post._path">
      <BlockBlogItem :post="post" />
      <GeneralHr v-if="posts?.length && posts.length !== index + 1" />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const { data: posts } = useNuxtData<ParsedContent[]>('content__posts')
</script>
