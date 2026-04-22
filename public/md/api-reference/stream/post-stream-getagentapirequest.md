# `POST` `/stream/GetAgentApiRequest`

Schema: GetAgentApiRequest

## Request Body (`GetAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the agent to retrieve |
| `agent_id` | `string` | No | Legacy alias for the agent identifier |
| `draft_id` | `string` | No | UUID of the draft to retrieve |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for names |
| `descriptions` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for descriptions |
| `models` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for models |
| `prompts` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for prompts |
| `instructions` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for instructions |
| `flags` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for flags |
| `departments` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for departments |
| `tools` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for tools |
| `temperature_levels` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for temperature levels |
| `reasoning_levels` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for reasoning levels |
| `voices` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for voices |
| `qualities` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for qualities |
| `rubrics` | [`app__infra__agent__types__SectionFilter`](/api-reference/stream/types#app-infra-agent-types-sectionfilter) | No | Filter options for rubrics |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getagentapirequest Schema Stream Getagentapirequest Post"
}
```