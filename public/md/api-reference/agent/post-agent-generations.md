# `POST` `/agent/generations`

Generations Agent

List agent generation groups — composable infra architecture.

## Request Body (`GenerationsAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GenerationsAgentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `items` | [`GenerationsAgentListItem`](/api-reference/agent/types#generationsagentlistitem)[] | No | Generation groups |
| `total_count` | `integer` | No | Total number of matching generations |