# `POST` `/stream/GetModelApiRequest`

# `POST` `/stream/GetModelApiRequest`

Schema: GetModelApiRequest

## Request Body (`GetModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Model unique identifier |
| `model_id` | `string` | No | Legacy alias for model unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for names |
| `descriptions` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for descriptions |
| `values` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for values |
| `providers` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for providers |
| `flags` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for flags |
| `departments` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for departments |
| `modalities` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for modalities |
| `temperature_levels` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for temperature levels |
| `pricing` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for pricing |
| `reasoning_levels` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for reasoning levels |
| `qualities` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for qualities |
| `voices` | [`app__infra__model__types__SectionFilter`](/api-reference/stream/types#app-infra-model-types-sectionfilter) | No | Filter options for voices |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getmodelapirequest Schema Stream Getmodelapirequest Post"
}
```
