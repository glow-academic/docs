# `search_reports`

Get reports artifact data via composable context resolver.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `cohort_ids` | `string` | No | Cohort IDs to filter by |
| `simulation_ids` | `string` | No | Simulation IDs to filter by |
| `department_ids` | `string` | No | Department IDs to filter by |
| `roles` | `string` | No | Roles to filter by |
| `simulation_filters` | `string` | No | Simulation filter strings |
| `actor_profile_id` | `string` | No | Acting user profile ID |
| `target_profile_id` | `string` | No | Target profile ID to scope data |
| `profile_ids` | `string` | No | Profile IDs to filter by |
| `scenario_ids` | `string` | No | Scenario IDs to filter by |
| `search` | `string` | No | Search string |
| `sort_by` | `string` | No | Sort field name (default: `date`) |
| `sort_order` | `string` | No | Sort direction (asc or desc) (default: `desc`) |
| `page_limit` | `integer` | No | Max items per page (default: `50`) |
| `page_offset` | `integer` | No | Pagination offset (default: `0`) |

## Example

```json
{
  "name": "search_reports",
  "arguments": {}
}
```

## Related

- [Reports Guide](/reports)