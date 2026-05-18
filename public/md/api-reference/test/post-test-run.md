# `POST` `/test/run`

# `POST` `/test/run`

Run Test

Run one auto-regressive replay. Returns immediately; progress via socket.

## Request Body (`TestRunPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |
| `test_invocation_id` | `string` | Yes | UUID of the test invocation |
| `run_id` | `string` | Yes | Original run to replay |

## Response (`RunTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `invocation_id` | `string` | Yes | — |
| `run_id` | `string` | Yes | — |
