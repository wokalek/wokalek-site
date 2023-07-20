<template>
  <article>
    <GeneralLink class="link lead" :to="(article._path as string)">{{ article.title }}</GeneralLink>
    <GeneralTime class="time caption" :date="article.createdAt" capitalize />
  </article>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  article: ParsedContent,
}>()
</script>

<style lang="sass" scoped>
.link
  display: block
  margin-bottom: var(--f-8-4)

.time
  color: var(--faded-color)
</style>
