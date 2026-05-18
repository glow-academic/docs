# `POST` `/stream/HealthRequest`

# `POST` `/stream/HealthRequest`

Schema: HealthRequest

## Request Body (`HealthRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `service` | `string` | No | Service name to filter by |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Healthrequest Schema Stream Healthrequest Post"
}
```
