# `POST` `/settings/create`

Create Setting

Create settings using composable infra architecture.

## Request Body (`CreateSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `settings` | [`CreateSettingItem`](/api-reference/settings/types#createsettingitem)[] | Yes | List of settings to create |

## Response (`CreateSettingApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`SettingResultItem`](/api-reference/settings/types#settingresultitem)[] | Yes | Per-item creation results |