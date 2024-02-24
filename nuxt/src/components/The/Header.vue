<template>
  <header class="flex justify-between items-center py-32-16 px-16-16">
    <TheLogo />
    <GeneralNav
      class="general-nav nav"
      :links="[
        { to: { name: 'map' }, text: 'Карта сайта', },
        { to: { name: 'settings' }, text: '⚙️', class: ['settings-emoji', 'emoji'], ariaLabel: 'Настройки сайта', rel: 'nofollow' },
      ]"
    />
  </header>
</template>

<style lang="sass" scoped>
.general-nav :deep(ul)
  @apply gap-32-16

.general-nav :deep(.settings-emoji)
  @apply text-24-18
</style>
