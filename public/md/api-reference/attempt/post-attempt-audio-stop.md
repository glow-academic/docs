# `POST` `/attempt/audio/stop`

Audio Stop

Stop an audio session for an attempt chat.

## Request Body (`AudioStopPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |

## Response (`AudioStopInternalResult`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `stopped` | `boolean` | No | — |