# `POST` `/attempt/chat/response`

Chat Response

Submit a video question response.

## Request Body (`AttemptResponsePayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `question_id` | `string` | Yes | UUID of the question being answered |
| `option_ids` | `string`[] | Yes | List of selected option UUIDs |

## Response (`ResponseAttemptApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `message` | `string` | No | — |
| `is_correct` | `boolean` | No | — |
| `response_id` | `string` | No | — |