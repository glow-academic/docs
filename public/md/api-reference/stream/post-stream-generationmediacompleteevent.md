# `POST` `/stream/GenerationMediaCompleteEvent`

# `POST` `/stream/GenerationMediaCompleteEvent`

Schema: GenerationMediaCompleteEvent

## Request Body (`GenerationMediaCompleteEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `modality` | `string` | Yes | Media modality: 'image' or 'video' |
| `artifact_type` | `string` | Yes | Type of artifact generated |
| `group_id` | `string` | No | UUID of the generation group |
| `run_id` | `string` | No | UUID of the generation run |
| `resource_type` | `string` | No | Type of resource generated |
| `resource_id` | `string` | No | UUID of the resource |
| `file_path` | `string` | No | Path to the generated media file |
| `mime_type` | `string` | No | MIME type of the media file |
| `file_size` | `integer` | No | File size in bytes |
| `upload_id` | `string` | No | UUID of the upload record |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Generationmediacompleteevent Schema Stream Generationmediacompleteevent Post"
}
```
