<template>
  <div class="the-logo">
    <Transition name="emoji" mode="out-in">
      <button
        :key="emoji"
        class="emoji-button emoji-icon"
        aria-label="Эмодзи логотипа"
        aria-disabled="true"
        @click="onClickEmoji"
        @mouseleave="onMouseLeaveEmoji"
      >
        {{ emoji }}
      </button>
    </Transition>
    <NuxtLink v-if="$route.name !== 'index'" :to="{ name: 'index' }" class="home-link" aria-label="Главная страница">
      <SvgoLogoWord class="logo-word" />
    </NuxtLink>
    <SvgoLogoWord v-else class="logo-word" />
  </div>
</template>

<script setup lang="ts">
const emoji = useHeaderEmoji()
const isEmojiClicked = ref(false)

function onClickEmoji () {
  isEmojiClicked.value = true
  useChangeHeaderEmoji()
}

function onMouseLeaveEmoji () {
  if (!isEmojiClicked.value) {
    useChangeHeaderEmoji()
  }

  isEmojiClicked.value = false
}
</script>

<style lang="sass" scoped>
.the-logo
  display: flex
  align-items: center

.emoji-button
  @include button-reset
  cursor: pointer
  margin-right: var(--f-8-4)
  user-select: none
  font-size: var(--f-26-18)
  font-weight: bold
  transform: scale(1) translateY(0.04em)

.emoji-enter-active
  transition: transform 300ms easeOutBack

.emoji-enter-from
  transform: scale(0.5) translateY(0.04em)

.emoji-enter-to
  transform: scale(1) translateY(0.04em)

.emoji-leave-active
  transition: opacity 100ms ease

.emoji-leave-to
  opacity: 0

.home-link
  @include link-reset
  display: flex

  & :deep(.logo-word)
    transition: opacity 150ms easeInOutQuad
    opacity: 1

  .isDesktop &:hover :deep(.logo-word)
    opacity: 0.5

.logo-word
  height: auto
  @include fluid('width', 98px, 68px)
  margin: 0
</style>
