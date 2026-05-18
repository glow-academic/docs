# Tests

{/* DEMO_VIDEO: tests-overview | playwright */}

# Tests

A **test** is the parent record for a fan-out batch run: it spans
one or more model × scenario × agent cells, kicks off an
[invocation](/invocation) per cell, and aggregates the resulting
grades into a [benchmark](/benchmark) view.

<DemoVideo
  topic="tests-overview"
  kind="playwright"
  caption="A test detail view — the parent header, the per-cell invocation rows underneath, and the rolled-up benchmark tab."
/>

## What is a test?

If an [attempt](/chat) is one learner sitting down for one
conversation, a test is the *batch* equivalent: one configured run
that fans out across every cell in a model × scenario × agent grid.

Each cell becomes its own [invocation](/invocation) — a sub-namespace
that owns the per-row lifecycle. Cross-cell scores roll up into the
[benchmark](/benchmark) view for comparison and reporting.

| Concept | Scope | Owns |
|---------|-------|------|
| **Test** | Whole batch | start / stop / grade / feedback / complete / archive |
| [Invocation](/invocation) | One cell | create / run / terminate / trace / get / complete |
| [Benchmark](/benchmark) | Aggregated read | comparison + reporting view |

Everything on **this** page is the test-level (parent) surface — ops
that exist once per test, not per cell.

---

{/* DEMO_VIDEO: tests-lifecycle | manual */}

## The lifecycle

<DemoVideo
  topic="tests-lifecycle"
  kind="manual"
  caption="A test moving through its phases: start → fan-out into invocations → grade rows → complete (or archive)."
/>

A test moves through a small, predictable set of phases:

1. **Start** — `POST /test/start` materializes the test row and fans
   out one invocation per cell.
2. **Run** — each invocation runs independently under
   [invocation](/invocation)'s own lifecycle.
3. **Stop** (optional) — `POST /test/stop` halts queued or in-flight
   invocations without finalizing the test record.
4. **Grade** — `POST /test/grade` lays down a grade per invocation;
   `POST /test/feedback` attaches per-criterion comments.
5. **Complete** — `POST /test/complete` is the terminal write,
   mirroring `POST /attempt/complete`.
6. **Archive** (optional) — `POST /test/archive` hides a test from
   the default search view; reversible.

[Benchmark](/benchmark) is read-only — it renders whatever the
underlying test + invocations have already produced.

---

{/* DEMO_VIDEO: tests-start | vhs */}

## Starting a test

<DemoVideo
  topic="tests-start"
  kind="vhs"
  caption="Configuring a test (which models, which scenarios, which agents) and watching the per-cell invocation rows appear as the fan-out lands."
/>

`POST /test/start` is the entry point. It accepts a `TestStartPayload`
describing the cells to run and returns:

```json
{
  "test_id": "…",
  "invocation_id": "…",
  "benchmark_id": "…"
}
```

`test_id` is the parent every other op on this page targets.
`invocation_id` points at the first cell so the UI can render
immediately while the rest of the fan-out materializes — the full
set is reachable via the invocation sub-namespace.
`benchmark_id` is the read-side view for rolled-up scores.

```bash
glow tests start --body '{
  "eval_id": "…",
  "model_ids": ["…", "…"],
  "scenario_ids": ["…", "…"],
  "agent_ids": ["…"]
}'
```

Raw HTTP:

```bash
curl -X POST https://<your-instance>/test/start \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: your-license-key" \
  -H "Authorization: Bearer your-token" \
  -d '{ "eval_id": "…", "model_ids": ["…"], "scenario_ids": ["…"], "agent_ids": ["…"] }'
```

---

{/* DEMO_VIDEO: tests-stop | vhs */}

## Stopping in-flight runs

<DemoVideo
  topic="tests-stop"
  kind="vhs"
  caption="Hitting stop mid-run — queued cells get cancelled, in-flight cells get a terminate signal."
/>

`POST /test/stop` halts queued and in-flight invocations attached to
a test. It is the test-level *cancel* surface and does **not**
finalize the test record — use `complete` for that.

```bash
glow tests stop --body '{ "test_id": "…" }'
```

The response carries `invocation_id`, a `success` flag, and an
optional `message` explaining what was stopped (or why nothing was).

For per-cell terminate semantics (one invocation, not the whole
fan-out), use `POST /invocation/terminate` from the
[invocation](/invocation) page.

---

{/* DEMO_VIDEO: tests-grade | vhs */}

## Grading and feedback

<DemoVideo
  topic="tests-grade"
  kind="vhs"
  caption="Grading a row with full=true to anchor to the rubric ceiling, then attaching per-standard feedback comments to specific tool calls."
/>

Tests have a two-level grading surface: one row per invocation
(`grade`), and per-criterion comments on a row (`feedback`).

### `POST /test/grade`

Creates a grade row for a single invocation. Pass `full: true` to let
the server resolve the rubric and assign `score = total_points` (the
rubric ceiling) — useful when the client doesn't know the rubric's
max ahead of time.

