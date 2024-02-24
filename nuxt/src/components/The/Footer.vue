<template>
  <footer class="py-32-16 mb-16-16 relative flex justify-center">
    <div class="caption px-16-16 absolute flex justify-between items-center w-full h-1/2 box-border left-0 bottom-0">
      <GeneralNav class="text-gray-6 dark:text-gray-2" :links="[{ to: statisticUrl, text: 'Статистика' }]" />
      <GeneralNav class="text-gray-6 dark:text-gray-2" :links="[{ to: { name: 'site' }, text: 'О сайте' }]" />
    </div>
    <SvgoLogoSign class="relative w-auto fluid-[height,20-16] text-gray-3 dark:text-gray-4" :font-controlled="false" />
  </footer>
</template>

<script setup lang="ts">
const { public: { statisticUrl } } = useRuntimeConfig()
</script>
