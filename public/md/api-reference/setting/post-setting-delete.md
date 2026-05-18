# `POST` `/setting/delete`

# `POST` `/setting/delete`

Delete Setting

Bulk delete settings — composable infra architecture.

## Request Body (`DeleteSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `setting_ids` | `string`[] | Yes | UUIDs of settings to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DeleteSettingApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteSettingResult`](/api-reference/setting/types#deletesettingresult)[] | Yes | Per-item deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
