# `PATCH` `/test/invocation/draft`

# `PATCH` `/test/invocation/draft`

Patch Invocation Draft

Patch invocation draft — composable infra architecture.

## Request Body (`PatchInvocationDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft identifier to update |
| `input_draft_id` | `string` | No | Legacy alias for draft_id |
| `name` | `string` | No | Name value to create |
| `name_id` | `string` | No | Selected name identifier |
| `description` | `string` | No | Description value to create |
| `description_id` | `string` | No | Selected description identifier |
| `value_id` | `string` | No | Selected value identifier |
| `flag_ids` | `string`[] | No | Selected flag identifiers |
| `department_ids` | `string`[] | No | Selected department identifiers |
| `key_id` | `string` | No | Selected key identifier |
| `endpoint_id` | `string` | No | Selected endpoint identifier |
| `modality_ids` | `string`[] | No | Selected modality identifiers |
| `temperature_level_id` | `string` | No | Selected temperature level identifier |
| `pricing_id` | `string` | No | Selected pricing identifier |
| `reasoning_level_id` | `string` | No | Selected reasoning level identifier |
| `quality_ids` | `string`[] | No | Selected quality identifiers |
| `voice_ids` | `string`[] | No | Selected voice identifiers |
| `model_flag_ids` | `string`[] | No | Selected model flag identifiers |
| `model_position_ids` | `string`[] | No | Selected model position identifiers |
| `model_rubric_ids` | `string`[] | No | Selected model rubric identifiers |
| `pending_ids` | `string`[] | No | Resource IDs to keep pending where supported |
| `idempotency_key` | `string` | No | Operation key for ack-style replay |
| `accept` | `boolean` | No | Accept or reject a dormant change when used with idempotency_key |

## Response (`PatchInvocationDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the save succeeded |
| `draft_id` | `string` | Yes | Draft identifier |
| `idempotency_key` | `string` | No | Operation key echoed back when present |
| `message` | `string` | Yes | Status message |
| `form_state` | [`app__infra__invocation__types__DraftFormState`](/api-reference/test/types#app-infra-invocation-types-draftformstate) | No | Authoritative form state after save |
