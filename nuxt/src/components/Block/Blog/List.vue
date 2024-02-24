<template>
  <div class="grid gap-64-32 w-full">
    <template v-for="(post, index) in blogPosts" :key="post._path">
      <BlockBlogItem :post="post" />
      <GeneralHr v-if="blogPosts?.length && blogPosts.length !== index + 1" />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const colorMode = useColorMode()
const { data: blogPosts } = useNuxtData<ParsedContent[]>('blogPosts')

onMounted(() => {
  watch(blogPosts, (value) => {
    if (!value) {
      return
    }

    if (value?.length) {
      colorMode.value = 'dark'
    }
  }, { immediate: true })
})
</script>
