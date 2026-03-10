<template>
  <footer class="relative mb-4 flex justify-center py-8 tablet:mb-4 tablet:py-4">
    <div class="caption absolute bottom-0 left-0 box-border flex h-1/2 w-full items-center justify-between px-4 text-grey-6 tablet:px-4 dark:text-grey-2">
      <UIButton>
        override button?
      </UIButton>
      <UILink :to="statisticUrl" :ui="{ root: '' }">
        Статистика
      </UILink>
      <NuxtLink :to="{ name: 'site' }">
        О сайте
      </NuxtLink>
    </div>
    <Icon name="icons:logo-sign" class="size-4 text-grey-3 tablet:size-5 dark:text-grey-4" />
  </footer>
</template>

<script setup lang="ts">
const { public: { statisticUrl } } = useRuntimeConfig()
</script>
