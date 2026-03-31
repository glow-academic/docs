# `POST` `/test/leave`

Test Leave

Leave a test invocation room, stopping real-time updates.

## Request Body (`TestLeaveRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `sid` | `string` | Yes | — |
| `invocation_id` | `string` | Yes | — |

## Response (`TestLeaveResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |