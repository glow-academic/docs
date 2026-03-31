# `POST` `/stream/DashboardBundleResponse`

Schema: DashboardBundleResponse

## Request Body (`DashboardBundleResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `header_metrics` | [`DashboardHeaderMetrics-Input`](/api-reference/stream/types#dashboardheadermetrics-input) | No | Header summary metrics |
| `primary_metrics` | [`DashboardPrimaryMetrics-Input`](/api-reference/stream/types#dashboardprimarymetrics-input) | No | Primary dashboard metrics |
| `secondary_metrics` | [`DashboardSecondaryMetrics-Input`](/api-reference/stream/types#dashboardsecondarymetrics-input) | No | Secondary dashboard metrics |
| `footer_metrics` | [`DashboardFooterMetrics-Input`](/api-reference/stream/types#dashboardfootermetrics-input) | No | Footer dashboard metrics |
| `simulations` | [`DashboardSimulationMeta`](/api-reference/stream/types#dashboardsimulationmeta)[] | No | Simulation metadata list |
| `scenarios` | [`DashboardScenarioMeta`](/api-reference/stream/types#dashboardscenariometa)[] | No | Scenario metadata list |
| `rubrics` | [`DashboardRubricMeta`](/api-reference/stream/types#dashboardrubricmeta)[] | No | Rubric metadata list |
| `parameters` | [`DashboardParameterMeta`](/api-reference/stream/types#dashboardparametermeta)[] | No | Parameter metadata list |
| `fields` | [`DashboardFieldMeta`](/api-reference/stream/types#dashboardfieldmeta)[] | No | Field metadata list |
| `thresholds` | [`DashboardThresholds`](/api-reference/stream/types#dashboardthresholds) | No | Score thresholds configuration |
| `insights` | [`DashboardInsights`](/api-reference/stream/types#dashboardinsights) | No | Generated insights per section |
| `simulation_options` | [`FilterOption`](/api-reference/stream/types#filteroption)[] | No | Simulation filter options |
| `profile_name` | `string` | No | Target profile display name |
| `profile_emails` | `string`[] | No | Target profile email addresses |
| `profile_primary_email` | `string` | No | Target profile primary email |
| `profile_role` | `string` | No | Target profile role |
| `analytics` | [`AnalyticsFacets-Input`](/api-reference/stream/types#analyticsfacets-input) | No | Inline analytics facets for SSR |
| `history` | [`HistoryResponse`](/api-reference/stream/types#historyresponse) | No | Inline attempt history response |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Dashboardbundleresponse Schema Stream Dashboardbundleresponse Post"
}
```