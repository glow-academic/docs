# `POST` `/profile/search`

Search Profile

Search profiles — composable infra architecture.

## Request Body (`SearchProfileApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `cohort_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `role_filter` | `string` | No | — |
| `cohort_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `role_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`ListProfilesApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `profiles` | [`ListProfilesApiProfile`](/api-reference/profile/types#listprofilesapiprofile)[] | No | List of profile items |
| `department_filter` | [`ListFilterSection`](/api-reference/profile/types#listfiltersection) | No | Filter options for departments |
| `role_filter` | [`ListFilterSection`](/api-reference/profile/types#listfiltersection) | No | Filter options for roles |
| `flag_filter` | [`ListFilterSection`](/api-reference/profile/types#listfiltersection) | No | Filter options for flags in list UI |
| `permissions_filter` | [`ListFilterSection`](/api-reference/profile/types#listfiltersection) | No | Filter options for permissions in list UI |
| `total_count` | `integer` | No | Total number of profiles |