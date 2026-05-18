# `POST` `/auth/draft`

# `POST` `/auth/draft`

Patch Auth Draft

Patch auth draft — composable infra architecture.

## Request Body (`PatchAuthDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft UUID to update |
| `input_draft_id` | `string` | No | Existing draft UUID to update |
| `idempotency_key` | `string` | No | Stable idempotency key for ack/promote flows |
| `accept` | `boolean` | No | Whether to accept a pending draft when acknowledging |
| `name` | `string` | No | Name value to resolve or create |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
| `active` | `boolean` | No | Denormalized auth_active flag state; resolved to a flag_ids entry server-side |
| `departments` | `string`[] | No | Department names to resolve |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `protocols` | `string`[] | No | Protocol values to resolve |
| `protocol_ids` | `string`[] | No | Protocol resource UUIDs |
| `slugs` | `string`[] | No | Slug values to resolve |
| `slug_ids` | `string`[] | No | Slug resource UUIDs |
| `item_ids` | `string`[] | No | Auth item UUIDs |
| `pending_ids` | `string`[] | No | Resource IDs to keep pending where supported |

## Response (`PatchAuthDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | No | Stable idempotency key for ack/promote flows |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__auth__types__DraftFormState`](/api-reference/auth/types#app-infra-auth-types-draftformstate) | No | Server-authoritative form state |
