# `POST` `/scenario/csv`

# `POST` `/scenario/csv`

Parse Scenario Csv

Parse a CSV file and return mapped items for preview.

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

## Response (`ParseScenarioCsvApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | UUID of the uploaded CSV file |
| `items` | [`CreateScenarioItem`](/api-reference/scenario/types#createscenarioitem)[] | Yes | Parsed scenario items for preview |
| `mapped_fields` | `string`[] | Yes | Column keys that were auto-mapped |
| `row_count` | `integer` | Yes | Number of data rows parsed |
