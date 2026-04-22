# `draft_cohort`

Patch cohort draft — composable infra architecture.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to patch |
| `expected_version` | `integer` | No | Expected draft version for concurrency control (default: `0`) |
| `name` | `string` | No | Name value to create a resource |
| `name_id` | `string` | No | Existing name resource UUID |
| `description` | `string` | No | Description value to create a resource |
| `description_id` | `string` | No | Existing description resource UUID |
| `flag_id` | `string` | No | Flag option UUID |
| `department_ids` | `string` | No | Department UUIDs |
| `simulation_ids` | `string` | No | Simulation UUIDs |
| `profile_ids` | `string` | No | Profile UUIDs |
| `simulation_position_ids` | `string` | No | Existing simulation position UUIDs |
| `simulation_positions` | `string` | No | Simulation position values to create |
| `simulation_availability_ids` | `string` | No | Existing simulation availability UUIDs |
| `simulation_availability` | `string` | No | Simulation availability values to create |
| `profile_persona_ids` | `string` | No | Existing profile persona UUIDs |
| `profile_personas` | `string` | No | Profile persona values to create |

## Example

```json
{
  "name": "draft_cohort",
  "arguments": {}
}
```

## Related

- [Cohort Guide](/cohort)
- [API Endpoint](/api-reference/cohort/patch-cohort-draft)