<template>
  <div class="snowflakes-container" />
  <div class="layout">
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import Snowflakes from 'magic-snowflakes'

onMounted(() => {
  // eslint-disable-next-line no-new
  new Snowflakes({
    container: document.querySelector<HTMLDivElement>('.snowflakes-container') as HTMLDivElement,
    color: '#808080',
    minOpacity: 0.2,
    minSize: 1,
  })
})
</script>

<style lang="sass" scoped>
:global(html)
  display: flex
  flex-direction: column
  min-height: 100%

:global(body),
:global(#app),
.layout
  display: flex
  flex-direction: column
  flex-grow: 1

.layout
  margin: 0 auto
  @include fluid('width', 1000px, 320px)
  max-width: 100vw

main
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  flex-grow: 1
  padding: var(--f-32-16) var(--f-64-16)

.snowflakes-container
  position: fixed
  height: 100vh
  width: 100vw
  pointer-events: none
  user-select: none
</style>
