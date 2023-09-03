<template>
  <GeneralHeadline>Сколько лет Вокальку?</GeneralHeadline>
  <div class="lead">
    Мне <time :datetime="(new Date(birthdate)).toISOString()">{{ wokalekBirthdayYears }}</time> лет
  </div>
</template>

<script setup lang="ts">
import type { DateLike } from '@vueuse/core'

const { public: { birthdate } } = useRuntimeConfig()
const { $dayjs } = useNuxtApp()

function calcBirthdayYears (date: DateLike) {
  return $dayjs(new Date()).diff(date, 'y')
}

const wokalekBirthdayYears = ref(calcBirthdayYears(birthdate))
</script>
