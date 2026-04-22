# `POST` `/stream/DeleteRubricApiResponse`

Schema: DeleteRubricApiResponse

## Request Body (`DeleteRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteRubricResult`](/api-reference/stream/types#deleterubricresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleterubricapiresponse Schema Stream Deleterubricapiresponse Post"
}
```