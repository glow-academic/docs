# `POST` `/test/next`

Next Test

Find next pending run in an existing test.

## Request Body (`TestNextPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |

## Response (`NextTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `run_id` | `string` | Yes | — |
| `current_run` | `integer` | Yes | — |
| `total_runs` | `integer` | Yes | — |