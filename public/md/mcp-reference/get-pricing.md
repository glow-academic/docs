# `get_pricing`

Get pricing top chart — daily cost aggregation + filter options.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `date_from` | `string` | No | Alias for start date |
| `date_to` | `string` | No | Alias for end date |

## Example

```json
{
  "name": "get_pricing",
  "arguments": {}
}
```

## Related

- [Pricing Guide](/pricing)
- [API Endpoint](/api-reference/pricing/post-pricing-get)