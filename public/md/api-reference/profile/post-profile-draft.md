# `POST` `/profile/draft`

# `POST` `/profile/draft`

Patch Profile Draft

Patch profile draft — composable infra architecture.

## Request Body (`PatchProfileDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft UUID to update |
| `input_draft_id` | `string` | No | Existing draft UUID to update |
| `name` | `string` | No | Name value to resolve or create |
| `name_id` | `string` | No | UUID of the name resource |
| `email` | `string` | No | Email value to resolve or create |
| `emails` | `string`[] | No | Email values to resolve or create |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical |
| `active` | `boolean` | No | Denormalized profile_active flag state; resolved to a flag_ids entry server-side |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `email_ids` | `string`[] | No | Email resource UUIDs |
| `role` | `string` | No | Role name to resolve (single-name shortcut; legacy) |
| `role_id` | `string` | No | Role resource UUID |
| `role_draft` | [`ProfileRoleDraftValue`](/api-reference/profile/types#profileroledraftvalue) | No | Inline-creatable role; id=null asks server to create with permissions/limits |
| `primary_department_id` | `string` | No | UUID of the department to designate as primary |
| `pending_ids` | `string`[] | No | Resources to keep dormant |
| `idempotency_key` | `string` | No | Idempotency key for draft writes |
| `accept` | `boolean` | No | Whether to accept the pending draft state |

## Response (`PatchProfileDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | No | Idempotency key for draft writes |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__profile__types__DraftFormState`](/api-reference/profile/types#app-infra-profile-types-draftformstate) | No | Server-authoritative form state |
