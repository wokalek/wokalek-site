<template>
  <div class="block-index-lead">
    <article class="text-block lead">
      <p>Привет! <span v-if="isMobile" class="icon emoji-icon" aria-disabled="true">🙋</span></p>
      <p>Я&nbsp;<mark>Александр Вокалёк</mark>,<br>веб-разработчик, который хочет и&nbsp;может делать крутые вещи.</p>
      <p>Я&nbsp;очень любопытный и&nbsp;внимательный к&nbsp;мелочам человек, который любит программирование, фотографию, природу и&nbsp;искусство. На&nbsp;данный момент живу в&nbsp;Краснодаре.</p>
      <p>
        Если вы&nbsp;хотите связаться со&nbsp;мной, узнайте как это сделать через страничку
        <GeneralLink :to="{ name: 'contacts' }" underline>
          <template #before>&laquo;</template>
          <template #default>Контакты</template>
          <template #after>&raquo;</template>
        </GeneralLink>!
      </p>
    </article>
    <div v-if="isDesktopOrTablet" class="icon emoji-icon" aria-disabled="true">
      🙋
    </div>
  </div>
</template>

<script setup lang="ts">
const { isMobile, isDesktopOrTablet } = useDevice()
</script>

<style lang="sass" scoped>
.block-index-lead
  display: flex
  justify-content: center
  align-items: center
  padding: 0 var(--f-76-0)
  align-items: flex-start

.text-block
  margin-right: var(--f-16-0)

  & > p
    margin-left: 0
    margin-right: 0

  & > p:first-child
    margin-top: 0

  & > p:last-child
    margin-bottom: 0

.icon
  @include fluid('font-size', 200px, 64px)
  font-weight: normal

  .isMobile &
    font-size: 1.5em
    font-weight: bold
</style>
