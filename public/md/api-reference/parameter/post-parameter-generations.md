# `POST` `/parameter/generations`

Generations Parameter

List parameter generation groups — composable infra architecture.

## Request Body (`GenerationsParameterApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GenerationsParameterApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `items` | [`GenerationsParameterListItem`](/api-reference/parameter/types#generationsparameterlistitem)[] | No | Generation groups |
| `total_count` | `integer` | No | Total number of matching generations |