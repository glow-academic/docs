# `PATCH` `/tool/draft`

# `PATCH` `/tool/draft`

Patch Tool Draft

Patch tool draft — composable infra architecture.

## Request Body (`PatchToolDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft ID to update |
| `input_draft_id` | `string` | No | Existing draft ID to update |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | Name resource identifier |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | Description resource identifier |
| `active_flag` | `boolean` | No | Whether the tool is active |
| `active_flag_id` | `string` | No | Tool active flag identifier |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `department_ids` | `string`[] | No | Department identifiers |
| `arg_ids` | `string`[] | No | Argument identifiers |
| `args` | [`CreateArgInput`](/api-reference/tool/types#createarginput)[] | No | Arguments to create inline |
| `arg_position_ids` | `string`[] | No | Argument position identifiers |
| `arg_positions` | [`CreateArgPositionInput`](/api-reference/tool/types#createargpositioninput)[] | No | Argument positions to create inline |
| `args_output_ids` | `string`[] | No | Argument output identifiers |
| `args_outputs_ids` | `string`[] | No | Legacy alias for argument output identifiers |
| `args_outputs` | [`CreateArgsOutputInput`](/api-reference/tool/types#createargsoutputinput)[] | No | Argument outputs to create inline |
| `instruction_id` | `string` | No | Instruction resource identifier |
| `instruction_ids` | `string`[] | No | Instruction resource identifiers |
| `permission_ids` | `string`[] | No | Permission identifiers |
| `pending_ids` | `string`[] | No | Pending resource identifiers to preserve |
| `idempotency_key` | `string` | No | Operation key for ack semantics |
| `accept` | `boolean` | No | Accept or reject acknowledgement when idempotency_key is supplied |

## Response (`PatchToolDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `idempotency_key` | `string` | No | Operation key echoed back for client correlation |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__tool__types__DraftFormState`](/api-reference/tool/types#app-infra-tool-types-draftformstate) | No | Server-authoritative form state |
