<template>
  <header class="flex items-center justify-between f-gap-2/8 f-px-4 f-py-4/8">
    <div class="flex items-center f-gap-1/2 ease-[cubic-bezier(0,2,0,1)]">
      <Transition
        name="emoji"
        mode="out-in"
        leave-active-class="transition-[scale,opacity] duration-75 ease-in"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-75 opacity-0"
        enter-active-class="transition-[scale,opacity] duration-300 ease-out"
        enter-from-class="scale-75 opacity-0"
        enter-to-class="scale-100 opacity-100"
      >
        <button
          :key="emoji"
          class="emoji -f-m-2 cursor-pointer f-p-2 f-text-[18px/26px] font-bold select-none"
          aria-label="Эмодзи логотипа"
          aria-disabled="true"
          @click="onClick"
          @mouseleave="onMouseLeave"
        >
          {{ emoji }}
        </button>
      </Transition>
      <component :is="$route.name === 'index' ? 'div' : NuxtLink" v-bind="$route.name === 'index' ? {}: { to: { name: 'index' } }" class="group/logo-sign flex" aria-label="Главная страница">
        <Icon class="f-h-[18px/26px] f-w-[68px/100px] opacity-100 transition-opacity ease-in-out group-hover/logo-sign:[:is(a)_&]:opacity-50" name="icons:logo-word" />
      </component>
    </div>
    <nav class="nav flex items-center f-gap-4/8 text-right select-none">
      <NuxtLink :to="{ name: 'map' }">
        Карта сайта
      </NuxtLink>
      <NuxtLink :to="{ name: 'settings' }" aria-label="Настройки сайта" rel="nofollow">
        ⚙︎
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'

const { emoji, rotateEmoji } = useHeaderEmoji()

const isClicked = ref(false)

function onClick() {
  isClicked.value = true
  rotateEmoji()
}

function onMouseLeave() {
  if (isClicked.value === false) rotateEmoji()
  isClicked.value = false
}
</script>
