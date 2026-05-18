# Glow Documentation

{/* DEMO_VIDEO: index-overview | manual */}

# Glow Documentation

Documentation for the **Glow** conversational AI training platform — an
academic, self-hostable system for designing and running
persona-driven simulations with full grading + analytics.

<DemoVideo topic="index-overview" kind="manual" caption="Glow in 60 seconds — landing on the docs home and orienting around what the platform does." />

## Getting started

- **[Start](/start)** — install + first-boot of a Glow instance
- **[How It Works](/how-it-works)** — the simulation, persona, scenario, attempt loop
- **[Tutorial](/tutorial)** — design your first simulation end-to-end
- **[Patterns](/patterns)** — proven patterns + anti-patterns
- **[Annotated Example](/annotated-example)** — a real seed walked through line-by-line
- **[Authentication](/authentication)** — sessions, bearer tokens, license keys

## Reference

- **[API Reference](/api-reference)** — every HTTP endpoint, auto-generated from OpenAPI
- **[CLI Reference](/cli-reference)** — every `glow` command, auto-generated from the CLI spec

{/* DEMO_VIDEO: index-sidebar | playwright */}

## Sidebar layout

<DemoVideo
  topic="index-sidebar"
  kind="playwright"
  caption="Scrolling the left-hand nav and showing how each sidebar group lines up 1-for-1 with the running client UI."
/>

The sidebar is organized by API/CLI taxonomy — each group
corresponds to a parent artifact or a logical cluster of
artifacts in the Glow API. The client product UI uses its own
grouping (Learner / Analytics / etc.) optimized for product
navigation; the two intentionally differ.

| Sidebar group | What lives there |
|---|---|
| **Attempt** | Chat · Home · Practice · Dashboard · Reports · Leaderboard |
| **Test** | Benchmark · Invocation |
| **System** | Activity · Health · Pricing · Session · Group |
| **Training** | Cohorts · Personas · Scenarios · Simulations |
| **Management** | Documents · Fields · Parameters · Profiles |
| **Intelligence** | Agents · Models · Providers · Tools |
| **Platform** | Auths · Departments · Evals · Rubrics |
