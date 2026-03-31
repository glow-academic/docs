# `POST` `/departments/duplicate`

Duplicate Department

Duplicate a department — composable infra architecture.

## Request Body (`DuplicateDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | Yes | UUID of the department to duplicate |

## Response (`DuplicateDepartmentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `department_id` | `string` | Yes | UUID of the newly created department |
| `message` | `string` | Yes | Result message |