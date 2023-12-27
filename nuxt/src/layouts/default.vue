<template>
  <div class="layout">
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="sass" scoped>
:global(html)
  display: flex
  flex-direction: column
  min-height: 100%

:global(body),
:global(#nuxt),
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
</style>
