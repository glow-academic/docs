# `POST` `/stream/DeleteCohortApiResponse`

Schema: DeleteCohortApiResponse

## Request Body (`DeleteCohortApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteCohortResult`](/api-reference/stream/types#deletecohortresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletecohortapiresponse Schema Stream Deletecohortapiresponse Post"
}
```