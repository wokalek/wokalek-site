<template>
  <div class="flex min-h-dvh flex-col justify-between">
    <!-- <LazyLayoutSnowflakes v-if="isWinter" hydrate-on-idle /> -->
    <div class="flex flex-col">
      <!-- <TheHeader /> -->
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// const { isWinter } = useSnowflakes()
</script>
