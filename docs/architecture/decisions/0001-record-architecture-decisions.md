# 1. Record architecture decisions

Date: 2025-09-11

## Status

Accepted

## Context

We mainly work in an **asynchronous environment**, which makes it crucial to keep decisions visible and accessible to everyone regardless of time zones or working hours.  

As the project evolves, we will make a series of technical and architectural decisions. Without a consistent record, the rationale for these decisions is often lost in code reviews, tickets, or tribal knowledge. This makes it harder for new contributors to understand *why* things are the way they are, and for the team to revisit or supersede past decisions with clarity.

Michael Nygard’s article [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) introduced the concept of ADRs (Architecture Decision Records) as a lightweight, version-controlled way of capturing these decisions.

## Decision

We will document important technical and architectural decisions using **Architecture Decision Records (ADRs)**.  

Each ADR will be:

- Stored in the repository at `docs/architecture/decisions/`.  
- Numbered sequentially (`0001-...`, `0002-...`, etc.).  
- Written in Markdown, one decision per file.  
- Reviewed and merged like code.  
- Marked with a clear status: *Proposed*, *Accepted*, *Deprecated*, or *Superseded*.  

To support this workflow, we will use [npryce/adr-tools](https://github.com/npryce/adr-tools), which provides commands for creating, listing, and superseding ADRs.

## Consequences

- We create a searchable, versioned history of decisions and their context.  
- New team members will onboard faster by reading past ADRs.  
- Decisions can be superseded explicitly, preserving the historical record.  
- Writing ADRs requires discipline: not every minor decision should be captured.  
- The team must agree on when an ADR is required (major design, infra, or API-impacting decisions).  

