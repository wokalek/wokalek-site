<template>
  <div class="block-drawings-grid">
    <GeneralGallery :data="data" />
  </div>
</template>

<script setup lang="ts">
import type { DataType } from '~/server/api/drawings'

const { data } = useNuxtData<DataType>('drawings')
</script>

<style lang="sass" scoped>
.block-drawings-grid
  width: 100%
</style>
