<template>
  <p class="text-balance text-center">
    Я&nbsp;всегда рад получить сообщение от&nbsp;вас! Если у&nbsp;вас есть вопросы, предложения или просто хотите
    поделиться своим мнением, не&nbsp;стесняйтесь написать мне, я&nbsp;отвечу в&nbsp;кратчайшие сроки.
  </p>
  <div class="contacts-wrapper lead">
    <div class="contacts-row">
      <GeneralLink :to="`mailto:${socials.email}`" class="link" is-hide-external>
        <template #before>
          <VIcon class="icon" name="md-alternateemail" />
        </template>
        Email
      </GeneralLink>
    </div>
    <div class="contacts-row">
      <GeneralLink :to="socials.tgUrl" class="link" is-hide-external>
        <template #before>
          <VIcon class="icon" name="fa-telegram-plane" />
        </template>
        Telegram
      </GeneralLink>
    </div>
    <div class="contacts-row">
      <GeneralLink :to="socials.githubUrl" class="link" is-hide-external>
        <template #before>
          <VIcon class="icon" name="bi-github" />
        </template>
        GitHub
      </GeneralLink>
    </div>
    <div class="contacts-row">
      <GeneralLink :to="socials.discordUrl" class="link" is-hide-external>
        <template #before>
          <VIcon class="icon" name="fa-discord" />
        </template>
        Discord
      </GeneralLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { public: { socials } } = useRuntimeConfig()
</script>

<style lang="sass" scoped>
.contacts-wrapper
  display: flex
  margin-top: var(--f-32-16)
  flex-wrap: wrap
  justify-content: center
  margin-right: calc(-1 * var(--f-16-16))
  margin-bottom: calc(-1 * var(--f-16-16))
  user-select: none

.contacts-row
  display: flex
  align-items: flex-start
  margin-right: var(--f-16-16)
  margin-bottom: var(--f-16-16)

.link
  display: flex
  align-items: center

.icon
  width: var(--f-32-32)
  height: var(--f-32-32)
  margin-right: var(--f-8-4)
</style>
