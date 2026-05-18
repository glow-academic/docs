# Data layer

{/* DEMO_VIDEO: data-layer-overview — replace public/demos/data-layer-overview.mp4 */}

# Data layer

Glow's read path has two cooperating layers. **Materialized views**
(`<artifact>_mv` tables in Postgres) precompute the hydrated rows that
search and list endpoints return, refreshed in the background on a
cadence per artifact. A **route-level cache** sits in front of those
reads in Redis, keyed by the request and busted by tag. Together they
turn most list/get reads into sub-50ms responses without coupling
mutation paths to read freshness.

<DemoVideo
  topic="data-layer-overview"
  caption="A persona search before/after warmup: first request hits the MV, second hits the route cache; a mutation in another tab fires X-Invalidate-Tags and the third request misses cleanly."
/>

## Two layers

The split is deliberate:

| Layer | Storage | Keyed by | Busted by |
|------|---------|----------|-----------|
| Materialized views | Postgres (`<artifact>_mv`) | Underlying entry tables | Background refresh on a cadence + `POST /<artifact>/refresh` |
| Route-level cache | Redis (`http:cache:*`) | Path + body hash | TTL + `X-Invalidate-Tags` from mutation responses |

A list read first checks the route cache; on miss it queries the MV
and writes the response back into Redis with a tag set. A mutation in
the same artifact enqueues an MV refresh **and** returns
`X-Invalidate-Tags`, which clients are expected to surface so that the
next read bypasses the now-stale cache entry. Reads from MVs are not
audited — the [Audit](/audit) ledger only captures mutations.

---

{/* DEMO_VIDEO: data-layer-mvs — replace public/demos/data-layer-mvs.mp4 */}

## Materialized views

<DemoVideo
  topic="data-layer-mvs"
  caption="The personas_mv definition pulled live from pg_matviews — a single SELECT that joins persona, persona_drafts, departments, voices, parameter_fields."
/>

Almost every artifact in Glow has a paired `<artifact>_mv` materialized
view that joins the canonical entry table with its drafts, junctions,
and lookup rows in a single SELECT. Search, list, and most
hydration-heavy GET endpoints read **only** from the MV — never from
the raw entry table — so per-request hydration stays O(1) regardless
of how many junctions the artifact has accumulated.

The full registry of MV targets lives in
`core/app/infra/refresh/config.py:MV_REGISTRY`. A small sample:

| MV | Backs | Refresh tier |
|----|-------|--------------|
| `personas_mv`, `persona_drafts_mv` | `POST /persona/search`, `/persona/get`, `/persona/drafts` | Cool |
| `tests_mv`, `test_invocation_mv` | `POST /test/search`, `/test/invocations` | Cool |
| `runs_mv`, `messages_mv`, `calls_mv` | Live attempt + agent surfaces | Hot |
| `groups_mv`, `group_names_mv` | Session timeline + every artifact's `/title` resolver | Hot |
| `grants_mv`, `health_mv`, `sessions_mv` | Permission gates + admin dashboards | Glacial |

### Auto-refresh cadence

Every MV target is assigned a hotness tier — `Hot` (~2s), `Warm` (~5s),
`Cool` (~10s), `Glacial` (~30s) — defined alongside the registry. A
per-MV background worker (`MVRefresher` in
`core/app/infra/refresh/scheduler.py`) debounces enqueues into one
`REFRESH MATERIALIZED VIEW CONCURRENTLY` per interval and serializes
across replicas via a Redis lock. The exact interval per MV is
configurable in `MV_REGISTRY` — don't read the constants here as a
contract.

Mutations don't run the refresh inline. Instead, every create / update
/ delete primitive calls `enqueue_refreshes(...)` with the MV targets
that depend on it, which just flips an O(1) Redis flag. The worker
picks it up on its next tick. This means **read freshness lags writes
by up to one refresh interval** for the artifact's tier.

### Manual refresh: `POST /<artifact>/refresh`

Every artifact exposes a refresh endpoint that re-enqueues all of its
MV targets *and* invalidates the route-level cache tags for that
artifact. Example for personas:

```bash
glow personas refresh
```

```bash
curl -X POST https://<your-instance>/persona/refresh \
  -H "Authorization: Bearer your-token" \
  -H "X-Api-Key: your-license-key"
```

The response carries the list of invalidated tags and the per-target
enqueue receipts, and the HTTP `X-Invalidate-Tags` header echoes the
same tag set so client caches react too. The actual MV recompute still
happens in the background worker — `refresh` is **not** a synchronous
"give me a fresh row" call.

---

{/* DEMO_VIDEO: data-layer-cache — replace public/demos/data-layer-cache.mp4 */}

## Route-level cache

<DemoVideo
  topic="data-layer-cache"
  caption="Two identical /system/groups requests back-to-back — first emits X-Cache-Hit: 0 and writes Redis, second returns X-Cache-Hit: 1 in single-digit ms."
/>

The route cache is a thin Redis-backed wrapper any list / search /
hydrated-GET endpoint can opt into. The primitives live in
`core/app/utils/cache/`:

