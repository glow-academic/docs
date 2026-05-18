# `POST` `/stream/GenerationProgressEvent`

# `POST` `/stream/GenerationProgressEvent`

Schema: GenerationProgressEvent

## Request Body (`GenerationProgressEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `artifact_type` | `string` | Yes | Type of artifact being generated |
| `group_id` | `string` | Yes | UUID of the generation group |
| `run_id` | `string` | Yes | UUID of the generation run |
| `completed_resources` | `integer` | Yes | Number of resources completed so far |
| `total_resources` | `integer` | Yes | Total number of resources to generate |
| `percentage` | `integer` | Yes | Progress percentage (0-100) |
| `last_completed_resource` | `string` | Yes | Name of the last completed resource |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Generationprogressevent Schema Stream Generationprogressevent Post"
}
```
