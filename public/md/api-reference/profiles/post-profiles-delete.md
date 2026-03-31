# `POST` `/profiles/delete`

Delete Profile

Bulk delete profiles — composable infra architecture.

## Request Body (`DeleteProfileApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_ids` | `string`[] | Yes | UUIDs of profiles to delete |

## Response (`DeleteProfileApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteProfileResult`](/api-reference/profiles/types#deleteprofileresult)[] | Yes | Per-item deletion results |