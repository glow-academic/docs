# `POST` `/persona/csv`

# `POST` `/persona/csv`

Parse Persona Csv

Parse a CSV file and return mapped items for preview.

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

## Response (`ParsePersonaCsvApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | UUID of the uploaded CSV file |
| `items` | [`CreatePersonaItem`](/api-reference/persona/types#createpersonaitem)[] | Yes | Parsed persona items for preview |
| `mapped_fields` | `string`[] | Yes | Column keys that were auto-mapped |
| `row_count` | `integer` | Yes | Number of data rows parsed |
