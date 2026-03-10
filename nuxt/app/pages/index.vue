<template>
  <div class="fluid-[padding-left,76-0] fluid-[padding-right,76-0] flex justify-center items-start">
    <article class="lead text-balance mr-16-0 space-y-1em">
      <p>Привет! <span class="emoji sm:hidden" aria-disabled="true">🙋</span></p>
      <p>Я&nbsp;<span class="text-accent">Александр Вокалёк</span>,<br>веб-разработчик, который хочет и&nbsp;может делать крутые вещи.</p>
      <p>Люблю программирование, фотографию, природу и&nbsp;искусство. На&nbsp;данный момент живу в&nbsp;Краснодаре.</p>
      <p>
        Если вы&nbsp;хотите связаться со&nbsp;мной, узнайте как это сделать на страничке
        <!-- <GeneralLink :to="{ name: 'contacts' }" underline>
          <template #before>&laquo;</template>
          <template #default>Контакты</template>
          <template #after>&raquo;</template>
        </GeneralLink>! -->
      </p>
    </article>
    <div class="emoji fluid-[font-size,200-64] hidden sm:block" aria-disabled="true">🙋</div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Александр Вокалёк', description: 'Авторский сайт Александра Вокалька' })
</script>
