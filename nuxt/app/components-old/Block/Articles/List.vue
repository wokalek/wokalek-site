<template>
  <div class="grid gap-32-32">
    <BlockArticlesItem v-for="article in articlesStore.articles" :key="article.id" :article="article" />
  </div>
</template>

<script setup lang="ts">
const articlesStore = useArticlesStore()
</script>
