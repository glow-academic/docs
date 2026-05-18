# `POST` `/auth/csv`

Parse Auth Csv

Parse a CSV file and return mapped items for preview.

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

## Response (`ParseAuthCsvApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateAuthItem`](/api-reference/auth/types#createauthitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |