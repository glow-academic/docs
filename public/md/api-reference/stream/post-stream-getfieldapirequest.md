# `POST` `/stream/GetFieldApiRequest`

Schema: GetFieldApiRequest

## Request Body (`GetFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Field UUID to retrieve |
| `field_id` | `string` | No | UUID of the field to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__field__types__SectionFilter`](/api-reference/stream/types#app-infra-field-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__field__types__SectionFilter`](/api-reference/stream/types#app-infra-field-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__field__types__SectionFilter`](/api-reference/stream/types#app-infra-field-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__field__types__SectionFilter`](/api-reference/stream/types#app-infra-field-types-sectionfilter) | No | Filter options for departments section |
| `conditional_parameters` | [`app__infra__field__types__SectionFilter`](/api-reference/stream/types#app-infra-field-types-sectionfilter) | No | Filter options for conditional parameters section |
| `descriptions_search` | `string` | No | Search query for description resources |
| `conditional_parameter_search` | `string` | No | Search query for conditional parameters |
| `conditional_parameter_show_selected` | `boolean` | No | Whether to show only selected parameters |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getfieldapirequest Schema Stream Getfieldapirequest Post"
}
```