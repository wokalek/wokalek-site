<template>
  <p class="text-balance text-center">
    Я&nbsp;всегда рад получить сообщение от&nbsp;вас! Если у&nbsp;вас есть вопросы, предложения или просто хотите
    поделиться своим мнением, не&nbsp;стесняйтесь написать мне, я&nbsp;отвечу в&nbsp;кратчайшие сроки.
  </p>
  <div class="lead flex flex-wrap justify-center select-none mt-32-16 gap-16-16">
    <div class="flex items-center">
      <GeneralLink :to="`mailto:${socials.email}`" class="flex items-center" is-hide-external>
        <template #before>
          <VIcon class="size-32-32 mr-8-4" name="md-alternateemail" />
        </template>
        Email
      </GeneralLink>
    </div>
    <div class="flex items-center">
      <GeneralLink :to="socials.tgUrl" class="flex items-center" is-hide-external>
        <template #before>
          <VIcon class="size-32-32 mr-8-4" name="fa-telegram-plane" />
        </template>
        Telegram
      </GeneralLink>
    </div>
    <div class="flex items-center">
      <GeneralLink :to="socials.githubUrl" class="flex items-center" is-hide-external>
        <template #before>
          <VIcon class="size-32-32 mr-8-4" name="bi-github" />
        </template>
        GitHub
      </GeneralLink>
    </div>
    <div class="flex items-center">
      <GeneralLink :to="socials.discordUrl" class="flex items-center" is-hide-external>
        <template #before>
          <VIcon class="size-32-32 mr-8-4" name="fa-discord" />
        </template>
        Discord
      </GeneralLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { public: { socials } } = useRuntimeConfig()
</script>
