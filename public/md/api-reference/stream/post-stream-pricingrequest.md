# `POST` `/stream/PricingRequest`

# `POST` `/stream/PricingRequest`

Schema: PricingRequest

## Request Body (`PricingRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `date_from` | `string` | No | Alias for start date |
| `date_to` | `string` | No | Alias for end date |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Pricingrequest Schema Stream Pricingrequest Post"
}
```
