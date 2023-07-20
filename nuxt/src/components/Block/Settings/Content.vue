<template>
  <h3 class="mt-0">Оформление</h3>
  <ControlRadioButtons
    :set="[{ value: 'light', label: 'светлое', icon: '☀️' }, { value: 'dark', label: 'тёмное', icon: '🌙' }, { value: 'system', label: 'авто', icon: '⏰' }]"
    :value="!colorMode.unknown ? colorMode.preference : undefined"
    @click="colorMode.preference = $event"
  />
  <h3>Размер текста</h3>
  <BlockSettingsPropertyRangeCount property="font-scale" label="Размер текста" />
  <h3>Масштаб сайта</h3>
  <BlockSettingsPropertyRangeCount property="site-scale" label="Масштаб сайта" />
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>
