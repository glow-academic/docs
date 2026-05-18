# `POST` `/attempt/dashboard`

# `POST` `/attempt/dashboard`

Get Dashboard

## Request Body (`DashboardRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `cohort_ids` | `string`[] | No | Cohort IDs to filter by |
| `simulation_ids` | `string`[] | No | Simulation IDs to filter by |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `role_ids` | `string`[] | No | Role resource IDs to filter profiles by |
| `simulation_filters` | `string`[] | No | Simulation filter strings |
| `actor_profile_id` | `string` | No | Acting user profile ID |
| `target_profile_id` | `string` | No | Target profile ID to scope data |
| `page_limit` | `integer` | No | Max items per page |
| `page_offset` | `integer` | No | Pagination offset |
| `rubric_ids` | `string`[] | No | Rubric IDs for section picker |
| `rubric_search` | `string` | No | Search string for rubrics |
| `simulation_picker_ids` | `string`[] | No | Simulation picker IDs |
| `simulation_picker_search` | `string` | No | Search string for simulations |
| `parameter_ids` | `string`[] | No | Parameter IDs for section picker |
| `parameter_search` | `string` | No | Search string for parameters |
| `scenario_ids` | `string`[] | No | Scenario IDs for section picker |
| `scenario_search` | `string` | No | Search string for scenarios |

## Response (`DashboardBundleResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `header_metrics` | [`DashboardHeaderMetrics`](/api-reference/attempt/types#dashboardheadermetrics) | No | Header summary metrics |
| `primary_metrics` | [`DashboardPrimaryMetrics`](/api-reference/attempt/types#dashboardprimarymetrics) | No | Primary dashboard metrics |
| `secondary_metrics` | [`DashboardSecondaryMetrics`](/api-reference/attempt/types#dashboardsecondarymetrics) | No | Secondary dashboard metrics |
| `footer_metrics` | [`DashboardFooterMetrics`](/api-reference/attempt/types#dashboardfootermetrics) | No | Footer dashboard metrics |
| `simulations` | [`DashboardSimulationMeta`](/api-reference/attempt/types#dashboardsimulationmeta)[] | No | Simulation metadata list |
| `scenarios` | [`DashboardScenarioMeta`](/api-reference/attempt/types#dashboardscenariometa)[] | No | Scenario metadata list |
| `rubrics` | [`DashboardRubricMeta`](/api-reference/attempt/types#dashboardrubricmeta)[] | No | Rubric metadata list |
| `parameters` | [`DashboardParameterMeta`](/api-reference/attempt/types#dashboardparametermeta)[] | No | Parameter metadata list |
| `fields` | [`DashboardFieldMeta`](/api-reference/attempt/types#dashboardfieldmeta)[] | No | Field metadata list |
| `thresholds` | [`DashboardThresholds`](/api-reference/attempt/types#dashboardthresholds) | No | Score thresholds configuration |
| `insights` | [`DashboardInsights`](/api-reference/attempt/types#dashboardinsights) | No | Generated insights per section |
| `simulation_options` | [`FilterOption`](/api-reference/attempt/types#filteroption)[] | No | Simulation filter options |
| `profile_name` | `string` | No | Target profile display name |
| `profile_emails` | `string`[] | No | Target profile email addresses |
| `profile_primary_email` | `string` | No | Target profile primary email |
| `profile_role` | `string` | No | Target profile role |
| `analytics` | [`AnalyticsFacets`](/api-reference/attempt/types#analyticsfacets) | No | Inline analytics facets for SSR |
| `history` | [`HistoryResponse`](/api-reference/attempt/types#historyresponse) | No | Always null on /get — use /attempt/dashboard/search instead |
