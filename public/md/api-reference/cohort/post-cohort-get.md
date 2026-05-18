# `POST` `/cohort/get`

Get Cohort

Get cohort information using the canonical shared cohort operation.

## Request Body (`GetCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Cohort UUID to retrieve |
| `cohort_id` | `string` | No | Legacy alias for cohort UUID |
| `draft_id` | `string` | No | Draft UUID to load from |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__cohort__types__SectionFilter`](/api-reference/cohort/types#app-infra-cohort-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__cohort__types__SectionFilter`](/api-reference/cohort/types#app-infra-cohort-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__cohort__types__SectionFilter`](/api-reference/cohort/types#app-infra-cohort-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__cohort__types__SectionFilter`](/api-reference/cohort/types#app-infra-cohort-types-sectionfilter) | No | Filter options for departments section |
| `simulations` | [`app__infra__cohort__types__SectionFilter`](/api-reference/cohort/types#app-infra-cohort-types-sectionfilter) | No | Filter options for simulations section |
| `simulation_positions` | [`app__infra__cohort__types__SectionFilter`](/api-reference/cohort/types#app-infra-cohort-types-sectionfilter) | No | Filter options for simulation positions section |
| `simulation_availability` | [`app__infra__cohort__types__SectionFilter`](/api-reference/cohort/types#app-infra-cohort-types-sectionfilter) | No | Filter options for simulation availability section |
| `profiles` | [`app__infra__cohort__types__SectionFilter`](/api-reference/cohort/types#app-infra-cohort-types-sectionfilter) | No | Filter options for profiles section |
| `profile_personas` | [`app__infra__cohort__types__SectionFilter`](/api-reference/cohort/types#app-infra-cohort-types-sectionfilter) | No | Filter options for profile personas section |
| `personas` | [`app__infra__cohort__types__SectionFilter`](/api-reference/cohort/types#app-infra-cohort-types-sectionfilter) | No | Filter options for personas section |
| `descriptions_search` | `string` | No | Legacy search query for descriptions |
| `simulation_search` | `string` | No | Legacy search query for simulations |
| `simulation_show_selected` | `boolean` | No | Legacy selected-only flag for simulations |
| `profile_search` | `string` | No | Legacy search query for profiles |
| `profile_show_selected` | `boolean` | No | Legacy selected-only flag for profiles |

## Response (`GetCohortApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `cohort_exists` | `boolean` | No | Whether the cohort exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Associated group UUID |
| `draft_name` | `string` | No | Immutable draft label from the active draft entry, when a ``draft_id`` was supplied. ``None`` for non-draft fetches. |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available |
| `names` | [`CohortNameResource`](/api-reference/cohort/types#cohortnameresource)[] | No | Name resources with selected/suggested flags |
| `descriptions` | [`CohortDescriptionResource`](/api-reference/cohort/types#cohortdescriptionresource)[] | No | Description resources with selected/suggested flags |
| `flags` | [`CohortFlagResource`](/api-reference/cohort/types#cohortflagresource)[] | No | Flag resources with selected/suggested flags |
| `departments` | [`CohortDepartment`](/api-reference/cohort/types#cohortdepartment)[] | No | Department resources with selected/suggested flags |
| `simulations` | [`CohortSimulation`](/api-reference/cohort/types#cohortsimulation)[] | No | Simulation resources with selected/suggested flags |
| `simulation_positions` | [`CohortSimulationPosition`](/api-reference/cohort/types#cohortsimulationposition)[] | No | Simulation position resources with selected/suggested flags |
| `simulation_availability` | [`CohortSimulationAvailability`](/api-reference/cohort/types#cohortsimulationavailability)[] | No | Simulation availability resources with selected/suggested flags |
| `profiles` | [`CohortProfile`](/api-reference/cohort/types#cohortprofile)[] | No | Profile resources with selected/suggested flags |
| `profile_personas` | [`CohortProfilePersona`](/api-reference/cohort/types#cohortprofilepersona)[] | No | Profile persona resources with selected/suggested flags |
| `personas` | [`CohortPersonaResource`](/api-reference/cohort/types#cohortpersonaresource)[] | No | Persona resources with selected/suggested flags |
| `pending_ids` | `string`[] | No | Pending resource IDs from the draft, when available |
| `basic_show_ai_generate` | `boolean` | No | Legacy AI-generate flag for the basic step |
| `simulations_step_show_ai_generate` | `boolean` | No | Legacy AI-generate flag for the simulations step |
| `profiles_step_show_ai_generate` | `boolean` | No | Legacy AI-generate flag for the profiles step |