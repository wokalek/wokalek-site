<template>
  <NuxtLayout name="default">
    <GeneralHeadline>Ошибка {{ error.statusCode }}</GeneralHeadline>
    <div>
      <p class="kaomoji mt-0 nowrap">
        <span>{{ kaomoji }}</span>
      </p>
      <p class="mb-0">
        <template v-if="error.statusCode === 404">
          Извините, страница, которую вы&nbsp;ищете, не&nbsp;может быть найдена.
        </template>
        <template v-else-if="error.statusCode === 500">
          Эта страница временно недоступна.
        </template>
        <template v-else>
          {{ error.statusMessage }}
        </template>
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { sad } from 'kaokun'

const { data: kaomoji } = useAsyncData(() => Promise.resolve(sad()))

defineProps<{
  error: {
    statusCode: number,
    statusMessage: string,
    message: string,
    description: string,
    stack: string,
  },
}>()
</script>

<style lang="sass" scoped>
.kaomoji
  display: flex
  justify-content: center
  @include fluid('font-size', 34px, 20px)
</style>
