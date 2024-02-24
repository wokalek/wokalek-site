<template>
  <div class="flex items-center">
    <Transition name="emoji" mode="out-in">
      <button
        :key="emoji"
        class="emoji mr-8-4 select-none font-bold translate-y-[5%] scale-100 text-28-18"
        aria-label="Эмодзи логотипа"
        aria-disabled="true"
        @click="onClickEmoji"
        @mouseleave="onMouseLeaveEmoji"
      >
        {{ emoji }}
      </button>
    </Transition>
    <NuxtLink v-if="$route.name !== 'index'" :to="{ name: 'index' }" class="flex group" aria-label="Главная страница">
      <SvgoLogoWord class="logo-word fluid-[width,100-68] h-auto transition-opacity ease-in-out-quad opacity-100 desktop:group-hover:opacity-50" :font-controlled="false" />
    </NuxtLink>
    <SvgoLogoWord v-else class="logo-word fluid-[width,100-68] h-auto" :font-controlled="false" />
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
</style>
