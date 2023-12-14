FROM node:21.3.0-alpine

WORKDIR /nuxt

RUN apk update && apk upgrade

RUN npm i -g pnpm

COPY ./nuxt/package.json ./nuxt/pnpm-lock.yaml ./nuxt/.npmrc ./
RUN pnpm install --frozen-lockfile

ENTRYPOINT [ "pnpm", "run", "dev", "--host" ]
