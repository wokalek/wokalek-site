<template>
  <NuxtLayout name="default">
    <GeneralHeadline>
      Ошибка {{ error.statusCode }}
    </GeneralHeadline>
    <div>
      <div class="flex justify-center text-nowrap text-38-24">
        <span>{{ kaomoji }}</span>
      </div>
      <div class="mt-1em text-balance text-center">
        <template v-if="error.statusCode === 404">
          Извините, страница, которую вы&nbsp;ищете, не&nbsp;может быть найдена.
        </template>
        <template v-else-if="error.statusCode === 500">
          Эта страница временно недоступна.
        </template>
        <template v-else>
          {{ error.statusMessage }}
        </template>
      </div>
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
