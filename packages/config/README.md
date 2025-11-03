# Loci Config

Shared configuration package for the Loci monorepo providing centralized, versioned build and tooling settings.

## Overview

This package provides centralized configuration files that are shared across all applications and packages in the Loci monorepo. It ensures consistency in code style, TypeScript settings, and testing configuration.

## Contents

- **biome.json**: Code formatting and linting rules
- **jest.config.ts**: Base Jest configuration
- **tsconfig.json**: Base TypeScript configuration 

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
- `@loci/config/jest`: Jest configurations
- `@loci/config/typescript`: TypeScript configurations

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
  "extends": "@loci/config/typescript"
}
```

### In a Jest configuration

```ts
import baseConfig from "@loci/config/jest";
```

## Adding New Configurations

1. Add the configuration under the `base` folder 
2. Update the `exports` field in `package.json` 
3. Reference it in consuming packages or apps

> 💡 TS, JS, and JSON files are automatically bundled and exported. Other file types may require additional handling.
