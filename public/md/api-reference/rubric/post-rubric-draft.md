# `POST` `/rubric/draft`

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
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
| `active` | `boolean` | No | Denormalized rubric_active flag state |
| `simulation_rubric` | `boolean` | No | Denormalized simulation_rubric flag state |
| `video_rubric` | `boolean` | No | Denormalized video_rubric flag state |
| `departments` | `string`[] | No | Department names to resolve |
| `department_ids` | `string`[] | No | Department UUIDs |
| `pass_points_id` | `string` | No | Pass-type Points resource UUID |
| `pass_points` | `integer` | No | Pass points value (resolves to a pass-type Points resource) |
| `standard_group_ids` | `string`[] | No | Standard group UUIDs |
| `standard_groups` | [`RubricStandardGroupDraftValue`](/api-reference/rubric/types#rubricstandardgroupdraftvalue)[] | No | Inline-created standard groups. Entries without id are created; resulting IDs merge into standard_group_ids. |
| `standard_ids` | `string`[] | No | Standard UUIDs |
| `standards` | [`RubricStandardDraftValue`](/api-reference/rubric/types#rubricstandarddraftvalue)[] | No | Grid-editor standards. Entries without id are created; resulting IDs merge into standard_ids. |
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