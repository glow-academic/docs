# `POST` `/scenario/search`

# `POST` `/scenario/search`

Search Scenario

Search scenarios — composable infra architecture.

## Request Body (`SearchScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `persona_ids` | `string`[] | No | — |
| `simulation_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `persona_search` | `string` | No | — |
| `simulation_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `flag_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`ListScenarioApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `scenarios` | [`ListScenarioApiScenario`](/api-reference/scenario/types#listscenarioapiscenario)[] | No | List of scenario items |
| `objectives` | [`ListScenarioApiObjective`](/api-reference/scenario/types#listscenarioapiobjective)[] | No | List of objective items |
| `fields` | [`ListScenarioApiField`](/api-reference/scenario/types#listscenarioapifield)[] | No | List of field items |
| `cohorts` | [`ListScenarioApiCohort`](/api-reference/scenario/types#listscenarioapicohort)[] | No | List of cohort items |
| `personas` | [`ListScenarioApiPersona`](/api-reference/scenario/types#listscenarioapipersona)[] | No | List of persona items |
| `simulations` | [`ListScenarioApiSimulation`](/api-reference/scenario/types#listscenarioapisimulation)[] | No | List of simulation items |
| `departments` | [`ListScenarioApiDepartment`](/api-reference/scenario/types#listscenarioapidepartment)[] | No | List of department items |
| `persona_filter` | [`ListFilterSection`](/api-reference/scenario/types#listfiltersection) | No | Filter options for personas |
| `simulation_filter` | [`ListFilterSection`](/api-reference/scenario/types#listfiltersection) | No | Filter options for simulations |
| `department_filter` | [`ListFilterSection`](/api-reference/scenario/types#listfiltersection) | No | Filter options for departments |
| `flag_filter` | [`ListFilterSection`](/api-reference/scenario/types#listfiltersection) | No | Filter options for flags |
| `total_count` | `integer` | No | Total number of matching records |
| `import_fields` | [`ImportField`](/api-reference/scenario/types#importfield)[] | No | CSV import column schema for the bulk-import dialog |
