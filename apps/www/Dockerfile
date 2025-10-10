# syntax=docker/dockerfile:1.18-labs
# -------- Production Builder --------
FROM node:24-alpine AS builder

RUN corepack enable pnpm && corepack install -g pnpm@10.14.0

WORKDIR /loci

# Copy manifests 
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json ./
COPY apps/www/package.json apps/www/
COPY --parents packages/*/package.json ./

# Install workspace deps
RUN pnpm install --frozen-lockfile

# Copy in only what the API needs
COPY apps/www apps/www
COPY packages packages

# Build the app 
RUN pnpm nx build www 



# -------- Production --------
FROM node:24-alpine AS prod 
ENV NODE_ENV=production
WORKDIR /loci

COPY --from=builder /loci/apps/www/.next/standalone ./
COPY --from=builder /loci/apps/www/public ./apps/www/public
COPY --from=builder /loci/apps/www/.next/static ./apps/www/.next/static

EXPOSE 3001
CMD ["node", "apps/www/server.js"]



# -------- Dev (with hot reload) --------
FROM node:24-alpine AS dev

RUN apk add --no-cache curl

RUN corepack enable pnpm && corepack install -g pnpm@10.14.0

WORKDIR /loci

CMD ["pnpm", "nx", "start:dev", "www"]



# -------- E2E Testing --------
FROM node:24-bookworm AS e2e

# Install PNPM
RUN corepack enable pnpm && corepack install -g pnpm@10.14.0

WORKDIR /loci

# Copy manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json ./
COPY apps/www/package.json apps/www/
COPY --parents packages/*/package.json ./

# Install workspace deps
RUN pnpm install --frozen-lockfile

# Install Playwright Browsers
RUN pnpm -F www exec playwright install --with-deps chromium firefox webkit

# Copy in only what the API needs
COPY apps/www apps/www
COPY packages packages

# Default command runs your e2e script
CMD ["pnpm", "nx", "test:e2e", "www"]
