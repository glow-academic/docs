# `POST` `/dashboard/refresh`

Dashboard Refresh

Refresh dashboard caches (no materialized views).

## Response (`RefreshResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |