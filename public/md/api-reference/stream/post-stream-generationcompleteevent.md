# `POST` `/stream/GenerationCompleteEvent`

# `POST` `/stream/GenerationCompleteEvent`

Schema: GenerationCompleteEvent

## Request Body (`GenerationCompleteEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `artifact_type` | `string` | Yes | Type of artifact generated |
| `group_id` | `string` | Yes | UUID of the generation group |
| `run_id` | `string` | Yes | UUID of the generation run |
| `success` | `boolean` | No | Whether generation succeeded |
| `message` | `string` | No | Completion message |
| `artifact_id` | `string` | No | UUID of the generated artifact |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Generationcompleteevent Schema Stream Generationcompleteevent Post"
}
```
