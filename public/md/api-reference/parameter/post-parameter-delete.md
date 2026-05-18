# `POST` `/parameter/delete`

# `POST` `/parameter/delete`

Delete Parameter

Bulk delete parameters — composable infra architecture.

## Request Body (`DeleteParameterApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_ids` | `string`[] | Yes | List of parameter IDs to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm deletion) or reject (restore). Only meaningful with idempotency_key |

## Response (`DeleteParameterApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteParameterResult`](/api-reference/parameter/types#deleteparameterresult)[] | Yes | List of deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
