<template>
  <header>
    <TheLogo />
    <GeneralNav
      class="nav"
      :links="[
        { to: { name: 'map' }, text: 'Карта сайта', },
        { to: { name: 'settings' }, text: '⚙️', class: ['settings-emoji', 'emoji-icon'], ariaLabel: 'Настройки сайта', rel: 'nofollow' },
      ]"
    />
  </header>
</template>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between
  align-items: center
  padding: var(--f-32-16) var(--f-16-16)

.general-nav :deep(li:not(:last-child))
  margin-right: var(--f-32-16)

.general-nav :deep(.settings-emoji)
  font-size: var(--f-26-18)
</style>
