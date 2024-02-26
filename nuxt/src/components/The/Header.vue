<template>
  <header class="flex justify-between items-center py-32-16 px-16-16">
    <TheLogo />
    <GeneralNav
      class="general-nav nav flex gap-32-16 items-center"
      :links="[
        { to: { name: 'map' }, text: 'Карта сайта', },
        { to: { name: 'settings' }, text: '⚙️', class: ['settings-emoji', 'emoji'], ariaLabel: 'Настройки сайта', rel: 'nofollow' },
      ]"
    />
  </header>
</template>

<style lang="sass" scoped>
.general-nav :deep(.settings-emoji)
  @apply text-28-18
</style>
