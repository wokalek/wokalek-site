<template>
  <div class="mx-auto flex min-h-dvh flex-col justify-between f-px-4 320:f-max-w-[320px/1000px]">
    <!-- <LazyLayoutSnowflakes v-if="isWinter" hydrate-on-idle /> -->
    <div class="flex grow flex-col">
      <Header />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// const { isWinter } = useSnowflakes()
</script>
