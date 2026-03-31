# `POST` `/stream/DeleteDepartmentApiRequest`

Schema: DeleteDepartmentApiRequest

## Request Body (`DeleteDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `department_ids` | `string`[] | Yes | UUIDs of departments to delete |

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