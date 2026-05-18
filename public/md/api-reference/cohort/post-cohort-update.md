# `POST` `/cohort/update`

Update Cohort

Update cohorts using composable infra architecture.

## Request Body (`UpdateCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohorts` | [`UpdateCohortItem`](/api-reference/cohort/types#updatecohortitem)[] | No | List of cohorts to update (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, apply ``patch`` to every cohort matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `patch` | [`UpdateCohortPatch`](/api-reference/cohort/types#updatecohortpatch) | No | Shared change set applied to every matched row when ``all=true`` (sparse — only set fields are updated; ``patch.id`` ignored) |
| `search` | `string` | No | Full-text search query |
| `filter_profile_ids` | `string`[] | No | Filter by profile UUIDs |
| `filter_simulation_ids` | `string`[] | No | Filter by simulation UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `profile_search` | `string` | No | Search text for profile facet (no-op for row filtering) |
| `simulation_search` | `string` | No | Search text for simulation facet (no-op for row filtering) |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateCohortApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`CohortResultItem`](/api-reference/cohort/types#cohortresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |