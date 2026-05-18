# `POST` `/stream/UpdateRubricApiResponse`

# `POST` `/stream/UpdateRubricApiResponse`

Schema: UpdateRubricApiResponse

## Request Body (`UpdateRubricApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`RubricResultItem`](/api-reference/stream/types#rubricresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updaterubricapiresponse Schema Stream Updaterubricapiresponse Post"
}
```
