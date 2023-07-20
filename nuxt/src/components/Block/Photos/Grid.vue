<template>
  <div class="block-photos-grid">
    <GeneralGallery :data="data" />
  </div>
</template>

<script setup lang="ts">
import type { DataType } from '~/server/api/photos'

const { data } = useNuxtData<DataType>('photos')
</script>

<style lang="sass" scoped>
.block-photos-grid
  width: 100%
</style>
