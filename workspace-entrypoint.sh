#!/bin/sh

set -e

packages=$(pnpm nx show projects --type=lib | paste -sd, -)

pnpm nx watch --projects="$packages" -- pnpm nx build \$NX_PROJECT_NAME
