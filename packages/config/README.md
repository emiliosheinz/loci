# Loci Config

Shared configuration package for the Loci monorepo.

## Overview

This package provides centralized configuration files that are shared across all applications and packages in the Loci monorepo. It ensures consistency in code style, TypeScript settings, and testing configuration.

## Contents

- **biome.json**: Code formatting and linting rules
- **jest.config.node.json**: Jest configuration for Node.js projects
- **tsconfig.node.json**: TypeScript configuration for Node.js applications

## Usage

This package is referenced as a workspace dependency in other packages:

```json
{
  "devDependencies": {
    "@loci/config": "workspace:*"
  }
}
```

## Exports

Configuration files are exported via package.json exports field:

- `@loci/config/biome`: Biome configuration
- `@loci/config/jest/*`: Jest configurations
- `@loci/config/typescript/*`: TypeScript configurations

## Example Usage

### In a Biome configuration

```json
{
  "extends": "@loci/config/biome"
}
```

### In a TypeScript project

```json
{
  "extends": "@loci/config/typescript/node"
}
```

### In a Jest configuration

```js
import baseConfig from "@loci/config/jest/node" with { type: "json" };
```

## Adding New Configurations

1. Add the configuration file to this package
2. Update the `exports` field in `package.json` 
3. Reference it in consuming packages or apps