- `cache_key(path, body, user_ctx)` — SHA-1 over a stable JSON encoding
  of `{path, body, user_ctx}`. The prefix is `http:cache:`. The
  `user_ctx` arg is optional; routes that scope per-profile pass the
  profile_id, routes that don't (license-wide list reads) leave it
  empty.
- `get_cached(key, redis=...)` — returns the cached envelope or `None`.
- `set_cached(key, data, ttl, tags, redis=...)` — writes the envelope
  with a TTL and adds the key to each tag's Redis set so
  `invalidate_tags` can sweep them later.
- `invalidate_tags(tags, redis=...)` — drops every cached key
  registered against any of the tags in one pipeline.

### Wiring example

`core/app/routes/system/groups.py` is the prototypical shape:

```python
tags = ["artifacts", "groups", "list"]
bypass_cache = http_request.headers.get("X-Bypass-Cache") == "1"
cache_key_val = cache_key(http_request.url.path, request.model_dump(mode="json"))

if not bypass_cache:
    cached = await get_cached(cache_key_val, redis=get_redis_client())
    if cached:
        response.headers["X-Cache-Tags"] = ",".join(tags)
        response.headers["X-Cache-Hit"] = "1"
        return ListPricingResponse.model_validate(cached["data"])

api_response = await groups_system_impl(...)

await set_cached(
    cache_key_val,
    {"data": api_response.model_dump(mode="json")},
    ttl=300,
    tags=tags,
    redis=redis,
)
response.headers["X-Cache-Tags"] = ",".join(tags)
response.headers["X-Cache-Hit"] = "0"
return api_response
```

TTLs are per-route — the groups list uses 300s in the snippet above;
the "big" page-context cache (`core/app/utils/cache/big.py`) defaults
to 30s. Don't read either as a global contract; check the call site.

Every cached response carries two headers so clients can self-report:

- `X-Cache-Tags` — the tag set this response was stored under, so a
  client can mirror the server's invalidation scheme.
- `X-Cache-Hit` — `1` if the response came from Redis, `0` if it was
  computed and just written.

---

{/* DEMO_VIDEO: data-layer-bypass — replace public/demos/data-layer-bypass.mp4 */}

## `X-Bypass-Cache`

<DemoVideo
  topic="data-layer-bypass"
  caption="Mutate persona, then immediately re-read with X-Bypass-Cache: 1 — the response shows the new row without waiting for the next refresh cycle."
/>

Send `X-Bypass-Cache: 1` on any cached read to skip the route cache
entirely. The route still runs against the MV (which may itself be
stale by up to one refresh interval — see above), but Redis is
neither consulted on the way in nor written on the way out.

Use it when:

- You just performed a mutation in the same client and need a
  consistent-read for the next render.
- You're debugging a "why is this stale" report and want to rule out
  Redis as the source.
- You're running a test that asserts on freshly written rows.

Do not use it as a default — it negates the whole point of the cache
layer.

## `X-Invalidate-Tags`

Mutation responses (and the `/refresh` endpoint of every artifact)
return an `X-Invalidate-Tags` header listing the tag families that
the write touched. Examples observed in the routes:

- `POST /persona/update` → `personas`
- `POST /persona/refresh` → `personas,artifacts`
- `POST /test/grade` → `test,tests,grades`
- `POST /document/file_upload` → `uploads,resources,files`

Clients that maintain their own caches (the Glow UI does, via
`useArtifactGeneration` and the shared generation listener) read this
header on every response and drop their local entries for the listed
tags. The server-side equivalent is `invalidate_tags(...)` from
`core/app/utils/cache/invalidate_tags.py`, which the same mutation
paths call inline before returning.

## When to call `/<artifact>/refresh` manually

| Scenario | Manual `/refresh`? | Why |
|----------|--------------------|-----|
| Routine mutate-then-read through the SDK | No | Auto-enqueue + tag invalidate already cover this within one tick |
| Just finished a bulk import / CSV load | Yes | One refresh collapses N enqueues; UI tables can re-fetch immediately |
| Background MV drift suspected during incident triage | Yes | Forces an enqueue regardless of the next-run-at gate |
| About to snapshot a list view in a test or report | Yes | Pairs naturally with `X-Bypass-Cache: 1` on the follow-up read |
| Recovery after a worker crash | No | The Redis pending flag survives — the next worker tick drains it |

The refresh endpoint is cheap (it just flips a Redis flag and writes
an audit row); the actual `REFRESH MATERIALIZED VIEW` cost is paid
once per debounce window regardless of how many times you call it.

## Related

- [POST /persona/refresh](/api-reference/persona/post-persona-refresh) — the canonical refresh endpoint, one per artifact
- [Streaming](/streaming) — refresh emits a `.completed` event on the artifact watch channel when the MV recompute finishes
- [Audit](/audit) — cache hits and MV refresh ticks are intentionally not audited; only the mutations that trigger invalidation land in the ledger
- [Activity](/activity) — backs onto `activity_mv`, the same refresh + cache contract as every other list surface
