# `POST` `/providers/delete`

Delete Provider

Bulk delete providers — composable infra architecture.

## Request Body (`DeleteProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_ids` | `string`[] | Yes | List of provider IDs to delete |

## Response (`DeleteProviderApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteProviderResult`](/api-reference/providers/types#deleteproviderresult)[] | Yes | List of deletion results |