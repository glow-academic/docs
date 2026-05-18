# `POST` `/stream/CreateProfileApiRequest`

# `POST` `/stream/CreateProfileApiRequest`

Schema: CreateProfileApiRequest

## Request Body (`CreateProfileApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `profiles` | [`CreateProfileItem`](/api-reference/stream/types#createprofileitem)[] | Yes | List of profiles to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createprofileapirequest Schema Stream Createprofileapirequest Post"
}
```
