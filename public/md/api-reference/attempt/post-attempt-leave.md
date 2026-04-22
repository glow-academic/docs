# `POST` `/attempt/leave`

Attempt Leave

Unsubscribe from events for a group.

## Request Body (`AttemptLeaveRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | — |

## Response (`AttemptLeaveResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |