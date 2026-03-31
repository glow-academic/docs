# `PATCH` `/providers/draft`

Patch Provider Draft

Patch provider draft — composable infra architecture.

## Request Body (`PatchProviderDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft ID to update |
| `expected_version` | `integer` | No | Expected draft version for concurrency |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | Name resource identifier |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | Description resource identifier |
| `flag_id` | `string` | No | Flag option identifier |
| `department_ids` | `string`[] | No | Department identifiers |
| `endpoint_ids` | `string`[] | No | Endpoint resource identifiers |
| `key_ids` | `string`[] | No | API key resource identifiers |
| `value_ids` | `string`[] | No | Value resource identifiers |

## Response (`PatchProviderDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ProviderDraftFormState`](/api-reference/providers/types#providerdraftformstate) | No | Server-authoritative form state |