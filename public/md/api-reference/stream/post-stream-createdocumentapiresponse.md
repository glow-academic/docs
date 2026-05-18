# `POST` `/stream/CreateDocumentApiResponse`

# `POST` `/stream/CreateDocumentApiResponse`

Schema: CreateDocumentApiResponse

## Request Body (`CreateDocumentApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DocumentResultItem`](/api-reference/stream/types#documentresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createdocumentapiresponse Schema Stream Createdocumentapiresponse Post"
}
```
