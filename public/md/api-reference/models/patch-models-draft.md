# `PATCH` `/models/draft`

Patch Model Draft

Patch model draft — composable infra architecture.

## Request Body (`PatchModelDraftApiRequest`)

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
| `modality_ids` | `string`[] | No | Modality identifiers |
| `pricing_ids` | `string`[] | No | Pricing tier identifiers |
| `provider_ids` | `string`[] | No | Provider identifiers |
| `quality_ids` | `string`[] | No | Quality level identifiers |
| `reasoning_level_ids` | `string`[] | No | Reasoning level identifiers |
| `temperature_level_ids` | `string`[] | No | Temperature level identifiers |
| `value_ids` | `string`[] | No | Value resource identifiers |
| `voice_ids` | `string`[] | No | Voice identifiers |

## Response (`PatchModelDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ModelDraftFormState`](/api-reference/models/types#modeldraftformstate) | No | Server-authoritative form state |