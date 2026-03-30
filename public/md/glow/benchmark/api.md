# Benchmark

## Endpoints

### `POST` `/benchmark/get`

Get Benchmark

Get benchmark artifact data with the canonical shared benchmark operation.

**Request body** (`BenchmarkRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `history_page` | `integer` | No | History pagination page number |
| `history_page_size` | `integer` | No | History items per page |
| `history_eval_ids` | `string`[] | No | Eval IDs for history filter |
| `history_search` | `string` | No | Search string for history |
| `history_archived` | `boolean` | No | Filter by archived status |
| `history_sort_by` | `string` | No | History sort field |
| `history_sort_order` | `string` | No | History sort direction |

**Response** (`BenchmarkResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | [`BenchmarkEvalOperational`](#benchmarkevaloperational)[] | No | Eval cards for benchmark page |
| `departments` | [`BenchmarkDepartmentItem`](#benchmarkdepartmentitem)[] | No | Department resources |
| `department_options` | [`FilterOption`](#filteroption)[] | No | Department filter options |
| `date_range_earliest` | `string` | No | Earliest date in data range |
| `date_range_latest` | `string` | No | Latest date in data range |
| `history` | [`BenchmarkHistoryResponse`](#benchmarkhistoryresponse) | No | Paginated test history |
| `analytics` | [`AnalyticsFacets-Output`](#analyticsfacets-output) | No | Inline analytics facets for SSR |

---

### `POST` `/benchmark/search`

Search Benchmark History

Search benchmark test history with pagination and filters.

**Request body** (`BenchmarkRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `history_page` | `integer` | No | History pagination page number |
| `history_page_size` | `integer` | No | History items per page |
| `history_eval_ids` | `string`[] | No | Eval IDs for history filter |
| `history_search` | `string` | No | Search string for history |
| `history_archived` | `boolean` | No | Filter by archived status |
| `history_sort_by` | `string` | No | History sort field |
| `history_sort_order` | `string` | No | History sort direction |

**Response** (`BenchmarkHistoryResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `data` | [`BenchmarkHistoryItem`](#benchmarkhistoryitem)[] | No | History items |
| `total_count` | `integer` | No | Total number of matching records |
| `page` | `integer` | No | Current page number |
| `page_size` | `integer` | No | Items per page |
| `eval_options` | [`FilterOption`](#filteroption)[] | No | Eval filter options |

---

### `POST` `/benchmark/refresh`

Benchmark Refresh

Refresh benchmark materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/benchmark/export`

Export Benchmark

Export all benchmark data as a clean, denormalized ZIP.

**Response** (`ExportBenchmarkApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Base64-encoded file content |
| `file_name` | `string` | Yes | Suggested download file name |
| `mime_type` | `string` | Yes | MIME type of the export file |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/benchmark/docs`

Get Benchmark Docs Endpoint

Get composed documentation for the benchmark analytics.

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

### `POST` `/stream/BenchmarkRequest`

Schema: BenchmarkRequest

**Request body** (`BenchmarkRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `history_page` | `integer` | No | History pagination page number |
| `history_page_size` | `integer` | No | History items per page |
| `history_eval_ids` | `string`[] | No | Eval IDs for history filter |
| `history_search` | `string` | No | Search string for history |
| `history_archived` | `boolean` | No | Filter by archived status |
| `history_sort_by` | `string` | No | History sort field |
| `history_sort_order` | `string` | No | History sort direction |

**Response:**

```
`object`
```

---

### `POST` `/stream/BenchmarkResponse`

Schema: BenchmarkResponse

**Request body** (`BenchmarkResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | [`BenchmarkEvalOperational`](#benchmarkevaloperational)[] | No | Eval cards for benchmark page |
| `departments` | [`BenchmarkDepartmentItem`](#benchmarkdepartmentitem)[] | No | Department resources |
| `department_options` | [`FilterOption`](#filteroption)[] | No | Department filter options |
| `date_range_earliest` | `string` | No | Earliest date in data range |
| `date_range_latest` | `string` | No | Latest date in data range |
| `history` | [`BenchmarkHistoryResponse`](#benchmarkhistoryresponse) | No | Paginated test history |
| `analytics` | [`AnalyticsFacets-Input`](#analyticsfacets-input) | No | Inline analytics facets for SSR |

**Response:**

```
`object`
```

---

## Types

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

### `BenchmarkDepartmentItem`

Department resource for benchmark.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | Yes | Department identifier |
| `name` | `string` | No | Department display name |
| `description` | `string` | No | Department description |

---

### `BenchmarkEvalOperational`

Eval card for the benchmark page — analogous to ChatSimulationOperational.

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_id` | `string` | Yes | Eval identifier |
| `eval_name` | `string` | No | Eval display name |
| `eval_description` | `string` | No | Eval description |
| `model_ids` | `string`[] | No | Associated model IDs |
| `total_tests` | `integer` | No | Total number of tests |
| `archived_tests` | `integer` | No | Number of archived tests |
| `total_invocations` | `integer` | No | Total number of invocations |
| `completed_invocations` | `integer` | No | Number of completed invocations |
| `highest_score` | `number` | No | Highest score achieved |
| `has_passed` | `boolean` | No | Whether eval has been passed |
| `status` | `string` | No | Eval status |
| `infinite_mode` | `boolean` | No | Whether eval uses infinite mode |
| `department_ids` | `string`[] | No | Associated department IDs |
| `rubric_ids` | `string`[] | No | Associated rubric IDs |

---

### `BenchmarkHistoryItem`

History row for a test — analogous to TestHistoryItem.

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | Test identifier |
| `eval_id` | `string` | No | Parent eval ID |
| `eval_name` | `string` | No | Parent eval name |
| `eval_description` | `string` | No | Parent eval description |
| `created_at` | `string` | No | Test creation timestamp |
| `archived` | `boolean` | No | Whether test is archived |
| `infinite_mode` | `boolean` | No | Whether test uses infinite mode |
| `total_invocations` | `integer` | No | Total number of invocations |
| `completed_invocations` | `integer` | No | Number of completed invocations |
| `pending_invocations` | `integer` | No | Number of pending invocations |
| `best_score` | `number` | No | Best score across invocations |
| `has_passed` | `boolean` | No | Whether test has been passed |
| `status` | `string` | No | Test status |

---

### `BenchmarkHistoryResponse`

Paginated history response.

| Field | Type | Required | Description |
|---|---|---|---|
| `data` | [`BenchmarkHistoryItem`](#benchmarkhistoryitem)[] | No | History items |
| `total_count` | `integer` | No | Total number of matching records |
| `page` | `integer` | No | Current page number |
| `page_size` | `integer` | No | Items per page |
| `eval_options` | [`FilterOption`](#filteroption)[] | No | Eval filter options |

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

### `FilterOption`

A single filter option for dropdown selectors.

| Field | Type | Required | Description |
|---|---|---|---|
| `value` | `string` | Yes | Internal value for the filter option |
| `label` | `string` | No | Display label for the filter option |
| `count` | `integer` | No | Number of matching records |

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

### `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---