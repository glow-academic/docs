# `POST` `/stream/GetChatRequest`

# `POST` `/stream/GetChatRequest`

Schema: GetChatRequest

## Request Body (`GetChatRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Chat entry ID |
| `chat_entry_id` | `string` | No | Legacy alias for the chat entry ID |
| `attempt_id` | `string` | No | Attempt ID |
| `draft_id` | `string` | No | Draft ID |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads |
| `names` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `descriptions` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `flags` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `departments` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `personas` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `documents` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `parameter_fields` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `scenarios` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `fields` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `questions` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `options` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `videos` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `images` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `problem_statements` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |
| `objectives` | [`app__infra__chat__types__SectionFilter`](/api-reference/stream/types#app-infra-chat-types-sectionfilter) | No | — |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getchatrequest Schema Stream Getchatrequest Post"
}
```
