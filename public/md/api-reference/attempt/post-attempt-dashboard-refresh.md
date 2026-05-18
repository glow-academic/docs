# `POST` `/attempt/dashboard/refresh`

# `POST` `/attempt/dashboard/refresh`

Dashboard Refresh

Refresh dashboard caches (no materialized views).

## Response (`RefreshResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
