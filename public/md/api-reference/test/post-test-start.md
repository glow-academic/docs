# `POST` `/test/start`

Start Test

Create a new test.

## Request Body (`TestStartPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `benchmark_id` | `string` | Yes | UUID of the benchmark to test against |
| `infinite_mode` | `boolean` | No | Whether to run in infinite mode |

## Response (`StartTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |