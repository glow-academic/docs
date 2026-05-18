# Invocation

{/* DEMO_VIDEO: invocation-overview — replace public/demos/invocation-overview.mp4 */}

# Invocation

<DemoVideo
  topic="invocation-overview"
  caption="Opening a single invocation: model + agent header, status pill, modalities chips, scores grid below, trace expandable on demand."
/>

Invocations are the per-row units inside a test — each one represents
a single AI model call made during a benchmark or batch run, with its
own configuration, status, trace, and grading.

Invocation is a **sub-namespace on the test artifact**. Every operation
is named `invocation_<op>` and lives at `POST /test/invocation_<op>`:
`invocation_get`, `invocation_run`, `invocation_complete`, etc. The
CLI surfaces them as `glow tests invocation <op>`.

## What is an Invocation?

An invocation captures everything needed to make and grade one AI
model call inside a test:

- **`invocation_id`** — unique identifier
- **`test_id`** — the parent test
- **`model` / `agent` / `provider`** — what's being called
- **`modalities`** — text / audio / image / video supported
- **`status`** — queued / running / completed / failed / terminated
- **`trace`** — full execution trace (prompts, intermediate calls, responses)
- **`scores`** — per-rubric-standard scores when graded

Invocations are created when a test fans out (e.g., one invocation per
scenario × model combination). They run independently and report back
into the parent test for aggregation in the [Benchmark](/benchmark)
view.

## The invocation sub-op surface

| Sub-op | Endpoint | Purpose |
|---|---|---|
| `invocation_get` | `POST /test/invocation_get` | hydrate one invocation by id |
| `invocation_create` | `POST /test/invocation_create` | seed a new invocation (rare; tests fan out automatically) |
| `invocation_run` | `POST /test/invocation_run` | start / re-fire an invocation |
| `invocation_complete` | `POST /test/invocation_complete` | mark complete |
| `invocation_terminate` | `POST /test/invocation_terminate` | terminate an in-flight invocation |
| `invocation_trace` | `POST /test/invocation_trace` | fetch the full execution trace |
| `invocation_draft` / `invocations` | `POST /test/invocation_draft` / `POST /test/invocations` | edit draft / list invocations |

The list endpoint is plural (`POST /test/invocations`) since it
returns a row collection, while the single-target ops use the
singular concatenated form.

## Quick Start

### CLI

```bash
# Hydrate a single invocation
glow tests invocation get --body '{"invocation_id": "invocation-uuid"}'

# Fan out / re-fire an invocation
glow tests invocation run --body '{"invocation_id": "invocation-uuid"}'

# Pull the full trace
glow tests invocation trace --body '{"invocation_id": "invocation-uuid"}'

# List invocations for a test
glow tests invocations --body '{"test_id": "test-uuid"}'
```

### API

```bash
# Get invocation detail
curl -X POST https://<your-instance>/test/invocation_get \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"invocation_id": "invocation-uuid"}'

# List invocations (paginated)
curl -X POST https://<your-instance>/test/invocations \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"test_id": "test-uuid", "page_size": 25}'
```

{/* DEMO_VIDEO: invocation-fanout — replace public/demos/invocation-fanout.mp4 */}

## Invocations in the test flow

<DemoVideo
  topic="invocation-fanout"
  caption="A single test fanning out into one invocation per scenario × model × agent cell — rows landing as `queued` then flipping to `running` in parallel."
/>


When a test runs, the server fans out one invocation per benchmark
cell (typically: scenario × model × agent). Each invocation:

1. Resolves the model + agent configuration from the test setup
2. Issues the model call(s) — recorded in `trace`
3. Grades the resulting transcript against the test's rubric
4. Writes per-standard scores back onto the row
5. Reports `status = completed` (or `failed` / `terminated`)

The parent test's response aggregates invocations into
`AggregatedResults` for benchmark UIs.

{/* DEMO_VIDEO: invocation-status-lifecycle — replace public/demos/invocation-status-lifecycle.mp4 */}

## Status lifecycle

<DemoVideo
  topic="invocation-status-lifecycle"
  caption="Walking a row through queued → running → completed, then re-firing a `failed` row with `invocation_run` and terminating one mid-flight with `invocation_terminate`."
/>


| Status | Meaning |
|---|---|
| `queued` | created, not yet started |
| `running` | model call in flight |
| `completed` | model call done, scores written |
| `failed` | model call errored — see `trace` for details |
| `terminated` | cancelled via `invocation_terminate` |

Use `invocation_run` to (re-)kick a queued or failed invocation; use
`invocation_terminate` to stop a `running` one safely.

{/* DEMO_VIDEO: invocation-trace — replace public/demos/invocation-trace.mp4 */}

## Trace

<DemoVideo
  topic="invocation-trace"
  caption="Expanding `invocation_trace` to walk the full call chain: prompts sent, intermediate tool calls, and the final response — ready for audit or replay."
/>


```bash
curl -X POST https://<your-instance>/test/invocation_trace \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"invocation_id": "invocation-uuid"}'
```

Returns the full call chain — prompts sent, intermediate tool calls,
responses received — formatted for replay or audit.

{/* DEMO_VIDEO: invocation-list-paginate — replace public/demos/invocation-list-paginate.mp4 */}

## Listing and paginating

<DemoVideo
  topic="invocation-list-paginate"
  caption="Hitting `POST /test/invocations` for a test_id, paginating with page_size, and filtering down to just the `failed` rows to triage."
/>

## Common Operations

| Task | CLI | API |
|---|---|---|
| Get one invocation | `glow tests invocation get` | `POST /test/invocation_get` |
| List invocations | `glow tests invocations` | `POST /test/invocations` |
| Run / re-fire | `glow tests invocation run` | `POST /test/invocation_run` |
| Terminate | `glow tests invocation terminate` | `POST /test/invocation_terminate` |
| Fetch trace | `glow tests invocation trace` | `POST /test/invocation_trace` |
| Mark complete | `glow tests invocation complete` | `POST /test/invocation_complete` |
| Save draft | `glow tests invocation draft` | `POST /test/invocation_draft` |
| List drafts | `glow tests invocation drafts` | `POST /test/invocation_drafts` |

## Related

- [Test API Reference](/api-reference/test) — every invocation_* endpoint with full schemas
- [Tests CLI Reference](/cli-reference/tests) — every `glow tests ...` command
- [Benchmark](/benchmark) — the aggregated view across all invocations in a test
- [Pricing](/pricing) — cost tracking for invocation runs
- [Group](/group) — generation group rows that capture invocation cost
