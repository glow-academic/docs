# `POST` `/auth/delete`

# `POST` `/auth/delete`

Delete Auth

Bulk delete auths — composable infra architecture.

## Request Body (`DeleteAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_ids` | `string`[] | No | UUIDs of auth providers to delete (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, delete every auth matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `search` | `string` | No | Full-text search query |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DeleteAuthApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteAuthResult`](/api-reference/auth/types#deleteauthresult)[] | Yes | Per-item deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
