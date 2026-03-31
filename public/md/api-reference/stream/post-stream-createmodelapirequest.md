# `POST` `/stream/CreateModelApiRequest`

Schema: CreateModelApiRequest

## Request Body (`CreateModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `models` | [`CreateModelItem`](/api-reference/stream/types#createmodelitem)[] | Yes | List of models to create |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createmodelapirequest Schema Stream Createmodelapirequest Post"
}
```