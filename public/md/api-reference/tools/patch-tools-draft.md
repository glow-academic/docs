# `PATCH` `/tools/draft`

Patch Tool Draft

Patch tool draft — composable infra architecture.

## Request Body (`PatchToolDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft ID to update |
| `expected_version` | `integer` | No | Expected draft version for concurrency |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | Name resource identifier |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | Description resource identifier |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `department_ids` | `string`[] | No | Department identifiers |
| `arg_ids` | `string`[] | No | Argument identifiers |
| `arg_position_ids` | `string`[] | No | Argument position identifiers |
| `args_output_ids` | `string`[] | No | Argument output identifiers |
| `artifact_ids` | `string`[] | No | Artifact identifiers |
| `operation_ids` | `string`[] | No | Operation identifiers |

## Response (`PatchToolDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ToolDraftFormState`](/api-reference/tools/types#tooldraftformstate) | No | Server-authoritative form state |