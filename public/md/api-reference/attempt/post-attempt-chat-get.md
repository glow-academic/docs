# `POST` `/attempt/chat_get`

Chat Get

Get hydrated resources for chat bundle customization.

## Request Body (`GetChatRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Chat entry ID |
| `chat_entry_id` | `string` | No | Legacy alias for the chat entry ID |
| `attempt_id` | `string` | No | Attempt ID |
| `draft_id` | `string` | No | Draft ID |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads |
| `names` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `descriptions` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `flags` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `departments` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `personas` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `documents` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `parameter_fields` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `scenarios` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `fields` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `questions` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `options` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `videos` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `images` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `problem_statements` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |
| `objectives` | [`app__infra__attempt__chat__types__SectionFilter`](/api-reference/attempt/types#app-infra-attempt-chat-types-sectionfilter) | No | — |

## Response (`GetChatResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the authenticated user |
| `chat_exists` | `boolean` | No | Whether the chat template exists |
| `can_edit` | `boolean` | No | Whether the current user can edit this draft |
| `disabled_reason` | `string` | No | Human-readable reason if editing is disabled |
| `group_id` | `string` | No | Group ID for generation and draft correlation |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available |
| `profile_has_access` | `boolean` | No | Compatibility flag for current chat pages |
| `simulation_name` | `string` | No | Optional simulation name for UI display |
| `chat_entry_id` | `string` | No | Chat entry ID |
| `attempt_id` | `string` | No | Attempt ID |
| `names` | [`ChatNameResource`](/api-reference/attempt/types#chatnameresource)[] | No | — |
| `descriptions` | [`ChatDescriptionResource`](/api-reference/attempt/types#chatdescriptionresource)[] | No | — |
| `flags` | [`ChatFlagResource`](/api-reference/attempt/types#chatflagresource)[] | No | — |
| `departments` | [`ChatDepartmentResource`](/api-reference/attempt/types#chatdepartmentresource)[] | No | — |
| `personas` | [`ChatPersonaResource`](/api-reference/attempt/types#chatpersonaresource)[] | No | — |
| `documents` | [`ChatDocumentResource`](/api-reference/attempt/types#chatdocumentresource)[] | No | — |
| `parameter_fields` | [`ChatParameterFieldResource`](/api-reference/attempt/types#chatparameterfieldresource)[] | No | — |
| `scenarios` | [`ChatScenarioResource`](/api-reference/attempt/types#chatscenarioresource)[] | No | — |
| `fields` | [`ChatFieldResource`](/api-reference/attempt/types#chatfieldresource)[] | No | — |
| `questions` | [`ChatQuestionResource`](/api-reference/attempt/types#chatquestionresource)[] | No | — |
| `options` | [`ChatOptionResource`](/api-reference/attempt/types#chatoptionresource)[] | No | — |
| `videos` | [`ChatVideoResource`](/api-reference/attempt/types#chatvideoresource)[] | No | — |
| `images` | [`ChatImageResource`](/api-reference/attempt/types#chatimageresource)[] | No | — |
| `problem_statements` | [`ChatProblemStatementResource`](/api-reference/attempt/types#chatproblemstatementresource)[] | No | — |
| `objectives` | [`ChatObjectiveResource`](/api-reference/attempt/types#chatobjectiveresource)[] | No | — |
| `name_ids` | `string`[] | No | — |
| `description_ids` | `string`[] | No | — |
| `flag_ids` | `string`[] | No | — |
| `department_ids` | `string`[] | No | — |
| `persona_ids` | `string`[] | No | — |
| `document_ids` | `string`[] | No | — |
| `parameter_field_ids` | `string`[] | No | — |
| `scenario_ids` | `string`[] | No | — |
| `field_ids` | `string`[] | No | — |
| `question_ids` | `string`[] | No | — |
| `option_ids` | `string`[] | No | — |
| `video_ids` | `string`[] | No | — |
| `image_ids` | `string`[] | No | — |
| `problem_statement_ids` | `string`[] | No | — |
| `objective_ids` | `string`[] | No | — |