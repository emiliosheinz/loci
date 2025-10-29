# 5. Production Infrastructure

Date: 2025-10-29

## Status

Accepted

## Context

Loci needs a production environment to host the **API**, **Web app**, **API Docs**, **Database**, **Marketing Website**, and more.  The platform should be simple to manage, support Docker deployments, integrate with Terraform, and stay affordable while traffic is low.  

Traditional cloud providers like **AWS** and **GCP** were excluded because they require extensive setup and maintenance (networking, SSL, IAM, scaling). Classic hosting or VPS solutions (e.g., **Hostinger**, **Hetzner**) were also ruled out because they offer limited automation and would require manual configuration of Docker, SSL, monitoring, and deployments — increasing operational effort and risk.

## Decision

We will use **Railway** as the initial production platform.

- All services (API, Web, API Docs, Website) will run as **Docker-based Railway services**.
- **Managed PostgreSQL** will be provided by Railway’s built-in database plugin.
- **Secrets and environment variables** will be managed through Railway Variables.
- **Terraform** (community provider) will be used to codify the infrastructure over time.

### Reasoning

- **Railway** offers the lowest operational overhead and cost through **scale-to-zero**.
- It provides a single, centralized place for apps, DB, and secrets.
- The developer experience is excellent and integrates well with GitHub Actions and GHCR.

## Alternatives Considered

### Render
- **Pros:** First-party Terraform provider, stable production environment, predictable always-on pricing.
- **Cons:** Higher baseline cost and no scale-to-zero.  
- **Why not chosen:** Better fit once traffic and uptime requirements increase.

### Fly.io
- **Pros:** Global edge deployment, fine-grained resource control, flexible scaling.
- **Cons:** Partial Terraform support, higher setup complexity, more ops overhead.  
- **Why not chosen:** Overkill for the current scale and complexity of Loci.

## Consequences

- Very low cost and minimal setup for early production.
- Cold starts may occur when services scale from zero.
- Terraform automation depends on a community provider (acceptable for now).
- Migration to Render will be straightforward later, using the same Docker images and env structure.
