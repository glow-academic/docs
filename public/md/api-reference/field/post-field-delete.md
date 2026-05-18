# `POST` `/field/delete`

Delete Field

Bulk delete fields — composable infra architecture.

## Request Body (`DeleteFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `field_ids` | `string`[] | No | UUIDs of fields to delete (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, delete every field matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `search` | `string` | No | Full-text search query |
| `parameter_ids` | `string`[] | No | Filter by parameter UUIDs |
| `persona_ids` | `string`[] | No | Filter by persona UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `parameter_search` | `string` | No | Search text for parameter facet (no-op for row filtering) |
| `persona_search` | `string` | No | Search text for persona facet (no-op for row filtering) |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm deletion) or reject (restore). Only meaningful with idempotency_key |

## Response (`DeleteFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteFieldResult`](/api-reference/field/types#deletefieldresult)[] | Yes | Per-item deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |