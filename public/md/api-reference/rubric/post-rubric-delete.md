# `POST` `/rubric/delete`

# `POST` `/rubric/delete`

Delete Rubric

Bulk delete rubrics — composable infra architecture.

## Request Body (`DeleteRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_ids` | `string`[] | No | Rubric UUIDs to delete (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, delete every rubric matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `search` | `string` | No | Full-text search query |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `filter_simulation_ids` | `string`[] | No | Filter by simulation UUIDs |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `simulation_search` | `string` | No | Search text for simulation facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DeleteRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteRubricResult`](/api-reference/rubric/types#deleterubricresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
