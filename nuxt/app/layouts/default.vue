<template>
  <div class="mx-auto flex min-h-dvh f-w-[20]/[62.5] flex-col justify-between">
    <!-- <LazyLayoutSnowflakes v-if="isWinter" hydrate-on-idle /> -->
    <div class="flex w-full flex-col">
      <!-- <TheHeader /> -->
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// const { isWinter } = useSnowflakes()
</script>
