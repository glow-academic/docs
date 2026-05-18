# `POST` `/stream/DashboardRequest`

# `POST` `/stream/DashboardRequest`

Schema: DashboardRequest

## Request Body (`DashboardRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `cohort_ids` | `string`[] | No | Cohort IDs to filter by |
| `simulation_ids` | `string`[] | No | Simulation IDs to filter by |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `roles` | `string`[] | No | Roles to filter by |
| `simulation_filters` | `string`[] | No | Simulation filter strings |
| `actor_profile_id` | `string` | No | Acting user profile ID |
| `target_profile_id` | `string` | No | Target profile ID to scope data |
| `page_limit` | `integer` | No | Max items per page |
| `page_offset` | `integer` | No | Pagination offset |
| `rubric_ids` | `string`[] | No | Rubric IDs for section picker |
| `rubric_search` | `string` | No | Search string for rubrics |
| `simulation_picker_ids` | `string`[] | No | Simulation picker IDs |
| `simulation_picker_search` | `string` | No | Search string for simulations |
| `parameter_ids` | `string`[] | No | Parameter IDs for section picker |
| `parameter_search` | `string` | No | Search string for parameters |
| `scenario_ids` | `string`[] | No | Scenario IDs for section picker |
| `scenario_search` | `string` | No | Search string for scenarios |
| `history_practice` | `boolean` | No | Filter to practice attempts only |
| `history_scenario_ids` | `string`[] | No | Scenario IDs for history filter |
| `history_infinite_mode` | `boolean` | No | Filter by infinite mode status |
| `history_show_archived` | `boolean` | No | Include archived attempts |
| `history_sort_by` | `string` | No | History sort field |
| `history_sort_order` | `string` | No | History sort direction |
| `history_page` | `integer` | No | History pagination page number |
| `history_page_size` | `integer` | No | History items per page |
| `history_simulation_search` | `string` | No | Search string for history simulations |
| `history_scenario_search` | `string` | No | Search string for history scenarios |
| `history_profile_search` | `string` | No | Search string for history profiles |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Dashboardrequest Schema Stream Dashboardrequest Post"
}
```
