# `POST` `/rubric/delete`

# `POST` `/rubric/delete`

Delete Rubric

Bulk delete rubrics — composable infra architecture.

## Request Body (`DeleteRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_ids` | `string`[] | Yes | Rubric UUIDs to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DeleteRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteRubricResult`](/api-reference/rubric/types#deleterubricresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
