# syntax=docker/dockerfile:1.18-labs
# -------- Production Builder --------
FROM node:24-alpine AS builder

RUN corepack enable pnpm && corepack install -g pnpm@10.14.0

WORKDIR /loci

# Copy manifests 
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json ./
COPY apps/api/package.json apps/api/
COPY --parents packages/*/package.json ./

# Install workspace deps
RUN pnpm install --frozen-lockfile

# Copy in only what the API needs
COPY apps/api apps/api
COPY packages packages

# Build the api (outputs to apps/api/dist)
RUN pnpm nx build api

# Prune to runtime-only (dist + prod deps)
RUN pnpm -F api deploy --prod /out



# -------- Production --------
FROM node:24-alpine AS prod 

WORKDIR /loci

RUN apk add --no-cache curl

COPY --from=builder /out ./

CMD ["node", "dist/main"]



# -------- Dev (with hot reload) --------
FROM node:24-alpine AS dev

RUN apk add --no-cache curl

RUN corepack enable pnpm && corepack install -g pnpm@10.14.0

WORKDIR /loci

CMD ["pnpm", "nx", "start:dev", "api"]
