# `POST` `/attempt/complete`

# `POST` `/attempt/complete`

Attempt Complete

Mark an entire attempt as completed.

## Request Body (`AttemptCompleteRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |
| `message` | `string` | No | — |

## Response (`AttemptCompleteResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `completion_id` | `string` | Yes | — |
| `attempt_id` | `string` | Yes | — |
