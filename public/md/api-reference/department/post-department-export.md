# `POST` `/department/export`

Export Departments

Export all departments as a clean, denormalized CSV.

## Request Body (`ExportDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | UUID of the department to export |

## Response (`ExportDepartmentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `file_id` | `string` | Yes | UUID of the files_resource holding the export CSV |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of data rows in the export |