<template>
  <footer>
    <div class="menu-wrapper caption">
      <GeneralNav :links="[{ to: statisticUrl, text: 'Статистика' }]" />
      <GeneralNav :links="[{ to: { name: 'site' }, text: 'О сайте' }]" />
    </div>
    <SvgoLogoSign class="logo-sign" />
  </footer>
</template>

<script setup lang="ts">
const { public: { statisticUrl } } = useRuntimeConfig()
</script>

<style lang="sass" scoped>
footer
  position: relative
  display: flex
  justify-content: center
  padding-top: var(--f-32-16)
  padding-bottom: var(--f-32-16)
  color: var(--disabled-color)
  margin-bottom: var(--f-16-16)

.menu-wrapper
  position: absolute
  display: flex
  justify-content: space-between
  align-items: center
  bottom: 0
  left: 0
  width: 100%
  height: 50%
  padding-left: var(--f-16-16)
  padding-right: var(--f-16-16)
  box-sizing: border-box

.logo-sign
  position: relative
  width: auto
  @include fluid('height', 20px, 16px)
  margin: 0 auto
</style>
