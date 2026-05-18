# `POST` `/system/group/search`

# `POST` `/system/group/search`

Search Groups

Search groups — composable infra architecture.

## Request Body (`GetGroupListRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE) |
| `agent_id` | `string` | No | Filter by agent UUID |
| `model_id` | `string` | No | Filter by model UUID |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `sort_by` | `string` | No | 'date' | 'cost' | 'tokens' | 'runs' |
| `sort_order` | `string` | No | Sort order: 'asc' or 'desc' |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetGroupListResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `items` | [`GroupListItem`](/api-reference/system/types#grouplistitem)[] | No | Group list items |
| `total_count` | `integer` | No | Total number of matching groups |
