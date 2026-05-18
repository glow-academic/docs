# `POST` `/department/duplicate`

# `POST` `/department/duplicate`

Duplicate Department

Duplicate a department — composable infra architecture.

## Request Body (`DuplicateDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | Yes | UUID of the department to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateDepartmentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `department_id` | `string` | Yes | UUID of the newly created department |
| `message` | `string` | Yes | Result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
| `departments` | [`ListDepartmentApiDepartment`](/api-reference/department/types#listdepartmentapidepartment)[] | No | Hydrated row for the newly-created duplicate department (mirrors /department/search shape) |
