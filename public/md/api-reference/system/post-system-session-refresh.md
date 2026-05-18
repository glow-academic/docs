# `POST` `/system/session/refresh`

# `POST` `/system/session/refresh`

Session Refresh

Refresh session materialized views and invalidate caches.

## Response (`RefreshResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
