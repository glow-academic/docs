# `POST` `/attempt/join`

Attempt Join

Join a chat room for real-time attempt updates.

## Request Body (`AttemptJoinRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `sid` | `string` | Yes | — |
| `chat_id` | `string` | Yes | — |

## Response (`AttemptJoinResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |