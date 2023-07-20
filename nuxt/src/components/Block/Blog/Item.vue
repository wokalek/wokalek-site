<template>
  <article class="typograph-content">
    <GeneralTime class="time caption" :date="post.createdAt" capitalize />
    <ContentRenderer :value="post" />
  </article>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  post: ParsedContent,
}>()
</script>

<style lang="sass" scoped>
.link
  display: block

.time
  color: var(--faded-color)
  margin-bottom: var(--f-16-8)
</style>
