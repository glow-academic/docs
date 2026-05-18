# `POST` `/field/duplicate`

# `POST` `/field/duplicate`

Duplicate Field

Duplicate a field — composable infra architecture.

## Request Body (`DuplicateFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | Yes | UUID of the field to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `field_id` | `string` | Yes | UUID of the newly created field |
| `message` | `string` | Yes | Result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
