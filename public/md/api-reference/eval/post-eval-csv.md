# `POST` `/eval/csv`

Parse Eval Csv

Parse a CSV file and return mapped items for preview.

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

## Response (`ParseEvalCsvApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateEvalItem`](/api-reference/eval/types#createevalitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |