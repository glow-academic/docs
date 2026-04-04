# `get_leaderboard`

get leaderboard

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `cohort_ids` | `string` | No | Cohort IDs to filter by |
| `department_ids` | `string` | No | Department IDs to filter by |
| `simulation_filters` | `string` | No | Simulation filter strings |
| `target_profile_id` | `string` | No | Target profile ID to scope data |
| `cohort_id` | `string` | No | Single cohort ID (deprecated) |

## Example

```json
{
  "name": "get_leaderboard",
  "arguments": {}
}
```

## Related

- [Leaderboard Guide](/leaderboard)
- [API Endpoint](/api-reference/leaderboard/post-leaderboard-get)