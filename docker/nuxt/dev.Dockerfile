ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine AS base

ENV RUNNING_IN_DOCKER=true

WORKDIR /nuxt

RUN npm i -g pnpm

FROM base AS deps

COPY --link ./nuxt/package.json ./nuxt/pnpm-lock.yaml ./nuxt/.npmrc ./

RUN pnpm i --frozen-lockfile

FROM base AS entry

COPY --link ./nuxt .
COPY --from=deps /nuxt/node_modules node_modules
COPY ./docker/nuxt/dev.entrypoint.sh /

ENTRYPOINT ["sh", "/dev.entrypoint.sh"]
