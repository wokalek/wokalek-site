<template>
  <div class="grid grid-cols-1 gap-64-32 w-full">
    <template v-for="(post, index) in postsStore.posts" :key="post.id">
      <BlockBlogItem :post="post" />
      <GeneralHr v-if="postsStore.posts.length !== index + 1" />
    </template>
  </div>
</template>

<script setup lang="ts">
const postsStore = usePostsStore()
</script>
