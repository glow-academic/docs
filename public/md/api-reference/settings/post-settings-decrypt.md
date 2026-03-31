# `POST` `/settings/decrypt`

Decrypt Setting Key

Decrypt a key scoped to a setting artifact.

## Request Body (`DecryptSettingKeyApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `setting_id` | `string` | Yes | UUID of the parent setting |
| `key_id` | `string` | Yes | UUID of the key to decrypt |

## Response (`DecryptSettingKeyApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | No | Decrypted key value |
| `name` | `string` | No | Key display name |
| `actor_name` | `string` | No | Display name of the acting user |