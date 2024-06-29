FROM node:20.15.0-alpine

RUN apk update && apk upgrade && npm i -g pnpm

COPY ./nuxt /nuxt
COPY ./docker/nuxt/dev.entrypoint.sh /

WORKDIR /nuxt
RUN pnpm install --frozen-lockfile

ENTRYPOINT ["sh", "/dev.entrypoint.sh"]
