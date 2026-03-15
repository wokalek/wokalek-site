<template>
  <footer class="relative mb-4 flex justify-center py-4 tablet:py-8">
    <div class="caption absolute bottom-0 left-0 box-border flex w-full items-center justify-between px-4 text-grey-6 tablet:px-4 dark:text-grey-2">
      <NuxtLink :to="statisticUrl" target="_blank" class="link -m-2 p-2 text-nowrap">
        Статистика ↗
      </NuxtLink>
      <NuxtLink :to="{ name: 'site' }" class="link -m-2 p-2">
        О сайте
      </NuxtLink>
    </div>
    <Icon name="icons:logo-sign" class="size-4 text-grey-3 tablet:size-5 dark:text-grey-4" mode="css" />
  </footer>
</template>

<script setup lang="ts">
const { public: { statisticUrl } } = useRuntimeConfig()
</script>
