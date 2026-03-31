# `POST` `/stream/DeleteProviderApiRequest`

Schema: DeleteProviderApiRequest

## Request Body (`DeleteProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_ids` | `string`[] | Yes | List of provider IDs to delete |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleteproviderapirequest Schema Stream Deleteproviderapirequest Post"
}
```