# `POST` `/test/end`

End Test

End a single invocation within a test.

Browser client: sends grade=True, internal AI generates grade + feedback.
Agent: can optionally provide score, passed, feedback to skip AI.

## Request Body (`EndTestApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `test_invocation_id` | `string` | Yes | — |
| `run_id` | `string` | Yes | — |
| `grade` | `boolean` | No | — |
| `score` | `number` | No | — |
| `passed` | `boolean` | No | — |
| `feedback` | `string` | No | — |

## Response (`EndTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `grade_id` | `string` | No | — |
| `score` | `number` | No | — |
| `passed` | `boolean` | No | — |
| `feedback` | `string` | No | — |