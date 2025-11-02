# 6. Monorepo Build Release Strategy Update

Date: 2025-11-02

## Status

Accepted

Supercedes [2. Project scaffolding and initial architecture](0002-project-scaffolding-and-initial-architecture.md)
Supercedes [4. Branching and Releasing Strategy](0004-branching-and-releasing-strategy.md)

## Context  

We initially used **Nx** for both building and releasing our monorepo. Over time, we faced issues with Nx, from unclear documentation and overly complex configuration to unreliable publishing behavior. **Turborepo**, on the other hand, offers a simpler setup, faster builds, and a much better developer experience and documentation. We still find Nx’s release tooling useful for tagging, changelog generation, and version management, so we’ll keep it for that purpose only.  

## Decision  

- Use **Turborepo** as the main monorepo build system (for build, dev, lint, test, etc.).  
- Continue using **Nx only for releases**: tagging, pushing new versions, and generating changelogs.  
- Move **npm package** and **Docker image publication** to a **separate CI pipeline** for better control, observability, and reliability.  

## Consequences  

- **Simpler and faster builds** with Turborepo.  
- **Clearer separation** between build, release, and publish steps.  
- **Better control** over publishing pipelines and credentials.  
- **Reduced friction** for contributors due to better documentation and tooling experience.  
- Slight **increase in tooling complexity**, since both Nx and Turbo will coexist for now.
