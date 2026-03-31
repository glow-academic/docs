# `POST` `/models/delete`

Delete Model

Bulk delete models — composable infra architecture.

## Request Body (`DeleteModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `model_ids` | `string`[] | Yes | List of model IDs to delete |

## Response (`DeleteModelApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteModelResult`](/api-reference/models/types#deletemodelresult)[] | Yes | List of deletion results |