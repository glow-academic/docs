# `PATCH` `/rubric/draft`

# `PATCH` `/rubric/draft`

Patch Rubric Draft

Patch rubric draft — composable infra architecture.

## Request Body (`PatchRubricDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft UUID to update |
| `input_draft_id` | `string` | No | Existing draft UUID to patch |
| `name` | `string` | No | Name value to create a resource |
| `name_id` | `string` | No | Existing name resource UUID |
| `description` | `string` | No | Description value to create a resource |
| `description_id` | `string` | No | Existing description resource UUID |
| `active_flag` | `boolean` | No | Whether the rubric is active |
| `active_flag_id` | `string` | No | Active flag option UUID |
| `flag_id` | `string` | No | Flag option UUID |
| `departments` | `string`[] | No | Department names to resolve |
| `department_ids` | `string`[] | No | Department UUIDs |
| `point_ids` | `string`[] | No | Point UUIDs |
| `standard_group_ids` | `string`[] | No | Standard group UUIDs |
| `standard_ids` | `string`[] | No | Standard UUIDs |
| `pending_ids` | `string`[] | No | Resource IDs to keep pending where supported |
| `idempotency_key` | `string` | No | Operation key for ack or retry |
| `accept` | `boolean` | No | Accept or reject dormant state |

## Response (`PatchRubricDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `idempotency_key` | `string` | No | Idempotency key for this draft operation |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`app__infra__rubric__types__DraftFormState`](/api-reference/rubric/types#app-infra-rubric-types-draftformstate) | No | Server-authoritative form state |
