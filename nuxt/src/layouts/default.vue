<template>
  <LayoutSnowflakes />
  <div class="relative flex flex-col flex-grow mx-auto fluid-[width,1000-320] max-w-[100vw]">
    <TheHeader />
    <main class="flex flex-col justify-center items-center flex-grow py-32-16 px-64-16">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="sass" scoped>
:global(html),
:global(body),
:global(#nuxt)
  @apply flex flex-col

:global(html)
  @apply min-h-full

:global(body),
:global(#nuxt)
  @apply flex-grow
</style>
