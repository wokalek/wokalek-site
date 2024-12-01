<template>
  <div ref="snowFlakesRef" class="snowflakes-container" />
</template>

<script setup lang="ts">
import Snowflakes from 'magic-snowflakes'

const snowFlakesRef = ref<HTMLDivElement>()

onMounted(async () => {
  await nextTick()

  new Snowflakes({
    container: snowFlakesRef.value,
    color: '#808080',
    minOpacity: 0.2,
    minSize: 1,
  })
})
</script>

<style scoped lang="sass">
.snowflakes-container
  position: fixed
  height: 100vh
  width: 100vw
  pointer-events: none
  user-select: none
</style>
