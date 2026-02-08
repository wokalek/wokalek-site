ARG NODE_IMAGE=lts-alpine

FROM node:${NODE_IMAGE} AS base
WORKDIR /app

FROM base AS pnpm
ARG PNPM_VERSION

RUN npm i -g pnpm@${PNPM_VERSION}

FROM pnpm AS deps
ARG BUILD_TARGET

COPY nuxt/.npmrc nuxt/package.json nuxt/pnpm-lock.yaml nuxt/pnpm-workspace.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile $( [ "$BUILD_TARGET" = "production" ] && echo "--prod" )

FROM deps AS develop

ENTRYPOINT ["pnpm", "dev"]

FROM deps AS build

COPY nuxt .

RUN pnpm build

FROM base AS production

COPY --from=build /app/.output .output

USER node

ENTRYPOINT ["node", ".output/server/index.mjs"]
