# `POST` `/test/stop`

# `POST` `/test/stop`

Stop Test

Stop current test execution.

## Request Body (`TestStopPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation to stop |

## Response (`StopTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `success` | `boolean` | Yes | — |
| `message` | `string` | No | — |
