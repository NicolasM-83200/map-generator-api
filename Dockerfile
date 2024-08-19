# BUILD FOR PRODUCTION
FROM node:20-alpine AS base

ENV NODE_ENV="production"

FROM base AS installer

RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app

COPY --chown=node:node ./package*.json ./
COPY --chown=node:node ./start.sh ./start.sh
COPY --chown=node:node . .

RUN npm install --include=dev

RUN npm run build

FROM base AS prunner
WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules
COPY ./package*.json ./

RUN npm prune --omit=dev

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1024 nodejs
RUN adduser --system --uid 1024 nestjs

USER nestjs

COPY --chown=nestjs:nodejs --from=prunner /app/package.json ./package.json
COPY --chown=nestjs:nodejs --from=installer /app/dist ./dist
COPY --chown=nestjs:nodejs --from=prunner /app/node_modules ./node_modules
COPY --chown=nestjs:nodejs --from=installer /app/start.sh ./start.sh

# CMD ["sh", "-c", "while :; do echo 'Container is running'; sleep 60; done"]

CMD [ "sh", "start.sh" ]
# ENTRYPOINT [ "start.sh" ]