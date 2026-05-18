# `POST` `/rubric/create`

# `POST` `/rubric/create`

Create Rubric

Create rubrics using composable infra architecture.

## Request Body (`CreateRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubrics` | [`CreateRubricItem`](/api-reference/rubric/types#createrubricitem)[] | Yes | List of rubrics to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateRubricApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`RubricResultItem`](/api-reference/rubric/types#rubricresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
