# 2. Project scaffolding and initial architecture

Date: 2025-09-11  

## Status

Accepted  

## Context

We need to establish the initial foundation for the project to ensure consistency, scalability, and maintainability from day one.  

Since we mainly work in an **asynchronous environment**, documenting and aligning on these choices will help us stay in sync across time zones and working hours.  

Key considerations:  

- The backend should use a **language and framework familiar to the team** to move quickly.  
- We want **type safety** to reduce runtime errors and improve developer productivity.  
- **Containerization** is required to ensure reproducibility across local and production environments.  
- The repository is hosted on **GitHub**, making **GitHub Actions** the natural choice for CI/CD.  
- We want **fast, easy-to-use tooling** for linting and formatting.  
- The project will likely grow to include multiple apps; to keep development velocity, we prefer a **monorepo** over managing multiple repositories.  
- For monorepo management, we want a **mature, flexible tool** that supports different technologies beyond JavaScript.  

## Decision

We will set up the project boilerplate with the following technologies:  

- **Backend**: Node.js with NestJS (flexible, structured, and well known by the team).  
- **Language**: TypeScript (for static typing and better maintainability).  
- **Containerization**: Docker (to standardize environments and deployments).  
- **CI/CD**: GitHub Actions (tightly integrated with our GitHub repository).  
- **Linting & Formatting**: Biome (faster and simpler than ESLint + Prettier).  
- **Repository structure**: Monorepo (enables fast iteration and shared dependencies across multiple apps).  
- **Monorepo management**: Nx (more mature and flexible than Turborepo, supports multiple ecosystems).  

## Alternatives Considered

- **ESLint + Prettier** instead of Biome:  
  - Widely adopted and flexible.  
  - Slower and requires more setup compared to Biome.  

- **Turborepo** instead of Nx:  
  - Simpler and focused on JavaScript ecosystem.  
  - Less mature, limited flexibility compared to Nx’s polyglot support.  

- **Multi-repo setup** instead of Monorepo:  
  - Clear separation between apps/services.  
  - Higher overhead in dependency management and cross-repo coordination, not ideal for a small team.  

## Consequences

- A well-defined foundation that ensures consistency and speed across local, CI, and production environments.  
- The monorepo setup will make it easier to share code and maintain alignment across multiple apps, but it introduces more complexity in build tooling.  
- Using Nx gives us flexibility if we adopt non-JS technologies in the future.  
- Biome enforces consistency with minimal configuration, but some engineers may initially miss ESLint/Prettier’s ecosystem and plugins.  
- Relying on GitHub Actions ties CI/CD to GitHub’s infrastructure; switching later would require reconfiguration.  
