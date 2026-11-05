<template>
  <p class="text-center text-balance">
    Я&nbsp;всегда рад получить сообщение от&nbsp;вас! Если у&nbsp;вас есть вопросы, предложения или просто хотите
    поделиться своим мнением, не&nbsp;стесняйтесь написать мне, я&nbsp;отвечу в&nbsp;кратчайшие сроки.
  </p>
  <div class="lead f-mt-4/8 flex flex-wrap justify-center f-gap-[16px/16px] select-none">
    <div class="flex items-center">
      <GeneralLink :to="`mailto:${socials.email}`" class="flex items-center f-gap-1/2" is-hide-external @click="umTrackEvent('contacts: mailto click')">
        <template #before>
          <VIcon class="f-size-32" name="md-alternateemail" />
        </template>
        Email
      </GeneralLink>
    </div>
    <div class="flex items-center">
      <GeneralLink :to="socials.tgUrl" class="flex items-center f-gap-1/2" is-hide-external @click="umTrackEvent('contacts: tg click')">
        <template #before>
          <VIcon class="f-size-32" name="fa-telegram-plane" />
        </template>
        Telegram
      </GeneralLink>
    </div>
    <div class="flex items-center">
      <GeneralLink :to="socials.githubUrl" class="flex items-center f-gap-1/2" is-hide-external @click="umTrackEvent('contacts: github click')">
        <template #before>
          <VIcon class="f-size-32" name="bi-github" />
        </template>
        GitHub
      </GeneralLink>
    </div>
    <div class="flex items-center">
      <GeneralLink :to="socials.discordUrl" class="flex items-center f-gap-1/2" is-hide-external @click="umTrackEvent('contacts: discord click')">
        <template #before>
          <VIcon class="f-size-32" name="fa-discord" />
        </template>
        Discord
      </GeneralLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { public: { socials } } = useRuntimeConfig()
</script>
