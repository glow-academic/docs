# `POST` `/rubric/update`

# `POST` `/rubric/update`

Update Rubric

Update rubrics using composable infra architecture.

## Request Body (`UpdateRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubrics` | [`UpdateRubricItem`](/api-reference/rubric/types#updaterubricitem)[] | Yes | List of rubrics to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateRubricApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`RubricResultItem`](/api-reference/rubric/types#rubricresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
