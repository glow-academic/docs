# `POST` `/profiles/search`

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
| `profiles` | [`ListProfilesApiProfile`](/api-reference/profiles/types#listprofilesapiprofile)[] | No | List of profile items |
| `department_filter` | [`ListFilterSection`](/api-reference/profiles/types#listfiltersection) | No | Filter options for departments |
| `role_filter` | [`ListFilterSection`](/api-reference/profiles/types#listfiltersection) | No | Filter options for roles |
| `total_count` | `integer` | No | Total number of profiles |