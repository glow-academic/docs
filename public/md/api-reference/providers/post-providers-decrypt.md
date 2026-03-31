# `POST` `/providers/decrypt`

Decrypt Provider Key

Decrypt a key scoped to a provider artifact.

## Request Body (`DecryptProviderKeyApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_id` | `string` | Yes | Provider that owns the key |
| `key_id` | `string` | Yes | Key identifier to decrypt |

## Response (`DecryptProviderKeyApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | No | Decrypted API key value |
| `name` | `string` | No | Key display name |
| `actor_name` | `string` | No | Display name of the current actor |