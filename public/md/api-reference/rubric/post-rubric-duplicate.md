# `POST` `/rubric/duplicate`

# `POST` `/rubric/duplicate`

Duplicate Rubric

Duplicate a rubric — composable infra architecture.

## Request Body (`DuplicateRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | Yes | Rubric UUID to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `rubric_id` | `string` | Yes | Newly created rubric UUID |
| `message` | `string` | Yes | Human-readable result message |
| `rubrics` | [`ListRubricApiRubric`](/api-reference/rubric/types#listrubricapirubric)[] | No | Hydrated rubric row for the duplicate (single-element list; omitted on soft writes) |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
