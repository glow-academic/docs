# `POST` `/benchmark/get`

Get Benchmark

Get benchmark artifact data with the canonical shared benchmark operation.

## Request Body (`BenchmarkRequest`)

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

## Response (`BenchmarkResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | [`BenchmarkEvalOperational`](/api-reference/benchmark/types#benchmarkevaloperational)[] | No | Eval cards for benchmark page |
| `departments` | [`BenchmarkDepartmentItem`](/api-reference/benchmark/types#benchmarkdepartmentitem)[] | No | Department resources |
| `department_options` | [`FilterOption`](/api-reference/benchmark/types#filteroption)[] | No | Department filter options |
| `date_range_earliest` | `string` | No | Earliest date in data range |
| `date_range_latest` | `string` | No | Latest date in data range |
| `history` | [`BenchmarkHistoryResponse`](/api-reference/benchmark/types#benchmarkhistoryresponse) | No | Paginated test history |
| `analytics` | [`AnalyticsFacets-Output`](/api-reference/benchmark/types#analyticsfacets-output) | No | Inline analytics facets for SSR |