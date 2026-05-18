# `POST` `/attempt/draft`

# `POST` `/attempt/draft`

Patch Chat Draft

Patch chat draft — composable infra architecture.

## Request Body (`PatchChatDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft ID to update |
| `input_draft_id` | `string` | No | Legacy alias for draft_id |
| `name` | `string` | No | — |
| `name_id` | `string` | No | — |
| `description` | `string` | No | — |
| `description_id` | `string` | No | — |
| `problem_statement` | `string` | No | — |
| `problem_statement_id` | `string` | No | — |
| `objectives` | `string`[] | No | — |
| `objective_ids` | `string`[] | No | — |
| `images` | [`app__infra__attempt__chat__types__DraftImageValue`](/api-reference/attempt/types#app-infra-attempt-chat-types-draftimagevalue)[] | No | — |
| `image_ids` | `string`[] | No | — |
| `videos` | [`app__infra__attempt__chat__types__DraftVideoValue`](/api-reference/attempt/types#app-infra-attempt-chat-types-draftvideovalue)[] | No | — |
| `video_ids` | `string`[] | No | — |
| `questions` | [`app__infra__attempt__chat__types__DraftQuestionValue`](/api-reference/attempt/types#app-infra-attempt-chat-types-draftquestionvalue)[] | No | — |
| `question_ids` | `string`[] | No | — |
| `options` | [`app__infra__attempt__chat__types__DraftOptionValue`](/api-reference/attempt/types#app-infra-attempt-chat-types-draftoptionvalue)[] | No | — |
| `option_ids` | `string`[] | No | — |
| `department_ids` | `string`[] | No | — |
| `document_ids` | `string`[] | No | — |
| `field_ids` | `string`[] | No | — |
| `flag_ids` | `string`[] | No | — |
| `parameter_field_ids` | `string`[] | No | — |
| `parameter_ids` | `string`[] | No | — |
| `persona_ids` | `string`[] | No | — |
| `scenario_ids` | `string`[] | No | — |
| `pending_ids` | `string`[] | No | Resource IDs to keep pending/inactive on the draft |
| `idempotency_key` | `string` | No | Ack key for generation/correlation flows |
| `accept` | `boolean` | No | Accept or reject pending state |

## Response (`PatchChatDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | No | Idempotency key for client correlation |
| `message` | `string` | Yes | Response message |
| `form_state` | [`ChatDraftFormState`](/api-reference/attempt/types#chatdraftformstate) | No | Updated form state after save |
