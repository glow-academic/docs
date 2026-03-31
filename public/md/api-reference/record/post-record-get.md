# `POST` `/record/get`

Get Record

Get record profile report — dashboard metrics for a single profile.

## Request Body (`RecordRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `target_profile_id` | `string` | Yes | Target profile ID to scope data |
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `cohort_ids` | `string`[] | No | Cohort IDs to filter by |
| `simulation_ids` | `string`[] | No | Simulation IDs to filter by |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `simulation_filters` | `string`[] | No | Simulation filter strings |
| `actor_profile_id` | `string` | No | Acting user profile ID |
| `rubric_ids` | `string`[] | No | Rubric IDs for section picker |
| `rubric_search` | `string` | No | Search string for rubrics |
| `simulation_picker_ids` | `string`[] | No | Simulation picker IDs |
| `simulation_picker_search` | `string` | No | Search string for simulations |
| `parameter_ids` | `string`[] | No | Parameter IDs for section picker |
| `parameter_search` | `string` | No | Search string for parameters |
| `scenario_ids` | `string`[] | No | Scenario IDs for section picker |
| `scenario_search` | `string` | No | Search string for scenarios |
| `history_practice` | `boolean` | No | Filter to practice attempts only |
| `history_scenario_ids` | `string`[] | No | Scenario IDs for history filter |
| `history_infinite_mode` | `boolean` | No | Filter by infinite mode status |
| `history_show_archived` | `boolean` | No | Include archived attempts |
| `history_sort_by` | `string` | No | History sort field |
| `history_sort_order` | `string` | No | History sort direction |
| `history_page` | `integer` | No | History pagination page number |
| `history_page_size` | `integer` | No | History items per page |
| `history_simulation_search` | `string` | No | Search string for history simulations |
| `history_scenario_search` | `string` | No | Search string for history scenarios |
| `history_profile_search` | `string` | No | Search string for history profiles |

## Response (`DashboardBundleResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `header_metrics` | [`DashboardHeaderMetrics-Output`](/api-reference/record/types#dashboardheadermetrics-output) | No | Header summary metrics |
| `primary_metrics` | [`DashboardPrimaryMetrics-Output`](/api-reference/record/types#dashboardprimarymetrics-output) | No | Primary dashboard metrics |
| `secondary_metrics` | [`DashboardSecondaryMetrics-Output`](/api-reference/record/types#dashboardsecondarymetrics-output) | No | Secondary dashboard metrics |
| `footer_metrics` | [`DashboardFooterMetrics-Output`](/api-reference/record/types#dashboardfootermetrics-output) | No | Footer dashboard metrics |
| `simulations` | [`DashboardSimulationMeta`](/api-reference/record/types#dashboardsimulationmeta)[] | No | Simulation metadata list |
| `scenarios` | [`DashboardScenarioMeta`](/api-reference/record/types#dashboardscenariometa)[] | No | Scenario metadata list |
| `rubrics` | [`DashboardRubricMeta`](/api-reference/record/types#dashboardrubricmeta)[] | No | Rubric metadata list |
| `parameters` | [`DashboardParameterMeta`](/api-reference/record/types#dashboardparametermeta)[] | No | Parameter metadata list |
| `fields` | [`DashboardFieldMeta`](/api-reference/record/types#dashboardfieldmeta)[] | No | Field metadata list |
| `thresholds` | [`DashboardThresholds`](/api-reference/record/types#dashboardthresholds) | No | Score thresholds configuration |
| `insights` | [`DashboardInsights`](/api-reference/record/types#dashboardinsights) | No | Generated insights per section |
| `simulation_options` | [`FilterOption`](/api-reference/record/types#filteroption)[] | No | Simulation filter options |
| `profile_name` | `string` | No | Target profile display name |
| `profile_emails` | `string`[] | No | Target profile email addresses |
| `profile_primary_email` | `string` | No | Target profile primary email |
| `profile_role` | `string` | No | Target profile role |
| `analytics` | [`AnalyticsFacets-Output`](/api-reference/record/types#analyticsfacets-output) | No | Inline analytics facets for SSR |
| `history` | [`HistoryResponse`](/api-reference/record/types#historyresponse) | No | Inline attempt history response |