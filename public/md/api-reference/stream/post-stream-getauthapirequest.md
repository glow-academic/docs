# `POST` `/stream/GetAuthApiRequest`

# `POST` `/stream/GetAuthApiRequest`

Schema: GetAuthApiRequest

## Request Body (`GetAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Auth identifier |
| `auth_id` | `string` | No | Legacy alias for auth identifier |
| `draft_id` | `string` | No | UUID of the draft to load |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__auth__types__SectionFilter`](/api-reference/stream/types#app-infra-auth-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__auth__types__SectionFilter`](/api-reference/stream/types#app-infra-auth-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__auth__types__SectionFilter`](/api-reference/stream/types#app-infra-auth-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__auth__types__SectionFilter`](/api-reference/stream/types#app-infra-auth-types-sectionfilter) | No | Filter options for departments section |
| `protocols` | [`app__infra__auth__types__SectionFilter`](/api-reference/stream/types#app-infra-auth-types-sectionfilter) | No | Filter options for protocols section |
| `slugs` | [`app__infra__auth__types__SectionFilter`](/api-reference/stream/types#app-infra-auth-types-sectionfilter) | No | Filter options for slugs section |
| `items` | [`app__infra__auth__types__SectionFilter`](/api-reference/stream/types#app-infra-auth-types-sectionfilter) | No | Filter options for items section |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getauthapirequest Schema Stream Getauthapirequest Post"
}
```
