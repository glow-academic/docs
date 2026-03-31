# `POST` `/stream/GenerationErrorEvent`

Schema: GenerationErrorEvent

## Request Body (`GenerationErrorEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `artifact_type` | `string` | Yes | Type of artifact that failed |
| `group_id` | `string` | No | UUID of the generation group |
| `resource_type` | `string` | No | Type of resource that failed |
| `resource_types` | `string`[] | No | List of resource types that failed |
| `resource_id` | `string` | No | UUID of the failed resource |
| `run_id` | `string` | No | UUID of the generation run |
| `success` | `boolean` | No | Always False for error events |
| `message` | `string` | Yes | Error message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Generationerrorevent Schema Stream Generationerrorevent Post"
}
```