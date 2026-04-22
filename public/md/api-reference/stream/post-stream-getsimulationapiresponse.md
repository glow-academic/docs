# `POST` `/stream/GetSimulationApiResponse`

Schema: GetSimulationApiResponse

## Request Body (`GetSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `simulation_exists` | `boolean` | No | Whether the simulation exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason the simulation is disabled |
| `group_id` | `string` | No | UUID of the owning group |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available |
| `basic_show_ai_generate` | `boolean` | No | Legacy basic-step AI generate flag |
| `names` | [`SimulationNameResource`](/api-reference/stream/types#simulationnameresource)[] | No | Name resources with selected/suggested flags |
| `descriptions` | [`SimulationDescriptionResource`](/api-reference/stream/types#simulationdescriptionresource)[] | No | Description resources with selected/suggested flags |
| `flags` | [`SimulationFlagConfig`](/api-reference/stream/types#simulationflagconfig)[] | No | Flag configs with selected/suggested flags |
| `departments` | [`SimulationDepartment`](/api-reference/stream/types#simulationdepartment)[] | No | Department resources with selected/suggested flags |
| `scenarios` | [`SimulationScenario`](/api-reference/stream/types#simulationscenario)[] | No | Scenario resources with selected/suggested flags |
| `scenario_flags` | [`SimulationScenarioFlag`](/api-reference/stream/types#simulationscenarioflag)[] | No | Scenario flag resources with selected/suggested flags |
| `scenario_positions` | [`SimulationScenarioPosition`](/api-reference/stream/types#simulationscenarioposition)[] | No | Scenario position resources with selected/suggested flags |
| `scenario_rubrics` | [`SimulationScenarioRubric`](/api-reference/stream/types#simulationscenariorubric)[] | No | Scenario rubric resources with selected/suggested flags |
| `scenario_time_limits` | [`SimulationScenarioTimeLimit`](/api-reference/stream/types#simulationscenariotimelimit)[] | No | Scenario time limit resources with selected/suggested flags |
| `rubrics` | [`SimulationRubric`](/api-reference/stream/types#simulationrubric)[] | No | Available rubric catalog items |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getsimulationapiresponse Schema Stream Getsimulationapiresponse Post"
}
```