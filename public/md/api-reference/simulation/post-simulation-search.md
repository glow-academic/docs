# `POST` `/simulation/search`

# `POST` `/simulation/search`

Search Simulation

Search simulations — composable infra architecture.

## Request Body (`SearchSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_scenario_ids` | `string`[] | No | — |
| `filter_cohort_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `scenario_search` | `string` | No | — |
| `cohort_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `flag_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`ListSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `simulations` | [`ListSimulationApiSimulation`](/api-reference/simulation/types#listsimulationapisimulation)[] | No | List of simulation items |
| `scenarios` | [`ListSimulationApiScenario`](/api-reference/simulation/types#listsimulationapiscenario)[] | No | List of scenario items |
| `scenario_filter` | [`ListFilterSection`](/api-reference/simulation/types#listfiltersection) | No | Filter options for scenarios |
| `cohort_filter` | [`ListFilterSection`](/api-reference/simulation/types#listfiltersection) | No | Filter options for cohorts |
| `department_filter` | [`ListFilterSection`](/api-reference/simulation/types#listfiltersection) | No | Filter options for departments |
| `flag_filter` | [`ListFilterSection`](/api-reference/simulation/types#listfiltersection) | No | Filter options for flags |
| `total_count` | `integer` | No | Total number of matching records |
