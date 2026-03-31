# `PATCH` `/chat/draft`

Patch Chat Draft

Patch chat draft — composable infra architecture.

## Request Body (`PatchChatDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | UUID of the input draft |
| `expected_version` | `integer` | No | Expected version for optimistic locking |
| `name` | `string` | No | Name value to create |
| `description` | `string` | No | Description value to create |
| `problem_statement` | `string` | No | Problem statement value to create |
| `objectives` | `string`[] | No | Objective texts to create |
| `images` | [`app__infra__chat__types__DraftImageValue`](/api-reference/chat/types#app-infra-chat-types-draftimagevalue)[] | No | Image values to create |
| `videos` | [`app__infra__chat__types__DraftVideoValue`](/api-reference/chat/types#app-infra-chat-types-draftvideovalue)[] | No | Video values to create |
| `questions` | [`app__infra__chat__types__DraftQuestionValue`](/api-reference/chat/types#app-infra-chat-types-draftquestionvalue)[] | No | Question values to create |
| `options` | [`app__infra__chat__types__DraftOptionValue`](/api-reference/chat/types#app-infra-chat-types-draftoptionvalue)[] | No | Option values to create |
| `name_ids` | `string`[] | No | Selected name resource IDs |
| `description_ids` | `string`[] | No | Selected description resource IDs |
| `document_ids` | `string`[] | No | Selected document resource IDs |
| `field_ids` | `string`[] | No | Selected field resource IDs |
| `flag_ids` | `string`[] | No | Selected flag resource IDs |
| `image_ids` | `string`[] | No | Selected image resource IDs |
| `objective_ids` | `string`[] | No | Selected objective resource IDs |
| `option_ids` | `string`[] | No | Selected option resource IDs |
| `parameter_field_ids` | `string`[] | No | Selected parameter field resource IDs |
| `parameter_ids` | `string`[] | No | Selected parameter resource IDs |
| `persona_ids` | `string`[] | No | Selected persona resource IDs |
| `problem_statement_ids` | `string`[] | No | Selected problem statement resource IDs |
| `question_ids` | `string`[] | No | Selected question resource IDs |
| `scenario_ids` | `string`[] | No | Selected scenario resource IDs |
| `video_ids` | `string`[] | No | Selected video resource IDs |
| `department_ids` | `string`[] | No | Selected department resource IDs |

## Response (`PatchChatDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New version number after save |
| `message` | `string` | Yes | Response message |
| `form_state` | [`ChatDraftFormState`](/api-reference/chat/types#chatdraftformstate) | No | Updated form state after save |