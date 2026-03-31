# `POST` `/settings/delete`

Delete Setting

Bulk delete settings — composable infra architecture.

## Request Body (`DeleteSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `setting_ids` | `string`[] | Yes | UUIDs of settings to delete |

## Response (`DeleteSettingApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteSettingResult`](/api-reference/settings/types#deletesettingresult)[] | Yes | Per-item deletion results |