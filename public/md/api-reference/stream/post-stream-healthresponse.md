# `POST` `/stream/HealthResponse`

Schema: HealthResponse

## Request Body (`HealthResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `views` | [`HealthViews`](/api-reference/stream/types#healthviews) | No | Health view data |
| `total_count` | `integer` | No | Total number of health entries |
| `analytics` | [`AnalyticsFacets-Input`](/api-reference/stream/types#analyticsfacets-input) | No | Analytics facets for filtering |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Healthresponse Schema Stream Healthresponse Post"
}
```