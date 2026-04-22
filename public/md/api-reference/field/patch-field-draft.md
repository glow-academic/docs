# `PATCH` `/field/draft`

Patch Field Draft

Patch field draft — composable infra architecture.

## Request Body (`PatchFieldDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft UUID to update |
| `input_draft_id` | `string` | No | Existing draft UUID to update |
| `name` | `string` | No | Name value to resolve or create |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `active_flag` | `boolean` | No | Whether the field is active |
| `active_flag_id` | `string` | No | UUID of the active flag resource |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `conditional_parameter_ids` | `string`[] | No | Conditional parameter UUIDs |
| `conditional_parameters` | `string`[] | No | Conditional parameter names to resolve |
| `pending_ids` | `string`[] | No | Resource IDs to keep pending where supported |
| `idempotency_key` | `string` | No | Operation key for ack or retry |
| `accept` | `boolean` | No | Accept or reject dormant state |

## Response (`PatchFieldDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | Yes | Idempotency key for this draft operation |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__field__types__DraftFormState`](/api-reference/field/types#app-infra-field-types-draftformstate) | No | Server-authoritative form state |