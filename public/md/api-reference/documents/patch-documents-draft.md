# `PATCH` `/documents/draft`

Patch Document Draft

Patch document draft — composable infra architecture.

## Request Body (`PatchDocumentDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to patch |
| `expected_version` | `integer` | No | Expected draft version for concurrency control |
| `name` | `string` | No | Name value to create a resource |
| `name_id` | `string` | No | Existing name resource UUID |
| `description` | `string` | No | Description value to create a resource |
| `description_id` | `string` | No | Existing description resource UUID |
| `files` | [`DraftFileValue`](/api-reference/documents/types#draftfilevalue)[] | No | File values to create resources |
| `file_ids` | `string`[] | No | Existing file resource UUIDs |
| `texts` | [`DraftTextValue`](/api-reference/documents/types#drafttextvalue)[] | No | Text values to create resources |
| `text_ids` | `string`[] | No | Existing text resource UUIDs |
| `flag_ids` | `string`[] | No | Flag option UUIDs |
| `department_ids` | `string`[] | No | Department UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs |
| `parameter_ids` | `string`[] | No | Parameter UUIDs |

## Response (`PatchDocumentDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `new_version` | `integer` | Yes | New draft version number after patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`DocumentDraftFormState`](/api-reference/documents/types#documentdraftformstate) | No | Server-authoritative form state |