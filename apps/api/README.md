# Loci API

The backend API for the Loci application, built with NestJS.

## Quick Start

### Using Docker

From the monorepo root:

```bash
# Start the development environment
docker compose up -d

# The API will be available at http://localhost:3000/api
```

### Direct commands (within workspace container)

```bash
# Development mode with hot reload
pnpm start:dev

# Production mode
pnpm start:prod

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run e2e tests
pnpm test:e2e
```

## API Documentation

Once the API is running, you can access the interactive Swagger documentation at:

```
http://localhost:3000/docs
```

The API endpoints are prefixed with `/api`, so the base URL for API calls is:

```
http://localhost:3000/api
```

## Configuration

The API uses environment variables for configuration:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Port number for the server | `3000` |

## License

This project is licensed under the MIT License.
