# `delete_scenario`

Bulk delete scenarios — composable infra architecture.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `scenario_ids` | `array` | Yes | UUIDs of scenarios to delete |

## Example

```json
{
  "name": "delete_scenario",
  "arguments": {
    "scenario_ids": []
  }
}
```

## Related

- [Scenario Guide](/scenario)
- [API Endpoint](/api-reference/scenarios/post-scenarios-delete)