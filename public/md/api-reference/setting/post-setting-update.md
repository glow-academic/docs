# `POST` `/setting/update`

Update Setting

Update settings using composable infra architecture.

## Request Body (`UpdateSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `settings` | [`UpdateSettingItem`](/api-reference/setting/types#updatesettingitem)[] | Yes | List of settings to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateSettingApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`SettingResultItem`](/api-reference/setting/types#settingresultitem)[] | Yes | Per-item update results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |