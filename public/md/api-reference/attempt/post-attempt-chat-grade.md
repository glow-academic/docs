# `POST` `/attempt/chat/grade`

# `POST` `/attempt/chat/grade`

Chat Grade

Manually grade an attempt chat with a score.

## Request Body (`GradeAttemptApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the attempt chat to grade |
| `score` | `integer` | Yes | Overall score to record for the chat |

## Response (`GradeAttemptApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `grade_id` | `string` | No | — |
| `score` | `integer` | No | — |
| `passed` | `boolean` | No | — |
| `time_taken` | `integer` | No | — |
