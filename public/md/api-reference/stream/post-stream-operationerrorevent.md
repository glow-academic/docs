# `POST` `/stream/OperationErrorEvent`

# `POST` `/stream/OperationErrorEvent`

Schema: OperationErrorEvent

## Request Body (`OperationErrorEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `message` | `string` | Yes | — |
| `error_type` | `string` | No | — |
| `artifact` | `string` | No | — |
| `operation` | `string` | No | — |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Operationerrorevent Schema Stream Operationerrorevent Post"
}
```
