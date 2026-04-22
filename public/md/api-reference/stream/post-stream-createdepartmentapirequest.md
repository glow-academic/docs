# `POST` `/stream/CreateDepartmentApiRequest`

Schema: CreateDepartmentApiRequest

## Request Body (`CreateDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `departments` | [`CreateDepartmentItem`](/api-reference/stream/types#createdepartmentitem)[] | Yes | List of departments to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createdepartmentapirequest Schema Stream Createdepartmentapirequest Post"
}
```