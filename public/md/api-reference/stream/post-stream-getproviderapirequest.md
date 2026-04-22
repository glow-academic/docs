# `POST` `/stream/GetProviderApiRequest`

Schema: GetProviderApiRequest

## Request Body (`GetProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Provider unique identifier |
| `provider_id` | `string` | No | Legacy alias for provider unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__provider__types__SectionFilter`](/api-reference/stream/types#app-infra-provider-types-sectionfilter) | No | Filter options for names |
| `descriptions` | [`app__infra__provider__types__SectionFilter`](/api-reference/stream/types#app-infra-provider-types-sectionfilter) | No | Filter options for descriptions |
| `flags` | [`app__infra__provider__types__SectionFilter`](/api-reference/stream/types#app-infra-provider-types-sectionfilter) | No | Filter options for flags |
| `departments` | [`app__infra__provider__types__SectionFilter`](/api-reference/stream/types#app-infra-provider-types-sectionfilter) | No | Filter options for departments |
| `values` | [`app__infra__provider__types__SectionFilter`](/api-reference/stream/types#app-infra-provider-types-sectionfilter) | No | Filter options for values |
| `endpoints` | [`app__infra__provider__types__SectionFilter`](/api-reference/stream/types#app-infra-provider-types-sectionfilter) | No | Filter options for endpoints |
| `keys` | [`app__infra__provider__types__SectionFilter`](/api-reference/stream/types#app-infra-provider-types-sectionfilter) | No | Filter options for keys |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getproviderapirequest Schema Stream Getproviderapirequest Post"
}
```