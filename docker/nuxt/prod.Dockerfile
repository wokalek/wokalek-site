ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /nuxt

FROM base AS build

RUN npm i -g pnpm

COPY --link ./nuxt/package.json ./nuxt/pnpm-lock.yaml ./nuxt/.npmrc ./
RUN pnpm i --prod --frozen-lockfile

COPY --link ./nuxt .
RUN pnpm build

FROM base AS entry

COPY --from=build /nuxt/.output .output

ENTRYPOINT ["node", ".output/server/index.mjs"]
