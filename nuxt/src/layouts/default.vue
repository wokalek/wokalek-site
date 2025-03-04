<template>
  <div class="layout-default">
    <LazyLayoutSnowflakes v-if="isWinter" hydrate-on-idle />
    <div class="relative flex flex-col flex-grow mx-auto fluid-[width,1000-320] max-w-[100vw]">
      <TheHeader />
      <main class="flex flex-col justify-center items-center flex-grow py-32-16 px-64-16">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const { isWinter } = useSnowflakes()
</script>

<style lang="sass">
html,
body,
#nuxt,
.layout-default
  @apply flex flex-col

html
  @apply min-h-full

body,
#nuxt,
.layout-default
  @apply flex-grow
</style>
