# `POST` `/stream/CreateProviderApiRequest`

Schema: CreateProviderApiRequest

## Request Body (`CreateProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `providers` | [`CreateProviderItem`](/api-reference/stream/types#createprovideritem)[] | Yes | List of providers to create |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createproviderapirequest Schema Stream Createproviderapirequest Post"
}
```