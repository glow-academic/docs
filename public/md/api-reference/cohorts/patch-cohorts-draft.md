# `PATCH` `/cohorts/draft`

Patch Cohort Draft

Patch cohort draft — composable infra architecture.

## Request Body (`PatchCohortDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to patch |
| `expected_version` | `integer` | No | Expected draft version for concurrency control |
| `name` | `string` | No | Name value to create a resource |
| `name_id` | `string` | No | Existing name resource UUID |
| `description` | `string` | No | Description value to create a resource |
| `description_id` | `string` | No | Existing description resource UUID |
| `flag_id` | `string` | No | Flag option UUID |
| `department_ids` | `string`[] | No | Department UUIDs |
| `simulation_ids` | `string`[] | No | Simulation UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs |
| `simulation_position_ids` | `string`[] | No | Existing simulation position UUIDs |
| `simulation_positions` | [`DraftSimulationPositionValue`](/api-reference/cohorts/types#draftsimulationpositionvalue)[] | No | Simulation position values to create |
| `simulation_availability_ids` | `string`[] | No | Existing simulation availability UUIDs |
| `simulation_availability` | [`DraftSimulationAvailabilityValue`](/api-reference/cohorts/types#draftsimulationavailabilityvalue)[] | No | Simulation availability values to create |
| `profile_persona_ids` | `string`[] | No | Existing profile persona UUIDs |
| `profile_personas` | [`DraftProfilePersonaValue`](/api-reference/cohorts/types#draftprofilepersonavalue)[] | No | Profile persona values to create |

## Response (`PatchCohortDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `new_version` | `integer` | Yes | New draft version number after patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`CohortDraftFormState`](/api-reference/cohorts/types#cohortdraftformstate) | No | Server-authoritative form state |