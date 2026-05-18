# `POST` `/stream/GetPersonaApiRequest`

# `POST` `/stream/GetPersonaApiRequest`

Schema: GetPersonaApiRequest

## Request Body (`GetPersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the persona to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load instead of published state |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | Filter options for descriptions section |
| `colors` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | Filter options for colors section |
| `icons` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | Filter options for icons section |
| `instructions` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | Filter options for instructions section |
| `departments` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | Filter options for departments section |
| `examples` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | Filter options for examples section |
| `parameter_fields` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | Filter options for parameter fields section |
| `voices` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | Filter options for voices section |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getpersonaapirequest Schema Stream Getpersonaapirequest Post"
}
```
