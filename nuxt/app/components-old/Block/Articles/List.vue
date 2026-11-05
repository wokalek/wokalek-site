<template>
  <div class="grid f-gap-[32px/32px]">
    <BlockArticlesItem v-for="article in articlesStore.articles" :key="article.id" :article="article" />
  </div>
</template>

<script setup lang="ts">
const articlesStore = useArticlesStore()
</script>
