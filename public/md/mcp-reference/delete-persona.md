# `delete_persona`

Bulk delete personas — composable infra architecture.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `persona_ids` | `array` | Yes | List of persona UUIDs to delete |

## Example

```json
{
  "name": "delete_persona",
  "arguments": {
    "persona_ids": []
  }
}
```

## Related

- [Persona Guide](/persona)
- [API Endpoint](/api-reference/persona/post-persona-delete)