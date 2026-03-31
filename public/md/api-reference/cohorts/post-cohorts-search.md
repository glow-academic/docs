# `POST` `/cohorts/search`

Search Cohort

Search cohorts — composable infra architecture.

## Request Body (`SearchCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_profile_ids` | `string`[] | No | — |
| `filter_simulation_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `profile_search` | `string` | No | — |
| `simulation_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `flag_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`ListCohortApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `user_role` | `string` | No | Role of the current user |
| `cohorts` | [`ListCohortApiCohort`](/api-reference/cohorts/types#listcohortapicohort)[] | No | List of cohorts |
| `profiles` | [`ListCohortApiProfile`](/api-reference/cohorts/types#listcohortapiprofile)[] | No | List of profiles for filtering |
| `simulations` | [`ListCohortApiSimulation`](/api-reference/cohorts/types#listcohortapisimulation)[] | No | List of simulations for filtering |
| `departments` | [`ListCohortApiDepartment`](/api-reference/cohorts/types#listcohortapidepartment)[] | No | List of departments for filtering |
| `simulation_filter` | [`ListFilterSection`](/api-reference/cohorts/types#listfiltersection) | No | Filter options for simulations in list UI |
| `profile_filter` | [`ListFilterSection`](/api-reference/cohorts/types#listfiltersection) | No | Filter options for profiles in list UI |
| `department_filter` | [`ListFilterSection`](/api-reference/cohorts/types#listfiltersection) | No | Filter options for departments in list UI |
| `flag_filter` | [`ListFilterSection`](/api-reference/cohorts/types#listfiltersection) | No | Filter options for flags in list UI |
| `total_count` | `integer` | No | Total number of matching records |