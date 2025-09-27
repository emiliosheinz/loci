# 3. Marketing website technology stack

Date: 2025-09-27

## Status

Proposed

## Context

We need to build an initial marketing website for Loci that:

- Ranks well on search engines (SEO) and provides fast first paint / good Core Web Vitals.
- Allows rapid iteration on landing pages, product sections, and future content (blog/docs) without heavy backend coupling.
- Shares (or can evolve to share) design tokens and brand system with the product UI to avoid divergent visual styles.
- Supports future needs like analytics, A/B testing, internationalization, gated content, and MDX-based rich sections.
- Remains simple to operate and deploy with minimal custom infrastructure.

Given the team already uses TypeScript and a Node ecosystem (see ADR 0002), choosing a framework aligned with existing skill sets will reduce ramp-up and maintenance costs.

## Decision

We will build the marketing website with:

- Framework: React + Next.js (App Router) for hybrid SSG/ISR/SSR, built-in routing, image optimization, metadata APIs, and strong SEO + performance primitives.
- Styling: Tailwind CSS for a utility-first workflow, design velocity, responsive primitives, and predictable purge/size characteristics.
- UI Components: shadcn/ui (Radix UI + Tailwind patterns) to accelerate accessible, consistent components while retaining full source control (no opaque dependency).
- Language: TypeScript (consistency with monorepo, type safety).
- Content authoring (initial): In-repo Markdown/MDX (co-located) for early pages; a future ADR will address external CMS if/when needed.
- Directory strategy: Place the marketing site in the monorepo under apps/www to enable shared packages (design tokens, analytics client, etc.).

## Alternatives Considered

1. Astro instead of Next.js:
   - Pros: Excellent performance focus, partial hydration, simpler static content model.
   - Cons: Team already invested in React/Next mental model; dynamic / future app-like sections would require more integration work. Next provides broader ecosystem and native ISR.
2. Gatsby instead of Next.js:
   - Pros: Mature plugin ecosystem for content sourcing.
   - Cons: Build performance and ecosystem momentum have shifted toward Next; Gatsby adds GraphQL layer complexity we likely don't need initially.
3. Pure React SPA (client-side only):
   - Pros: Simpler runtime, fewer framework abstractions.
   - Cons: Poor SEO and slower first contentful paint without significant extra work (SSR infra, prerendering) which Next already provides.
4. CSS Modules / vanilla-extract / Styled Components instead of Tailwind:
   - Pros: More explicit styling scoping or theme abstraction.
   - Cons: Slower iteration for marketing site layout experimentation; Tailwind has stronger community patterns + easier consistency with shadcn/ui.
5. Component library alternatives (Chakra UI, MUI):
   - Pros: Lots of pre-built components.
   - Cons: Theming opinionated, harder to create distinct brand look; shadcn/ui keeps full control of source and leverages Radix primitives.
6. Headless CMS (e.g., Contentful, Sanity) from day one:
   - Pros: Non-technical content updates.
   - Cons: Adds cost / integration overhead before we have stable content patterns. Can be introduced later once iteration speed shifts toward content authors.

## Consequences

- Faster delivery of initial marketing pages with good SEO, performance, and accessibility foundations.
- Consistent design language via shared Tailwind config and shadcn/ui components reduces divergence from product UI.
- Tailwind + shadcn/ui increases utility class usage; code review discipline is needed to avoid style duplication and ensure components are extracted when patterns repeat.
- In-repo Markdown/MDX keeps things simple now, but requires a follow-up ADR if/when non-engineers need to publish content autonomously.
- Adding internationalization, experimentation (A/B tests), analytics providers, or a CMS will each warrant separate ADRs once requirements solidify.

