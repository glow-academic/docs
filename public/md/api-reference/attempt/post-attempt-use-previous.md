# `POST` `/attempt/use-previous`

Attempt Use Previous

Copy grades from a previous attempt's chats.

## Request Body (`AttemptUsePreviousPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `previous_chat_map` | `object` | Yes | Map of chat_entry_id to attempt_chat_id |

## Response (`UsePreviousAttemptApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `message` | `string` | No | — |