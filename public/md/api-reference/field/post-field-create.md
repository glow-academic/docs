# `POST` `/field/create`

# `POST` `/field/create`

Create Field

Create fields using composable infra architecture.

## Request Body (`CreateFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`CreateFieldItem`](/api-reference/field/types#createfielditem)[] | Yes | List of fields to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateFieldApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](/api-reference/field/types#fieldresultitem)[] | Yes | Per-item creation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
