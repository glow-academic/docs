# `POST` `/test/invocation_complete`

Complete Invocation

## Request Body (`TestInvocationCompletePayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |
| `test_invocation_id` | `string` | Yes | UUID of the test invocation |
| `message` | `string` | No | Optional completion message |

## Response (`TestInvocationCompleteInternalResult`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `completion_id` | `string` | No | — |
| `success` | `boolean` | No | — |