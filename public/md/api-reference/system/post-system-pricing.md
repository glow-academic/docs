# `POST` `/system/pricing`

Get Pricing

Get pricing top chart — daily cost aggregation + filter options.

## Request Body (`PricingRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `date_from` | `string` | No | Alias for start date |
| `date_to` | `string` | No | Alias for end date |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `page_limit` | `integer` | No | Max chart items per page |
| `page_offset` | `integer` | No | Chart pagination offset |

## Response (`PricingResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `daily` | [`PricingDailyItem`](/api-reference/system/types#pricingdailyitem)[] | No | Daily pricing aggregations |
| `resources` | [`PricingResources`](/api-reference/system/types#pricingresources) | No | Pricing resource metadata |
| `total_count` | `integer` | No | Total number of matching records |
| `model_options` | [`FilterOption`](/api-reference/system/types#filteroption)[] | No | Model filter options |
| `agent_options` | [`FilterOption`](/api-reference/system/types#filteroption)[] | No | Agent filter options |
| `analytics` | [`AnalyticsFacets`](/api-reference/system/types#analyticsfacets) | No | Inline analytics facets for SSR |
| `history` | [`PricingHistoryResponse`](/api-reference/system/types#pricinghistoryresponse) | No | Always null on /pricing/get — use /system/groups instead |