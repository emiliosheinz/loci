![Loci Banner](./docs/images/banner.png)

# Loci

Loci (pronounced _LOH-kee_) is inspired by the ancient memory palace method — storing ideas in places so they’re easy to recall and connect later. It is a simple, frictionless app to capture anything in the moment. To learn more about it visit our [product vision, features and strategy page](https://github.com/emiliosheinz/loci/wiki/Product-vision,-features,-and-strategy).

## Quick Start

The entire development workflow should happen within Docker containers to ensure consistency across environments. 

```bash
# Setup your environment
./scripts/setup-env.sh

# Start development 
docker compose up -d
```

If you want to run any CLI commands make sure to do so within the `workspace` container:

```bash
# Open a shell in the workspace container
docker compose exec workspace sh 

# Or run a command directly
docker compose exec workspace <command>
```

### Using the loci helper

For convenience, the repo already includes a helper script at bin/loci. It runs commands inside the workspace container so you don’t have to type docker exec every time:

```bash
bin/loci pnpm install
bin/loci pnpm nx test api
bin/loci pnpm nx run-many -t check 
```

> 🚨 Even though you can run commands on your host machine, it's highly recommended to always use the Docker container to avoid environment discrepancies.

## Project structure

The project is organized as a monorepo using npm workspaces Nx and Docker to manage multiple applications and shared packages.

### Apps

- `api`: The backend API built with Node.js and Nest.
- `www`: The frontend web marketing site built with Next.js and React.

### Packages

- `config`: Shared configuration files.