```bash
glow tests grade --body '{
  "invocation_id": "…",
  "full": true
}'
```

To pin an explicit numeric score instead, omit `full` and pass
`score`:

```bash
glow tests grade --body '{
  "invocation_id": "…",
  "score": 7
}'
```

### `POST /test/feedback`

Attaches a comment + score for one rubric standard group, on one
tool call, under a specific grade. This is the *per-row* shape that
test grading uses and is unique to test (attempts do not need this
because they grade a single conversation, not a grid).

```bash
glow tests feedback --body '{
  "grade_id": "…",
  "tool_call_id": "…",
  "standard_group_id": "…",
  "score": 4,
  "feedback": "Solid handling of the academic-integrity question, but…"
}'
```

The pairing of `grade_id` + `tool_call_id` + `standard_group_id` is
what lets the benchmark view render a per-cell, per-standard
heatmap.

---

{/* DEMO_VIDEO: tests-decrypt | vhs */}

## Decryption surface

<DemoVideo
  topic="tests-decrypt"
  kind="vhs"
  caption="Opening a test row that references an encrypted key, then revealing the plaintext via /test/decrypt."
/>

`POST /test/decrypt` decrypts a key *scoped to an invocation*.
Internally it:

1. Looks up the invocation by `invocation_id`.
2. Verifies the `key_id` is in that invocation's `key_ids` set —
   else **403**.
3. Runs the profile identity check via shared `resolve_decrypt`
   infra and returns the plaintext.

It lives on the test namespace because the test UI is where you
typically see the encrypted reference and want to inspect it. The
key-belongs-to-invocation check is the authorization boundary —
without it, knowing a `key_id` would be enough to decrypt.

```bash
glow tests decrypt --body '{
  "invocation_id": "…",
  "key_id": "…"
}'
```

Set the `X-Bypass-Cache: 1` header on the request to force a fresh
decrypt instead of a cached value.

---

## Completing and archiving

`POST /test/complete` is the canonical terminal write for a test —
the parallel of `POST /attempt/complete`. After complete, the test
is finalized; downstream consumers (benchmark, reports, exports)
treat it as immutable.

```bash
glow tests complete --body '{ "test_id": "…" }'
```

`POST /test/archive` toggles archival on one or many tests by ID. It
is reversible — pass the same IDs again to unarchive — and it
invalidates the `benchmark`, `test`, and `artifacts` cache tags.

```bash
glow tests archive --body '{
  "test_ids": ["…", "…"],
  "archived": true
}'
```

Archived tests are hidden from search by default; pass
`is_archived: true` (or omit the filter and rely on the UI's
toggle) on `POST /test/search` to see them.

---

## Listing and searching

`POST /test/search` is the canonical list/filter surface. Supported
filters: `eval_ids`, `department_ids`, `is_archived`, `start_date`,
`end_date`, plus facet-search text (`eval_search`,
`department_search`) and pagination (`page_size`, `page_offset`).

```bash
glow tests search --body '{
  "eval_ids": ["…"],
  "is_archived": false,
  "page_size": 25
}'
```

For the canonical facet-search recipe (how to wire facet pickers in
the UI without a second round-trip), see
[Patterns](/patterns).

---

## Exporting

`POST /test/export` produces a file the client downloads via the
canonical media surface. The export is **view-aware**: pass `view`
to pick the row shape (parent test, per-invocation rows, etc.)
along with `test_id`, optionally `invocation_id`, `draft_id`, and
`mode`.

```bash
glow tests export --body '{
  "test_id": "…",
  "view": "invocations"
}'
```

The response is `{ file_id, file_name, row_count }`. The client then
downloads the bytes via the BFF route
`/api/test/download/{file_id}` which proxies to
`POST /test/file/download` — see [Media](/media) for the canonical
download flow.

---

## Universal ops

Test also exposes the **universal artifact ops** shared with every
other artifact in the catalog. They behave exactly the same as on
personas, scenarios, agents, etc. — no test-specific notes needed:

- `context` / `problem` / `refresh` / `watch` / `get` / `group` —
  see [Foundations](/streaming)
- `title` / `generate` / `generations` — see [Generation](/generation)
- `draft` / `drafts` — same optimistic-concurrency shape as the
  [persona draft recipe](/personas)
- `call/download` / `file/download` / `text/download` — see
  [Media](/media)

The linked pages are the source of truth for the request/response
shapes.

---

## Related

- [Invocation](/invocation) — the per-cell sub-namespace
  (`invocation_create` / `_run` / `_terminate` / `_trace` / `_get` /
  `_complete`)
- [Benchmark](/benchmark) — the aggregated, read-only comparison
  view over a test's invocations
- [Test API Reference](/api-reference/test) — full endpoint schemas
  and field definitions
- [Tests CLI Reference](/cli-reference/tests) — all `glow tests`
  commands and flags
- [Patterns](/patterns) — facet-search recipe, bulk-write shape,
  and other cross-artifact conventions
