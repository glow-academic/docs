# `POST` `/attempt/chat_improvements`

Chat Improvements

Create improvement items (with optional inline replacements) for the latest grade.

## Request Body (`ChatImprovementsRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `improvements` | [`ChatImprovementItem`](/api-reference/attempt/types#chatimprovementitem)[] | Yes | — |
| `idempotency_key` | `string` | No | — |
| `accept` | `boolean` | No | — |

## Response (`ChatImprovementsResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `improvement_ids` | `string`[] | Yes | — |
| `idempotency_key` | `string` | No | — |