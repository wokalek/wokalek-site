<template>
  <article class="prose w-full">
    <h2 class="mt-[0!important]">
      Положения
    </h2>
    <p>
      Сайт представляет собой публичный информационный ресурс, предназначенный для развлечения и&nbsp;досуга. Весь представленный контент является авторским.
    </p>
    <p>Сайт не&nbsp;преследует своей целью кого-то оскорбить или дискредитировать.</p>

    <h2>Лицензия</h2>
    <p>
      Весь контент, размещенный на&nbsp;сайте, распространяется по&nbsp;лицензии <NuxtLink :to="('https://creativecommons.org/licenses/by-nc/4.0/deed.ru' as string)" class="text-nowrap" target="_blank">Creative Commons BY-NC 4.0</NuxtLink>, если на&nbsp;странице материала не&nbsp;указано иное.
    </p>

    <h2>Куки</h2>
    <p>Сайт не&nbsp;использует технологию cookies и&nbsp;не&nbsp;собирает персональные данные.</p>

    <h2>Доступность</h2>
    <p>Сайт стремится к&nbsp;цифровой доступности и&nbsp;соответствию <NuxtLink :to="('https://www.w3.org/TR/WCAG22/' as string)" target="_blank">Руководству</NuxtLink> по&nbsp;доступности веб-контента (WCAG) версии 2.2 уровня&nbsp;A и&nbsp;AA.</p>

    <h2>Статистика</h2>
    <p>Сайт использует статистику от&nbsp;Umami&nbsp;&mdash; ориентированная на&nbsp;конфиденциальность альтернатива Google Analytics с&nbsp;открытым исходным кодом. Сервис самостоятельно развёрнут на&nbsp;сервере и&nbsp;не&nbsp;использует облако. Umami не&nbsp;использует технологию cookies.</p>
    <p>
      Статистика доступна по&nbsp;<NuxtLink :to="statisticUrl" target="_blank">ссылке</NuxtLink>.
    </p>

    <h2>Технологии</h2>
    <p>Сайт задизайнен и&nbsp;собран мной.</p>
    <p>Используются:</p>
    <ul>
      <li>
        <SvgoLogoNuxt :filled="true" class="inline mr-16-8 fluid-[width,40-30] h-auto" aria-disabled="true" :font-controlled="false" />
        <NuxtLink :to="('https://nuxt.com' as string)" target="_blank">Nuxt</NuxtLink>, фронтенд.
      </li>
      <li>
        <SvgoLogoDjango :filled="true" class="inline mr-16-8 fluid-[width,40-30] h-auto" aria-disabled="true" :font-controlled="false" />
        <NuxtLink :to="('https://www.djangoproject.com' as string)" target="_blank">Django</NuxtLink>, бэкенд.
      </li>
      <li>
        <SvgoLogoGraphql :filled="true" class="inline mr-16-8 fluid-[width,40-30] h-auto" aria-disabled="true" :font-controlled="false" />
        <NuxtLink :to="('https://graphql.org' as string)" target="_blank">GraphQL</NuxtLink>, обмен данными.
      </li>
      <li>
        <SvgoLogoUmami :filled="true" class="inline mr-16-8 fluid-[width,40-30] h-auto umami stroke-black fill-black dark:stroke-white dark:fill-white" aria-disabled="true" :font-controlled="false" />
        <NuxtLink :to="('https://umami.is' as string)" target="_blank">Umami</NuxtLink>, статистика.
      </li>
      <li>
        <SvgoLogoNginx :filled="true" class="inline mr-16-8 fluid-[width,40-30] h-auto" aria-disabled="true" :font-controlled="false" />
        <NuxtLink :to="('https://nginx.org' as string)" target="_blank">Nginx</NuxtLink>, сервер.
      </li>
      <li>
        <SvgoLogoDocker :filled="true" class="inline mr-16-8 fluid-[width,40-30] h-auto" aria-disabled="true" :font-controlled="false" />
        <NuxtLink :to="('https://docker.com' as string)" target="_blank">Docker</NuxtLink>, оркестрация.
      </li>
    </ul>
    <p>
      Дизайн можно посмотреть в&nbsp;<NuxtLink :to="('https://www.figma.com/community/file/1263882470363110046' as string)" target="_blank">Figma</NuxtLink>.
    </p>
    <p>
      С исходным кодом можно ознакомиться на <NuxtLink :to="('https://github.com/wokalek/wokalek-site' as string)" target="_blank">GitHub</NuxtLink>.
    </p>

    <h3>Шрифты</h3>
    <ul>
      <li>
        <NuxtLink :to="('http://www.cyreal.org/fonts/lora' as string)" target="_blank">Lora</NuxtLink>, от&nbsp;Cyreal.
      </li>
      <li>
        <NuxtLink :to="('https://www.artlebedev.ru/type/sirius' as string)" target="_blank">Sirius</NuxtLink>, от&nbsp;Студии Артемия Лебедева.
      </li>
      <li>
        <NuxtLink :to="('https://github.com/tonsky/FiraCode' as string)" target="_blank">Fira Code</NuxtLink>, от&nbsp;Никиты Прокопова.
      </li>
    </ul>

    <h2>Будущее</h2>
    <ol>
      <li>✓ Сделать настройки сайта для слабовидящих и&nbsp;для всех, кто захочет изменить размер шрифта или тему на&nbsp;тёмную.</li>
      <li>✓ Настроить автодеплой на&nbsp;прод.</li>
      <li>✓ Заселфхостить twitch bot.</li>
      <li>✓ Сделать опенсорсное расширение для браузера.</li>
      <li>✓ Переписать фронт на tailwind.</li>
      <li>✓ Сделать бэкенд. Сейчас для публикации материалов сайт необходимо пересобирать.</li>
      <li>Сделать RSS.</li>
      <li>Комментарии к&nbsp;статьям и&nbsp;блогу.</li>
      <li>Реализовать новый фронтенд. Данный дизайн намеренно крайне прост и&nbsp;изначально задумывался более сложным 3D-шным. Возможно это будет смесь текущего и&nbsp;нового видения.</li>
    </ol>
  </article>
</template>

<script setup lang="ts">
const { public: { statisticUrl } } = useRuntimeConfig()
</script>
