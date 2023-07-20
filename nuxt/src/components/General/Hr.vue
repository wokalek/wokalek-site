<template>
  <div class="hr">
    <div class="dot" />
    <div class="dot" />
    <div class="dot" />
  </div>
</template>

<style lang="sass" scoped>
.hr
  display: flex
  justify-content: center

.dot
  width: var(--f-4-4)
  height: var(--f-4-4)
  background-color: #{$pantone-663-xgc-color}
  border-radius: 50%

  .dark-mode &
    background-color: #{$pantone-432-xgc-color}

  &:not(:last-child)
    margin-right: var(--f-32-32)
</style>
