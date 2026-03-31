# `POST` `/departments/create`

Create Department

Create departments using composable infra architecture.

## Request Body (`CreateDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `departments` | [`CreateDepartmentItem`](/api-reference/departments/types#createdepartmentitem)[] | Yes | List of departments to create |

## Response (`CreateDepartmentApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DepartmentResultItem`](/api-reference/departments/types#departmentresultitem)[] | Yes | Per-item creation results |