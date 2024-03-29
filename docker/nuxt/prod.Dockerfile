FROM node:20.11.1-alpine

WORKDIR /nuxt

RUN apk update && apk upgrade

RUN npm i -g pnpm

COPY ./nuxt/package.json ./nuxt/pnpm-lock.yaml ./nuxt/.npmrc ./nuxt/.eslintrc ./nuxt/tailwind.config.ts ./
RUN pnpm install --prod --frozen-lockfile

COPY ./nuxt/nuxt.config.ts ./nuxt/tsconfig.json ./env/nuxt/.env ./
COPY ./nuxt/src ./src
RUN pnpm run build

ENTRYPOINT [ "node", ".output/server/index.mjs" ]
