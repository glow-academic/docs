# `POST` `/system/group/name`

# `POST` `/system/group/name`

Name Group

Set or update a group's name.

## Request Body (`NameGroupApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the group to name |
| `name` | `string` | Yes | New name for the group |

## Response (`NameGroupApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `group_name_id` | `string` | Yes | UUID of the created group_names entry |
| `name` | `string` | Yes | The name that was set |
