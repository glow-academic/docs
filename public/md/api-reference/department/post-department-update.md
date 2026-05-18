# `POST` `/department/update`

Update Department

Update departments using composable infra architecture.

## Request Body (`UpdateDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `departments` | [`UpdateDepartmentItem`](/api-reference/department/types#updatedepartmentitem)[] | No | List of departments to update (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, apply ``patch`` to every department matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `patch` | [`UpdateDepartmentPatch`](/api-reference/department/types#updatedepartmentpatch) | No | Shared change set applied to every matched row when ``all=true`` (sparse — only set fields are updated; ``patch.id`` ignored) |
| `search` | `string` | No | Full-text search query |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateDepartmentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DepartmentResultItem`](/api-reference/department/types#departmentresultitem)[] | Yes | Per-item update results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
| `departments` | [`ListDepartmentApiDepartment`](/api-reference/department/types#listdepartmentapidepartment)[] | No | Hydrated rows for the successfully-updated departments (mirrors /department/search shape) |