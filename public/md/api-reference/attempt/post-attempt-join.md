# `POST` `/attempt/join`

Attempt Join

Subscribe to events for a group.

## Request Body (`AttemptJoinRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | — |

## Response (`AttemptJoinResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `group_id` | `string` | Yes | — |