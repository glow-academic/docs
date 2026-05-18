# `POST` `/stream/GetSimulationApiRequest`

# `POST` `/stream/GetSimulationApiRequest`

Schema: GetSimulationApiRequest

## Request Body (`GetSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the simulation to retrieve |
| `simulation_id` | `string` | No | Legacy alias for the simulation UUID |
| `draft_id` | `string` | No | UUID of the draft to load instead of published state |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__simulation__types__SectionFilter`](/api-reference/stream/types#app-infra-simulation-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__simulation__types__SectionFilter`](/api-reference/stream/types#app-infra-simulation-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__simulation__types__SectionFilter`](/api-reference/stream/types#app-infra-simulation-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__simulation__types__SectionFilter`](/api-reference/stream/types#app-infra-simulation-types-sectionfilter) | No | Filter options for departments section |
| `scenarios` | [`app__infra__simulation__types__SectionFilter`](/api-reference/stream/types#app-infra-simulation-types-sectionfilter) | No | Filter options for scenarios section |
| `scenario_flags` | [`app__infra__simulation__types__SectionFilter`](/api-reference/stream/types#app-infra-simulation-types-sectionfilter) | No | Filter options for scenario flags section |
| `scenario_positions` | [`app__infra__simulation__types__SectionFilter`](/api-reference/stream/types#app-infra-simulation-types-sectionfilter) | No | Filter options for scenario positions section |
| `scenario_rubrics` | [`app__infra__simulation__types__SectionFilter`](/api-reference/stream/types#app-infra-simulation-types-sectionfilter) | No | Filter options for scenario rubrics section |
| `scenario_time_limits` | [`app__infra__simulation__types__SectionFilter`](/api-reference/stream/types#app-infra-simulation-types-sectionfilter) | No | Filter options for scenario time limits section |
| `filter_scenario_ids` | `string`[] | No | Legacy scenario ID filter for nested scenario resources |
| `scenario_search` | `string` | No | Legacy search text for scenarios |
| `scenario_show_selected` | `boolean` | No | Legacy selected-only filter for scenarios |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getsimulationapirequest Schema Stream Getsimulationapirequest Post"
}
```
