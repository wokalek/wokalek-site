<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style lang="sass" scoped>
blockquote
  margin: 1em var(--f-32-8)
  border-radius: var(--f-16-8)
  border: var(--f-1-1) solid var(--quote-color)
  background-color: var(--quote-background-color)
  color: var(--quote-color)

  &:deep(p)
    margin: 0
    padding: 1em var(--f-32-8)
</style>
