# `POST` `/stream/GetScenarioApiRequest`

Schema: GetScenarioApiRequest

## Request Body (`GetScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the scenario to retrieve |
| `draft_id` | `string` | No | UUID of the draft |
| `names` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `descriptions` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `problem_statements` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `flags` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `departments` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `personas` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `documents` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `parameters` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `parameter_fields` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `objectives` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `images` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `videos` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `questions` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |
| `options` | [`app__infra__persona__types__SectionFilter`](/api-reference/stream/types#app-infra-persona-types-sectionfilter) | No | — |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getscenarioapirequest Schema Stream Getscenarioapirequest Post"
}
```