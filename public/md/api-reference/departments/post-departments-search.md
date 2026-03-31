# `POST` `/departments/search`

Search Department

Search departments — composable infra architecture.

## Request Body (`SearchDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`ListDepartmentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `departments` | [`ListDepartmentApiDepartment`](/api-reference/departments/types#listdepartmentapidepartment)[] | No | List of department items |
| `total_count` | `integer` | No | Total number of departments |