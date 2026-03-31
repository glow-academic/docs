# `POST` `/cohorts/get`

Get Cohort

Get cohort information using the canonical shared cohort operation.

## Request Body (`GetCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | No | Cohort UUID to retrieve |
| `descriptions_search` | `string` | No | Search query for descriptions |
| `simulation_search` | `string` | No | Search query for simulations |
| `simulation_show_selected` | `boolean` | No | Whether to show only selected simulations |
| `profile_search` | `string` | No | Search query for profiles |
| `profile_show_selected` | `boolean` | No | Whether to show only selected profiles |
| `draft_id` | `string` | No | Draft UUID to load from |

## Response (`GetCohortApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `cohort_exists` | `boolean` | No | Whether the cohort exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group UUID |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `simulations_step_show_ai_generate` | `boolean` | No | Whether to show AI generate for simulations step |
| `profiles_step_show_ai_generate` | `boolean` | No | Whether to show AI generate for profiles step |
| `names` | [`CohortNameSection`](/api-reference/cohorts/types#cohortnamesection) | No | Name section with resource and options |
| `descriptions` | [`CohortDescriptionSection`](/api-reference/cohorts/types#cohortdescriptionsection) | No | Description section with resource and options |
| `flags` | [`CohortFlagSection`](/api-reference/cohorts/types#cohortflagsection) | No | Flag section with resource and options |
| `departments` | [`CohortDepartmentSection`](/api-reference/cohorts/types#cohortdepartmentsection) | No | Department section with selections and options |
| `simulations` | [`CohortSimulationSection`](/api-reference/cohorts/types#cohortsimulationsection) | No | Simulation section with selections and options |
| `simulation_positions` | [`CohortSimulationPositionSection`](/api-reference/cohorts/types#cohortsimulationpositionsection) | No | Simulation position section |
| `simulation_availability` | [`CohortSimulationAvailabilitySection`](/api-reference/cohorts/types#cohortsimulationavailabilitysection) | No | Simulation availability section |
| `profiles` | [`CohortProfileSection`](/api-reference/cohorts/types#cohortprofilesection) | No | Profile section with selections and options |
| `profile_personas` | [`CohortProfilePersonaSection`](/api-reference/cohorts/types#cohortprofilepersonasection) | No | Profile persona section |
| `personas` | [`GetPersonaResponse`](/api-reference/cohorts/types#getpersonaresponse)[] | No | List of available personas |