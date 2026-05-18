# `POST` `/test/complete`

Complete Test

## Request Body (`TestCompletePayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |

## Response (`TestCompleteInternalResult`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `success` | `boolean` | No | — |
| `completed_count` | `integer` | No | — |