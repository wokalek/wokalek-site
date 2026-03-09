<template>
  <main>
    <GeneralHeadline>
      Ошибка {{ error.status }}
    </GeneralHeadline>
    <section>
      <div class="flex justify-center text-nowrap text-38-24">
        <span>{{ kaomoji }}</span>
      </div>
      <div class="mt-1em text-balance text-center">
        <template v-if="error.status === 404">
          Страница не&nbsp;найдена.
        </template>
        <template v-else>
          Страница временно недоступна.
        </template>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

import { sad } from 'kaokun'

defineProps<{ error: NuxtError }>()

const { data: kaomoji } = useAsyncData(() => Promise.resolve(() => sad()))
</script>
