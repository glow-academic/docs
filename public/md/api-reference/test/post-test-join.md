# `POST` `/test/join`

Test Join

Join a test invocation room for real-time updates.

## Request Body (`TestJoinRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `sid` | `string` | Yes | — |
| `invocation_id` | `string` | Yes | — |

## Response (`TestJoinResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |