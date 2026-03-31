# `POST` `/attempt/audio/start`

Audio Start

Start an audio session for an attempt chat.

## Request Body (`AudioStartPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |

## Response (`AudioStartInternalResult`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `run_id` | `string` | Yes | — |
| `group_id` | `string` | Yes | — |
| `attempt_id` | `string` | Yes | — |