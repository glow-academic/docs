# `POST` `/test/invocation_create`

Create Invocation Endpoint

Create an invocation within a test.

## Request Body (`CreateInvocationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `invocation_id` | `string` | No | — |
| `title` | `string` | No | — |
| `use_custom` | `boolean` | No | — |
| `position` | `integer` | No | — |
| `agent_ids` | `string`[] | No | — |
| `rubric_ids` | `string`[] | No | — |
| `quality_ids` | `string`[] | No | — |
| `department_ids` | `string`[] | No | — |
| `voice_ids` | `string`[] | No | — |
| `reasoning_level_ids` | `string`[] | No | — |
| `temperature_level_ids` | `string`[] | No | — |
| `modality_ids` | `string`[] | No | — |

## Response (`CreateInvocationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the created test invocation |