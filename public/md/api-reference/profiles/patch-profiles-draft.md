# `PATCH` `/profiles/draft`

Patch Profile Draft

Patch profile draft — composable infra architecture.

## Request Body (`PatchProfileDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to update |
| `expected_version` | `integer` | No | Expected draft version for optimistic locking |
| `name` | `string` | No | Name value to resolve or create |
| `name_id` | `string` | No | UUID of the name resource |
| `email` | `string` | No | Email value to resolve or create |
| `request_limit` | `integer` | No | Request limit value to resolve or create |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `email_ids` | `string`[] | No | Email resource UUIDs |
| `role_ids` | `string`[] | No | Role resource UUIDs |
| `request_limit_ids` | `string`[] | No | Request limit resource UUIDs |

## Response (`PatchProfileDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ProfileDraftFormState`](/api-reference/profiles/types#profiledraftformstate) | No | Server-authoritative form state |