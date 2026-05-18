# `POST` `/stream/UpdateEvalApiResponse`

# `POST` `/stream/UpdateEvalApiResponse`

Schema: UpdateEvalApiResponse

## Request Body (`UpdateEvalApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`EvalResultItem`](/api-reference/stream/types#evalresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updateevalapiresponse Schema Stream Updateevalapiresponse Post"
}
```
