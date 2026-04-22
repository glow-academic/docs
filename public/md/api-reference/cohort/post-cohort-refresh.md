# `POST` `/cohort/refresh`

Cohort Refresh

Refresh cohort materialized views and invalidate caches.

## Request Body (`RefreshCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `targets` | `string`[] | No | MV targets to refresh (omit for all). Options: cohort_drafts_mv |
| `idempotency_key` | `string` | No | Operation key for ack |
| `accept` | `boolean` | No | Accept or reject. Only meaningful with idempotency_key |

## Response (`RefreshResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |