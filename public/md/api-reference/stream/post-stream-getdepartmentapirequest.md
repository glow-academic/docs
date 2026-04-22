# `POST` `/stream/GetDepartmentApiRequest`

Schema: GetDepartmentApiRequest

## Request Body (`GetDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Department UUID to retrieve |
| `department_id` | `string` | No | Legacy department UUID to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__department__types__SectionFilter`](/api-reference/stream/types#app-infra-department-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__department__types__SectionFilter`](/api-reference/stream/types#app-infra-department-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__department__types__SectionFilter`](/api-reference/stream/types#app-infra-department-types-sectionfilter) | No | Filter options for flags section |
| `settings` | [`app__infra__department__types__SectionFilter`](/api-reference/stream/types#app-infra-department-types-sectionfilter) | No | Filter options for settings section |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getdepartmentapirequest Schema Stream Getdepartmentapirequest Post"
}
```