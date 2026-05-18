# `POST` `/department/search`

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
| `departments` | [`ListDepartmentApiDepartment`](/api-reference/department/types#listdepartmentapidepartment)[] | No | List of department items |
| `flag_filter` | [`ListFilterSection`](/api-reference/department/types#listfiltersection) | No | Filter options for flags in list UI |
| `profile_filter` | [`ListFilterSection`](/api-reference/department/types#listfiltersection) | No | Filter options for profiles in list UI |
| `settings_filter` | [`ListFilterSection`](/api-reference/department/types#listfiltersection) | No | Filter options for settings in list UI |
| `logins_filter` | [`ListFilterSection`](/api-reference/department/types#listfiltersection) | No | Filter options for logins in list UI |
| `total_count` | `integer` | No | Total number of departments |
| `import_fields` | [`ImportField`](/api-reference/department/types#importfield)[] | No | CSV import column schema for the bulk-import dialog |