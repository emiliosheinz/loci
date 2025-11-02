# 4. Branching and Releasing Strategy

Date: 2025-10-23  

## Status

Accepted

Superceded by [6. Monorepo Build TITLE Release Strategy Update](0006-monorepo-build-release-strategy-update.md)

## Context

As Loci evolves into a **multi-application monorepo**, maintaining a consistent, automated, and traceable release process across apps and packages has become essential.  

Our goal is to ensure that every change merged into `main` is **automatically deployed to production**, preserving the simplicity and reliability of a **trunk-based development** workflow while benefiting from **semantic versioning**, **changelog generation**, and **artifact publishing** — all derived from **conventional commits**.

Manual release management (tagging, changelog generation, publishing npm packages or Docker images) would quickly become error-prone and unsustainable. To address this, we adopted **Nx’s built-in release framework**, which provides first-class support for monorepos and integrates seamlessly with our existing setup (Nx, pnpm, Docker, and GitHub Actions).

## Decision

We decided to:

1. **Adopt trunk-based development:** Every push to `main` automatically triggers a production deployment.

2. **Use Nx’s release framework** to handle:  
   - Automatic semantic versioning for **both packages and Docker images** based on conventional commits.  
   - Tagging and publishing of releases.  
   - Automatic generation of changelogs.  
   - Publishing npm packages to **npm registry** and Docker images to **GHCR**.  

3. **Automate the release process** through a **GitHub Actions workflow** that:  
   - Checks out the code.  
   - Sets up Node.js, pnpm, and Docker environments.  
   - Logs in to GHCR.  
   - Runs `pnpm nx release` to perform versioning, tagging, changelog generation, and publishing.

## Consequences

- **Fully automated semantic versioning:**  
  Both npm packages and Docker images share consistent, semver-aligned versions automatically derived from conventional commits.

- **Faster, more reliable deployments:**  
  Every push to `main` triggers a reproducible release with no manual intervention.

- **Consistent and auditable history:**  
  Nx generates changelogs and tags for each release, providing full traceability between commits, versions, and artifacts.

- **Simplified developer experience:**  
  A single command (`nx release`) manages the entire release flow across all apps and packages.

- **Future-proof setup:**  
  The adoption of semantic Docker image versioning ensures alignment across all distribution channels, improving interoperability and traceability for external consumers.

## References

- [Nx Release Framework Documentation](https://nx.dev/docs/guides/nx-release)  
- [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)  
- [Nx Docker Image Release Docs](https://nx.dev/docs/guides/nx-release/release-docker-images)  
- [Nx PR #33178 – Semantic Docker Image Versioning](https://github.com/nrwl/nx/pull/33178)  
- [Previous Discussion – Docker Semantic Tags Support](https://github.com/nrwl/nx/discussions/33131)
