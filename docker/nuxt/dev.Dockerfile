FROM node:20.10.0-alpine

WORKDIR /nuxt

RUN apk update && apk upgrade

RUN npm i -g pnpm

COPY ./nuxt/package.json ./nuxt/pnpm-lock.yaml ./nuxt/.npmrc ./
RUN pnpm install --frozen-lockfile
COPY ./nuxt/.eslintrc ./nuxt/tailwind.config.ts ./

ENTRYPOINT [ "pnpm", "run", "dev" ]
