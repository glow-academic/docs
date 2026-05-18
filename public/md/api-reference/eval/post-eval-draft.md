# `POST` `/eval/draft`

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
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
| `active` | `boolean` | No | Denormalized eval_active flag state; resolved to a flag_ids entry server-side |
| `departments` | `string`[] | No | Department names to resolve |
| `department_ids` | `string`[] | No | Department UUIDs |
| `model_ids` | `string`[] | No | Model UUIDs |
| `model_flag_ids` | `string`[] | No | Model flag UUIDs (canonical junction-row ids) |
| `model_flags` | `object`[] | No | Inline-create shape for model_flags junction rows: list of \{model_id, flag_id\} (id=null entries). Resolver upserts the junction row and merges the id into model_flag_ids. |
| `model_flag_values` | [`EvalModelFlagValue`](/api-reference/eval/types#evalmodelflagvalue)[] | No | Denormalized per-(model, type) selections. For each entry the server resolves (type, value) -> flag_id via search_flags, then upserts a model_flags_resource row for (model_id, flag_id) and merges its id into model_flag_ids. |
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