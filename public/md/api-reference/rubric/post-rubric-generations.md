# `POST` `/rubric/generations`

Generations Rubric

List rubric generation groups — composable infra architecture.

## Request Body (`GenerationsRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GenerationsRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `items` | [`GenerationsRubricListItem`](/api-reference/rubric/types#generationsrubriclistitem)[] | No | Generation groups |
| `total_count` | `integer` | No | Total number of matching generations |