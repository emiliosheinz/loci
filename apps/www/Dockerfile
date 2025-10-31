# syntax=docker/dockerfile:1.18-labs
# -------- Production Builder --------
FROM node:24-alpine AS builder

RUN corepack enable pnpm && corepack install -g pnpm@10.14.0

WORKDIR /loci

# Copy manifests 
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/www/package.json apps/www/
COPY --parents packages/*/package.json ./

# Install workspace deps
RUN pnpm install --frozen-lockfile

# Copy in only what the API needs
COPY apps/www apps/www
COPY packages packages

# Build the app 
RUN pnpm turbo build --filter=www 



# -------- Production --------
FROM node:24-alpine AS prod 

WORKDIR /loci

RUN apk add --no-cache curl

COPY --from=builder /loci/apps/www/.next/standalone ./
COPY --from=builder /loci/apps/www/public ./apps/www/public
COPY --from=builder /loci/apps/www/.next/static ./apps/www/.next/static

CMD ["node", "apps/www/server.js"]



# -------- Development (with hot reload) --------
FROM node:24-alpine AS dev

RUN apk add --no-cache curl

RUN corepack enable pnpm && corepack install -g pnpm@10.14.0

WORKDIR /loci

CMD ["pnpm", "turbo", "start:dev", "--filter=www"]
