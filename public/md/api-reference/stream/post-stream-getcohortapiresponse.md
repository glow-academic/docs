# `POST` `/stream/GetCohortApiResponse`

# `POST` `/stream/GetCohortApiResponse`

Schema: GetCohortApiResponse

## Request Body (`GetCohortApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `cohort_exists` | `boolean` | No | Whether the cohort exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Associated group UUID |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available |
| `names` | [`CohortNameResource`](/api-reference/stream/types#cohortnameresource)[] | No | Name resources with selected/suggested flags |
| `descriptions` | [`CohortDescriptionResource`](/api-reference/stream/types#cohortdescriptionresource)[] | No | Description resources with selected/suggested flags |
| `flags` | [`CohortFlagConfig`](/api-reference/stream/types#cohortflagconfig)[] | No | Flag resources with selected/suggested flags |
| `departments` | [`CohortDepartment`](/api-reference/stream/types#cohortdepartment)[] | No | Department resources with selected/suggested flags |
| `simulations` | [`CohortSimulation`](/api-reference/stream/types#cohortsimulation)[] | No | Simulation resources with selected/suggested flags |
| `simulation_positions` | [`CohortSimulationPosition`](/api-reference/stream/types#cohortsimulationposition)[] | No | Simulation position resources with selected/suggested flags |
| `simulation_availability` | [`CohortSimulationAvailability`](/api-reference/stream/types#cohortsimulationavailability)[] | No | Simulation availability resources with selected/suggested flags |
| `profiles` | [`CohortProfile`](/api-reference/stream/types#cohortprofile)[] | No | Profile resources with selected/suggested flags |
| `profile_personas` | [`CohortProfilePersona`](/api-reference/stream/types#cohortprofilepersona)[] | No | Profile persona resources with selected/suggested flags |
| `personas` | [`CohortPersonaResource`](/api-reference/stream/types#cohortpersonaresource)[] | No | Persona resources with selected/suggested flags |
| `pending_ids` | `string`[] | No | Pending resource IDs from the draft, when available |
| `basic_show_ai_generate` | `boolean` | No | Legacy AI-generate flag for the basic step |
| `simulations_step_show_ai_generate` | `boolean` | No | Legacy AI-generate flag for the simulations step |
| `profiles_step_show_ai_generate` | `boolean` | No | Legacy AI-generate flag for the profiles step |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getcohortapiresponse Schema Stream Getcohortapiresponse Post"
}
```
