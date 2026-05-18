# `POST` `/stream/BenchmarkRequest`

# `POST` `/stream/BenchmarkRequest`

Schema: BenchmarkRequest

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

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Benchmarkrequest Schema Stream Benchmarkrequest Post"
}
```
