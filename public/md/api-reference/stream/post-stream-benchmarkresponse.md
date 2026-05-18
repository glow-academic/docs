# `POST` `/stream/BenchmarkResponse`

# `POST` `/stream/BenchmarkResponse`

Schema: BenchmarkResponse

## Request Body (`BenchmarkResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | [`BenchmarkEvalOperational`](/api-reference/stream/types#benchmarkevaloperational)[] | No | Eval cards for benchmark page |
| `departments` | [`BenchmarkDepartmentItem`](/api-reference/stream/types#benchmarkdepartmentitem)[] | No | Department resources |
| `department_options` | [`FilterOption`](/api-reference/stream/types#filteroption)[] | No | Department filter options |
| `date_range_earliest` | `string` | No | Earliest date in data range |
| `date_range_latest` | `string` | No | Latest date in data range |
| `history` | [`BenchmarkHistoryResponse`](/api-reference/stream/types#benchmarkhistoryresponse) | No | Paginated test history |
| `analytics` | [`AnalyticsFacets-Input`](/api-reference/stream/types#analyticsfacets-input) | No | Inline analytics facets for SSR |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Benchmarkresponse Schema Stream Benchmarkresponse Post"
}
```
