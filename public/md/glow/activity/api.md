# Activity

## Endpoints

### `POST` `/activity/get`

Get Activity

**Request body** (`ActivityRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `date_from` | `string` | No | Filter start date |
| `date_to` | `string` | No | Filter end date |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `roles` | `string`[] | No | Roles to filter by |

**Response** (`ActivityResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `sessions_count` | `integer` | No | Total number of sessions |
| `active_profiles_count` | `integer` | No | Number of active profiles |
| `logins_count` | `integer` | No | Total number of logins |
| `emulations_count` | `integer` | No | Total number of emulations |
| `profile_summary` | [`ProfileSummaryItem`](#profilesummaryitem)[] | No | Per-profile activity summaries |
| `resources` | [`ActivityResources`](#activityresources) | No | Activity resource metadata |
| `analytics` | [`AnalyticsFacets-Output`](#analyticsfacets-output) | No | Inline analytics facets for SSR |

---

### `POST` `/activity/search`

Search Activity

Get activity session history (bottom table, paginated).

**Request body** (`ListActivityRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `date_from` | `string` | No | Filter start date |
| `date_to` | `string` | No | Filter end date |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `roles` | `string`[] | No | Roles to filter by |
| `active` | `boolean` | No | Filter by active status |
| `page` | `integer` | No | Pagination page number |
| `page_size` | `integer` | No | Items per page |
| `sort_order` | `string` | No | Sort direction (asc or desc) |

**Response** (`ListActivityResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `data` | [`SessionListItem`](#sessionlistitem)[] | No | Session history items |
| `total_count` | `integer` | No | Total number of matching records |
| `page` | `integer` | No | Current page number |
| `page_size` | `integer` | No | Items per page |
| `total_pages` | `integer` | No | Total number of pages |

---

### `POST` `/activity/refresh`

Activity Refresh

Refresh activity materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/activity/resolve`

Resolve Problem

Resolve or unresolve a problem entry.

**Request body** (`ResolveProblemRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_id` | `string` | Yes | — |
| `resolved` | `boolean` | No | — |

**Response** (`ResolveProblemResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_id` | `string` | Yes | — |
| `resolved` | `boolean` | Yes | — |
| `updated_at` | `string` | Yes | — |

---

### `POST` `/activity/export`

Export Activity

Export all activity data as a clean, denormalized ZIP.

**Response** (`ExportActivityApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Base64-encoded file content |
| `file_name` | `string` | Yes | Suggested download file name |
| `mime_type` | `string` | Yes | MIME type of the export file |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/activity/docs`

Get Activity Docs Endpoint

Get composed documentation for the activity analytics.

**Request body** (`DocsApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entity_id` | `string` | No | — |

**Response** (`ComposedDocsResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Artifact name |
| `type` | `string` | Yes | Artifact type identifier |
| `description` | `string` | Yes | Human-readable description |
| `artifact` | [`DocsResponse-Output`](#docsresponse-output) | No | Artifact tool documentation |
| `entries` | [`DocsResponse-Output`](#docsresponse-output)[] | Yes | Entry documentation list |
| `resources` | [`DocsResponse-Output`](#docsresponse-output)[] | Yes | Resource documentation list |
| `permissions` | [`OperationInfo`](#operationinfo)[] | Yes | Permission function documentation |
| `api_operations` | [`OperationInfo`](#operationinfo)[] | Yes | API operation documentation |
| `page_metadata` | [`DocsApiResponse`](#docsapiresponse) | No | Page-level metadata from docs API |

---

### `POST` `/stream/ActivityRequest`

Schema: ActivityRequest

**Request body** (`ActivityRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `date_from` | `string` | No | Filter start date |
| `date_to` | `string` | No | Filter end date |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `roles` | `string`[] | No | Roles to filter by |

**Response:**

```
`object`
```

---

### `POST` `/stream/ActivityResponse`

Schema: ActivityResponse

**Request body** (`ActivityResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `sessions_count` | `integer` | No | Total number of sessions |
| `active_profiles_count` | `integer` | No | Number of active profiles |
| `logins_count` | `integer` | No | Total number of logins |
| `emulations_count` | `integer` | No | Total number of emulations |
| `profile_summary` | [`ProfileSummaryItem`](#profilesummaryitem)[] | No | Per-profile activity summaries |
| `resources` | [`ActivityResources`](#activityresources) | No | Activity resource metadata |
| `analytics` | [`AnalyticsFacets-Input`](#analyticsfacets-input) | No | Inline analytics facets for SSR |

**Response:**

```
`object`
```

---

### `POST` `/stream/OperationErrorEvent`

Schema: OperationErrorEvent

**Request body** (`OperationErrorEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `message` | `string` | Yes | — |
| `error_type` | `string` | No | — |
| `artifact` | `string` | No | — |
| `operation` | `string` | No | — |

**Response:**

```
`object`
```

---

## Types

### `ActivityResources`

Activity resource metadata.

| Field | Type | Required | Description |
|---|---|---|---|
| `profiles` | `object` | No | Profile resources keyed by ID |

---

### `AnalyticsFacets-Input`

Resolved analytics facets — embeddable in any artifact response.

Contains filter field visibility, available options for dropdowns,
and date range boundaries. Returned inline from artifact get/search
responses so each page has its filter facets ready for SSR.

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`AnalyticsFilterFields`](#analyticsfilterfields) | Yes | Filter field visibility configuration |
| `department_options` | [`AnalyticsFilterOption`](#analyticsfilteroption)[] | No | Department dropdown options |
| `cohort_options` | [`AnalyticsFilterOption`](#analyticsfilteroption)[] | No | Cohort dropdown options |
| `role_options` | `string`[] | No | Available role options |
| `attempt_options` | `string`[] | No | Available attempt options |
| `date_range_earliest` | `string` | No | Earliest available date for filtering |
| `date_range_latest` | `string` | No | Latest available date for filtering |

---

### `AnalyticsFacets-Output`

Resolved analytics facets — embeddable in any artifact response.

Contains filter field visibility, available options for dropdowns,
and date range boundaries. Returned inline from artifact get/search
responses so each page has its filter facets ready for SSR.

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`AnalyticsFilterFields`](#analyticsfilterfields) | Yes | Filter field visibility configuration |
| `department_options` | [`AnalyticsFilterOption`](#analyticsfilteroption)[] | No | Department dropdown options |
| `cohort_options` | [`AnalyticsFilterOption`](#analyticsfilteroption)[] | No | Cohort dropdown options |
| `role_options` | `string`[] | No | Available role options |
| `attempt_options` | `string`[] | No | Available attempt options |
| `date_range_earliest` | `string` | No | Earliest available date for filtering |
| `date_range_latest` | `string` | No | Latest available date for filtering |

---

### `AnalyticsFilterField`

Visibility/disabled state for a single filter field.

| Field | Type | Required | Description |
|---|---|---|---|
| `visible` | `boolean` | No | Whether the filter field is visible |
| `disabled` | `boolean` | No | Whether the filter field is disabled |

---

### `AnalyticsFilterFields`

Per-page filter field visibility configuration.

| Field | Type | Required | Description |
|---|---|---|---|
| `date_range` | [`AnalyticsFilterField`](#analyticsfilterfield) | No | Date range filter config |
| `departments` | [`AnalyticsFilterField`](#analyticsfilterfield) | No | Department filter config |
| `cohorts` | [`AnalyticsFilterField`](#analyticsfilterfield) | No | Cohort filter config |
| `roles` | [`AnalyticsFilterField`](#analyticsfilterfield) | No | Role filter config |
| `attempts` | [`AnalyticsFilterField`](#analyticsfilterfield) | No | Attempt filter config |

---

### `AnalyticsFilterOption`

A single filter option for dropdown selectors.

| Field | Type | Required | Description |
|---|---|---|---|
| `value` | `string` | Yes | Option value for the filter |
| `label` | `string` | Yes | Human-readable option label |

---

### `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

### `DocsApiResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `list` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `detail` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `new` | [`PageMetaItem`](#pagemetaitem) | Yes | — |

---

### `DocsResponse-Output`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Resource or entry name |
| `type` | `string` | Yes | Resource or entry type identifier |
| `description` | `string` | Yes | Human-readable description |
| `materialized_view` | [`MvInfo`](#mvinfo) | No | Materialized view metadata |
| `tables` | [`TableInfo`](#tableinfo)[] | Yes | Related database tables |
| `operations` | [`OperationInfo`](#operationinfo)[] | Yes | Available operations |

---

### `MvInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Materialized view name |
| `definition` | `string` | Yes | SQL definition of the view |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the view |

---

### `OperationInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Operation name |
| `description` | `string` | Yes | Human-readable description of the operation |
| `params` | [`ParamInfo`](#paraminfo)[] | Yes | List of operation parameters |
| `returns` | `object` | No | Return type schema |

---

### `PageMetaItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | — |
| `description` | `string` | Yes | — |

---

### `ParamInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Parameter name |
| `type` | `string` | Yes | Parameter data type |
| `required` | `boolean` | Yes | Whether the parameter is required |
| `default` | `any` | No | Default value if not required |

---

### `ProfileSummaryItem`

Per-profile aggregate stats for the summary card.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | No | Profile identifier |
| `profile_name` | `string` | No | Profile display name |
| `sessions_count` | `integer` | No | Number of sessions |
| `logins_count` | `integer` | No | Number of logins |
| `grants_count` | `integer` | No | Number of grants |
| `problems_count` | `integer` | No | Number of problems |
| `activity_count` | `integer` | No | Total activity count |

---

### `SessionListItem`

Single session in the list response with hydrated metadata.

| Field | Type | Required | Description |
|---|---|---|---|
| `session_id` | `string` | Yes | UUID of the session |
| `profile_id` | `string` | No | UUID of the user profile |
| `profile_name` | `string` | No | Display name of the user profile |
| `session_created_at` | `string` | No | Timestamp when session was created |
| `session_updated_at` | `string` | No | Timestamp when session was last updated |
| `active` | `boolean` | No | Whether the session is active |
| `group_count` | `integer` | No | Number of groups in the session |
| `run_count` | `integer` | No | Number of runs in the session |
| `first_run_at` | `string` | No | Timestamp of the first run |
| `last_run_at` | `string` | No | Timestamp of the last run |
| `total_tokens` | `integer` | No | Total tokens used in the session |
| `total_cost` | `string` | No | Total cost of the session |
| `chat_count` | `integer` | No | Number of chats in the session |
| `attempt_count` | `integer` | No | Number of attempts in the session |
| `message_count` | `integer` | No | Number of messages in the session |
| `problem_count` | `integer` | No | Number of problems in the session |

---

### `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---