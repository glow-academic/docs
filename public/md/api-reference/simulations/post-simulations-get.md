# `POST` `/simulations/get`

Get Simulation

Get simulation information using the canonical shared simulation operation.

## Request Body (`GetSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | UUID of the simulation to retrieve |
| `draft_id` | `string` | No | UUID of the draft to retrieve |
| `scenario_search` | `string` | No | Search text to filter scenarios |
| `filter_scenario_ids` | `string`[] | No | Filter by scenario UUIDs |

## Response (`GetSimulationApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `simulation_exists` | `boolean` | No | Whether the simulation exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason the simulation is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | UUID of the owning group |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `names` | [`SimulationNameSection`](/api-reference/simulations/types#simulationnamesection) | No | Name section data |
| `descriptions` | [`SimulationDescriptionSection`](/api-reference/simulations/types#simulationdescriptionsection) | No | Description section data |
| `flags` | [`SimulationFlagSection`](/api-reference/simulations/types#simulationflagsection) | No | Flag section data |
| `departments` | [`SimulationDepartmentSection`](/api-reference/simulations/types#simulationdepartmentsection) | No | Department section data |
| `scenarios` | [`SimulationScenarioSection`](/api-reference/simulations/types#simulationscenariosection) | No | Scenario section data |
| `scenario_flags` | [`SimulationScenarioFlagSection`](/api-reference/simulations/types#simulationscenarioflagsection) | No | Scenario flag section data |
| `scenario_positions` | [`SimulationScenarioPositionSection`](/api-reference/simulations/types#simulationscenariopositionsection) | No | Scenario position section data |
| `scenario_rubrics` | [`SimulationScenarioRubricSection`](/api-reference/simulations/types#simulationscenariorubricsection) | No | Scenario rubric section data |
| `scenario_time_limits` | [`SimulationScenarioTimeLimitSection`](/api-reference/simulations/types#simulationscenariotimelimitsection) | No | Scenario time limit section data |
| `rubrics` | [`SimulationRubric`](/api-reference/simulations/types#simulationrubric)[] | No | Available rubric catalog items |