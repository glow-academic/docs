# `duplicate_simulation`

Duplicate a simulation — composable infra architecture.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | UUID of the simulation to duplicate |

## Example

```json
{
  "name": "duplicate_simulation",
  "arguments": {
    "simulation_id": "<simulation_id>"
  }
}
```

## Related

- [Simulation Guide](/simulation)
- [API Endpoint](/api-reference/simulations/post-simulations-duplicate)