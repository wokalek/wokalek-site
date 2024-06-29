<template>
  <div v-if="isServer || isSupported" class="mt-64-32 select-none">
    <p>
      <button
        class="inline-block items-baseline text-current transition-opacity desktop:hover:opacity-50 ease-in-out-quad opacity-100"
        @click="share(value)"
      >
        Поделиться&nbsp;<span class="emoji" aria-hidden="true">📢</span>
      </button>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { UseShareOptions } from '@vueuse/core'

defineProps<{
  value: UseShareOptions,
}>()

const isServer = ref(import.meta.server)
const { share, isSupported } = useShare()
</script>
