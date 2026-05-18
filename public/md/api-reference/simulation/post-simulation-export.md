# `POST` `/simulation/export`

Export Simulations

Export all simulations as a clean, denormalized CSV.

## Request Body (`ExportSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | UUID of the simulation to export |
| `search` | `string` | No | Search query text |
| `filter_scenario_ids` | `string`[] | No | Filter by scenario UUIDs |
| `filter_cohort_ids` | `string`[] | No | Filter by cohort UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |

## Response (`ExportSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `file_id` | `string` | Yes | UUID of the files_resource holding the export CSV |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of data rows in the export |