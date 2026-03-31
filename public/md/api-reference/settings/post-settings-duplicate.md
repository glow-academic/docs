# `POST` `/settings/duplicate`

Duplicate Setting

Duplicate a setting — composable infra architecture.

## Request Body (`DuplicateSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `setting_id` | `string` | Yes | UUID of the setting to duplicate |

## Response (`DuplicateSettingApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `setting_id` | `string` | Yes | UUID of the newly created setting |
| `message` | `string` | Yes | Result message |