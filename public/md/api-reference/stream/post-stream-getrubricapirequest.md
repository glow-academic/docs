# `POST` `/stream/GetRubricApiRequest`

Schema: GetRubricApiRequest

## Request Body (`GetRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Rubric UUID to retrieve |
| `rubric_id` | `string` | No | Legacy rubric UUID to retrieve |
| `draft_id` | `string` | No | Draft UUID to load from |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__rubric__types__SectionFilter`](/api-reference/stream/types#app-infra-rubric-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__rubric__types__SectionFilter`](/api-reference/stream/types#app-infra-rubric-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__rubric__types__SectionFilter`](/api-reference/stream/types#app-infra-rubric-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__rubric__types__SectionFilter`](/api-reference/stream/types#app-infra-rubric-types-sectionfilter) | No | Filter options for departments section |
| `points` | [`app__infra__rubric__types__SectionFilter`](/api-reference/stream/types#app-infra-rubric-types-sectionfilter) | No | Filter options for points section |
| `standard_groups` | [`app__infra__rubric__types__SectionFilter`](/api-reference/stream/types#app-infra-rubric-types-sectionfilter) | No | Filter options for standard groups section |
| `standards` | [`app__infra__rubric__types__SectionFilter`](/api-reference/stream/types#app-infra-rubric-types-sectionfilter) | No | Filter options for standards section |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getrubricapirequest Schema Stream Getrubricapirequest Post"
}
```