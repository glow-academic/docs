# `POST` `/provider/delete`

# `POST` `/provider/delete`

Delete Provider

Bulk delete providers — composable infra architecture.

## Request Body (`DeleteProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_ids` | `string`[] | Yes | List of provider IDs to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DeleteProviderApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteProviderResult`](/api-reference/provider/types#deleteproviderresult)[] | Yes | List of deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
