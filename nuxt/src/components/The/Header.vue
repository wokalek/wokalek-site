<template>
  <header class="flex justify-between items-center py-32-16 px-16-16">
    <TheLogo class="mr-32-8" />
    <GeneralNav
      class="general-nav nav flex gap-32-16 items-center text-right"
      :links="[
        { to: { name: 'map' }, text: 'Карта сайта', },
        { to: { name: 'settings' }, text: '⚙︎', class: ['text-28-18', 'emoji'], ariaLabel: 'Настройки сайта', rel: 'nofollow' },
      ]"
    />
  </header>
</template>
