<template>
  <nav class="grid grid-cols-3 auto-rows-fr gap-x-16-8 gap-y-16-8 mobile:grid-cols-1">
    <BlockMapItem
      v-for="(item, index) in items"
      :key="index"
      v-bind="item"
    />
  </nav>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

export type MapItemType = NuxtLinkProps & {
  text: string,
  caption?: string,
  isDisabled?: boolean,
}

defineProps<{
  items: MapItemType[],
}>()
</script>
