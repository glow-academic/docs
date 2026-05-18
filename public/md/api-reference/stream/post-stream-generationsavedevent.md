# `POST` `/stream/GenerationSavedEvent`

# `POST` `/stream/GenerationSavedEvent`

Schema: GenerationSavedEvent

## Request Body (`GenerationSavedEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `artifact_type` | `string` | Yes | Type of artifact saved |
| `group_id` | `string` | Yes | UUID of the generation group |
| `run_id` | `string` | Yes | UUID of the generation run |
| `artifact_id` | `string` | No | UUID of the saved artifact |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Generationsavedevent Schema Stream Generationsavedevent Post"
}
```
