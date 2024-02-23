<template>
  <div v-if="isServer || isSupported" class="mt-64-32 ml-1em select-none">
    <button
      class="inline-block items-baseline whitespace-pre-wrap text-current transition-opacity desktop:hover:opacity-50 ease-in-out-quad opacity-100"
      @click="share(value)"
    >
      Поделиться <span class="emoji" aria-hidden="true">📢</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { UseShareOptions } from '@vueuse/core'

defineProps<{
  value: UseShareOptions,
}>()

const isServer = ref(process.server)
const { share, isSupported } = useShare()
</script>
