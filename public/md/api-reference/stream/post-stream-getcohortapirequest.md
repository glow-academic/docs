# `POST` `/stream/GetCohortApiRequest`

# `POST` `/stream/GetCohortApiRequest`

Schema: GetCohortApiRequest

## Request Body (`GetCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Cohort UUID to retrieve |
| `cohort_id` | `string` | No | Legacy alias for cohort UUID |
| `draft_id` | `string` | No | Draft UUID to load from |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__cohort__types__SectionFilter`](/api-reference/stream/types#app-infra-cohort-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__cohort__types__SectionFilter`](/api-reference/stream/types#app-infra-cohort-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__cohort__types__SectionFilter`](/api-reference/stream/types#app-infra-cohort-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__cohort__types__SectionFilter`](/api-reference/stream/types#app-infra-cohort-types-sectionfilter) | No | Filter options for departments section |
| `simulations` | [`app__infra__cohort__types__SectionFilter`](/api-reference/stream/types#app-infra-cohort-types-sectionfilter) | No | Filter options for simulations section |
| `simulation_positions` | [`app__infra__cohort__types__SectionFilter`](/api-reference/stream/types#app-infra-cohort-types-sectionfilter) | No | Filter options for simulation positions section |
| `simulation_availability` | [`app__infra__cohort__types__SectionFilter`](/api-reference/stream/types#app-infra-cohort-types-sectionfilter) | No | Filter options for simulation availability section |
| `profiles` | [`app__infra__cohort__types__SectionFilter`](/api-reference/stream/types#app-infra-cohort-types-sectionfilter) | No | Filter options for profiles section |
| `profile_personas` | [`app__infra__cohort__types__SectionFilter`](/api-reference/stream/types#app-infra-cohort-types-sectionfilter) | No | Filter options for profile personas section |
| `personas` | [`app__infra__cohort__types__SectionFilter`](/api-reference/stream/types#app-infra-cohort-types-sectionfilter) | No | Filter options for personas section |
| `descriptions_search` | `string` | No | Legacy search query for descriptions |
| `simulation_search` | `string` | No | Legacy search query for simulations |
| `simulation_show_selected` | `boolean` | No | Legacy selected-only flag for simulations |
| `profile_search` | `string` | No | Legacy search query for profiles |
| `profile_show_selected` | `boolean` | No | Legacy selected-only flag for profiles |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getcohortapirequest Schema Stream Getcohortapirequest Post"
}
```
