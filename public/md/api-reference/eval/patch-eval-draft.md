# `PATCH` `/eval/draft`

# `PATCH` `/eval/draft`

Patch Eval Draft

Patch eval draft — composable infra architecture.

## Request Body (`PatchEvalDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft UUID to patch |
| `input_draft_id` | `string` | No | Existing draft UUID to patch |
| `name` | `string` | No | Name value to create a resource |
| `name_id` | `string` | No | Existing name resource UUID |
| `description` | `string` | No | Description value to create a resource |
| `description_id` | `string` | No | Existing description resource UUID |
| `flag_ids` | `string`[] | No | Flag option UUIDs |
| `departments` | `string`[] | No | Department names to resolve |
| `department_ids` | `string`[] | No | Department UUIDs |
| `model_ids` | `string`[] | No | Model UUIDs |
| `model_flag_ids` | `string`[] | No | Model flag UUIDs |
| `model_position_ids` | `string`[] | No | Model position UUIDs |
| `model_rubric_ids` | `string`[] | No | Model rubric UUIDs |
| `pending_ids` | `string`[] | No | Resource IDs to keep inactive on the draft |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant draft |
| `accept` | `boolean` | No | Accept or reject dormant state. Only meaningful with idempotency_key |

## Response (`PatchEvalDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `idempotency_key` | `string` | No | Operation key echoed back for client correlation |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`app__infra__eval__types__DraftFormState`](/api-reference/eval/types#app-infra-eval-types-draftformstate) | No | Server-authoritative form state |
