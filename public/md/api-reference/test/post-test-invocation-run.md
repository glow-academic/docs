# `POST` `/test/invocation_run`

# `POST` `/test/invocation_run`

Run Invocation

## Request Body (`TestRunPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |
| `test_invocation_id` | `string` | Yes | UUID of the test invocation |
| `test_invocation_trace_id` | `string` | No | UUID of the parent trace (test_invocation_traces_entry) |
| `run_id` | `string` | Yes | UUID of the runs_entry to bind |

## Response (`TestRunInternalResult`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_invocation_run_id` | `string` | Yes | — |
| `success` | `boolean` | No | — |
