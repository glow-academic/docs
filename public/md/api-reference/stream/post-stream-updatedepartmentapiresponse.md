# `POST` `/stream/UpdateDepartmentApiResponse`

Schema: UpdateDepartmentApiResponse

## Request Body (`UpdateDepartmentApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DepartmentResultItem`](/api-reference/stream/types#departmentresultitem)[] | Yes | Per-item update results |

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