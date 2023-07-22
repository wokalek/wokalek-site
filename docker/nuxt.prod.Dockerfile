FROM node:20.2.0-alpine

WORKDIR /nuxt

RUN apk update && apk upgrade

RUN npm i -g pnpm

COPY ./nuxt/package.json ./nuxt/pnpm-lock.yaml ./nuxt/.npmrc ./
RUN pnpm fetch --prod
RUN pnpm install -r --offline --prod

COPY ./nuxt/nuxt.config.ts  ./nuxt/tsconfig.json ./env/nuxt/.env ./
COPY ./nuxt/src ./src
RUN pnpm run build

ENTRYPOINT [ "node", ".output/server/index.mjs" ]
