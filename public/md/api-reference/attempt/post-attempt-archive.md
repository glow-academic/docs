# `POST` `/attempt/archive`

Archive Attempts

Bulk archive or unarchive attempts (simulation or benchmark).

## Request Body (`ArchiveAttemptsRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `archived` | `boolean` | Yes | Whether to archive (true) or unarchive (false) |
| `attempt_ids` | `string`[] | No | Specific attempt UUIDs to archive |
| `start_date` | `string` | No | Start date for filter-based archive |
| `end_date` | `string` | No | End date for filter-based archive |
| `cohort_ids` | `string`[] | No | Cohort UUIDs to filter by |
| `department_ids` | `string`[] | No | Department UUIDs to filter by |
| `simulation_ids` | `string`[] | No | Simulation UUIDs to filter by |
| `scenario_ids` | `string`[] | No | Scenario UUIDs to filter by |
| `profile_ids_filter` | `string`[] | No | Profile UUIDs to filter by |
| `infinite_mode` | `boolean` | No | Filter by infinite mode status |

## Response (`ArchiveAttemptsResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `updated_count` | `integer` | No | Number of attempts updated |
| `profile_ids_to_invalidate` | `string`[] | No | Profile IDs whose caches need invalidation |