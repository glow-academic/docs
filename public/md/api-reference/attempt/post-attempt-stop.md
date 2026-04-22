# `POST` `/attempt/stop`

Attempt Stop

Cancel an active generation by group_id.

## Request Body (`AttemptStopRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | — |

## Response (`AttemptStopResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |