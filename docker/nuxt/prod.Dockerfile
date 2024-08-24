ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /nuxt

FROM base AS build

RUN npm i -g pnpm

COPY --link ./nuxt ./env/nuxt/.env ./
RUN pnpm i --prod --frozen-lockfile && pnpm build

FROM base AS entry

COPY --from=build /nuxt/.output .output

ENTRYPOINT ["node", ".output/server/index.mjs"]
