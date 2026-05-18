# `POST` `/rubric/generate`

Generate Rubric

Trigger rubric generation. Returns immediately; progress via events.

## Request Body (`ArtifactGenerateRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `instructions` | `string`[] | No | — |
| `config` | [`GenerateConfig`](/api-reference/rubric/types#generateconfig) | No | — |
| `modalities` | `string`[] | No | — |
| `audios_id` | `string` | No | — |
| `conversation_id` | `string` | No | — |
| `trace_id` | `string` | No | — |
| `idempotency_key` | `string` | No | — |
| `accept` | `boolean` | No | — |
| `wait_for_complete` | `boolean` | No | — |

## Response (`ArtifactGenerateResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | — |
| `run_id` | `string` | No | — |
| `idempotency_key` | `string` | No | — |
| `eval` | [`EvalSetup`](/api-reference/rubric/types#evalsetup) | No | — |
| `produced_media` | [`ProducedMedia`](/api-reference/rubric/types#producedmedia)[] | No | — |