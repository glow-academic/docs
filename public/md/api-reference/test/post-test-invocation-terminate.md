# `POST` `/test/invocation_terminate`

Terminate Invocation

## Request Body (`TestRunEndPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_invocation_run_id` | `string` | Yes | UUID of the test_invocation_runs_entry to finalize |
| `success` | `boolean` | No | — |
| `error` | `boolean` | No | — |
| `message` | `string` | No | — |

## Response (`TestRunEndResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_invocation_run_id` | `string` | Yes | — |
| `completion_id` | `string` | Yes | — |
| `success` | `boolean` | No | — |