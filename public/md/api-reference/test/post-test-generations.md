# `POST` `/test/generations`

Generations Test

List test generation groups — composable infra architecture.

## Request Body (`GenerationsTestApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GenerationsTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `items` | [`GenerationsTestListItem`](/api-reference/test/types#generationstestlistitem)[] | No | Generation groups |
| `total_count` | `integer` | No | Total number of matching generations |