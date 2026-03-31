# `POST` `/health/get`

Get Health

Get health artifact data.

## Request Body (`HealthRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `service` | `string` | No | Service name to filter by |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`HealthResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `views` | [`HealthViews`](/api-reference/health/types#healthviews) | No | Health view data |
| `total_count` | `integer` | No | Total number of health entries |
| `analytics` | [`AnalyticsFacets-Output`](/api-reference/health/types#analyticsfacets-output) | No | Analytics facets for filtering |