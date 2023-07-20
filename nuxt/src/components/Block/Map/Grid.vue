<template>
  <nav class="block-map-grid">
    <BlockMapItem
      v-for="(item, index) in items"
      :key="index"
      v-bind="item"
    />
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  items: object[],
}>()
</script>

<style lang="sass" scoped>
.block-map-grid
  display: grid
  grid-template-columns: repeat(3, 1fr)
  row-gap: var(--f-32-16)
  column-gap: var(--f-16-16)
  padding: 0 var(--f-76-0)
  width: 100%
  box-sizing: border-box

  .isMobile &
    grid-template-columns: 1fr
</style>
