# `POST` `/department/create`

# `POST` `/department/create`

Create Department

Create departments using composable infra architecture.

## Request Body (`CreateDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `departments` | [`CreateDepartmentItem`](/api-reference/department/types#createdepartmentitem)[] | Yes | List of departments to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateDepartmentApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DepartmentResultItem`](/api-reference/department/types#departmentresultitem)[] | Yes | Per-item creation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
