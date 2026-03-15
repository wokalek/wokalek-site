<template>
  <header class="py-32-16 px-16-16 flex items-center justify-between">
    <div class="mr-32-8 flex items-center">
      <Transition
        name="emoji"
        mode="out-in"
        enter-active-class="transition"
        enter-from-class="scale-50 translate-y-[3%]"
        enter-to-class="scale-100 translate-y-[3%]"
        leave-active-class="transition"
        leave-to-class="opacity-0"
      >
        <button
          :key="emoji"
          class="emoji mr-8-4 text-28-18 translate-y-[3%] scale-100 font-bold select-none"
          aria-label="Эмодзи логотипа"
          aria-disabled="true"
          @click="onClick"
          @mouseleave="onMouseLeave"
        >
          {{ emoji }}
        </button>
      </Transition>
      <component :is="$route.name === 'index' ? 'div' : NuxtLink" v-bind="$route.name === 'index' ? {}: { to: { name: 'index' } }" class="group flex" aria-label="Главная страница">
        <SvgoLogoWord class="fluid-[width,100-68] ease-in-out-quad h-auto opacity-100 transition-opacity desktop:group-hover:opacity-50" :font-controlled="false" />
      </component>
    </div>
    <GeneralNav
      class="nav general-nav gap-32-16 flex items-center text-right"
      :links="[
        { to: { name: 'map' }, text: 'Карта сайта' },
        { to: { name: 'settings' }, text: '⚙︎', class: ['text-28-18', 'emoji'], ariaLabel: 'Настройки сайта', rel: 'nofollow' },
      ]"
    />
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
  if (!isClicked.value) rotateEmoji()
  isClicked.value = false
}
</script>
