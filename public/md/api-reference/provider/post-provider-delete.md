# `POST` `/provider/delete`

Delete Provider

Bulk delete providers — composable infra architecture.

## Request Body (`DeleteProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_ids` | `string`[] | No | UUIDs of providers to delete (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, delete every provider matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `search` | `string` | No | Full-text search query |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `filter_model_ids` | `string`[] | No | Filter by model UUIDs |
| `filter_status` | `string`[] | No | Filter by status values (active/inactive) |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `model_search` | `string` | No | Search text for model facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DeleteProviderApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteProviderResult`](/api-reference/provider/types#deleteproviderresult)[] | Yes | List of deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |