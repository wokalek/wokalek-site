<template>
  <p class="text">
    Я&nbsp;всегда рад получить сообщение от&nbsp;вас! Если у&nbsp;вас есть вопросы, предложения или просто хотите
    поделиться своим мнением, не&nbsp;стесняйтесь написать мне, я&nbsp;отвечу в&nbsp;кратчайшие сроки.
  </p>
  <div class="contacts-wrapper">
    <div class="contacts-row lead">
      <span class="emoji emoji-icon">📨</span>
      <GeneralLink :to="`mailto:${email}`">
        {{ email }}
      </GeneralLink>
    </div>
    <div class="contacts-row lead">
      <span class="emoji emoji-icon">💬</span>
      <GeneralLink :to="tgUrl" is-hide-external>
        {{ useRemoveUrlSchema(tgUrl) }}
      </GeneralLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { public: { email, tgUrl } } = useRuntimeConfig()
</script>

<style lang="sass" scoped>
.text
  margin: 0

.contacts-wrapper
  margin-top: var(--f-32-16)

.contacts-row
  display: flex
  align-items: center

  &:not(:last-child)
    margin-bottom: var(--f-16-16)

.emoji
  @include fluid('font-size', 30px, 24)
  margin-right: var(--f-8-4)
  transform: translateY(0.04em)
</style>
