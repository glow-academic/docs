# `POST` `/test/start`

Start Test

Create a new test.

## Request Body (`TestStartPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_id` | `string` | Yes | UUID of the eval to test |
| `infinite_mode` | `boolean` | No | Whether to run in infinite mode |

## Response (`StartTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `invocation_id` | `string` | No | — |
| `benchmark_id` | `string` | No | — |