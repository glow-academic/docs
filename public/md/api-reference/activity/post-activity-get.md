# `POST` `/activity/get`

Get Activity

## Request Body (`ActivityRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `date_from` | `string` | No | Filter start date |
| `date_to` | `string` | No | Filter end date |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `roles` | `string`[] | No | Roles to filter by |

## Response (`ActivityResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `sessions_count` | `integer` | No | Total number of sessions |
| `active_profiles_count` | `integer` | No | Number of active profiles |
| `logins_count` | `integer` | No | Total number of logins |
| `emulations_count` | `integer` | No | Total number of emulations |
| `profile_summary` | [`ProfileSummaryItem`](/api-reference/activity/types#profilesummaryitem)[] | No | Per-profile activity summaries |
| `resources` | [`ActivityResources`](/api-reference/activity/types#activityresources) | No | Activity resource metadata |
| `analytics` | [`AnalyticsFacets-Output`](/api-reference/activity/types#analyticsfacets-output) | No | Inline analytics facets for SSR |