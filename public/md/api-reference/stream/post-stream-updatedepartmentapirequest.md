# `POST` `/stream/UpdateDepartmentApiRequest`

# `POST` `/stream/UpdateDepartmentApiRequest`

Schema: UpdateDepartmentApiRequest

## Request Body (`UpdateDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `departments` | [`UpdateDepartmentItem`](/api-reference/stream/types#updatedepartmentitem)[] | Yes | List of departments to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatedepartmentapirequest Schema Stream Updatedepartmentapirequest Post"
}
```
