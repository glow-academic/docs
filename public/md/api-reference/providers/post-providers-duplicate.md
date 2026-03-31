# `POST` `/providers/duplicate`

Duplicate Provider

Duplicate a provider — composable infra architecture.

## Request Body (`DuplicateProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_id` | `string` | Yes | Provider identifier to duplicate |

## Response (`DuplicateProviderApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `provider_id` | `string` | Yes | New duplicated provider identifier |
| `message` | `string` | Yes | Result message |