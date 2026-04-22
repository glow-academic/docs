# `POST` `/stream/GetChatResponse`

Schema: GetChatResponse

## Request Body (`GetChatResponse`)

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
| `names` | [`ChatNameResource`](/api-reference/stream/types#chatnameresource)[] | No | — |
| `descriptions` | [`ChatDescriptionResource`](/api-reference/stream/types#chatdescriptionresource)[] | No | — |
| `flags` | [`ChatFlagResource`](/api-reference/stream/types#chatflagresource)[] | No | — |
| `departments` | [`ChatDepartmentResource`](/api-reference/stream/types#chatdepartmentresource)[] | No | — |
| `personas` | [`ChatPersonaResource`](/api-reference/stream/types#chatpersonaresource)[] | No | — |
| `documents` | [`ChatDocumentResource`](/api-reference/stream/types#chatdocumentresource)[] | No | — |
| `parameter_fields` | [`ChatParameterFieldResource`](/api-reference/stream/types#chatparameterfieldresource)[] | No | — |
| `scenarios` | [`ChatScenarioResource`](/api-reference/stream/types#chatscenarioresource)[] | No | — |
| `fields` | [`ChatFieldResource`](/api-reference/stream/types#chatfieldresource)[] | No | — |
| `questions` | [`ChatQuestionResource`](/api-reference/stream/types#chatquestionresource)[] | No | — |
| `options` | [`ChatOptionResource`](/api-reference/stream/types#chatoptionresource)[] | No | — |
| `videos` | [`ChatVideoResource`](/api-reference/stream/types#chatvideoresource)[] | No | — |
| `images` | [`ChatImageResource`](/api-reference/stream/types#chatimageresource)[] | No | — |
| `problem_statements` | [`ChatProblemStatementResource`](/api-reference/stream/types#chatproblemstatementresource)[] | No | — |
| `objectives` | [`ChatObjectiveResource`](/api-reference/stream/types#chatobjectiveresource)[] | No | — |
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

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getchatresponse Schema Stream Getchatresponse Post"
}
```