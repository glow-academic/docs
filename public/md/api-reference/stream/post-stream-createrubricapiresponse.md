# `POST` `/stream/CreateRubricApiResponse`

Schema: CreateRubricApiResponse

## Request Body (`CreateRubricApiResponse-Input`)

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
  "title": "Response Createrubricapiresponse Schema Stream Createrubricapiresponse Post"
}
```