FROM node:20.2.0-alpine

WORKDIR /nuxt

RUN apk update && apk upgrade

RUN npm i -g pnpm

COPY ./nuxt/package.json ./nuxt/pnpm-lock.yaml ./nuxt/.npmrc ./
RUN pnpm fetch
RUN pnpm install -r --offline

ENTRYPOINT [ "pnpm", "run", "dev", "--host" ]
