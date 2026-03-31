# `POST` `/fields/delete`

Delete Field

Bulk delete fields — composable infra architecture.

## Request Body (`DeleteFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `field_ids` | `string`[] | Yes | UUIDs of fields to delete |

## Response (`DeleteFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteFieldResult`](/api-reference/fields/types#deletefieldresult)[] | Yes | Per-item deletion results |