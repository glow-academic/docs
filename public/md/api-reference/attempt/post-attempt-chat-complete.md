# `POST` `/attempt/chat_complete`

Chat Complete

Mark an attempt chat as completed — final step after grading.

## Request Body (`ChatCompleteRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `message` | `string` | No | — |

## Response (`ChatCompleteResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `completion_id` | `string` | Yes | — |
| `chat_id` | `string` | Yes | — |