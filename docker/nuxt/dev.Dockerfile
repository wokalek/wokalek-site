FROM node:20.10.0-alpine

WORKDIR /nuxt

RUN apk update && apk upgrade

RUN npm i -g pnpm

COPY ./nuxt/package.json ./nuxt/pnpm-lock.yaml ./nuxt/.npmrc ./nuxt/.eslintrc ./nuxt/tailwind.config.ts ./
RUN pnpm install --frozen-lockfile

ENTRYPOINT [ "pnpm", "run", "dev" ]
