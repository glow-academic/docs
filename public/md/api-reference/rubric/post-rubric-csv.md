# `POST` `/rubric/csv`

Parse Rubric Csv

Parse a CSV file and return mapped items for preview.

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

## Response (`ParseRubricCsvApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateRubricItem`](/api-reference/rubric/types#createrubricitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |