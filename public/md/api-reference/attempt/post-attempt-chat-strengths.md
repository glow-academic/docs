# `POST` `/attempt/chat/strengths`

# `POST` `/attempt/chat/strengths`

Chat Strengths

Create strength items (with optional inline highlights) for the latest grade.

## Request Body (`ChatStrengthsRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `strengths` | [`ChatStrengthItem`](/api-reference/attempt/types#chatstrengthitem)[] | Yes | — |
| `idempotency_key` | `string` | No | — |
| `accept` | `boolean` | No | — |

## Response (`ChatStrengthsResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `strength_ids` | `string`[] | Yes | — |
| `idempotency_key` | `string` | No | — |
