<template>
  <p v-if="isServer || isSupported" class="block-articles-share">
    <button class="button like-button" @click="share(value)">Поделиться <span class="emoji-icon" aria-hidden="true">📢</span></button>
  </p>
</template>

<script setup lang="ts">
import type { UseShareOptions } from '@vueuse/core'

defineProps<{
  value: UseShareOptions,
}>()

const isServer = ref(process.server)
const { share, isSupported } = useShare()
</script>

<style lang="sass" scoped>
.block-articles-share
  margin-top: var(--f-64-32)
  user-select: none

.button
  @include button-reset
  display: inline-flex
  align-items: baseline
  white-space: pre-wrap
</style>
