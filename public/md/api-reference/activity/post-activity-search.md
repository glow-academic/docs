# `POST` `/activity/search`

Search Activity

Get activity session history (bottom table, paginated).

## Request Body (`ListActivityRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `date_from` | `string` | No | Filter start date |
| `date_to` | `string` | No | Filter end date |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `roles` | `string`[] | No | Roles to filter by |
| `active` | `boolean` | No | Filter by active status |
| `page` | `integer` | No | Pagination page number |
| `page_size` | `integer` | No | Items per page |
| `sort_order` | `string` | No | Sort direction (asc or desc) |

## Response (`ListActivityResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `data` | [`SessionListItem`](/api-reference/activity/types#sessionlistitem)[] | No | Session history items |
| `total_count` | `integer` | No | Total number of matching records |
| `page` | `integer` | No | Current page number |
| `page_size` | `integer` | No | Items per page |
| `total_pages` | `integer` | No | Total number of pages |