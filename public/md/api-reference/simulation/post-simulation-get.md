# `POST` `/simulation/get`

Get Simulation

Get simulation information using the canonical shared simulation operation.

## Request Body (`GetSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the simulation to retrieve |
| `simulation_id` | `string` | No | Legacy alias for the simulation UUID |
| `draft_id` | `string` | No | UUID of the draft to load instead of published state |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__simulation__types__SectionFilter`](/api-reference/simulation/types#app-infra-simulation-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__simulation__types__SectionFilter`](/api-reference/simulation/types#app-infra-simulation-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__simulation__types__SectionFilter`](/api-reference/simulation/types#app-infra-simulation-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__simulation__types__SectionFilter`](/api-reference/simulation/types#app-infra-simulation-types-sectionfilter) | No | Filter options for departments section |
| `scenarios` | [`app__infra__simulation__types__SectionFilter`](/api-reference/simulation/types#app-infra-simulation-types-sectionfilter) | No | Filter options for scenarios section |
| `scenario_flags` | [`app__infra__simulation__types__SectionFilter`](/api-reference/simulation/types#app-infra-simulation-types-sectionfilter) | No | Filter options for scenario flags section |
| `scenario_positions` | [`app__infra__simulation__types__SectionFilter`](/api-reference/simulation/types#app-infra-simulation-types-sectionfilter) | No | Filter options for scenario positions section |
| `scenario_rubrics` | [`app__infra__simulation__types__SectionFilter`](/api-reference/simulation/types#app-infra-simulation-types-sectionfilter) | No | Filter options for scenario rubrics section |
| `scenario_time_limits` | [`app__infra__simulation__types__SectionFilter`](/api-reference/simulation/types#app-infra-simulation-types-sectionfilter) | No | Filter options for scenario time limits section |
| `filter_scenario_ids` | `string`[] | No | Legacy scenario ID filter for nested scenario resources |
| `scenario_search` | `string` | No | Legacy search text for scenarios |
| `scenario_show_selected` | `boolean` | No | Legacy selected-only filter for scenarios |

## Response (`GetSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `simulation_exists` | `boolean` | No | Whether the simulation exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason the simulation is disabled |
| `group_id` | `string` | No | UUID of the owning group |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available |
| `basic_show_ai_generate` | `boolean` | No | Legacy basic-step AI generate flag |
| `names` | [`SimulationNameResource`](/api-reference/simulation/types#simulationnameresource)[] | No | Name resources with selected/suggested flags |
| `descriptions` | [`SimulationDescriptionResource`](/api-reference/simulation/types#simulationdescriptionresource)[] | No | Description resources with selected/suggested flags |
| `flags` | [`SimulationFlagConfig`](/api-reference/simulation/types#simulationflagconfig)[] | No | Flag configs with selected/suggested flags |
| `departments` | [`SimulationDepartment`](/api-reference/simulation/types#simulationdepartment)[] | No | Department resources with selected/suggested flags |
| `scenarios` | [`SimulationScenario`](/api-reference/simulation/types#simulationscenario)[] | No | Scenario resources with selected/suggested flags |
| `scenario_flags` | [`SimulationScenarioFlag`](/api-reference/simulation/types#simulationscenarioflag)[] | No | Scenario flag resources with selected/suggested flags |
| `scenario_positions` | [`SimulationScenarioPosition`](/api-reference/simulation/types#simulationscenarioposition)[] | No | Scenario position resources with selected/suggested flags |
| `scenario_rubrics` | [`SimulationScenarioRubric`](/api-reference/simulation/types#simulationscenariorubric)[] | No | Scenario rubric resources with selected/suggested flags |
| `scenario_time_limits` | [`SimulationScenarioTimeLimit`](/api-reference/simulation/types#simulationscenariotimelimit)[] | No | Scenario time limit resources with selected/suggested flags |
| `rubrics` | [`SimulationRubric`](/api-reference/simulation/types#simulationrubric)[] | No | Available rubric catalog items |