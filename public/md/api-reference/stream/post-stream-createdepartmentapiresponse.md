# `POST` `/stream/CreateDepartmentApiResponse`

# `POST` `/stream/CreateDepartmentApiResponse`

Schema: CreateDepartmentApiResponse

## Request Body (`CreateDepartmentApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DepartmentResultItem`](/api-reference/stream/types#departmentresultitem)[] | Yes | Per-item creation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createdepartmentapiresponse Schema Stream Createdepartmentapiresponse Post"
}
```
