<template>
  <footer class="relative f-mb-4 flex justify-center f-py-4/8">
    <div class="caption absolute bottom-0 left-0 box-border flex w-full items-center justify-between f-px-4 text-grey-6 dark:text-grey-2">
      <NuxtLink :to="statisticUrl" target="_blank" class="link -f-m-2 f-p-2 text-nowrap">
        Статистика ↗
      </NuxtLink>
      <NuxtLink :to="{ name: 'site' }" class="link -f-m-2 f-p-2">
        О сайте
      </NuxtLink>
    </div>
    <Icon name="icons:logo-sign" class="f-size-4 text-grey-3 tablet:f-size-5 dark:text-grey-4" />
  </footer>
</template>

<script setup lang="ts">
const { public: { statisticUrl } } = useRuntimeConfig()
</script>
