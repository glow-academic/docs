# `POST` `/scenarios/search`

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
| `scenarios` | [`ListScenarioApiScenario`](/api-reference/scenarios/types#listscenarioapiscenario)[] | No | List of scenario items |
| `objectives` | [`ListScenarioApiObjective`](/api-reference/scenarios/types#listscenarioapiobjective)[] | No | List of objective items |
| `fields` | [`ListScenarioApiField`](/api-reference/scenarios/types#listscenarioapifield)[] | No | List of field items |
| `cohorts` | [`ListScenarioApiCohort`](/api-reference/scenarios/types#listscenarioapicohort)[] | No | List of cohort items |
| `personas` | [`ListScenarioApiPersona`](/api-reference/scenarios/types#listscenarioapipersona)[] | No | List of persona items |
| `simulations` | [`ListScenarioApiSimulation`](/api-reference/scenarios/types#listscenarioapisimulation)[] | No | List of simulation items |
| `departments` | [`ListScenarioApiDepartment`](/api-reference/scenarios/types#listscenarioapidepartment)[] | No | List of department items |
| `persona_filter` | [`ListFilterSection`](/api-reference/scenarios/types#listfiltersection) | No | Filter options for personas |
| `simulation_filter` | [`ListFilterSection`](/api-reference/scenarios/types#listfiltersection) | No | Filter options for simulations |
| `department_filter` | [`ListFilterSection`](/api-reference/scenarios/types#listfiltersection) | No | Filter options for departments |
| `flag_filter` | [`ListFilterSection`](/api-reference/scenarios/types#listfiltersection) | No | Filter options for flags |
| `total_count` | `integer` | No | Total number of matching records |