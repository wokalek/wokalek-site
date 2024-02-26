<template>
  <div class="w-full">
    <GeneralGallery :data="data" />
  </div>
</template>

<script setup lang="ts">
import type { DataItemType } from '~/server/utils/galleryFolderFetcher'

const { data } = useNuxtData<DataItemType[]>('drawings')
</script>
