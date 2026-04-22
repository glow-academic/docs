# `POST` `/model/csv`

Parse Model Csv

Parse a CSV file and return mapped items for preview.

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

## Response (`ParseModelCsvApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateModelItem`](/api-reference/model/types#createmodelitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |