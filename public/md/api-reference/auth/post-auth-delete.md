# `POST` `/auth/delete`

# `POST` `/auth/delete`

Delete Auth

Bulk delete auths — composable infra architecture.

## Request Body (`DeleteAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_ids` | `string`[] | Yes | UUIDs of auth providers to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DeleteAuthApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteAuthResult`](/api-reference/auth/types#deleteauthresult)[] | Yes | Per-item deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
