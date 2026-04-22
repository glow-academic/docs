# `POST` `/stream/DuplicateDepartmentApiRequest`

Schema: DuplicateDepartmentApiRequest

## Request Body (`DuplicateDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | Yes | UUID of the department to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatedepartmentapirequest Schema Stream Duplicatedepartmentapirequest Post"
}
```