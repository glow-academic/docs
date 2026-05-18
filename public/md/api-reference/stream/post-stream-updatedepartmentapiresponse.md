# `POST` `/stream/UpdateDepartmentApiResponse`

# `POST` `/stream/UpdateDepartmentApiResponse`

Schema: UpdateDepartmentApiResponse

## Request Body (`UpdateDepartmentApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DepartmentResultItem`](/api-reference/stream/types#departmentresultitem)[] | Yes | Per-item update results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatedepartmentapiresponse Schema Stream Updatedepartmentapiresponse Post"
}
```
