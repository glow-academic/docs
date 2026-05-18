# `POST` `/stream/DeleteDepartmentApiRequest`

# `POST` `/stream/DeleteDepartmentApiRequest`

Schema: DeleteDepartmentApiRequest

## Request Body (`DeleteDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `department_ids` | `string`[] | Yes | UUIDs of departments to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletedepartmentapirequest Schema Stream Deletedepartmentapirequest Post"
}
```
