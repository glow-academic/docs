# `POST` `/stream/GeneratePayload`

# `POST` `/stream/GeneratePayload`

Schema: GeneratePayload

## Request Body (`GeneratePayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `artifact_type` | `string` | No | — |
| `instructions` | `string`[] | No | — |
| `operations` | `string`[] | No | — |
| `dangerous` | `boolean` | No | — |
| `params` | `object` | No | — |
| `group_id` | `string` | No | — |
| `run_id` | `string` | No | — |
| `modalities` | `string`[] | No | — |
| `audios_id` | `string` | No | — |
| `conversation_id` | `string` | No | — |
| `extra_messages` | `object`[] | No | — |
| `metadata` | `object` | No | — |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Generatepayload Schema Stream Generatepayload Post"
}
```
