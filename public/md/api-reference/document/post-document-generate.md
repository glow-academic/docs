# `POST` `/document/generate`

# `POST` `/document/generate`

Generate Document

Trigger document generation. Returns immediately; progress via events.

## Request Body (`ArtifactGenerateRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `instructions` | `string`[] | No | — |
| `config` | [`GenerateConfig`](/api-reference/document/types#generateconfig) | No | — |
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
| `eval` | [`EvalSetup`](/api-reference/document/types#evalsetup) | No | — |
| `produced_media` | [`ProducedMedia`](/api-reference/document/types#producedmedia)[] | No | — |
