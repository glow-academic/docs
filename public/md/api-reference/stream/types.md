# Stream Types

## `ActivityResources`

Activity resource metadata.

| Field | Type | Required | Description |
|---|---|---|---|
| `profiles` | `object` | No | Profile resources keyed by ID |

---

## `AgentDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected departments |
| `resources` | `any`[] | No | Available department resources |

---

## `AgentDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `AgentDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | UUID of the selected name resource |
| `description_id` | `string` | No | UUID of the selected description resource |
| `flag_ids` | `string`[] | Yes | Selected flag UUIDs |
| `department_ids` | `string`[] | Yes | Selected department UUIDs |
| `model_ids` | `string`[] | Yes | Selected model UUIDs |
| `tool_ids` | `string`[] | Yes | Selected tool UUIDs |
| `reasoning_level_ids` | `string`[] | Yes | Selected reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | Yes | Selected temperature level UUIDs |
| `voice_ids` | `string`[] | Yes | Selected voice UUIDs |
| `rubric_ids` | `string`[] | Yes | Selected rubric UUIDs |

---

## `AgentFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field with the error |
| `message` | `string` | Yes | Human-readable error message |

---

## `AgentFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag config key identifier |
| `label` | `string` | Yes | Display label for the flag |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | UUID of the selected icon resource |
| `flag_option_id` | `string` | No | UUID of the flag option |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `AgentFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`AgentFlagConfig`](#agentflagconfig)[] | No | Currently selected flags |
| `resources` | [`AgentFlagConfig`](#agentflagconfig)[] | No | Available flag configs |

---

## `AgentInstructionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected instruction resource |
| `resources` | `any`[] | No | Available instruction resources |

---

## `AgentModelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected model resource |
| `resources` | `any`[] | No | Available model resources |

---

## `AgentNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `AgentPromptSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected prompt resource |
| `resources` | `any`[] | No | Available prompt resources |

---

## `AgentQualitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected qualities |
| `resources` | `any`[] | No | Available quality resources |

---

## `AgentReasoningLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected reasoning level |
| `resources` | `any`[] | No | Available reasoning levels |

---

## `AgentResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | No | UUID of the affected agent |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`AgentFieldError`](#agentfielderror)[] | No | List of per-field errors |

---

## `AgentRubricSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected rubrics |
| `resources` | `any`[] | No | Available rubric resources |

---

## `AgentTemperatureLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected temperature level |
| `resources` | `any`[] | No | Available temperature levels |

---

## `AgentToolSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected tools |
| `resources` | `any`[] | No | Available tool resources |

---

## `AgentVoiceSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected voices |
| `resources` | `any`[] | No | Available voice resources |

---

## `AggregatedResults`

Aggregated results for the attempt.

| Field | Type | Required | Description |
|---|---|---|---|
| `total_score` | `number` | No | Total score across all chats |
| `total_possible_points` | `number` | No | Maximum possible points |
| `percentage` | `number` | No | Score as a percentage |
| `passed` | `boolean` | No | Whether the attempt passed overall |
| `chats_completed` | `integer` | No | Number of chats completed |
| `total_chats` | `integer` | No | Total number of chats |

---

## `AnalysisEntry`

Analysis entry for chat-level analysis content.

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | No | Analysis content text |

---

## `AnalyticsFacets-Input`

Resolved analytics facets — embeddable in any artifact response.

Contains filter field visibility, available options for dropdowns,
and date range boundaries. Returned inline from artifact get/search
responses so each page has its filter facets ready for SSR.

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`AnalyticsFilterFields`](#analyticsfilterfields) | Yes | Filter field visibility configuration |
| `department_options` | [`AnalyticsFilterOption`](#analyticsfilteroption)[] | No | Department dropdown options |
| `cohort_options` | [`AnalyticsFilterOption`](#analyticsfilteroption)[] | No | Cohort dropdown options |
| `role_options` | `string`[] | No | Available role options |
| `attempt_options` | `string`[] | No | Available attempt options |
| `date_range_earliest` | `string` | No | Earliest available date for filtering |
| `date_range_latest` | `string` | No | Latest available date for filtering |

---

## `AnalyticsFilterField`

Visibility/disabled state for a single filter field.

| Field | Type | Required | Description |
|---|---|---|---|
| `visible` | `boolean` | No | Whether the filter field is visible |
| `disabled` | `boolean` | No | Whether the filter field is disabled |

---

## `AnalyticsFilterFields`

Per-page filter field visibility configuration.

| Field | Type | Required | Description |
|---|---|---|---|
| `date_range` | [`AnalyticsFilterField`](#analyticsfilterfield) | No | Date range filter config |
| `departments` | [`AnalyticsFilterField`](#analyticsfilterfield) | No | Department filter config |
| `cohorts` | [`AnalyticsFilterField`](#analyticsfilterfield) | No | Cohort filter config |
| `roles` | [`AnalyticsFilterField`](#analyticsfilterfield) | No | Role filter config |
| `attempts` | [`AnalyticsFilterField`](#analyticsfilterfield) | No | Attempt filter config |

---

## `AnalyticsFilterOption`

A single filter option for dropdown selectors.

| Field | Type | Required | Description |
|---|---|---|---|
| `value` | `string` | Yes | Option value for the filter |
| `label` | `string` | Yes | Human-readable option label |

---

## `ArtifactSessionGroup-Input`

Single group entry for a session.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the group |
| `group_name` | `string` | No | Name of the group |
| `first_run_at` | `string` | No | Timestamp of the first run |
| `last_run_at` | `string` | No | Timestamp of the last run |
| `run_count` | `integer` | No | Number of runs in the group |
| `total_tokens` | `integer` | No | Total tokens used in the group |
| `total_cost` | `number` \| `string` | No | Total cost of the group |

---

## `ArtifactTypeItem`

Typed artifact operation reference.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | — |
| `operation` | `"get"` \| `"list"` \| `"duplicate"` \| `"delete"` \| `"draft"` \| `"save"` \| `"docs"` \| `"export"` \| `"refresh"` | Yes | — |

---

## `AttemptData`

Attempt-level data.

cohort_id is only populated when practice=False.
is_archived is only populated when practice=True.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the attempt |
| `created_at` | `string` | No | ISO timestamp when attempt was created |
| `infinite_mode` | `boolean` | No | Whether infinite mode is enabled |
| `profile_id` | `string` | No | UUID of the user profile |
| `profile_name` | `string` | No | Display name of the user profile |
| `department_id` | `string` | No | UUID of the department |
| `cohort_id` | `string` | No | UUID of the cohort (home mode only) |
| `is_archived` | `boolean` | No | Whether the attempt is archived |

---

## `AttemptEntries-Input`

Entry payloads grouped by entry type.

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt` | [`GetAttemptResponse`](#getattemptresponse)[] | No | Attempt entry payloads |
| `attempt_chat` | [`ChatData-Input`](#chatdata-input)[] | No | Chat entry payloads |
| `attempt_message` | [`MessageData-Input`](#messagedata-input)[] | No | Message entry payloads |
| `runs` | [`GetRunListViewResponse-Input`](#getrunlistviewresponse-input) | No | Runs list view response |

---

## `AttemptResources-Input`

Resource maps keyed by ID string.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | `object` | No | Scenario resources keyed by ID |
| `personas` | `object` | No | Persona resources keyed by ID |
| `documents` | `object` | No | Document resources keyed by ID |
| `images` | `object` | No | Image resources keyed by ID |
| `videos` | `object` | No | Video resources keyed by ID |
| `objectives` | `object` | No | Objective resources keyed by ID |
| `questions` | `object` | No | Question resources keyed by ID |
| `options` | `object` | No | Option resources keyed by ID |
| `problem_statements` | `object` | No | Problem statement resources keyed by ID |
| `rubrics` | `object` | No | Rubric resources keyed by ID |
| `standard_groups` | `object` | No | Standard group resources keyed by ID |
| `standards` | `object` | No | Standard resources keyed by ID |

---

## `AuthDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `AuthDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource UUID |
| `description_id` | `string` | No | Resolved description resource UUID |
| `flag_id` | `string` | No | Resolved flag option UUID |
| `department_ids` | `string`[] | Yes | Assigned department UUIDs |
| `protocol_ids` | `string`[] | Yes | Assigned protocol UUIDs |
| `slug_ids` | `string`[] | Yes | Assigned slug UUIDs |
| `item_ids` | `string`[] | Yes | Assigned auth item UUIDs |

---

## `AuthFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Validation error message |

---

## `AuthFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | UUID of the selected flag option |
| `show` | `boolean` | No | Whether the flag is visible to the client |
| `required` | `boolean` | No | Whether the flag is required |
| `generated` | `boolean` | No | Whether the flag was AI-generated |

---

## `AuthFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`AuthFlagConfig`](#authflagconfig)[] | No | Currently assigned flag configs |
| `resources` | [`AuthFlagConfig`](#authflagconfig)[] | No | Available flag configs |

---

## `AuthItemResource`

Auth item resource shape for client/editing.

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_item_id` | `string` | No | Unique auth item identifier |
| `name` | `string` | No | Auth item display name |
| `description` | `string` | No | Auth item description text |
| `position` | `integer` | No | Sort position within the auth provider |
| `active` | `boolean` | No | Whether the auth item is active |
| `value_masked` | `string` | No | Masked value for display |
| `key_id` | `string` | No | UUID of the associated key |
| `encrypted` | `boolean` | No | Whether the value is encrypted |
| `generated` | `boolean` | No | Whether the item was AI-generated |

---

## `AuthItemSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`AuthItemResource`](#authitemresource)[] | No | Currently assigned auth items |
| `resources` | [`AuthItemResource`](#authitemresource)[] | No | Available auth item resources |

---

## `AuthNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `AuthProtocolSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned protocols |
| `resources` | `any`[] | No | Available protocol resources |

---

## `AuthResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `auth_id` | `string` | No | UUID of the created or updated auth |
| `message` | `string` | Yes | Result message |
| `errors` | [`AuthFieldError`](#authfielderror)[] | No | Per-field validation errors |

---

## `AuthSlugSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned slugs |
| `resources` | `any`[] | No | Available slug resources |

---

## `AvailableContinuationOptions-Input`

Available continuation options for an attempt.

| Field | Type | Required | Description |
|---|---|---|---|
| `options` | [`ContinuationOption`](#continuationoption)[] | Yes | Available continuation option bundles |

---

## `BenchmarkDepartmentItem`

Department resource for benchmark.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | Yes | Department identifier |
| `name` | `string` | No | Department display name |
| `description` | `string` | No | Department description |

---

## `BenchmarkEvalOperational`

Eval card for the benchmark page — analogous to ChatSimulationOperational.

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_id` | `string` | Yes | Eval identifier |
| `eval_name` | `string` | No | Eval display name |
| `eval_description` | `string` | No | Eval description |
| `model_ids` | `string`[] | No | Associated model IDs |
| `total_tests` | `integer` | No | Total number of tests |
| `archived_tests` | `integer` | No | Number of archived tests |
| `total_invocations` | `integer` | No | Total number of invocations |
| `completed_invocations` | `integer` | No | Number of completed invocations |
| `highest_score` | `number` | No | Highest score achieved |
| `has_passed` | `boolean` | No | Whether eval has been passed |
| `status` | `string` | No | Eval status |
| `infinite_mode` | `boolean` | No | Whether eval uses infinite mode |
| `department_ids` | `string`[] | No | Associated department IDs |
| `rubric_ids` | `string`[] | No | Associated rubric IDs |

---

## `BenchmarkHistoryItem`

History row for a test — analogous to TestHistoryItem.

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | Test identifier |
| `eval_id` | `string` | No | Parent eval ID |
| `eval_name` | `string` | No | Parent eval name |
| `eval_description` | `string` | No | Parent eval description |
| `created_at` | `string` | No | Test creation timestamp |
| `archived` | `boolean` | No | Whether test is archived |
| `infinite_mode` | `boolean` | No | Whether test uses infinite mode |
| `total_invocations` | `integer` | No | Total number of invocations |
| `completed_invocations` | `integer` | No | Number of completed invocations |
| `pending_invocations` | `integer` | No | Number of pending invocations |
| `best_score` | `number` | No | Best score across invocations |
| `has_passed` | `boolean` | No | Whether test has been passed |
| `status` | `string` | No | Test status |

---

## `BenchmarkHistoryResponse`

Paginated history response.

| Field | Type | Required | Description |
|---|---|---|---|
| `data` | [`BenchmarkHistoryItem`](#benchmarkhistoryitem)[] | No | History items |
| `total_count` | `integer` | No | Total number of matching records |
| `page` | `integer` | No | Current page number |
| `page_size` | `integer` | No | Items per page |
| `eval_options` | [`FilterOption`](#filteroption)[] | No | Eval filter options |

---

## `ChatData-Input`

Chat view data with IDs for related resources.

Split into view categories:
- Normal/General View: problem_statement, objectives, personas, images
- Video/Quiz View: videos, questions, options, responses
- Both Views: documents

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the chat |
| `created_at` | `string` | No | ISO timestamp when chat was created |
| `completed` | `boolean` | No | Whether the chat is completed |
| `is_current` | `boolean` | No | Whether this is the current chat |
| `position` | `integer` | No | Position index of the chat |
| `grade` | [`GradeData`](#gradedata) | No | Grade data for the chat |
| `feedbacks` | [`FeedbackEntry`](#feedbackentry)[] | No | Standard-level feedback entries |
| `analyses` | [`AnalysisEntry`](#analysisentry)[] | No | Chat-level analysis content |
| `show_problem_statement` | `boolean` | No | Whether to show the problem statement |
| `show_objectives` | `boolean` | No | Whether to show objectives |
| `copy_paste_allowed` | `boolean` | No | Whether copy-paste is allowed |
| `text_enabled` | `boolean` | No | Whether text input is enabled |
| `audio_enabled` | `boolean` | No | Whether audio input is enabled |
| `grading_state` | [`GradingStateData`](#gradingstatedata) | No | Current grading state data |
| `dynamic_rubric` | [`DynamicRubricData`](#dynamicrubricdata) | No | Dynamic rubric data |
| `scenario_id` | `string` | No | UUID of the associated scenario |
| `problem_statement_id` | `string` | No | UUID of the problem statement |
| `objective_ids` | `string`[] | No | UUIDs of associated objectives |
| `persona_ids` | `string`[] | No | UUIDs of associated personas |
| `image_ids` | `string`[] | No | UUIDs of associated images |
| `video_ids` | `string`[] | No | UUIDs of associated videos |
| `question_ids` | `string`[] | No | UUIDs of associated questions |
| `option_ids` | `string`[] | No | UUIDs of associated options |
| `responses` | [`QuizResponse`](#quizresponse)[] | No | Quiz responses for the chat |
| `document_ids` | `string`[] | No | UUIDs of associated documents |
| `rubric_id` | `string` | No | UUID of the rubric |
| `standard_group_ids` | `string`[] | No | UUIDs of standard groups |
| `standard_ids` | `string`[] | No | UUIDs of standards |

---

## `ChatDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected departments |
| `resources` | `any`[] | No | Available department resources |

---

## `ChatDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected descriptions |
| `resources` | `any`[] | No | Available description resources |

---

## `ChatDocumentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected documents |
| `resources` | `any`[] | No | Available document resources |

---

## `ChatFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected fields |
| `resources` | `any`[] | No | Available field resources |

---

## `ChatFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected flags |
| `resources` | `any`[] | No | Available flag resources |

---

## `ChatImageSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected images |
| `resources` | `any`[] | No | Available image resources |

---

## `ChatNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected names |
| `resources` | `any`[] | No | Available name resources |

---

## `ChatObjectiveSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected objectives |
| `resources` | `any`[] | No | Available objective resources |

---

## `ChatOptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected options |
| `resources` | `any`[] | No | Available option resources |

---

## `ChatParameterFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected parameter fields |
| `resources` | `any`[] | No | Available parameter field resources |

---

## `ChatPersonaSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected personas |
| `resources` | `any`[] | No | Available persona resources |

---

## `ChatProblemStatementSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected problem statements |
| `resources` | `any`[] | No | Available problem statement resources |

---

## `ChatQuestionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected questions |
| `resources` | `any`[] | No | Available question resources |

---

## `ChatScenarioSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected scenarios |
| `resources` | `any`[] | No | Available scenario resources |

---

## `ChatSimulationOperational`

Simulation data for starting a chat session.

Contains data needed to start a simulation AND card display stats.
Now serves as the unified type for home/practice simulation cards.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | UUID of the simulation |
| `simulation_name` | `string` | No | Name of the simulation |
| `simulation_description` | `string` | No | Description of the simulation |
| `time_limit` | `integer` | No | Time limit in seconds |
| `chat_entry_id` | `string` | No | UUID of the chat entry |
| `home_id` | `string` | No | UUID of the home entry |
| `practice_id` | `string` | No | UUID of the practice entry |
| `scenario_ids` | `string`[] | No | Ordered list of scenario IDs |
| `cohort_ids` | `string`[] | No | Cohort IDs this simulation belongs to |
| `color` | `string` | No | Persona display color |
| `icon` | `string` | No | Persona icon identifier |
| `view_mode` | `string` | No | View mode: 'member', 'instructional', or 'practice' |
| `num_sessions` | `integer` | No | Number of attempt sessions |
| `highest_score` | `integer` | No | Highest score percentage rounded |
| `has_passed` | `boolean` | No | Whether the user has passed |
| `status` | `string` | No | Status: 'passed', 'in-progress', or 'not-started' |
| `pass_pct` | `integer` | No | Pass percentage threshold |
| `cohort_names_junction` | `string` | No | Formatted cohort names string |
| `standard_groups` | `string`[] | No | Standard group IDs as strings |
| `practice_simulation` | `boolean` | No | Whether this is a practice simulation |
| `completion_pct` | `integer` | No | Completion percentage (instructional only) |
| `passed_count` | `integer` | No | Number of students passed (instructional only) |
| `in_progress_count` | `integer` | No | Number of students in progress |
| `not_started_count` | `integer` | No | Number of students not started |

---

## `ChatVideoSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected videos |
| `resources` | `any`[] | No | Available video resources |

---

## `CohortDepartment`

Department for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | Department UUID |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `CohortDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortDepartment`](#cohortdepartment)[] | No | Currently selected departments |
| `resources` | [`CohortDepartment`](#cohortdepartment)[] | No | Available departments |

---

## `CohortDescriptionResource`

Description resource for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `CohortDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`CohortDescriptionResource`](#cohortdescriptionresource) | No | Currently selected description resource |
| `resources` | [`CohortDescriptionResource`](#cohortdescriptionresource)[] | No | Available description resources |

---

## `CohortDraftFormState`

Full form state after draft patch — server is source of truth.

Client replaces its local form state with this after every successful patch.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Selected name resource UUID |
| `description_id` | `string` | No | Selected description resource UUID |
| `flag_id` | `string` | No | Selected flag option UUID |
| `department_ids` | `string`[] | No | Selected department UUIDs |
| `simulation_ids` | `string`[] | No | Selected simulation UUIDs |
| `simulation_position_ids` | `string`[] | No | Selected simulation position UUIDs |
| `simulation_availability_ids` | `string`[] | No | Selected simulation availability UUIDs |
| `profile_ids` | `string`[] | No | Selected profile UUIDs |
| `profile_persona_ids` | `string`[] | No | Selected profile persona UUIDs |

---

## `CohortFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that has the error |
| `message` | `string` | Yes | Human-readable error message |

---

## `CohortFlagConfig`

Flag config for cohort — matches client FlagConfig interface.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | No | Flag key identifier |
| `label` | `string` | No | Display label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | Selected flag option UUID |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `CohortFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`CohortFlagConfig`](#cohortflagconfig) | No | Currently selected flag config |
| `resources` | [`CohortFlagConfig`](#cohortflagconfig)[] | No | Available flag configs |

---

## `CohortNameResource`

Name resource for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `CohortNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`CohortNameResource`](#cohortnameresource) | No | Currently selected name resource |
| `resources` | [`CohortNameResource`](#cohortnameresource)[] | No | Available name resources |

---

## `CohortProfile`

Profile for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | No | Profile UUID |
| `name` | `string` | No | Profile name |
| `description` | `string` | No | Profile description |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |

---

## `CohortProfilePersona`

Profile persona for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `profile_id` | `string` | No | Associated profile UUID |
| `persona_id` | `string` | No | Associated persona UUID |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |

---

## `CohortProfilePersonaSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortProfilePersona`](#cohortprofilepersona)[] | No | Currently selected profile personas |
| `resources` | [`CohortProfilePersona`](#cohortprofilepersona)[] | No | Available profile personas |

---

## `CohortProfileSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortProfile`](#cohortprofile)[] | No | Currently selected profiles |
| `resources` | [`CohortProfile`](#cohortprofile)[] | No | Available profiles |

---

## `CohortResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `cohort_id` | `string` | No | Cohort UUID |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`CohortFieldError`](#cohortfielderror)[] | No | List of per-field errors |

---

## `CohortSimulation`

Simulation for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | Simulation UUID |
| `name` | `string` | No | Simulation name |
| `description` | `string` | No | Simulation description |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `CohortSimulationAvailability`

Simulation availability for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `simulation_id` | `string` | No | Associated simulation UUID |
| `time` | `string` | No | Availability time slot |
| `type` | `string` | No | Availability type |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |

---

## `CohortSimulationAvailabilitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortSimulationAvailability`](#cohortsimulationavailability)[] | No | Currently selected availability slots |
| `resources` | [`CohortSimulationAvailability`](#cohortsimulationavailability)[] | No | Available availability slots |

---

## `CohortSimulationPosition`

Simulation position for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | Associated simulation UUID |
| `value` | `integer` | No | Position value |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |

---

## `CohortSimulationPositionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortSimulationPosition`](#cohortsimulationposition)[] | No | Currently selected simulation positions |
| `resources` | [`CohortSimulationPosition`](#cohortsimulationposition)[] | No | Available simulation positions |

---

## `CohortSimulationSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortSimulation`](#cohortsimulation)[] | No | Currently selected simulations |
| `resources` | [`CohortSimulation`](#cohortsimulation)[] | No | Available simulations |

---

## `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

## `ContinuationOption`

A bundle of consecutive scenarios that can be reused from previous attempts.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`PreviousChatOption`](#previouschatoption)[] | Yes | Scenarios in this continuation bundle |
| `total_score` | `number` | Yes | Combined score across scenarios |
| `total_percentage` | `number` | No | Combined score as a percentage |
| `total_time` | `number` | Yes | Combined time across scenarios |

---

## `CreateAgentItem`

Single agent item for create — no agent_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the agent |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `departments` | `string`[] | No | Department names for matching |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `model_ids` | `string`[] | No | Associated model UUIDs |
| `reasoning_level_ids` | `string`[] | No | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | No | Associated temperature level UUIDs |
| `tool_ids` | `string`[] | No | Associated tool UUIDs |
| `voice_ids` | `string`[] | No | Associated voice UUIDs |
| `agent_ids` | `string`[] | No | Associated agent resource UUIDs |

---

## `CreateAuthItem`

Single auth item for create — no auth_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional preset UUID for the new auth provider |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `slug_id` | `string` | No | UUID of the slug resource |
| `slug` | `string` | No | Slug value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the auth provider is active |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `protocol_ids` | `string`[] | No | Protocol resource UUIDs |
| `protocol` | `string` | No | Protocol value to resolve |
| `item_ids` | `string`[] | No | Auth item UUIDs |
| `auth_resource_ids` | `string`[] | No | Auth resource UUIDs |

---

## `CreateCohortItem`

Single cohort item for create — no cohort_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned UUID |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_id` | `string` | No | Flag option UUID |
| `department_ids` | `string`[] | No | Department UUIDs |
| `simulation_ids` | `string`[] | No | Simulation UUIDs |
| `simulation_position_ids` | `string`[] | No | Simulation position UUIDs |
| `simulation_availability_ids` | `string`[] | No | Simulation availability UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs |
| `profile_persona_ids` | `string`[] | No | Profile persona UUIDs |
| `is_inactive` | `boolean` | No | Whether the cohort is inactive |
| `departments` | `string`[] | No | Department names for resolution |
| `simulations` | `string`[] | No | Simulation names for resolution |
| `profiles` | `string`[] | No | Profile names for resolution |

---

## `CreateDepartmentItem`

Single department item for create — no department_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional preset UUID for the new department |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the department is active |
| `settings_ids` | `string`[] | No | Setting UUIDs to assign |
| `department_ids` | `string`[] | No | Sub-department UUIDs to assign |

---

## `CreateDocumentItem`

Single document item for create — no document_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned UUID |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_id` | `string` | No | Flag option UUID |
| `is_inactive` | `boolean` | No | Whether the document is inactive |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `field_ids` | `string`[] | No | Parameter field UUIDs |
| `upload_ids` | `string`[] | No | File upload UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `text_ids` | `string`[] | No | Text resource UUIDs |

---

## `CreateEvalItem`

Single eval item for create — no eval_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned UUID |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_ids` | `string`[] | No | Flag option UUIDs |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `model_ids` | `string`[] | No | Model UUIDs |
| `model_flag_ids` | `string`[] | No | Model flag UUIDs |
| `model_rubric_ids` | `string`[] | No | Model rubric UUIDs |
| `model_position_ids` | `string`[] | No | Model position UUIDs |

---

## `CreateFieldItem`

Single field item for create — no field_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional preset UUID for the new field |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `conditional_parameter_ids` | `string`[] | No | Conditional parameter UUIDs |
| `field_ids` | `string`[] | No | Related field UUIDs |

---

## `CreateModelItem`

Single model item for create — no model_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned identifier |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `departments` | `string`[] | No | Department names to match |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `modality_ids` | `string`[] | No | Modality identifiers |
| `pricing_ids` | `string`[] | No | Pricing tier identifiers |
| `provider_ids` | `string`[] | No | Provider identifiers |
| `quality_ids` | `string`[] | No | Quality level identifiers |
| `reasoning_level_ids` | `string`[] | No | Reasoning level identifiers |
| `temperature_level_ids` | `string`[] | No | Temperature level identifiers |
| `value_ids` | `string`[] | No | Value resource identifiers |
| `voice_ids` | `string`[] | No | Voice identifiers |
| `model_ids` | `string`[] | No | Related model identifiers |

---

## `CreateParameterItem`

Single parameter item for create — no parameter_id.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned identifier |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `departments` | `string`[] | No | Department names to match |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `field_ids` | `string`[] | No | Field identifiers |

---

## `CreatePersonaItem`

Single persona item for create — no persona_id.

Required fields (name, color, icon, instructions): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the new persona |
| `name_id` | `string` | No | UUID of an existing name resource |
| `name` | `string` | No | Display name text (creates new resource if name_id not provided) |
| `color_id` | `string` | No | UUID of an existing color resource |
| `color` | `string` | No | Hex color code, e.g. '#FF5733' (creates new resource if color_id not provided) |
| `icon_id` | `string` | No | UUID of an existing icon resource |
| `icon` | `string` | No | Icon identifier value (creates new resource if icon_id not provided) |
| `instructions_id` | `string` | No | UUID of an existing instruction resource |
| `instructions` | `string` | No | System instruction template (creates new resource if instructions_id not provided) |
| `description_id` | `string` | No | UUID of an existing description resource |
| `description` | `string` | No | Persona description text (creates new resource if description_id not provided) |
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the persona is active (resolved to flag_id) |
| `department_ids` | `string`[] | No | Department UUIDs to associate with this persona |
| `departments` | `string`[] | No | Department names (resolved to UUIDs server-side) |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs to associate |
| `parameter_fields` | `string`[] | No | Parameter field names (resolved to UUIDs server-side) |
| `example_ids` | `string`[] | No | Existing example resource UUIDs to associate |
| `examples` | `string`[] | No | Example texts (creates new example resources) |
| `voice_ids` | `string`[] | No | Voice resource UUIDs to associate |
| `voices` | `string`[] | No | Voice values (resolved to UUIDs server-side) |

---

## `CreateProfileItem`

Single profile item for create — no profile_id.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional preset UUID for the new profile |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `request_limit_id` | `string` | No | UUID of the request limit resource |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `email_ids` | `string`[] | No | Email resource UUIDs |
| `role_ids` | `string`[] | No | Role resource UUIDs |

---

## `CreateProviderItem`

Single provider item for create — no provider_id.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned identifier |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `active_flag_id` | `string` | No | Active flag option identifier |
| `active_flag` | `boolean` | No | Whether the provider is active |
| `department_ids` | `string`[] | No | Department identifiers |
| `departments` | `string`[] | No | Department names to match |
| `endpoint_ids` | `string`[] | No | Endpoint resource identifiers |
| `key_ids` | `string`[] | No | API key resource identifiers |
| `value_ids` | `string`[] | No | Value resource identifiers |

---

## `CreateRubricItem`

Single rubric item for create — no rubric_id.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned UUID |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `active_flag_id` | `string` | No | Active flag option UUID |
| `active_flag` | `boolean` | No | Active flag boolean value |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `point_ids` | `string`[] | No | Point UUIDs |
| `standard_group_ids` | `string`[] | No | Standard group UUIDs |
| `standard_ids` | `string`[] | No | Standard UUIDs |

---

## `CreateScenarioItem`

Single scenario item for create — no scenario_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the scenario |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `problem_statement_id` | `string` | No | UUID of the problem statement resource |
| `problem_statement` | `string` | No | Problem statement text value |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `objectives_enabled_flag_id` | `string` | No | UUID of the objectives enabled flag option |
| `images_enabled_flag_id` | `string` | No | UUID of the images enabled flag option |
| `video_enabled_flag_id` | `string` | No | UUID of the video enabled flag option |
| `questions_enabled_flag_id` | `string` | No | UUID of the questions enabled flag option |
| `problem_statement_enabled_flag_id` | `string` | No | UUID of the problem statement enabled flag option |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `document_ids` | `string`[] | No | Associated document UUIDs |
| `parameter_ids` | `string`[] | No | Associated parameter UUIDs |
| `parameter_field_ids` | `string`[] | No | Associated parameter field UUIDs |
| `image_ids` | `string`[] | No | Associated image UUIDs |
| `objective_ids` | `string`[] | No | Associated objective UUIDs |
| `video_ids` | `string`[] | No | Associated video UUIDs |
| `question_ids` | `string`[] | No | Associated question UUIDs |
| `option_ids` | `string`[] | No | Associated option UUIDs |
| `active_flag` | `boolean` | No | Active flag boolean value |
| `departments` | `string`[] | No | Department names for matching |
| `personas` | `string`[] | No | Persona names for matching |
| `documents` | `string`[] | No | Document names for matching |
| `parameter_fields` | `string`[] | No | Parameter field names for matching |
| `objectives` | `string`[] | No | Objective texts for matching |
| `images` | `string`[] | No | Image names for matching |
| `videos` | `string`[] | No | Video names for matching |
| `questions` | `string`[] | No | Question texts for matching |
| `options` | `string`[] | No | Option texts for matching |

---

## `CreateSettingItem`

Single setting item for create — no setting_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional preset UUID for the new setting |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the setting is active |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `color_ids` | `string`[] | No | Color resource UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs to assign |
| `auth_ids` | `string`[] | No | Auth provider UUIDs |
| `provider_key_ids` | `string`[] | No | Provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Auth item value UUIDs |
| `system_ids` | `string`[] | No | System UUIDs to assign |
| `threshold_ids` | `string`[] | No | Threshold UUIDs to assign |
| `setting_resource_ids` | `string`[] | No | Setting resource UUIDs |

---

## `CreateSimulationItem`

Single simulation item for create — no simulation_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the simulation |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `scenario_ids` | `string`[] | No | Associated scenario UUIDs |
| `scenario_flag_ids` | `string`[] | No | Associated scenario flag UUIDs |
| `scenario_position_ids` | `string`[] | No | Associated scenario position UUIDs |
| `scenario_rubric_ids` | `string`[] | No | Associated scenario rubric UUIDs |
| `scenario_time_limit_ids` | `string`[] | No | Associated scenario time limit UUIDs |
| `is_inactive` | `boolean` | No | Whether the simulation is inactive |
| `is_practice` | `boolean` | No | Whether this is a practice simulation |
| `departments` | `string`[] | No | Department names for matching |
| `scenarios` | `string`[] | No | Scenario names for matching |

---

## `CreateToolItem`

Single tool item for create — no tool_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned identifier |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `arg_positions_ids` | `string`[] | No | Argument position identifiers |
| `args_ids` | `string`[] | No | Argument identifiers |
| `args_outputs_ids` | `string`[] | No | Argument output identifiers |
| `artifact_ids` | `string`[] | No | Artifact identifiers |
| `operation_ids` | `string`[] | No | Operation identifiers |
| `tool_ids` | `string`[] | No | Related tool identifiers |

---

## `DashboardFieldMeta`

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | Field identifier |
| `name` | `string` | No | Field display name |
| `description` | `string` | No | Field description |
| `parameter_id` | `string` | No | Parent parameter ID |
| `parameter_name` | `string` | No | Parent parameter name |

---

## `DashboardFooterMetrics-Input`

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_performance` | [`FooterScenarioPerformance`](#footerscenarioperformance) | No | Scenario attribute performance data |
| `scenario_stats` | [`FooterScenarioStats`](#footerscenariostats) | No | Numeric scenario statistics |
| `scenario_simulation_performance` | [`FooterScenarioSimulationPerformance`](#footerscenariosimulationperformance) | No | Per-simulation scenario performance |
| `scenario_composition` | [`FooterScenarioComposition`](#footerscenariocomposition) | No | Scenario composition analysis |

---

## `DashboardHeaderMetric`

| Field | Type | Required | Description |
|---|---|---|---|
| `current_value` | `number` \| `integer` | No | Current metric value |
| `trend_data` | [`DashboardTrendPoint`](#dashboardtrendpoint)[] | No | Time-series trend data points |
| `has_data` | `boolean` | No | Whether metric has any data |
| `trend_analysis` | `string` | No | Textual trend analysis summary |
| `status` | `string` | No | Metric status indicator |

---

## `DashboardHeaderMetrics-Input`

| Field | Type | Required | Description |
|---|---|---|---|
| `average_score` | [`DashboardHeaderMetric`](#dashboardheadermetric) | No | Average score metric |
| `completion_percentage` | [`DashboardHeaderMetric`](#dashboardheadermetric) | No | Completion percentage metric |
| `first_attempt_pass_rate` | [`DashboardHeaderMetric`](#dashboardheadermetric) | No | First attempt pass rate metric |
| `highest_score` | [`DashboardHeaderMetric`](#dashboardheadermetric) | No | Highest score metric |
| `messages_per_session` | [`DashboardHeaderMetric`](#dashboardheadermetric) | No | Messages per session metric |
| `persona_response_times` | [`DashboardHeaderMetric`](#dashboardheadermetric) | No | Persona response times metric |
| `session_efficiency` | [`DashboardHeaderMetric`](#dashboardheadermetric) | No | Session efficiency metric |
| `stagnation_rate` | [`DashboardHeaderMetric`](#dashboardheadermetric) | No | Stagnation rate metric |
| `time_spent` | [`DashboardHeaderMetric`](#dashboardheadermetric) | No | Time spent metric |
| `total_attempts` | [`DashboardHeaderMetric`](#dashboardheadermetric) | No | Total attempts metric |

---

## `DashboardInsights`

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_trend` | `string` | No | Rubric trend insight text |
| `rubric_heatmap` | `string` | No | Rubric heatmap insight text |
| `attempt_improvement` | `string` | No | Attempt improvement insight text |
| `skill_performance` | `string` | No | Skill performance insight text |
| `scenario_performance` | `string` | No | Scenario performance insight text |
| `scenario_stats` | `string` | No | Scenario stats insight text |
| `scenario_simulation_performance` | `string` | No | Scenario simulation insight text |
| `scenario_composition` | `string` | No | Scenario composition insight text |
| `persona` | `object` | No | Per-persona insights |
| `cohort` | `object` | No | Per-cohort insights |

---

## `DashboardParameterMeta`

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter identifier |
| `name` | `string` | No | Parameter display name |
| `description` | `string` | No | Parameter description |
| `numerical` | `boolean` | No | Whether parameter is numerical |
| `document_parameter` | `boolean` | No | Whether parameter is document-type |
| `persona_parameter` | `boolean` | No | Whether parameter is persona-type |

---

## `DashboardPrimaryMetrics-Input`

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_heatmap` | [`PrimaryRubricHeatmap-Input`](#primaryrubricheatmap-input) | No | Rubric correlation heatmap data |
| `rubric_trend` | [`PrimaryRubricTrend`](#primaryrubrictrend) | No | Rubric trend over time |
| `skill_performance` | [`SecondarySkillPerformance-Input`](#secondaryskillperformance-input) | No | Skill performance radar data |

---

## `DashboardRubricMeta`

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | No | Rubric identifier |
| `name` | `string` | No | Rubric display name |
| `description` | `string` | No | Rubric description |

---

## `DashboardScenarioMeta`

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | Scenario identifier |
| `name` | `string` | No | Scenario display name |
| `description` | `string` | No | Scenario description |

---

## `DashboardSecondaryMetrics-Input`

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_performance` | [`PrimaryPersonaPerformance-Input`](#primarypersonaperformance-input) | No | Persona performance data |
| `cohort_performance` | [`SecondaryCohortPerformance`](#secondarycohortperformance) | No | Cohort performance data |
| `attempt_improvement` | [`SecondaryAttemptImprovement`](#secondaryattemptimprovement) | No | Attempt improvement data |

---

## `DashboardSimulationMeta`

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | Simulation identifier |
| `name` | `string` | No | Simulation display name |
| `description` | `string` | No | Simulation description |
| `department_ids` | `string`[] | No | Associated department IDs |
| `time_limit` | `integer` | No | Time limit in seconds |

---

## `DashboardThresholds`

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `number` | No | Success threshold value |
| `warning` | `number` | No | Warning threshold value |
| `danger` | `number` | No | Danger threshold value |

---

## `DashboardTrendPoint`

| Field | Type | Required | Description |
|---|---|---|---|
| `date` | `string` \| `string` | No | Date of the trend data point |
| `value` | `number` | No | Metric value at this point |
| `count` | `integer` | No | Number of observations |

---

## `DeleteAgentResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | Yes | UUID of the deleted agent |
| `message` | `string` | Yes | Human-readable result message |

---

## `DeleteAuthResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `auth_id` | `string` | Yes | UUID of the deleted auth provider |
| `message` | `string` | Yes | Result message |

---

## `DeleteCohortResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `cohort_id` | `string` | Yes | Cohort UUID |
| `message` | `string` | Yes | Human-readable result message |

---

## `DeleteDepartmentResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `department_id` | `string` | Yes | UUID of the deleted department |
| `message` | `string` | Yes | Result message |

---

## `DeleteDocumentResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `document_id` | `string` | Yes | Document UUID |
| `message` | `string` | Yes | Human-readable result message |

---

## `DeleteEvalResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `eval_id` | `string` | Yes | Eval UUID |
| `message` | `string` | Yes | Human-readable result message |

---

## `DeleteFieldResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `field_id` | `string` | Yes | UUID of the deleted field |
| `message` | `string` | Yes | Result message |

---

## `DeleteModelResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `model_id` | `string` | Yes | Deleted model identifier |
| `message` | `string` | Yes | Result message |

---

## `DeleteParameterResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `parameter_id` | `string` | Yes | Deleted parameter identifier |
| `message` | `string` | Yes | Result message |

---

## `DeletePersonaResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `persona_id` | `string` | Yes | UUID of the deleted persona |
| `message` | `string` | Yes | Human-readable result message |

---

## `DeleteProfileResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `profile_id` | `string` | Yes | UUID of the deleted profile |
| `message` | `string` | Yes | Result message |

---

## `DeleteProviderResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `provider_id` | `string` | Yes | Deleted provider identifier |
| `message` | `string` | Yes | Result message |

---

## `DeleteRubricResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `rubric_id` | `string` | Yes | Rubric UUID |
| `message` | `string` | Yes | Human-readable result message |

---

## `DeleteScenarioResult`

Per-item result from bulk delete.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | No | Whether the operation succeeded |
| `scenario_id` | `string` | No | UUID of the deleted scenario |
| `message` | `string` | No | Human-readable result message |

---

## `DeleteSettingResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `setting_id` | `string` | Yes | UUID of the deleted setting |
| `message` | `string` | Yes | Result message |

---

## `DeleteSimulationResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `simulation_id` | `string` | Yes | UUID of the deleted simulation |
| `message` | `string` | Yes | Human-readable result message |

---

## `DeleteToolResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `tool_id` | `string` | Yes | Deleted tool identifier |
| `message` | `string` | Yes | Result message |

---

## `DepartmentDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `DepartmentDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource UUID |
| `description_id` | `string` | No | Resolved description resource UUID |
| `flag_id` | `string` | No | Resolved flag option UUID |
| `setting_ids` | `string`[] | Yes | Assigned setting UUIDs |

---

## `DepartmentFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Validation error message |

---

## `DepartmentFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | UUID of the selected flag option |
| `show` | `boolean` | No | Whether the flag is visible to the client |
| `required` | `boolean` | No | Whether the flag is required |
| `generated` | `boolean` | No | Whether the flag was AI-generated |

---

## `DepartmentFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DepartmentFlagConfig`](#departmentflagconfig)[] | No | Currently assigned flag configs |
| `resources` | [`DepartmentFlagConfig`](#departmentflagconfig)[] | No | Available flag configs |

---

## `DepartmentNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `DepartmentResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `department_id` | `string` | No | UUID of the created or updated department |
| `message` | `string` | Yes | Result message |
| `errors` | [`DepartmentFieldError`](#departmentfielderror)[] | No | Per-field validation errors |

---

## `DepartmentSettingSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned settings |
| `resources` | `any`[] | No | Available setting resources |

---

## `DocsApiResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `list` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `detail` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `new` | [`PageMetaItem`](#pagemetaitem) | Yes | — |

---

## `DocsResponse-Input`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Resource or entry name |
| `type` | `string` | Yes | Resource or entry type identifier |
| `description` | `string` | Yes | Human-readable description |
| `materialized_view` | [`MvInfo`](#mvinfo) | No | Materialized view metadata |
| `tables` | [`TableInfo`](#tableinfo)[] | Yes | Related database tables |
| `operations` | [`OperationInfo`](#operationinfo)[] | Yes | Available operations |

---

## `DocumentDepartmentResource`

Department resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `DocumentDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentDepartmentResource`](#documentdepartmentresource)[] | No | Currently selected departments |
| `resources` | [`DocumentDepartmentResource`](#documentdepartmentresource)[] | No | Available departments |

---

## `DocumentDescriptionResource`

Description resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `DocumentDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`DocumentDescriptionResource`](#documentdescriptionresource) | No | Currently selected description resource |
| `resources` | [`DocumentDescriptionResource`](#documentdescriptionresource)[] | No | Available description resources |

---

## `DocumentDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Selected name resource UUID |
| `description_id` | `string` | No | Selected description resource UUID |
| `flag_ids` | `string`[] | Yes | Selected flag option UUIDs |
| `department_ids` | `string`[] | Yes | Selected department UUIDs |
| `file_ids` | `string`[] | Yes | Selected file resource UUIDs |
| `image_ids` | `string`[] | Yes | Selected image UUIDs |
| `text_ids` | `string`[] | Yes | Selected text resource UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Selected parameter field UUIDs |
| `parameter_ids` | `string`[] | Yes | Selected parameter UUIDs |

---

## `DocumentFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that has the error |
| `message` | `string` | Yes | Human-readable error message |

---

## `DocumentFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentParameterFieldResource`](#documentparameterfieldresource)[] | No | Currently selected parameter fields |
| `resources` | [`DocumentParameterFieldResource`](#documentparameterfieldresource)[] | No | Available parameter fields |

---

## `DocumentFileResource`

File (upload) resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `DocumentFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Display label |
| `description` | `string` | No | Flag description |
| `flag_option_id` | `string` | No | Flag option UUID to use when enabling |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `DocumentFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentFlagConfig`](#documentflagconfig)[] | No | Currently selected flag configs |
| `resources` | [`DocumentFlagConfig`](#documentflagconfig)[] | No | Available flag configs |

---

## `DocumentImageResource`

Image resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `DocumentImageSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentImageResource`](#documentimageresource)[] | No | Currently selected images |
| `resources` | [`DocumentImageResource`](#documentimageresource)[] | No | Available images |

---

## `DocumentNameResource`

Name resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `DocumentNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`DocumentNameResource`](#documentnameresource) | No | Currently selected name resource |
| `resources` | [`DocumentNameResource`](#documentnameresource)[] | No | Available name resources |

---

## `DocumentParameterFieldResource`

Parameter field resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `field_id` | `string` | No | Associated field UUID |
| `parameter_id` | `string` | No | Associated parameter UUID |
| `name` | `string` | No | Field name |
| `description` | `string` | No | Field description |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `DocumentParameterSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`GetParameterResponse`](#getparameterresponse)[] | No | Currently selected parameters |
| `resources` | [`GetParameterResponse`](#getparameterresponse)[] | No | Available parameters |

---

## `DocumentResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `document_id` | `string` | No | Document UUID |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`DocumentFieldError`](#documentfielderror)[] | No | List of per-field errors |

---

## `DocumentTextResource`

Text resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `DocumentTextSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentTextResource`](#documenttextresource)[] | No | Currently selected text resources |
| `resources` | [`DocumentTextResource`](#documenttextresource)[] | No | Available text resources |

---

## `DocumentUploadSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentFileResource`](#documentfileresource)[] | No | Currently selected file uploads |
| `resources` | [`DocumentFileResource`](#documentfileresource)[] | No | Available file uploads |

---

## `DraftFileValue`

Value for creating a file via the draft endpoint.

Client provides the upload_id from a finalized TUS upload.
Server creates the full chain: files_resource → files_entry → file_uploads_entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | Upload UUID from a finalized TUS upload |

---

## `DraftFormState`

Full form state after draft patch — server is source of truth.

Client replaces its local form state with this after every successful patch.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Currently selected name resource UUID |
| `description_id` | `string` | No | Currently selected description resource UUID |
| `instructions_id` | `string` | No | Currently selected instruction resource UUID |
| `color_id` | `string` | No | Currently selected color resource UUID |
| `icon_id` | `string` | No | Currently selected icon resource UUID |
| `active_flag_id` | `string` | No | Currently selected flag option UUID |
| `department_ids` | `string`[] | No | Currently associated department UUIDs |
| `example_ids` | `string`[] | No | Currently associated example resource UUIDs |
| `parameter_field_ids` | `string`[] | No | Currently associated parameter field UUIDs |
| `voice_ids` | `string`[] | No | Currently associated voice resource UUIDs |

---

## `DraftProfilePersonaValue`

Value for creating a profile_persona resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | Yes | Associated profile UUID |
| `persona_id` | `string` | Yes | Associated persona UUID |

---

## `DraftScenarioFlagValue`

Value for creating a scenario_flag resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | Yes | UUID of the parent scenario |
| `flag_id` | `string` | Yes | UUID of the flag resource |

---

## `DraftScenarioPositionValue`

Value for creating a scenario_position resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | Yes | UUID of the parent scenario |
| `value` | `integer` | Yes | Position value |

---

## `DraftScenarioRubricValue`

Value for creating a scenario_rubric resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | Yes | UUID of the parent scenario |
| `rubric_id` | `string` | Yes | UUID of the rubric resource |

---

## `DraftScenarioTimeLimitValue`

Value for creating a scenario_time_limit resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | Yes | UUID of the parent scenario |
| `time_limit_seconds` | `integer` | Yes | Time limit in seconds |
| `negative` | `boolean` | No | Whether the time limit is negative |

---

## `DraftSimulationAvailabilityValue`

Value for creating a simulation_availability resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | Associated simulation UUID |
| `time` | `string` | Yes | Availability time slot |
| `type` | `string` | Yes | Availability type |

---

## `DraftSimulationPositionValue`

Value for creating a simulation_position resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | Associated simulation UUID |
| `value` | `integer` | Yes | Position value |

---

## `DraftTextValue`

Value for creating a text via the draft endpoint.

Client provides text content.
Server creates the full chain: uploads_entry → texts_resource → texts_entry → text_uploads_entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Text content to create |

---

## `DynamicRubricData`

Dynamic rubric information for a chat.

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | No | UUID of the chat |
| `score` | `number` | No | Overall rubric score |
| `passed` | `boolean` | No | Whether the rubric was passed |
| `time_taken` | `number` | No | Time taken in seconds |
| `skill_scores` | [`SkillScore`](#skillscore)[] | No | Scores per skill |
| `skill_feedbacks` | [`SkillFeedback`](#skillfeedback)[] | No | Feedback per skill |
| `total_possible_points` | `number` | No | Maximum possible points |

---

## `EntryTypeItem`

Typed entry operation reference.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | — |
| `operation` | `"get"` \| `"search"` \| `"docs"` \| `"create"` \| `"refresh"` | Yes | — |

---

## `EvalDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected departments |
| `resources` | `any`[] | No | Available departments |

---

## `EvalDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `EvalDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Selected name resource UUID |
| `description_id` | `string` | No | Selected description resource UUID |
| `flag_ids` | `string`[] | Yes | Selected flag option UUIDs |
| `department_ids` | `string`[] | Yes | Selected department UUIDs |
| `model_ids` | `string`[] | Yes | Selected model UUIDs |
| `rubric_ids` | `string`[] | Yes | Selected rubric UUIDs |

---

## `EvalFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that has the error |
| `message` | `string` | Yes | Human-readable error message |

---

## `EvalFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Display label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | Selected flag option UUID |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `EvalFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`EvalFlagConfig`](#evalflagconfig) | No | Currently selected flag config |
| `resources` | [`EvalFlagConfig`](#evalflagconfig)[] | No | Available flag configs |

---

## `EvalModelFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected model flags |
| `resources` | `any`[] | No | Available model flags |

---

## `EvalModelPositionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected model positions |
| `resources` | `any`[] | No | Available model positions |

---

## `EvalModelRubricSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected model rubrics |
| `resources` | `any`[] | No | Available model rubrics |

---

## `EvalModelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected models |
| `resources` | `any`[] | No | Available models |

---

## `EvalNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `EvalResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `eval_id` | `string` | No | Eval UUID |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`EvalFieldError`](#evalfielderror)[] | No | List of per-field errors |

---

## `FeedbackEntry`

Feedback by standard for grading state.

standard_group_id is derived from standards metadata lookup.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the feedback entry |
| `standard_id` | `string` | No | UUID of the associated standard |
| `standard_group_id` | `string` | No | UUID of the standard group |
| `total` | `number` | No | Total score for this standard |
| `feedback` | `string` | No | Feedback text for this standard |

---

## `FieldConditionalParameterSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`GetParameterResponse`](#getparameterresponse)[] | No | Currently assigned conditional parameters |
| `resources` | [`GetParameterResponse`](#getparameterresponse)[] | No | Available conditional parameter resources |

---

## `FieldDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned departments |
| `resources` | `any`[] | No | Available department resources |

---

## `FieldDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `FieldDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource UUID |
| `description_id` | `string` | No | Resolved description resource UUID |
| `flag_id` | `string` | No | Resolved flag option UUID |
| `department_ids` | `string`[] | Yes | Assigned department UUIDs |
| `conditional_parameter_ids` | `string`[] | Yes | Assigned conditional parameter UUIDs |

---

## `FieldFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Validation error message |

---

## `FieldFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | UUID of the selected flag option |
| `show` | `boolean` | No | Whether the flag is visible to the client |
| `required` | `boolean` | No | Whether the flag is required |
| `generated` | `boolean` | No | Whether the flag was AI-generated |

---

## `FieldFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`FieldFlagConfig`](#fieldflagconfig) | No | Currently selected flag config |
| `resources` | [`FieldFlagConfig`](#fieldflagconfig)[] | No | Available flag configs |

---

## `FieldNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `FieldResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `field_id` | `string` | No | UUID of the created or updated field |
| `message` | `string` | Yes | Result message |
| `errors` | [`FieldFieldError`](#fieldfielderror)[] | No | Per-field validation errors |

---

## `FilterOption`

A single filter option for dropdown selectors.

| Field | Type | Required | Description |
|---|---|---|---|
| `value` | `string` | Yes | Internal value for the filter option |
| `label` | `string` | No | Display label for the filter option |
| `count` | `integer` | No | Number of matching records |

---

## `FooterNumericAttemptFact`

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter identifier |
| `level_label` | `string` | No | Numeric level label |
| `level_value` | `number` | No | Numeric level value |
| `score` | `number` | No | Score value |
| `attempts` | `integer` | No | Number of attempts |

---

## `FooterNumericScenarioFact`

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter identifier |
| `scenario_id` | `string` | No | Associated scenario ID |
| `level_label` | `string` | No | Numeric level label |
| `level_value` | `number` | No | Numeric level value |

---

## `FooterScenarioAttributeAttemptFact`

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter identifier |
| `parameter_item_id` | `string` | No | Parameter item identifier |
| `date` | `string` | No | Date of the attempt fact |
| `timestamp` | `integer` | No | Unix timestamp |
| `avg_score` | `number` | No | Average score |
| `attempts` | `integer` | No | Number of attempts |
| `passed_attempts` | `integer` | No | Number of passing attempts |

---

## `FooterScenarioAttributeScenarioFact`

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter identifier |
| `parameter_item_id` | `string` | No | Parameter item identifier |
| `scenario_id` | `string` | No | Associated scenario ID |

---

## `FooterScenarioComposition`

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_summaries` | [`FooterScenarioCompositionSummary`](#footerscenariocompositionsummary)[] | No | Per-scenario composition summaries |
| `chat_parameter_facts` | [`FooterScenarioCompositionParamFact`](#footerscenariocompositionparamfact)[] | No | Chat parameter composition facts |
| `valid_scenario_ids` | `string`[] | No | Valid scenario IDs in scope |
| `status` | `string` | No | Section status indicator |

---

## `FooterScenarioCompositionParamFact`

Parameter counts per (scenario, group) — group is 'high' or 'low'.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | Associated scenario ID |
| `group` | `string` | No | Score group (high or low) |
| `parameter_id` | `string` | No | Parameter identifier |
| `parameter_item_id` | `string` | No | Parameter item identifier |
| `chat_count` | `integer` | No | Number of chats in this group |

---

## `FooterScenarioCompositionSummary`

Per-scenario summary with high/low chat split.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | Associated scenario ID |
| `name` | `string` | No | Scenario display name |
| `total_chats` | `integer` | No | Total number of chats |
| `high_count` | `integer` | No | Count of high-scoring chats |
| `low_count` | `integer` | No | Count of low-scoring chats |
| `high_avg_score` | `number` | No | Average score of high group |
| `low_avg_score` | `number` | No | Average score of low group |

---

## `FooterScenarioPerformance`

| Field | Type | Required | Description |
|---|---|---|---|
| `attribute_attempt_facts` | [`FooterScenarioAttributeAttemptFact`](#footerscenarioattributeattemptfact)[] | No | Attribute-level attempt facts |
| `attribute_scenario_facts` | [`FooterScenarioAttributeScenarioFact`](#footerscenarioattributescenariofact)[] | No | Attribute-level scenario facts |
| `valid_parameter_ids` | `string`[] | No | Valid parameter IDs in scope |
| `status` | `string` | No | Section status indicator |

---

## `FooterScenarioSimulationFact`

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | Associated scenario ID |
| `simulation_id` | `string` | No | Associated simulation ID |
| `simulation_name` | `string` | No | Simulation display name |
| `avg_score` | `number` | No | Average score |
| `success_rate` | `number` | No | Success rate percentage |
| `total_attempts` | `integer` | No | Total number of attempts |
| `completed_attempts` | `integer` | No | Number of completed attempts |

---

## `FooterScenarioSimulationPerformance`

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_facts` | [`FooterScenarioSimulationFact`](#footerscenariosimulationfact)[] | No | Per-simulation scenario facts |
| `valid_scenario_ids` | `string`[] | No | Valid scenario IDs in scope |
| `status` | `string` | No | Section status indicator |

---

## `FooterScenarioStats`

| Field | Type | Required | Description |
|---|---|---|---|
| `numeric_attempt_facts` | [`FooterNumericAttemptFact`](#footernumericattemptfact)[] | No | Numeric parameter attempt facts |
| `numeric_scenario_facts` | [`FooterNumericScenarioFact`](#footernumericscenariofact)[] | No | Numeric parameter scenario facts |
| `valid_numeric_parameter_ids` | `string`[] | No | Valid numeric parameter IDs |
| `status` | `string` | No | Section status indicator |

---

## `GetAgentDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `model_ids` | `string`[] | Yes | Associated model UUIDs |
| `tool_ids` | `string`[] | Yes | Associated tool UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `reasoning_level_ids` | `string`[] | Yes | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | Yes | Associated temperature level UUIDs |
| `voice_ids` | `string`[] | Yes | Associated voice UUIDs |
| `quality_ids` | `string`[] | Yes | Associated quality UUIDs |
| `rubric_ids` | `string`[] | No | Associated rubric UUIDs |

---

## `GetAttemptResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |
| `simulation_id` | `string` | Yes | — |
| `profile_id` | `string` | Yes | — |
| `user_persona_id` | `string` | Yes | — |
| `personas_id` | `string` | Yes | — |
| `cohort_id` | `string` | Yes | — |
| `department_id` | `string` | Yes | — |
| `practice` | `boolean` | Yes | — |
| `attempt_created_at` | `string` | Yes | — |
| `infinite_mode` | `boolean` | Yes | — |
| `num_chats` | `integer` | Yes | — |
| `is_archived` | `boolean` | Yes | — |
| `scenario_ids` | `string`[] | Yes | — |
| `chat_entry_id` | `string` | Yes | — |
| `attempt_chat_id` | `string` | Yes | — |

---

## `GetAuthDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `item_ids` | `string`[] | Yes | Associated item UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `protocol_ids` | `string`[] | Yes | Associated protocol UUIDs |
| `slug_ids` | `string`[] | Yes | Associated slug UUIDs |

---

## `GetCohortDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_persona_ids` | `string`[] | Yes | Associated profile persona UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `simulation_availability_ids` | `string`[] | Yes | Associated simulation availability UUIDs |
| `simulation_position_ids` | `string`[] | Yes | Associated simulation position UUIDs |
| `simulation_ids` | `string`[] | Yes | Associated simulation UUIDs |

---

## `GetDepartmentDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `setting_ids` | `string`[] | Yes | Associated setting UUIDs |

---

## `GetDocumentDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `file_ids` | `string`[] | Yes | Associated file UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `image_ids` | `string`[] | Yes | Associated image UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Associated parameter field UUIDs |
| `parameter_ids` | `string`[] | Yes | Associated parameter UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `text_ids` | `string`[] | Yes | Associated text UUIDs |

---

## `GetEvalDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `model_ids` | `string`[] | Yes | Associated model UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `rubric_ids` | `string`[] | Yes | Associated rubric UUIDs |

---

## `GetFieldDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `conditional_parameter_ids` | `string`[] | Yes | Associated conditional parameter UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |

---

## `GetFieldResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the field |
| `name` | `string` | Yes | Field name |
| `description` | `string` | Yes | Field description |
| `value` | `string` | Yes | Field value |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `conditional_parameter_ids` | `string`[] | Yes | Associated conditional parameter UUIDs |
| `created_at` | `string` | Yes | Creation timestamp |
| `active` | `boolean` | Yes | Whether the field is active |
| `generated` | `boolean` | Yes | Whether the field was AI-generated |
| `mcp` | `boolean` | Yes | Whether the field is from MCP |

---

## `GetHealthResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `date_hour` | `string` | Yes | — |
| `service` | `string` | Yes | — |
| `check_count` | `integer` | Yes | — |
| `ok_count` | `integer` | Yes | — |
| `fail_count` | `integer` | Yes | — |
| `uptime_percent` | `number` | Yes | — |
| `avg_latency_ms` | `number` | Yes | — |
| `min_latency_ms` | `number` | Yes | — |
| `max_latency_ms` | `number` | Yes | — |
| `latest_ok` | `boolean` | Yes | — |
| `latest_error` | `string` | Yes | — |

---

## `GetMetricsSearchResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `date_hour` | `string` | Yes | — |
| `sample_count` | `integer` | Yes | — |
| `avg_cpu_percent` | `number` | Yes | — |
| `min_cpu_percent` | `number` | Yes | — |
| `max_cpu_percent` | `number` | Yes | — |
| `avg_latency_ms` | `number` | Yes | — |
| `min_latency_ms` | `number` | Yes | — |
| `max_latency_ms` | `number` | Yes | — |
| `avg_memory_bytes` | `integer` | Yes | — |
| `min_memory_bytes` | `integer` | Yes | — |
| `max_memory_bytes` | `integer` | Yes | — |
| `max_requests_total` | `integer` | Yes | — |
| `max_errors_total` | `integer` | Yes | — |

---

## `GetModelDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `modality_ids` | `string`[] | Yes | Associated modality UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `pricing_ids` | `string`[] | Yes | Associated pricing UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `provider_ids` | `string`[] | Yes | Associated provider UUIDs |
| `quality_ids` | `string`[] | Yes | Associated quality UUIDs |
| `reasoning_level_ids` | `string`[] | Yes | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | Yes | Associated temperature level UUIDs |
| `value_ids` | `string`[] | Yes | Associated value UUIDs |
| `voice_ids` | `string`[] | Yes | Associated voice UUIDs |

---

## `GetParameterDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `field_ids` | `string`[] | Yes | Associated field UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |

---

## `GetParameterResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the parameter |
| `name` | `string` | Yes | Parameter name |
| `description` | `string` | Yes | Parameter description |
| `value` | `string` | Yes | Parameter value |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `persona_parameter` | `boolean` | Yes | Whether this is a persona parameter |
| `document_parameter` | `boolean` | Yes | Whether this is a document parameter |
| `scenario_parameter` | `boolean` | Yes | Whether this is a scenario parameter |
| `video_parameter` | `boolean` | Yes | Whether this is a video parameter |
| `field_ids` | `string`[] | Yes | Associated field UUIDs |
| `created_at` | `string` | Yes | Creation timestamp |
| `active` | `boolean` | Yes | Whether the parameter is active |
| `generated` | `boolean` | Yes | Whether the parameter was AI-generated |
| `mcp` | `boolean` | Yes | Whether the parameter is from MCP |

---

## `GetPersonaDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `color_ids` | `string`[] | Yes | Associated color UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `example_ids` | `string`[] | Yes | Associated example UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `icon_ids` | `string`[] | Yes | Associated icon UUIDs |
| `instruction_ids` | `string`[] | Yes | Associated instruction UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Associated parameter field UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `voice_ids` | `string`[] | Yes | Associated voice UUIDs |

---

## `GetPersonaResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `icon` | `string` | Yes | — |
| `color` | `string` | Yes | — |
| `department_ids` | `string`[] | Yes | — |
| `instructions` | `string` | Yes | — |
| `examples` | `string`[] | Yes | — |
| `parameter_field_ids` | `string`[] | Yes | — |
| `created_at` | `string` | Yes | — |
| `active` | `boolean` | Yes | — |
| `generated` | `boolean` | Yes | — |
| `mcp` | `boolean` | Yes | — |

---

## `GetProfileDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `email_ids` | `string`[] | Yes | Associated email UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `request_limit_ids` | `string`[] | Yes | Associated request limit UUIDs |
| `role_ids` | `string`[] | Yes | Associated role UUIDs |

---

## `GetProviderDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `endpoint_ids` | `string`[] | Yes | Associated endpoint UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `key_ids` | `string`[] | Yes | Associated key UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `value_ids` | `string`[] | Yes | Associated value UUIDs |

---

## `GetRubricDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `point_ids` | `string`[] | Yes | Associated point UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `standard_group_ids` | `string`[] | Yes | Associated standard group UUIDs |
| `standard_ids` | `string`[] | Yes | Associated standard UUIDs |

---

## `GetRunListViewResponse-Input`

Response containing run list data.

| Field | Type | Required | Description |
|---|---|---|---|
| `items` | [`RunViewItem`](#runviewitem)[] | No | Run data items |
| `total_count` | `integer` | No | Total count before pagination |

---

## `GetScenarioDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `document_ids` | `string`[] | Yes | Associated document UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `image_ids` | `string`[] | Yes | Associated image UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `objective_ids` | `string`[] | Yes | Associated objective UUIDs |
| `option_ids` | `string`[] | Yes | Associated option UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Associated parameter field UUIDs |
| `persona_ids` | `string`[] | Yes | Associated persona UUIDs |
| `problem_statement_ids` | `string`[] | Yes | Associated problem statement UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `question_ids` | `string`[] | Yes | Associated question UUIDs |
| `video_ids` | `string`[] | Yes | Associated video UUIDs |

---

## `GetSettingDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `agent_ids` | `string`[] | Yes | Associated agent UUIDs |
| `auth_item_key_ids` | `string`[] | Yes | Associated auth item key UUIDs |
| `auth_ids` | `string`[] | Yes | Associated auth UUIDs |
| `color_ids` | `string`[] | Yes | Associated color UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `item_ids` | `string`[] | Yes | Associated item UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `provider_key_ids` | `string`[] | Yes | Associated provider key UUIDs |
| `threshold_ids` | `string`[] | Yes | Associated threshold UUIDs |

---

## `GetSimulationDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `scenario_flag_ids` | `string`[] | Yes | Associated scenario flag UUIDs |
| `scenario_position_ids` | `string`[] | Yes | Associated scenario position UUIDs |
| `scenario_rubric_ids` | `string`[] | Yes | Associated scenario rubric UUIDs |
| `scenario_time_limit_ids` | `string`[] | Yes | Associated scenario time limit UUIDs |
| `scenario_ids` | `string`[] | Yes | Associated scenario UUIDs |

---

## `GetTestFeedbackResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `feedback_id` | `string` | Yes | — |
| `grade_id` | `string` | Yes | — |
| `total` | `integer` | Yes | — |
| `feedback` | `string` | Yes | — |
| `total_points` | `integer` | Yes | — |
| `pass_points` | `integer` | Yes | — |
| `created_at` | `string` | Yes | — |

---

## `GetTestGradeResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `invocation_id` | `string` | Yes | — |
| `run_id` | `string` | Yes | — |
| `created_at` | `string` | Yes | — |
| `updated_at` | `string` | Yes | — |
| `passed` | `boolean` | Yes | — |
| `score` | `integer` | Yes | — |
| `time_taken` | `integer` | Yes | — |
| `generated` | `boolean` | Yes | — |
| `mcp` | `boolean` | Yes | — |
| `active` | `boolean` | Yes | — |
| `call_id` | `string` | Yes | — |

---

## `GetTestInvocationGroupsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `test_invocation_id` | `string` | Yes | — |
| `created_at` | `string` | Yes | — |
| `updated_at` | `string` | Yes | — |
| `generated` | `boolean` | Yes | — |
| `mcp` | `boolean` | Yes | — |
| `active` | `boolean` | Yes | — |
| `agent_ids` | `string`[] | No | — |
| `reasoning_level_ids` | `string`[] | No | — |
| `temperature_level_ids` | `string`[] | No | — |
| `voice_ids` | `string`[] | No | — |
| `prompt_ids` | `string`[] | No | — |
| `instruction_ids` | `string`[] | No | — |
| `tool_ids` | `string`[] | No | — |
| `quality_ids` | `string`[] | No | — |
| `modality_ids` | `string`[] | No | — |

---

## `GetTestInvocationResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `test_id` | `string` | Yes | — |
| `group_id` | `string` | Yes | — |
| `invocation_created_at` | `string` | Yes | — |
| `invocation_title` | `string` | Yes | — |
| `use_custom` | `boolean` | Yes | — |
| `position` | `integer` | Yes | — |
| `invocation_completed` | `boolean` | Yes | — |
| `grade_id` | `string` | Yes | — |
| `grade_score` | `number` | Yes | — |
| `grade_passed` | `boolean` | Yes | — |
| `grade_time_taken` | `number` | Yes | — |
| `rubric_id` | `string` | Yes | — |
| `agent_ids` | `string`[] | No | — |
| `quality_id` | `string` | No | — |
| `department_ids` | `string`[] | No | — |
| `run_agent_ids` | `string`[] | No | — |
| `group_agent_ids` | `string`[] | No | — |
| `voice_id` | `string` | No | — |
| `temperature_level_id` | `string` | No | — |
| `reasoning_level_id` | `string` | No | — |
| `modality_ids` | `string`[] | No | — |

---

## `GetTestInvocationRunsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `test_invocation_id` | `string` | Yes | — |
| `created_at` | `string` | Yes | — |
| `updated_at` | `string` | Yes | — |
| `generated` | `boolean` | Yes | — |
| `mcp` | `boolean` | Yes | — |
| `active` | `boolean` | Yes | — |
| `agent_ids` | `string`[] | No | — |
| `reasoning_level_ids` | `string`[] | No | — |
| `temperature_level_ids` | `string`[] | No | — |
| `voice_ids` | `string`[] | No | — |
| `prompt_ids` | `string`[] | No | — |
| `instruction_ids` | `string`[] | No | — |
| `tool_ids` | `string`[] | No | — |
| `quality_ids` | `string`[] | No | — |
| `modality_ids` | `string`[] | No | — |

---

## `GetTestResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `eval_id` | `string` | Yes | — |
| `profile_id` | `string` | Yes | — |
| `department_ids` | `string`[] | Yes | — |
| `test_name` | `string` | Yes | — |
| `test_description` | `string` | Yes | — |
| `num_invocations` | `integer` | Yes | — |
| `infinite_mode` | `boolean` | Yes | — |
| `is_dynamic` | `boolean` | Yes | — |
| `archived` | `boolean` | Yes | — |
| `test_created_at` | `string` | Yes | — |

---

## `GetToolDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `arg_position_ids` | `string`[] | Yes | Associated arg position UUIDs |
| `arg_ids` | `string`[] | Yes | Associated arg UUIDs |
| `args_output_ids` | `string`[] | Yes | Associated args output UUIDs |
| `artifact_ids` | `string`[] | Yes | Associated artifact UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `operation_ids` | `string`[] | Yes | Associated operation UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |

---

## `GradeData`

Grade information for a chat (no id - not a resource).

| Field | Type | Required | Description |
|---|---|---|---|
| `score` | `number` | No | Grade score achieved |
| `passed` | `boolean` | No | Whether the grade is passing |
| `description` | `string` | No | Grade description text |
| `time_taken` | `integer` | No | Time taken in seconds |
| `total_points` | `number` | No | Total available points |
| `pass_points` | `number` | No | Points required to pass |

---

## `GradingStateData`

Grading state for a chat in Record format.

All fields are Records keyed by standard_id strings.
This is the exact format the client needs - no transformation required.

| Field | Type | Required | Description |
|---|---|---|---|
| `achieved_standards` | `object` | No | Map of standard_id to achieved status |
| `passed_standards` | `object` | No | Map of standard_id to passed status |
| `feedback_by_standard_id` | `object` | No | Map of standard_id to feedback text |

---

## `GroupDetailCallItem`

A tool/function call made during the run.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the call |
| `template_name` | `string` | No | Name of the call template |
| `file_path` | `string` | No | File path associated with the call |
| `created_at` | `string` | Yes | Timestamp when the call was made |

---

## `GroupDetailMessageItem`

A message with upload IDs by media type.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the message |
| `role` | `string` | No | Role of the message sender |
| `text_upload_ids` | `string`[] | No | Text upload UUIDs |
| `audio_upload_ids` | `string`[] | No | Audio upload UUIDs |
| `image_upload_ids` | `string`[] | No | Image upload UUIDs |
| `video_upload_ids` | `string`[] | No | Video upload UUIDs |
| `file_upload_ids` | `string`[] | No | File upload UUIDs |
| `call_upload_ids` | `string`[] | No | Call upload UUIDs |
| `calls` | [`GroupDetailCallItem`](#groupdetailcallitem)[] | No | Tool calls in this message |

---

## `GroupDetailResourceItem`

A named resource (model, agent, or profile).

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | No | UUID of the model |
| `agent_id` | `string` | No | UUID of the agent |
| `profile_id` | `string` | No | UUID of the profile |
| `name` | `string` | No | Display name of the resource |

---

## `GroupDetailRunItem`

Run metadata for the detail response.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the run |
| `created_at` | `string` | Yes | Timestamp when the run was created |
| `input_tokens` | `integer` | No | Number of input tokens consumed |
| `output_tokens` | `integer` | No | Number of output tokens generated |
| `cached_input_tokens` | `integer` | No | Number of cached input tokens |
| `cost` | `number` | No | Cost of the run |
| `model_id` | `string` | No | UUID of the model used |
| `agent_id` | `string` | No | UUID of the agent used |
| `profile_id` | `string` | No | UUID of the user profile |

---

## `GroupDetailRunWithMessages-Input`

A run with its messages and context boundary.

| Field | Type | Required | Description |
|---|---|---|---|
| `run` | [`GroupDetailRunItem`](#groupdetailrunitem) | Yes | Run metadata |
| `messages` | [`GroupDetailMessageItem`](#groupdetailmessageitem)[] | No | Messages in this run |
| `previous_context_start_index` | `integer` | No | Index where previous context starts |

---

## `HealthViews`

Health view data.

| Field | Type | Required | Description |
|---|---|---|---|
| `service_hourly` | [`GetHealthResponse`](#gethealthresponse)[] | No | Hourly service health entries |
| `metrics_hourly` | [`GetMetricsSearchResponse`](#getmetricssearchresponse)[] | No | Hourly metrics entries |

---

## `HighlightEntry`

Highlight entry within a strength.

| Field | Type | Required | Description |
|---|---|---|---|
| `section` | `string` | No | Highlighted text section |
| `idx` | `integer` | No | Index position of the highlight |

---

## `HistoryItem`

Single attempt row in history list.

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `date` | `string` | No | Formatted date string of the attempt |
| `profile_id` | `string` | No | UUID of the profile who took the attempt |
| `profile_name` | `string` | No | Display name of the profile |
| `simulation_id` | `string` | No | UUID of the simulation |
| `simulation_name` | `string` | No | Display name of the simulation |
| `num_scenarios` | `integer` | No | Total number of scenarios in the attempt |
| `num_scenarios_completed` | `integer` | No | Number of scenarios completed |
| `infinite_mode` | `boolean` | No | Whether the attempt is in infinite mode |
| `time_limit` | `integer` | No | Time limit in seconds |
| `persona_names_junction` | `string`[] | No | Persona names from junction table |
| `persona_colors_junction` | `string`[] | No | Persona colors from junction table |
| `scenario_ids` | `string`[] | No | UUIDs of associated scenarios |
| `scenario_titles` | `string`[] | No | Titles of associated scenarios |
| `department_ids` | `string`[] | No | Associated department IDs |
| `score` | `integer` | No | Overall attempt score |
| `score_status` | `string` | No | Score status label (e.g. pass, fail) |
| `pass_pct` | `integer` | No | Pass percentage threshold |
| `show_view` | `boolean` | No | Whether the view action is available |
| `show_continue` | `boolean` | No | Whether the continue action is available |
| `is_archived` | `boolean` | No | Whether the attempt is archived |
| `practice_simulation` | `boolean` | No | Whether this is a practice simulation |
| `practice_scenario_id` | `string` | No | UUID of the practice scenario |

---

## `HistoryResponse`

Paginated attempt history list.

| Field | Type | Required | Description |
|---|---|---|---|
| `data` | [`HistoryItem`](#historyitem)[] | No | List of history items |
| `total_count` | `integer` | No | Total number of matching records |
| `page` | `integer` | No | Current page number |
| `page_size` | `integer` | No | Items per page |
| `total_pages` | `integer` | No | Total number of pages |
| `simulation_options` | [`FilterOption`](#filteroption)[] | No | Filter options for simulations |
| `scenario_options` | [`FilterOption`](#filteroption)[] | No | Filter options for scenarios |
| `profile_options` | [`FilterOption`](#filteroption)[] | No | Filter options for profiles |

---

## `LeaderboardAccoladeWinner`

Winner summary for a leaderboard accolade.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | No | Winner profile identifier |
| `name` | `string` | No | Winner display name |
| `value` | `number` \| `integer` | No | Winning metric value |
| `details` | `string` | No | Additional accolade details |

---

## `LeaderboardAccoladeWinners`

Deterministic accolade winners computed server-side.

| Field | Type | Required | Description |
|---|---|---|---|
| `highest_scorer` | [`LeaderboardAccoladeWinner`](#leaderboardaccoladewinner) | No | Highest scorer accolade winner |
| `perfect_score` | [`LeaderboardAccoladeWinner`](#leaderboardaccoladewinner) | No | Perfect score accolade winner |
| `longest_convo` | [`LeaderboardAccoladeWinner`](#leaderboardaccoladewinner) | No | Longest conversation accolade winner |
| `response_times` | [`LeaderboardAccoladeWinner`](#leaderboardaccoladewinner) | No | Best response times accolade winner |
| `quickest_pass` | [`LeaderboardAccoladeWinner`](#leaderboardaccoladewinner) | No | Quickest pass accolade winner |
| `the_persistent` | [`LeaderboardAccoladeWinner`](#leaderboardaccoladewinner) | No | Most persistent accolade winner |
| `marathon_runner` | [`LeaderboardAccoladeWinner`](#leaderboardaccoladewinner) | No | Marathon runner accolade winner |
| `rapid_riser` | [`LeaderboardAccoladeWinner`](#leaderboardaccoladewinner) | No | Rapid riser accolade winner |

---

## `LeaderboardHeaderMetrics`

Top-level leaderboard summary metrics.

| Field | Type | Required | Description |
|---|---|---|---|
| `total_profiles` | [`LeaderboardMetric`](#leaderboardmetric) | No | Total profiles metric |
| `total_attempts` | [`LeaderboardMetric`](#leaderboardmetric) | No | Total attempts metric |
| `average_score` | [`LeaderboardMetric`](#leaderboardmetric) | No | Average score metric |
| `perfect_scores` | [`LeaderboardMetric`](#leaderboardmetric) | No | Perfect scores metric |

---

## `LeaderboardMetric`

Metric envelope expected by leaderboard UI.

| Field | Type | Required | Description |
|---|---|---|---|
| `has_data` | `boolean` | No | Whether metric has any data |
| `method` | `string` | No | Aggregation method used |
| `current_value` | `number` \| `integer` | No | Current metric value |
| `key_field` | `string` | No | Key field name for the metric |
| `trend_data` | `string`[] | No | Trend data points |
| `data_points` | `string`[] | No | Raw data point values |
| `hover` | `string` | No | Hover tooltip text |

---

## `LeaderboardResources`

Resource metadata keyed by ID for normalized hydration.

| Field | Type | Required | Description |
|---|---|---|---|
| `profiles` | `object` | No | Profile resources keyed by ID |
| `simulations` | `object` | No | Simulation resources keyed by ID |
| `scenarios` | `object` | No | Scenario resources keyed by ID |

---

## `LeaderboardSectionStatus`

Section-level status metadata.

| Field | Type | Required | Description |
|---|---|---|---|
| `has_data` | `boolean` | No | Whether section has any data |
| `status` | `string` | No | Section status indicator |
| `note` | `string` | No | Optional status note |

---

## `LeaderboardSections-Input`

Business-computed section skeletons (built in permissions.py).

| Field | Type | Required | Description |
|---|---|---|---|
| `header_metrics` | [`LeaderboardHeaderMetrics`](#leaderboardheadermetrics) | No | Header summary metrics |
| `rankings` | [`LeaderboardSectionStatus`](#leaderboardsectionstatus) | No | Rankings section status |
| `accolades` | [`LeaderboardSectionStatus`](#leaderboardsectionstatus) | No | Accolades section status |
| `trends` | [`LeaderboardSectionStatus`](#leaderboardsectionstatus) | No | Trends section status |
| `filters` | [`LeaderboardSectionStatus`](#leaderboardsectionstatus) | No | Filters section status |
| `accolade_winners` | [`LeaderboardAccoladeWinners`](#leaderboardaccoladewinners) | No | Computed accolade winners |

---

## `MessageData-Input`

Message with contents, feedbacks, and hints.

- contents: Array of content entries with display info (name/icon/color)
- feedbacks: Unified strengths/improvements (only present after grading)
- hints: Practice mode hints (only present in practice mode)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the message |
| `chat_id` | `string` | No | UUID of the parent chat |
| `type` | `string` | No | Message type: 'query' or 'response' |
| `created_at` | `string` | No | ISO timestamp when message was created |
| `completed` | `boolean` | No | Whether the message is complete |
| `contents` | [`app__infra__attempt__types__ContentEntry`](#app-infra-attempt-types-contententry)[] | No | Content entries with display info |
| `feedbacks` | [`MessageFeedbackEntry`](#messagefeedbackentry)[] | No | Unified strength and improvement feedbacks |
| `hints` | [`app__infra__attempt__types__HintEntry`](#app-infra-attempt-types-hintentry)[] | No | Hints for practice mode |
| `parent_message_id` | `string` | No | UUID of the parent message in tree |
| `sibling_index` | `integer` | No | Index among sibling messages |
| `sibling_count` | `integer` | No | Total number of sibling messages |

---

## `MessageFeedbackEntry`

Unified feedback entry for messages (strength or improvement).

Combines strengths and improvements into a single type with a `type` field.
- type="strength": has highlights (sections to highlight as good)
- type="improvement": has replaces (sections to replace with suggestions)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | Unique ID: \{message_id\}-\{type\}-\{index\} |
| `name` | `string` | No | Name of the feedback item |
| `description` | `string` | No | Description of the feedback |
| `type` | `string` | No | Feedback type: 'strength' or 'improvement' |
| `highlights` | [`HighlightEntry`](#highlightentry)[] | No | Highlighted sections for strengths |
| `replaces` | [`ReplacementEntry`](#replacemententry)[] | No | Replacement suggestions for improvements |

---

## `ModelDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned departments |
| `resources` | `any`[] | No | Available departments |

---

## `ModelDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `ModelDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource identifier |
| `description_id` | `string` | No | Resolved description resource identifier |
| `flag_ids` | `string`[] | Yes | Flag option identifiers |
| `department_ids` | `string`[] | Yes | Department identifiers |
| `modality_ids` | `string`[] | Yes | Modality identifiers |
| `pricing_ids` | `string`[] | Yes | Pricing tier identifiers |
| `provider_ids` | `string`[] | Yes | Provider identifiers |
| `quality_ids` | `string`[] | Yes | Quality level identifiers |
| `reasoning_level_ids` | `string`[] | Yes | Reasoning level identifiers |
| `temperature_level_ids` | `string`[] | Yes | Temperature level identifiers |
| `value_ids` | `string`[] | Yes | Value resource identifiers |
| `voice_ids` | `string`[] | Yes | Voice identifiers |

---

## `ModelFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that caused the error |
| `message` | `string` | Yes | Error message describing the issue |

---

## `ModelFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | Option ID to use when enabling |
| `show` | `boolean` | No | Whether to display this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this flag was AI-generated |

---

## `ModelFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ModelFlagConfig`](#modelflagconfig)[] | No | Currently active flag configs |
| `resources` | [`ModelFlagConfig`](#modelflagconfig)[] | No | Available flag configs |

---

## `ModelModalitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned modalities |
| `resources` | `any`[] | No | Available modalities |

---

## `ModelNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `ModelPricingSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned pricing tiers |
| `resources` | `any`[] | No | Available pricing tiers |

---

## `ModelProviderSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected provider resource |
| `resources` | `any`[] | No | Available provider resources |

---

## `ModelQualitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned quality levels |
| `resources` | `any`[] | No | Available quality levels |

---

## `ModelReasoningLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned reasoning levels |
| `resources` | `any`[] | No | Available reasoning levels |

---

## `ModelResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `model_id` | `string` | No | Model unique identifier |
| `message` | `string` | Yes | Result message |
| `errors` | [`ModelFieldError`](#modelfielderror)[] | No | List of field-level errors |

---

## `ModelTemperatureLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned temperature levels |
| `resources` | `any`[] | No | Available temperature levels |

---

## `ModelValueSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected value resource |
| `resources` | `any`[] | No | Available value resources |

---

## `ModelVoiceSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned voices |
| `resources` | `any`[] | No | Available voices |

---

## `MvInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Materialized view name |
| `definition` | `string` | Yes | SQL definition of the view |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the view |

---

## `OperationInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Operation name |
| `description` | `string` | Yes | Human-readable description of the operation |
| `params` | [`ParamInfo`](#paraminfo)[] | Yes | List of operation parameters |
| `returns` | `object` | No | Return type schema |

---

## `PageMetaItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | — |
| `description` | `string` | Yes | — |

---

## `ParamInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Parameter name |
| `type` | `string` | Yes | Parameter data type |
| `required` | `boolean` | Yes | Whether the parameter is required |
| `default` | `any` | No | Default value if not required |

---

## `ParameterDepartmentResource`

Department resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ParameterDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ParameterDepartmentResource`](#parameterdepartmentresource)[] | No | Currently assigned departments |
| `resources` | [`ParameterDepartmentResource`](#parameterdepartmentresource)[] | No | Available departments |

---

## `ParameterDescriptionResource`

Description resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ParameterDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ParameterDescriptionResource`](#parameterdescriptionresource) | No | Currently selected description resource |
| `resources` | [`ParameterDescriptionResource`](#parameterdescriptionresource)[] | No | Available description resources |

---

## `ParameterDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource identifier |
| `description_id` | `string` | No | Resolved description resource identifier |
| `flag_ids` | `string`[] | Yes | Flag option identifiers |
| `department_ids` | `string`[] | Yes | Department identifiers |
| `field_ids` | `string`[] | Yes | Field identifiers |

---

## `ParameterFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that caused the error |
| `message` | `string` | Yes | Error message describing the issue |

---

## `ParameterFieldResource`

Parameter field resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `field_id` | `string` | No | Associated field identifier |
| `parameter_id` | `string` | No | Parent parameter identifier |
| `name` | `string` | No | Field display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ParameterFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ParameterFieldResource`](#parameterfieldresource)[] | No | Currently assigned fields |
| `resources` | [`ParameterFieldResource`](#parameterfieldresource)[] | No | Available fields |

---

## `ParameterFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | Option ID to use when enabling |
| `show` | `boolean` | No | Whether to display this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this flag was AI-generated |

---

## `ParameterFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ParameterFlagConfig`](#parameterflagconfig)[] | No | Currently active flag configs |
| `resources` | [`ParameterFlagConfig`](#parameterflagconfig)[] | No | Available flag configs |

---

## `ParameterNameResource`

Name resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ParameterNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ParameterNameResource`](#parameternameresource) | No | Currently selected name resource |
| `resources` | [`ParameterNameResource`](#parameternameresource)[] | No | Available name resources |

---

## `ParameterResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `parameter_id` | `string` | No | Parameter unique identifier |
| `message` | `string` | Yes | Result message |
| `errors` | [`ParameterFieldError`](#parameterfielderror)[] | No | List of field-level errors |

---

## `PersonaChartRow`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | No | Persona display name |
| `score` | `number` | No | Average score for persona |
| `sessions` | `integer` | No | Number of sessions |
| `color` | `string` | No | Chart color for persona |
| `trend_data` | [`PersonaTrendPoint`](#personatrendpoint)[] | No | Trend data points for persona |
| `simulation_ids` | `string`[] | No | Associated simulation IDs |
| `status` | `string` | No | Row status indicator |

---

## `PersonaColorJunction`

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_name` | `string` | No | Persona display name |
| `color` | `string` | No | Assigned chart color |

---

## `PersonaColorResource`

Color resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `hex_code` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

## `PersonaColorSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`PersonaColorResource`](#personacolorresource) | No | — |
| `resources` | [`PersonaColorResource`](#personacolorresource)[] | No | — |

---

## `PersonaDepartmentResource`

Department resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

## `PersonaDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`PersonaDepartmentResource`](#personadepartmentresource)[] | No | — |
| `resources` | [`PersonaDepartmentResource`](#personadepartmentresource)[] | No | — |

---

## `PersonaDescriptionResource`

Description resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

## `PersonaDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`PersonaDescriptionResource`](#personadescriptionresource) | No | — |
| `resources` | [`PersonaDescriptionResource`](#personadescriptionresource)[] | No | — |

---

## `PersonaExampleResource`

Example resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `example` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

## `PersonaExampleSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`PersonaExampleResource`](#personaexampleresource)[] | No | — |
| `resources` | [`PersonaExampleResource`](#personaexampleresource)[] | No | — |

---

## `PersonaFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Human-readable validation error message |

---

## `PersonaFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | — |
| `label` | `string` | Yes | — |
| `description` | `string` | No | — |
| `icon_id` | `string` | No | — |
| `flag_option_id` | `string` | No | — |
| `show` | `boolean` | No | — |
| `required` | `boolean` | No | — |
| `generated` | `boolean` | No | — |

---

## `PersonaFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`PersonaFlagConfig`](#personaflagconfig) | No | — |
| `resources` | [`PersonaFlagConfig`](#personaflagconfig)[] | No | — |

---

## `PersonaIconResource`

Icon resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `value` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

## `PersonaIconSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`PersonaIconResource`](#personaiconresource) | No | — |
| `resources` | [`PersonaIconResource`](#personaiconresource)[] | No | — |

---

## `PersonaInstructionResource`

Instruction resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `template` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

## `PersonaInstructionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`PersonaInstructionResource`](#personainstructionresource) | No | — |
| `resources` | [`PersonaInstructionResource`](#personainstructionresource)[] | No | — |

---

## `PersonaNameResource`

Name resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

## `PersonaNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`PersonaNameResource`](#personanameresource) | No | — |
| `resources` | [`PersonaNameResource`](#personanameresource)[] | No | — |

---

## `PersonaParameterFieldResource`

Parameter field resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `field_id` | `string` | No | — |
| `parameter_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

## `PersonaParameterFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`PersonaParameterFieldResource`](#personaparameterfieldresource)[] | No | — |
| `resources` | [`PersonaParameterFieldResource`](#personaparameterfieldresource)[] | No | — |

---

## `PersonaParameterSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`GetParameterResponse`](#getparameterresponse)[] | No | — |
| `resources` | [`GetParameterResponse`](#getparameterresponse)[] | No | — |

---

## `PersonaResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded for this item |
| `persona_id` | `string` | No | UUID of the affected persona |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`PersonaFieldError`](#personafielderror)[] | No | Per-field validation errors, if any |

---

## `PersonaTrendPoint`

| Field | Type | Required | Description |
|---|---|---|---|
| `date` | `string` | No | Date of the trend point |
| `score` | `number` | No | Score value at this point |
| `timestamp` | `integer` | No | Unix timestamp of the point |
| `simulation_id` | `string` | No | Associated simulation ID |

---

## `PersonaVoiceResource`

Voice resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `voice` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

## `PersonaVoiceSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`PersonaVoiceResource`](#personavoiceresource)[] | No | — |
| `resources` | [`PersonaVoiceResource`](#personavoiceresource)[] | No | — |

---

## `PreviousChatOption`

A single chat_entry's best previous graded attempt_chat.

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_entry_id` | `string` | No | ID of the chat entry |
| `scenario_name` | `string` | No | Name of the scenario |
| `attempt_chat_id` | `string` | No | ID of the attempt chat |
| `score` | `number` | No | Score achieved |
| `percentage` | `number` | No | Score as a percentage |
| `time_taken` | `number` | No | Time taken in seconds |
| `position` | `integer` | No | Position in the sequence |

---

## `PricingDailyItem-Input`

A single day+model aggregation bucket.

| Field | Type | Required | Description |
|---|---|---|---|
| `date_key` | `string` | Yes | Date bucket key |
| `model_id` | `string` | No | Associated model identifier |
| `total_cost` | `number` \| `string` | No | Total cost for this bucket |
| `run_count` | `integer` | No | Number of runs in this bucket |

---

## `PricingResources`

Pricing resource metadata.

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | `object` | No | Agent resources keyed by ID |
| `models` | `object` | No | Model resources keyed by ID |

---

## `PrimaryPersonaPerformance-Input`

| Field | Type | Required | Description |
|---|---|---|---|
| `chart_data` | [`PersonaChartRow`](#personachartrow)[] | No | Persona performance chart rows |
| `valid_simulation_ids` | `string`[] | No | Valid simulation IDs in scope |
| `persona_colors_junction` | [`PersonaColorJunction`](#personacolorjunction)[] | No | Persona-to-color mappings |
| `status` | `string` | No | Section status indicator |

---

## `PrimaryRubricHeatmap-Input`

| Field | Type | Required | Description |
|---|---|---|---|
| `matrices` | [`RubricHeatmapMatrix-Input`](#rubricheatmapmatrix-input)[] | No | Heatmap matrices per rubric |
| `valid_rubric_ids` | `string`[] | No | Valid rubric IDs in scope |
| `status` | `string` | No | Section status indicator |

---

## `PrimaryRubricTrend`

| Field | Type | Required | Description |
|---|---|---|---|
| `trend_data` | [`PrimaryRubricTrendPoint`](#primaryrubrictrendpoint)[] | No | Rubric trend time-series data |
| `valid_rubric_ids` | `string`[] | No | Valid rubric IDs in scope |
| `status` | `string` | No | Section status indicator |

---

## `PrimaryRubricTrendPoint`

| Field | Type | Required | Description |
|---|---|---|---|
| `date` | `string` | No | Date of the trend point |
| `standard_group_id` | `string` | No | Standard group identifier |
| `standard_group_name` | `string` | No | Standard group display name |
| `avg_pct` | `number` | No | Average percentage score |

---

## `ProfileDepartmentResource`

Department resource for profile.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique resource identifier |
| `name` | `string` | No | Department display name |
| `description` | `string` | No | Department description text |
| `generated` | `boolean` | No | Whether the resource was AI-generated |

---

## `ProfileDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ProfileDepartmentResource`](#profiledepartmentresource)[] | No | Currently assigned departments |
| `resources` | [`ProfileDepartmentResource`](#profiledepartmentresource)[] | No | Available department resources |

---

## `ProfileDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource UUID |
| `flag_id` | `string` | No | Resolved flag option UUID |
| `department_ids` | `string`[] | Yes | Assigned department UUIDs |
| `email_ids` | `string`[] | Yes | Assigned email resource UUIDs |
| `role_ids` | `string`[] | Yes | Assigned role resource UUIDs |
| `request_limit_ids` | `string`[] | Yes | Assigned request limit UUIDs |

---

## `ProfileEmailResource`

Email resource for profile.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique resource identifier |
| `email` | `string` | No | Email address |
| `generated` | `boolean` | No | Whether the email was AI-generated |

---

## `ProfileEmailSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ProfileEmailResource`](#profileemailresource)[] | No | Currently assigned emails |
| `resources` | [`ProfileEmailResource`](#profileemailresource)[] | No | Available email resources |

---

## `ProfileFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Validation error message |

---

## `ProfileFlagConfig`

Enriched profile flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | UUID of the selected flag option |
| `show` | `boolean` | No | Whether the flag is visible to the client |
| `required` | `boolean` | No | Whether the flag is required |
| `generated` | `boolean` | No | Whether the flag was AI-generated |

---

## `ProfileFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ProfileFlagConfig`](#profileflagconfig) | No | Currently selected flag config |
| `resources` | [`ProfileFlagConfig`](#profileflagconfig)[] | No | Available flag configs |

---

## `ProfileNameResource`

Name resource for profile.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique resource identifier |
| `name` | `string` | No | Profile display name |
| `generated` | `boolean` | No | Whether the name was AI-generated |

---

## `ProfileNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ProfileNameResource`](#profilenameresource) | No | Currently selected name resource |
| `resources` | [`ProfileNameResource`](#profilenameresource)[] | No | Available name resources |

---

## `ProfileRequestLimitResource`

Request limit resource for profile.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique resource identifier |
| `requests_per_day` | `integer` | No | Maximum requests allowed per day |
| `generated` | `boolean` | No | Whether the limit was AI-generated |

---

## `ProfileRequestLimitSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ProfileRequestLimitResource`](#profilerequestlimitresource) | No | Currently selected request limit |
| `resources` | [`ProfileRequestLimitResource`](#profilerequestlimitresource)[] | No | Available request limit resources |

---

## `ProfileResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `profile_id` | `string` | No | UUID of the created or updated profile |
| `message` | `string` | Yes | Result message |
| `errors` | [`ProfileFieldError`](#profilefielderror)[] | No | Per-field validation errors |

---

## `ProfileRoleResource`

Role resource for profile.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique resource identifier |
| `role` | `string` | No | Role key (e.g. admin, user, viewer) |
| `name` | `string` | No | Role display name |
| `description` | `string` | No | Role description text |
| `icon_value` | `string` | No | Icon identifier for the role |
| `color_hex` | `string` | No | Hex color code for the role |

---

## `ProfileRoleSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ProfileRoleResource`](#profileroleresource)[] | No | Currently assigned roles |
| `resources` | [`ProfileRoleResource`](#profileroleresource)[] | No | Available role resources |

---

## `ProfileSummaryItem`

Per-profile aggregate stats for the summary card.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | No | Profile identifier |
| `profile_name` | `string` | No | Profile display name |
| `sessions_count` | `integer` | No | Number of sessions |
| `logins_count` | `integer` | No | Number of logins |
| `grants_count` | `integer` | No | Number of grants |
| `problems_count` | `integer` | No | Number of problems |
| `activity_count` | `integer` | No | Total activity count |

---

## `ProviderDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned departments |
| `resources` | `any`[] | No | Available departments |

---

## `ProviderDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `ProviderDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource identifier |
| `description_id` | `string` | No | Resolved description resource identifier |
| `flag_id` | `string` | No | Flag option identifier |
| `department_ids` | `string`[] | Yes | Department identifiers |
| `endpoint_ids` | `string`[] | Yes | Endpoint resource identifiers |
| `key_ids` | `string`[] | Yes | API key resource identifiers |
| `value_ids` | `string`[] | Yes | Value resource identifiers |

---

## `ProviderEndpointSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected endpoint resource |
| `resources` | `any`[] | No | Available endpoint resources |

---

## `ProviderFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that caused the error |
| `message` | `string` | Yes | Error message describing the issue |

---

## `ProviderFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | Option ID to use when enabling |
| `show` | `boolean` | No | Whether to display this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this flag was AI-generated |

---

## `ProviderFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ProviderFlagConfig`](#providerflagconfig)[] | No | Currently active flag configs |
| `resources` | [`ProviderFlagConfig`](#providerflagconfig)[] | No | Available flag configs |

---

## `ProviderKeySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected key resource |
| `resources` | `any`[] | No | Available key resources |

---

## `ProviderNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `ProviderResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `provider_id` | `string` | No | Provider unique identifier |
| `message` | `string` | Yes | Result message |
| `errors` | [`ProviderFieldError`](#providerfielderror)[] | No | List of field-level errors |

---

## `ProviderValueSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected value resource |
| `resources` | `any`[] | No | Available value resources |

---

## `QGetProfileContextV4RoleResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `role` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `icon_value` | `string` | No | — |
| `color_hex` | `string` | No | — |

---

## `QuizResponse`

Quiz response entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `question_id` | `string` | No | UUID of the answered question |
| `option_id` | `string` | No | UUID of the selected option |
| `completed` | `boolean` | No | Whether the response is complete |
| `created_at` | `string` | No | Timestamp when response was created |

---

## `ReplacementEntry`

Replacement entry within an improvement.

| Field | Type | Required | Description |
|---|---|---|---|
| `section` | `string` | No | Original text section to replace |
| `replace` | `string` | No | Replacement text |
| `idx` | `integer` | No | Index position of the replacement |

---

## `ResourceTypeItem`

Typed resource operation reference.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | — |
| `operation` | `"get"` \| `"create"` \| `"link"` \| `"search"` \| `"docs"` | Yes | — |

---

## `RubricDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected departments |
| `resources` | `any`[] | No | Available departments |

---

## `RubricDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `RubricDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Selected name resource UUID |
| `description_id` | `string` | No | Selected description resource UUID |
| `flag_id` | `string` | No | Selected flag option UUID |
| `department_ids` | `string`[] | Yes | Selected department UUIDs |
| `point_ids` | `string`[] | Yes | Selected point UUIDs |
| `standard_group_ids` | `string`[] | Yes | Selected standard group UUIDs |
| `standard_ids` | `string`[] | Yes | Selected standard UUIDs |

---

## `RubricFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that has the error |
| `message` | `string` | Yes | Human-readable error message |

---

## `RubricFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Display label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | Selected flag option UUID |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `RubricFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`RubricFlagConfig`](#rubricflagconfig)[] | No | Currently selected flag configs |
| `resources` | [`RubricFlagConfig`](#rubricflagconfig)[] | No | Available flag configs |

---

## `RubricHeatmapCell`

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | No | Rubric ID for this cell |
| `correlation` | `number` | No | Correlation coefficient |
| `p_value` | `number` | No | Statistical p-value |
| `color` | `string` | No | Cell display color |
| `strength` | `string` | No | Correlation strength label |
| `data_points` | `integer` | No | Number of data points |

---

## `RubricHeatmapMatrix-Input`

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | No | Rubric ID for this matrix |
| `standard_groups` | [`RubricHeatmapStandardGroup`](#rubricheatmapstandardgroup)[] | No | Standard groups as axes |
| `matrix` | [`RubricHeatmapMatrixRow`](#rubricheatmapmatrixrow)[] | No | Correlation matrix rows |
| `insights` | `string` | No | Generated insights text |
| `has_data` | `boolean` | No | Whether matrix has data |

---

## `RubricHeatmapMatrixRow`

| Field | Type | Required | Description |
|---|---|---|---|
| `cells` | [`RubricHeatmapCell`](#rubricheatmapcell)[] | No | Cells in this heatmap row |

---

## `RubricHeatmapStandardGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Standard group identifier |
| `name` | `string` | No | Standard group name |
| `short_name` | `string` | No | Abbreviated display name |
| `rubric_id` | `string` | No | Parent rubric ID |

---

## `RubricMapping`

Rubric metadata mapping rubric to its standard groups.

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | Yes | UUID of the rubric |
| `name` | `string` | No | Name of the rubric |
| `standard_group_ids` | `string`[] | No | IDs of standard groups in this rubric |

---

## `RubricNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `RubricPointsSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected points resource |
| `resources` | `any`[] | No | Available points resources |

---

## `RubricResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `rubric_id` | `string` | No | Rubric UUID |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`RubricFieldError`](#rubricfielderror)[] | No | List of per-field errors |

---

## `RubricStandardGroupsSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected standard groups |
| `resources` | `any`[] | No | Available standard groups |

---

## `RubricStandardsSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected standards |
| `resources` | `any`[] | No | Available standards |

---

## `RubricStructureData`

Rubric structure data in Record format.

All fields are Records keyed by standard_group_id or standard_id strings.
This is the exact format the client needs - no transformation required.

| Field | Type | Required | Description |
|---|---|---|---|
| `standard_groups` | `object` | No | Map of group_id to standard_id lists |
| `standard_groups_mapping` | `object` | No | Map of group_id to group metadata |
| `standards_mapping` | `object` | No | Map of standard_id to standard metadata |

---

## `RunPricingItem`

Single pricing entry for a run. Cost computed at runtime.

| Field | Type | Required | Description |
|---|---|---|---|
| `pricing_type` | `string` | No | Type of pricing (e.g. input, output, cached) |
| `count` | `integer` | No | Token count for this pricing type |
| `pricing_id` | `string` | No | UUID of the pricing configuration |

---

## `RunViewItem`

Single run from the run list.

| Field | Type | Required | Description |
|---|---|---|---|
| `run_id` | `string` | Yes | UUID of the run |
| `group_id` | `string` | No | UUID of the owning group |
| `profiles_id` | `string` | No | UUID of the profile that created the run |
| `input_tokens` | `integer` | No | Number of input tokens used |
| `output_tokens` | `integer` | No | Number of output tokens generated |
| `cached_input_tokens` | `integer` | No | Number of cached input tokens |
| `run_created_at` | `string` | No | Run creation timestamp |
| `agent_ids` | `string`[] | No | Agent UUIDs involved in the run |
| `model_ids` | `string`[] | No | Model UUIDs used in the run |
| `provider_ids` | `string`[] | No | Provider UUIDs used in the run |
| `pricing` | [`RunPricingItem`](#runpricingitem)[] | No | Pricing breakdown entries |

---

## `ScenarioDepartment`

Department for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | UUID of the department |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ScenarioDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioDepartment`](#scenariodepartment)[] | No | Currently selected departments |
| `resources` | [`ScenarioDepartment`](#scenariodepartment)[] | No | Available departments |

---

## `ScenarioDescriptionResource`

Description resource for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ScenarioDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ScenarioDescriptionResource`](#scenariodescriptionresource) | No | Currently selected description resource |
| `resources` | [`ScenarioDescriptionResource`](#scenariodescriptionresource)[] | No | Available description resources |

---

## `ScenarioDocument`

Document for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | No | UUID of the document |
| `name` | `string` | No | Document name |
| `description` | `string` | No | Document description text |
| `file_path` | `string` | No | Storage path of the file |
| `mime_type` | `string` | No | MIME type of the document |
| `upload_id` | `string` | No | UUID of the associated upload |
| `html` | `boolean` | No | Whether the document is HTML content |
| `parameter_ids` | `string`[] | No | Linked parameter UUIDs |
| `field_ids` | `string`[] | No | Linked field UUIDs |
| `parent_document_id` | `string` | No | UUID of the parent document |
| `video_document` | `boolean` | No | Has linked parameter with video enabled |
| `non_video_document` | `boolean` | No | Has linked parameter with video disabled |

---

## `ScenarioDocumentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioDocument`](#scenariodocument)[] | No | Currently selected documents |
| `resources` | [`ScenarioDocument`](#scenariodocument)[] | No | Available documents |

---

## `ScenarioDraftFormState`

Full form state after draft patch — server is source of truth.

Client replaces its local form state with this after every successful patch.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | UUID of the selected name resource |
| `description_id` | `string` | No | UUID of the selected description resource |
| `problem_statement_id` | `string` | No | UUID of the selected problem statement resource |
| `flag_ids` | `string`[] | No | Selected flag UUIDs |
| `department_ids` | `string`[] | No | Selected department UUIDs |
| `persona_ids` | `string`[] | No | Selected persona UUIDs |
| `document_ids` | `string`[] | No | Selected document UUIDs |
| `parameter_field_ids` | `string`[] | No | Selected parameter field UUIDs |
| `objective_ids` | `string`[] | No | Selected objective UUIDs |
| `image_ids` | `string`[] | No | Selected image UUIDs |
| `video_ids` | `string`[] | No | Selected video UUIDs |
| `question_ids` | `string`[] | No | Selected question UUIDs |
| `option_ids` | `string`[] | No | Selected option UUIDs |

---

## `ScenarioField`

Field for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | UUID of the field |
| `name` | `string` | No | Field name |
| `description` | `string` | No | Field description text |
| `parameter_id` | `string` | No | UUID of the linked parameter |
| `parameter_name` | `string` | No | Name of the linked parameter |
| `conditional_parameter_ids` | `string`[] | No | Conditional parameter UUIDs |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ScenarioFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field with the error |
| `message` | `string` | Yes | Human-readable error message |

---

## `ScenarioFieldParamFilter`

Field parameter filter for show_selected filtering.

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | UUID of the parameter to filter by |
| `show_selected` | `boolean` | No | Whether to show only selected items |

---

## `ScenarioFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag config key identifier |
| `label` | `string` | Yes | Display label for the flag |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | UUID of the selected icon resource |
| `flag_option_id` | `string` | No | UUID of the flag option to use when enabling |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `video_flag` | `boolean` | No | Whether this flag only shows when video is enabled |

---

## `ScenarioFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioFlagConfig`](#scenarioflagconfig)[] | No | Currently selected flags |
| `resources` | [`ScenarioFlagConfig`](#scenarioflagconfig)[] | No | Available flag configs |

---

## `ScenarioImage`

Image for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `image_id` | `string` | No | UUID of the image |
| `name` | `string` | No | Image name |
| `file_path` | `string` | No | Storage path of the image file |
| `mime_type` | `string` | No | MIME type of the image |
| `upload_id` | `string` | No | UUID of the associated upload |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ScenarioImageSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioImage`](#scenarioimage)[] | No | Currently selected images |
| `resources` | [`ScenarioImage`](#scenarioimage)[] | No | Available images |

---

## `ScenarioNameResource`

Name resource for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ScenarioNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ScenarioNameResource`](#scenarionameresource) | No | Currently selected name resource |
| `resources` | [`ScenarioNameResource`](#scenarionameresource)[] | No | Available name resources |

---

## `ScenarioObjective`

Objective for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the objective |
| `objective` | `string` | No | Objective text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ScenarioObjectiveSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioObjective`](#scenarioobjective)[] | No | Currently selected objectives |
| `resources` | [`ScenarioObjective`](#scenarioobjective)[] | No | Available objectives |

---

## `ScenarioOption`

Option for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `option_id` | `string` | No | UUID of the option |
| `option_text` | `string` | No | Option text content |
| `is_correct` | `boolean` | No | Whether this is the correct option |
| `question_id` | `string` | No | UUID of the parent question |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ScenarioOptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioOption`](#scenariooption)[] | No | Currently selected options |
| `resources` | [`ScenarioOption`](#scenariooption)[] | No | Available options |

---

## `ScenarioParameter`

Parameter for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | UUID of the parameter |
| `name` | `string` | No | Parameter name |
| `description` | `string` | No | Parameter description text |
| `document_parameter` | `boolean` | No | Whether this is a document parameter |
| `persona_parameter` | `boolean` | No | Whether this is a persona parameter |
| `scenario_parameter` | `boolean` | No | Whether this is a scenario parameter |
| `video_parameter` | `boolean` | No | Whether this is a video parameter |
| `non_video_parameter` | `boolean` | No | Inverse of video_parameter for frontend filtering |
| `conditional` | `boolean` | No | Whether this parameter is conditional |

---

## `ScenarioParameterFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioField`](#scenariofield)[] | No | Currently selected parameter fields |
| `resources` | [`ScenarioField`](#scenariofield)[] | No | Available parameter fields |

---

## `ScenarioParameterSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioParameter`](#scenarioparameter)[] | No | Currently selected parameters |
| `resources` | [`ScenarioParameter`](#scenarioparameter)[] | No | Available parameters |

---

## `ScenarioPersona`

Persona for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of the persona |
| `name` | `string` | No | Persona name |
| `description` | `string` | No | Persona description text |
| `color` | `string` | No | Display color for the persona |
| `icon` | `string` | No | Icon identifier for the persona |
| `image_model` | `boolean` | No | Whether this persona uses an image model |
| `parameter_ids` | `string`[] | No | Linked parameter UUIDs |
| `field_ids` | `string`[] | No | Linked field UUIDs |
| `example` | `string` | No | Example text for the persona |
| `video_persona` | `boolean` | No | Has linked parameter with video enabled |
| `non_video_persona` | `boolean` | No | Has linked parameter with video disabled |

---

## `ScenarioPersonaSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioPersona`](#scenariopersona)[] | No | Currently selected personas |
| `resources` | [`ScenarioPersona`](#scenariopersona)[] | No | Available personas |

---

## `ScenarioProblemStatement`

Problem statement for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_statement_id` | `string` | No | UUID of the problem statement |
| `name` | `string` | No | Problem statement name |
| `problem_statement` | `string` | No | Problem statement text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ScenarioProblemStatementSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ScenarioProblemStatement`](#scenarioproblemstatement) | No | Currently selected problem statement |
| `resources` | [`ScenarioProblemStatement`](#scenarioproblemstatement)[] | No | Available problem statements |

---

## `ScenarioQuestion`

Question for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `question_id` | `string` | No | UUID of the question |
| `question_text` | `string` | No | Question text content |
| `allow_multiple` | `boolean` | No | Whether multiple answers are allowed |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ScenarioQuestionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioQuestion`](#scenarioquestion)[] | No | Currently selected questions |
| `resources` | [`ScenarioQuestion`](#scenarioquestion)[] | No | Available questions |

---

## `ScenarioResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `scenario_id` | `string` | No | UUID of the affected scenario |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`ScenarioFieldError`](#scenariofielderror)[] | No | List of per-field errors |

---

## `ScenarioVideo`

Video for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `video_id` | `string` | No | UUID of the video |
| `name` | `string` | No | Video name |
| `file_path` | `string` | No | Storage path of the video file |
| `mime_type` | `string` | No | MIME type of the video |
| `upload_id` | `string` | No | UUID of the associated upload |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `ScenarioVideoSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioVideo`](#scenariovideo)[] | No | Currently selected videos |
| `resources` | [`ScenarioVideo`](#scenariovideo)[] | No | Available videos |

---

## `SearchMessageResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `message_id` | `string` | Yes | UUID of the message |
| `run_id` | `string` | Yes | UUID of the parent run |
| `role` | `string` | Yes | Message role (e.g. user, assistant) |
| `message_created_at` | `string` | Yes | Message creation timestamp |
| `text_upload_ids` | `string`[] | Yes | UUIDs of text uploads |
| `audio_upload_ids` | `string`[] | Yes | UUIDs of audio uploads |
| `image_upload_ids` | `string`[] | Yes | UUIDs of image uploads |
| `video_upload_ids` | `string`[] | Yes | UUIDs of video uploads |
| `file_upload_ids` | `string`[] | Yes | UUIDs of file uploads |
| `call_upload_ids` | `string`[] | Yes | UUIDs of call uploads |

---

## `SecondaryAttemptImprovement`

| Field | Type | Required | Description |
|---|---|---|---|
| `chart_data` | [`SecondaryAttemptImprovementChart`](#secondaryattemptimprovementchart)[] | No | Attempt improvement chart data |
| `facts` | [`SecondaryAttemptImprovementFact`](#secondaryattemptimprovementfact)[] | No | Per-simulation attempt facts |
| `valid_simulation_ids` | `string`[] | No | Valid simulation IDs in scope |
| `status` | `string` | No | Section status indicator |

---

## `SecondaryAttemptImprovementChart`

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt` | `string` | No | Attempt number label |
| `average_score` | `number` | No | Average score for this attempt |
| `average_time` | `number` | No | Average time in minutes |
| `pass_rate` | `number` | No | Pass rate for this attempt |

---

## `SecondaryAttemptImprovementFact`

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | Associated simulation ID |
| `attempt_no` | `integer` | No | Attempt number |
| `avg_grade` | `number` | No | Average grade for this attempt |
| `avg_minutes` | `number` | No | Average duration in minutes |
| `pass_rate` | `number` | No | Pass rate for this attempt |

---

## `SecondaryCohortDaily`

| Field | Type | Required | Description |
|---|---|---|---|
| `date` | `string` | No | Date of the daily aggregate |
| `avg_score` | `number` | No | Average score for the day |
| `cohort_id` | `string` | No | Associated cohort ID |

---

## `SecondaryCohortData`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Cohort identifier |
| `name` | `string` | No | Cohort display name |
| `pass_rate` | `number` | No | Cohort pass rate percentage |
| `avg_percentage_score` | `number` | No | Average percentage score |
| `total_students` | `integer` | No | Total students in cohort |
| `passed_students` | `integer` | No | Number of students who passed |
| `total_attempts` | `integer` | No | Total number of attempts |
| `passed_attempts` | `integer` | No | Number of passing attempts |
| `simulation_count` | `integer` | No | Number of simulations attempted |
| `required_simulations` | `integer` | No | Number of required simulations |
| `status` | `string` | No | Cohort status indicator |

---

## `SecondaryCohortPerformance`

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_data` | [`SecondaryCohortData`](#secondarycohortdata)[] | No | Per-cohort aggregate data |
| `daily_data` | [`SecondaryCohortDaily`](#secondarycohortdaily)[] | No | Daily cohort aggregates |
| `simulation_facts` | [`SecondarySimulationFact`](#secondarysimulationfact)[] | No | Per-simulation cohort facts |
| `daily_facts` | [`SecondaryDailyFact`](#secondarydailyfact)[] | No | Daily simulation facts |
| `valid_simulation_ids` | `string`[] | No | Valid simulation IDs in scope |
| `status` | `string` | No | Section status indicator |

---

## `SecondaryDailyFact`

| Field | Type | Required | Description |
|---|---|---|---|
| `date` | `string` | No | Date of the daily fact |
| `simulation_id` | `string` | No | Associated simulation ID |
| `avg_score` | `number` | No | Average score for the day |

---

## `SecondaryGroupFact`

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | No | Standard group identifier |
| `group_name` | `string` | No | Standard group name |
| `group_description` | `string` | No | Standard group description |
| `simulation_id` | `string` | No | Associated simulation ID |
| `score` | `number` | No | Raw score value |
| `points` | `number` | No | Points earned |
| `avg_pct` | `number` | No | Average percentage score |

---

## `SecondaryRadarPoint`

| Field | Type | Required | Description |
|---|---|---|---|
| `metric` | `string` | No | Metric name for radar axis |
| `description` | `string` | No | Metric description |
| `value` | `number` | No | Metric value |
| `full_mark` | `number` | No | Maximum possible value |

---

## `SecondarySimulationFact`

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | No | Associated cohort ID |
| `simulation_id` | `string` | No | Associated simulation ID |
| `pass_rate` | `number` | No | Pass rate for this simulation |
| `avg_score` | `number` | No | Average score for this simulation |
| `attempts` | `integer` | No | Number of attempts |

---

## `SecondarySkillPackage`

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | No | Rubric ID for this package |
| `radar_data` | [`SecondaryRadarPoint`](#secondaryradarpoint)[] | No | Radar chart data points |
| `group_facts` | [`SecondaryGroupFact`](#secondarygroupfact)[] | No | Per-group performance facts |

---

## `SecondarySkillPerformance-Input`

| Field | Type | Required | Description |
|---|---|---|---|
| `packages` | [`SecondarySkillPackage`](#secondaryskillpackage)[] | No | Skill performance packages per rubric |
| `valid_rubric_ids` | `string`[] | No | Valid rubric IDs in scope |
| `status` | `string` | No | Section status indicator |

---

## `SessionTimelineItem`

Single event in the unified session timeline.

| Field | Type | Required | Description |
|---|---|---|---|
| `event_type` | `string` | No | Type of the timeline event |
| `entity_id` | `string` | No | UUID of the related entity |
| `entity_name` | `string` | No | Name of the related entity |
| `created_at` | `string` | No | Timestamp when the event occurred |
| `extra_1` | `string` | No | Additional context field 1 |
| `extra_2` | `string` | No | Additional context field 2 |

---

## `SettingAuthItemKeySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned auth item keys |
| `resources` | `any`[] | No | Available auth item key resources |

---

## `SettingAuthSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned auth providers |
| `resources` | `any`[] | No | Available auth resources |

---

## `SettingColorSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned colors |
| `resources` | `any`[] | No | Available color resources |

---

## `SettingDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned departments |
| `resources` | `any`[] | No | Available department resources |

---

## `SettingDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `object` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `SettingDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource UUID |
| `description_id` | `string` | No | Resolved description resource UUID |
| `flag_id` | `string` | No | Resolved flag option UUID |
| `department_ids` | `string`[] | Yes | Assigned department UUIDs |
| `color_ids` | `string`[] | Yes | Assigned color UUIDs |
| `profile_ids` | `string`[] | Yes | Assigned profile UUIDs |
| `auth_ids` | `string`[] | Yes | Assigned auth provider UUIDs |
| `provider_key_ids` | `string`[] | Yes | Assigned provider key UUIDs |
| `auth_item_key_ids` | `string`[] | Yes | Assigned auth item key UUIDs |
| `threshold_ids` | `string`[] | Yes | Assigned threshold UUIDs |

---

## `SettingFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Validation error message |

---

## `SettingFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier (e.g. 'active') |
| `label` | `string` | Yes | Human-readable flag label (e.g. 'Active') |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | UUID of the flag option to use when enabling |
| `show` | `boolean` | No | Whether the flag is visible to the client |
| `required` | `boolean` | No | Whether the flag is required |
| `generated` | `boolean` | No | Whether the flag was AI-generated |

---

## `SettingFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`SettingFlagConfig`](#settingflagconfig) | No | Currently selected flag config |
| `resources` | [`SettingFlagConfig`](#settingflagconfig)[] | No | Available flag configs |

---

## `SettingNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `object` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `SettingProfileSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned profiles |
| `resources` | `any`[] | No | Available profile resources |

---

## `SettingProviderKeySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned provider keys |
| `resources` | `any`[] | No | Available provider key resources |

---

## `SettingResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `setting_id` | `string` | No | UUID of the created or updated setting |
| `message` | `string` | Yes | Result message |
| `errors` | [`SettingFieldError`](#settingfielderror)[] | No | Per-field validation errors |

---

## `SettingSystemSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned systems |
| `resources` | `any`[] | No | Available system resources |

---

## `SimulationData`

Simulation metadata.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the simulation |
| `name` | `string` | No | Name of the simulation |
| `description` | `string` | No | Description of the simulation |
| `time_limit` | `integer` | No | Time limit in seconds |
| `hints_enabled` | `boolean` | No | Whether hints are enabled |
| `objectives_enabled` | `boolean` | No | Whether objectives are enabled |
| `image_input_active` | `boolean` | No | Whether image input is active |
| `copy_paste_allowed` | `boolean` | No | Whether copy-paste is allowed |
| `practice_simulation` | `boolean` | No | Whether this is a practice simulation |
| `rubric_id` | `string` | No | UUID of the associated rubric |

---

## `SimulationDepartment`

Department for simulation.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | UUID of the department |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `SimulationDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`SimulationDepartment`](#simulationdepartment)[] | No | Currently selected departments |
| `resources` | [`SimulationDepartment`](#simulationdepartment)[] | No | Available departments |

---

## `SimulationDescriptionResource`

Description resource for simulation.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `SimulationDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`SimulationDescriptionResource`](#simulationdescriptionresource) | No | Currently selected description resource |
| `resources` | [`SimulationDescriptionResource`](#simulationdescriptionresource)[] | No | Available description resources |

---

## `SimulationDraftFormState`

Full form state after draft patch — server is source of truth.

Client replaces its local form state with this after every successful patch.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | UUID of the selected name resource |
| `description_id` | `string` | No | UUID of the selected description resource |
| `flag_ids` | `string`[] | No | Selected flag UUIDs |
| `department_ids` | `string`[] | No | Selected department UUIDs |
| `scenario_ids` | `string`[] | No | Selected scenario UUIDs |
| `scenario_flag_ids` | `string`[] | No | Selected scenario flag UUIDs |
| `scenario_position_ids` | `string`[] | No | Selected scenario position UUIDs |
| `scenario_rubric_ids` | `string`[] | No | Selected scenario rubric UUIDs |
| `scenario_time_limit_ids` | `string`[] | No | Selected scenario time limit UUIDs |

---

## `SimulationFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field with the error |
| `message` | `string` | Yes | Human-readable error message |

---

## `SimulationFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag config key identifier |
| `label` | `string` | Yes | Display label for the flag |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | UUID of the selected icon resource |
| `flag_option_id` | `string` | No | UUID of the flag option |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `SimulationFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`SimulationFlagConfig`](#simulationflagconfig)[] | No | Currently selected flags |
| `resources` | [`SimulationFlagConfig`](#simulationflagconfig)[] | No | Available flag configs |

---

## `SimulationNameResource`

Name resource for simulation.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `SimulationNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`SimulationNameResource`](#simulationnameresource) | No | Currently selected name resource |
| `resources` | [`SimulationNameResource`](#simulationnameresource)[] | No | Available name resources |

---

## `SimulationResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `simulation_id` | `string` | No | UUID of the affected simulation |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`SimulationFieldError`](#simulationfielderror)[] | No | List of per-field errors |

---

## `SimulationRubric`

Rubric catalog item.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the rubric |
| `name` | `string` | No | Rubric name |
| `description` | `string` | No | Rubric description text |
| `standard_group_ids` | `string`[] | No | Associated standard group UUIDs |

---

## `SimulationScenario`

Scenario for simulation.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | UUID of the scenario |
| `name` | `string` | No | Scenario name |
| `description` | `string` | No | Scenario description text |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `show_problem_statement` | `boolean` | No | Whether to show problem statement |
| `show_objectives` | `boolean` | No | Whether to show objectives |
| `show_video` | `boolean` | No | Whether to show video |
| `show_text` | `boolean` | No | Whether to show text input |
| `show_audio` | `boolean` | No | Whether to show audio input |
| `show_copy_paste` | `boolean` | No | Whether to show copy/paste |
| `show_images` | `boolean` | No | Whether to show images |
| `show_questions` | `boolean` | No | Whether to show questions |

---

## `SimulationScenarioFlag`

Scenario flag (denormalized: includes flag name/description/icon).

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the scenario flag |
| `scenario_id` | `string` | No | UUID of the parent scenario |
| `flag_id` | `string` | No | UUID of the flag resource |
| `name` | `string` | No | Flag name |
| `description` | `string` | No | Flag description text |
| `icon` | `string` | No | Icon identifier for the flag |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `SimulationScenarioFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`SimulationScenarioFlag`](#simulationscenarioflag)[] | No | Currently selected scenario flags |
| `resources` | [`SimulationScenarioFlag`](#simulationscenarioflag)[] | No | Available scenario flags |

---

## `SimulationScenarioPosition`

Scenario position.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the scenario position |
| `scenario_id` | `string` | No | UUID of the parent scenario |
| `value` | `integer` | No | Position value |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `SimulationScenarioPositionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`SimulationScenarioPosition`](#simulationscenarioposition)[] | No | Currently selected scenario positions |
| `resources` | [`SimulationScenarioPosition`](#simulationscenarioposition)[] | No | Available scenario positions |

---

## `SimulationScenarioRubric`

Scenario rubric.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the scenario rubric |
| `scenario_id` | `string` | No | UUID of the parent scenario |
| `rubric_id` | `string` | No | UUID of the rubric resource |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

## `SimulationScenarioRubricSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`SimulationScenarioRubric`](#simulationscenariorubric)[] | No | Currently selected scenario rubrics |
| `resources` | [`SimulationScenarioRubric`](#simulationscenariorubric)[] | No | Available scenario rubrics |

---

## `SimulationScenarioSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`SimulationScenario`](#simulationscenario)[] | No | Currently selected scenarios |
| `resources` | [`SimulationScenario`](#simulationscenario)[] | No | Available scenarios |

---

## `SimulationScenarioTimeLimit`

Scenario time limit.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the scenario time limit |
| `scenario_id` | `string` | No | UUID of the parent scenario |
| `time_limit_seconds` | `integer` | No | Time limit in seconds |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `negative` | `boolean` | No | Whether the time limit is negative |

---

## `SimulationScenarioTimeLimitSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`SimulationScenarioTimeLimit`](#simulationscenariotimelimit)[] | No | Currently selected scenario time limits |
| `resources` | [`SimulationScenarioTimeLimit`](#simulationscenariotimelimit)[] | No | Available scenario time limits |

---

## `SkillFeedback`

Skill feedback entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `skill_name` | `string` | No | Name of the skill |
| `feedback` | `string` | No | Feedback text for the skill |

---

## `SkillScore`

Skill score entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `skill_name` | `string` | No | Name of the skill |
| `score` | `number` | No | Score for the skill |

---

## `StandardGroupMapping`

Standard group metadata for sidebar/legend.

| Field | Type | Required | Description |
|---|---|---|---|
| `standard_group_id` | `string` | Yes | UUID of the standard group |
| `name` | `string` | No | Name of the standard group |
| `description` | `string` | No | Description of the standard group |
| `points` | `integer` | No | Total points for the group |
| `pass_points` | `integer` | No | Points required to pass |

---

## `StandardMapping`

Standard metadata for sidebar/legend.

| Field | Type | Required | Description |
|---|---|---|---|
| `standard_id` | `string` | Yes | UUID of the standard |
| `standard_group_id` | `string` | No | UUID of the parent standard group |
| `name` | `string` | No | Name of the standard |
| `description` | `string` | No | Description of the standard |
| `points` | `integer` | No | Points for the standard |

---

## `SuiteDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected department items |
| `resources` | `any`[] | No | Available department resources |

---

## `SuiteDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected description items |
| `resources` | `any`[] | No | Available description resources |

---

## `SuiteEndpointSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected endpoint items |
| `resources` | `any`[] | No | Available endpoint resources |

---

## `SuiteFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected flag items |
| `resources` | `any`[] | No | Available flag resources |

---

## `SuiteKeySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected key items |
| `resources` | `any`[] | No | Available key resources |

---

## `SuiteModalitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected modality items |
| `resources` | `any`[] | No | Available modality resources |

---

## `SuiteNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected name items |
| `resources` | `any`[] | No | Available name resources |

---

## `SuitePricingSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected pricing items |
| `resources` | `any`[] | No | Available pricing resources |

---

## `SuiteQualitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected quality items |
| `resources` | `any`[] | No | Available quality resources |

---

## `SuiteReasoningLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected reasoning levels |
| `resources` | `any`[] | No | Available reasoning level resources |

---

## `SuiteTemperatureLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected temperature levels |
| `resources` | `any`[] | No | Available temperature level resources |

---

## `SuiteValueSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected value items |
| `resources` | `any`[] | No | Available value resources |

---

## `SuiteVoiceSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected voice items |
| `resources` | `any`[] | No | Available voice resources |

---

## `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

## `TestEntries`

Entry payloads grouped by type.

| Field | Type | Required | Description |
|---|---|---|---|
| `tests` | [`GetTestResponse`](#gettestresponse)[] | No | Test entry payloads |
| `invocations` | [`GetTestInvocationResponse`](#gettestinvocationresponse)[] | No | Invocation entry payloads |
| `runs` | [`GetTestInvocationRunsResponse`](#gettestinvocationrunsresponse)[] | No | Run entry payloads |
| `groups` | [`GetTestInvocationGroupsResponse`](#gettestinvocationgroupsresponse)[] | No | Group entry payloads |
| `grades` | [`GetTestGradeResponse`](#gettestgraderesponse)[] | No | Grade entry payloads |
| `feedback` | [`GetTestFeedbackResponse`](#gettestfeedbackresponse)[] | No | Feedback entry payloads |
| `messages` | [`SearchMessageResponse`](#searchmessageresponse)[] | No | Message entry payloads |

---

## `TestResources`

Resource maps keyed by ID string.

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | `object` | No | Eval resources keyed by ID |
| `rubrics` | `object` | No | Rubric resources keyed by ID |
| `agents` | `object` | No | Agent resources keyed by ID |
| `models` | `object` | No | Model resources keyed by ID |
| `voices` | `object` | No | Voice resources keyed by ID |
| `temperature_levels` | `object` | No | Temperature level resources keyed by ID |
| `reasoning_levels` | `object` | No | Reasoning level resources keyed by ID |
| `modalities` | `object` | No | Modality resources keyed by ID |
| `prompts` | `object` | No | Prompt resources keyed by ID |
| `instructions` | `object` | No | Instruction resources keyed by ID |
| `tools` | `object` | No | Tool resources keyed by ID |
| `qualities` | `object` | No | Quality resources keyed by ID |

---

## `TestRunItem`

A single run row for the UI table, derived from a benchmark invocation.

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | ID of the chat |
| `invocation_id` | `string` | Yes | ID of the invocation |
| `run_id` | `string` | No | ID of the run |
| `group_id` | `string` | No | ID of the group |
| `suite_entry_id` | `string` | No | ID of the suite entry |
| `model_name` | `string` | No | Name of the model used |
| `agent_name` | `string` | No | Name of the agent used |
| `status` | `string` | No | Run status |
| `grade_score` | `number` | No | Grade score for the run |
| `grade_passed` | `boolean` | No | Whether the run passed grading |

---

## `TestStatusSummary`

| Field | Type | Required | Description |
|---|---|---|---|
| `total` | `integer` | No | Total number of invocations |
| `completed` | `integer` | No | Number of completed invocations |
| `in_progress` | `integer` | No | Number of in-progress invocations |
| `not_started` | `integer` | No | Number of not-started invocations |

---

## `ThemePrimitives`

Raw theme color primitives (hex values) from settings.

General-purpose — not CSS-specific. Clients derive their own
presentation tokens (oklch, CSS variables, etc.) from these.

| Field | Type | Required | Description |
|---|---|---|---|
| `primary` | `string` | No | Primary color hex value |
| `accent` | `string` | No | Accent color hex value |
| `background` | `string` | No | Background color hex value |
| `surface` | `string` | No | Surface color hex value |
| `success` | `string` | No | Success state color hex value |
| `warning` | `string` | No | Warning state color hex value |
| `error` | `string` | No | Error state color hex value |
| `chart1` | `string` | No | Chart color 1 hex value |
| `chart2` | `string` | No | Chart color 2 hex value |
| `chart3` | `string` | No | Chart color 3 hex value |
| `chart4` | `string` | No | Chart color 4 hex value |
| `chart5` | `string` | No | Chart color 5 hex value |

---

## `TimerData`

Timer information.

| Field | Type | Required | Description |
|---|---|---|---|
| `elapsed` | `integer` | No | Elapsed time in seconds |
| `limit` | `integer` | No | Time limit in seconds |
| `exceeded` | `boolean` | No | Whether the time limit was exceeded |
| `formatted` | `string` | No | Formatted time string for display |
| `negative` | `boolean` | No | Whether the timer can go negative |

---

## `ToolArgOutputSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned argument outputs |
| `resources` | `any`[] | No | Available argument outputs |

---

## `ToolArgPositionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned argument positions |
| `resources` | `any`[] | No | Available argument positions |

---

## `ToolArgSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned arguments |
| `resources` | `any`[] | No | Available arguments |

---

## `ToolArtifactSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned artifacts |
| `resources` | `any`[] | No | Available artifacts |

---

## `ToolDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `ToolDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource identifier |
| `description_id` | `string` | No | Resolved description resource identifier |
| `flag_ids` | `string`[] | Yes | Flag option identifiers |
| `department_ids` | `string`[] | Yes | Department identifiers |
| `arg_ids` | `string`[] | Yes | Argument identifiers |
| `arg_position_ids` | `string`[] | Yes | Argument position identifiers |
| `args_output_ids` | `string`[] | Yes | Argument output identifiers |
| `artifact_ids` | `string`[] | Yes | Artifact identifiers |
| `operation_ids` | `string`[] | Yes | Operation identifiers |

---

## `ToolFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that caused the error |
| `message` | `string` | Yes | Error message describing the issue |

---

## `ToolFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | Option ID to use when enabling |
| `show` | `boolean` | No | Whether to display this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this flag was AI-generated |

---

## `ToolFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ToolFlagConfig`](#toolflagconfig) | No | Currently active flag config |
| `resources` | [`ToolFlagConfig`](#toolflagconfig)[] | No | Available flag configs |

---

## `ToolNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `ToolOperationSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned operations |
| `resources` | `any`[] | No | Available operations |

---

## `ToolResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `tool_id` | `string` | No | Tool unique identifier |
| `message` | `string` | Yes | Result message |
| `errors` | [`ToolFieldError`](#toolfielderror)[] | No | List of field-level errors |

---

## `UpdateAgentItem`

Single agent item for update — agent_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | Yes | UUID of the agent to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `departments` | `string`[] | No | Department names for matching |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `model_ids` | `string`[] | No | Associated model UUIDs |
| `reasoning_level_ids` | `string`[] | No | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | No | Associated temperature level UUIDs |
| `tool_ids` | `string`[] | No | Associated tool UUIDs |
| `voice_ids` | `string`[] | No | Associated voice UUIDs |
| `agent_ids` | `string`[] | No | Associated agent resource UUIDs |

---

## `UpdateAuthItem`

Single auth item for update — auth_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_id` | `string` | Yes | UUID of the auth provider to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `slug_id` | `string` | No | UUID of the slug resource |
| `slug` | `string` | No | Slug value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the auth provider is active |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `protocol_ids` | `string`[] | No | Protocol resource UUIDs |
| `protocol` | `string` | No | Protocol value to resolve |
| `item_ids` | `string`[] | No | Auth item UUIDs |
| `auth_resource_ids` | `string`[] | No | Auth resource UUIDs |

---

## `UpdateCohortItem`

Single cohort item for update — cohort_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | Yes | Cohort UUID to update |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_id` | `string` | No | Flag option UUID |
| `department_ids` | `string`[] | No | Department UUIDs |
| `simulation_ids` | `string`[] | No | Simulation UUIDs |
| `simulation_position_ids` | `string`[] | No | Simulation position UUIDs |
| `simulation_availability_ids` | `string`[] | No | Simulation availability UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs |
| `profile_persona_ids` | `string`[] | No | Profile persona UUIDs |
| `is_inactive` | `boolean` | No | Whether the cohort is inactive |
| `departments` | `string`[] | No | Department names for resolution |
| `simulations` | `string`[] | No | Simulation names for resolution |
| `profiles` | `string`[] | No | Profile names for resolution |

---

## `UpdateDepartmentItem`

Single department item for update — department_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | Yes | UUID of the department to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the department is active |
| `settings_ids` | `string`[] | No | Setting UUIDs to assign |
| `department_ids` | `string`[] | No | Sub-department UUIDs to assign |

---

## `UpdateDocumentItem`

Single document item for update — document_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | Yes | Document UUID to update |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_id` | `string` | No | Flag option UUID |
| `is_inactive` | `boolean` | No | Whether the document is inactive |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `field_ids` | `string`[] | No | Parameter field UUIDs |
| `upload_ids` | `string`[] | No | File upload UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `text_ids` | `string`[] | No | Text resource UUIDs |

---

## `UpdateEvalItem`

Single eval item for update — eval_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_id` | `string` | Yes | Eval UUID to update |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_ids` | `string`[] | No | Flag option UUIDs |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `model_ids` | `string`[] | No | Model UUIDs |
| `model_flag_ids` | `string`[] | No | Model flag UUIDs |
| `model_rubric_ids` | `string`[] | No | Model rubric UUIDs |
| `model_position_ids` | `string`[] | No | Model position UUIDs |

---

## `UpdateFieldItem`

Single field item for update — field_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | Yes | UUID of the field to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `conditional_parameter_ids` | `string`[] | No | Conditional parameter UUIDs |
| `field_ids` | `string`[] | No | Related field UUIDs |

---

## `UpdateModelItem`

Single model item for update — model_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | Yes | Target model identifier to update |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `departments` | `string`[] | No | Department names to match |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `modality_ids` | `string`[] | No | Modality identifiers |
| `pricing_ids` | `string`[] | No | Pricing tier identifiers |
| `provider_ids` | `string`[] | No | Provider identifiers |
| `quality_ids` | `string`[] | No | Quality level identifiers |
| `reasoning_level_ids` | `string`[] | No | Reasoning level identifiers |
| `temperature_level_ids` | `string`[] | No | Temperature level identifiers |
| `value_ids` | `string`[] | No | Value resource identifiers |
| `voice_ids` | `string`[] | No | Voice identifiers |
| `model_ids` | `string`[] | No | Related model identifiers |

---

## `UpdateParameterItem`

Single parameter item for update — parameter_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | Yes | Target parameter identifier to update |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `departments` | `string`[] | No | Department names to match |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `field_ids` | `string`[] | No | Field identifiers |

---

## `UpdatePersonaItem`

Single persona item for update — persona_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | Yes | UUID of the persona to update (required) |
| `name_id` | `string` | No | UUID of an existing name resource to select |
| `name` | `string` | No | Display name text (creates new resource if name_id not provided) |
| `color_id` | `string` | No | UUID of an existing color resource to select |
| `color` | `string` | No | Hex color code (creates new resource if color_id not provided) |
| `icon_id` | `string` | No | UUID of an existing icon resource to select |
| `icon` | `string` | No | Icon identifier value (creates new resource if icon_id not provided) |
| `instructions_id` | `string` | No | UUID of an existing instruction resource to select |
| `instructions` | `string` | No | System instruction template (creates new resource if instructions_id not provided) |
| `description_id` | `string` | No | UUID of an existing description resource to select |
| `description` | `string` | No | Persona description text (creates new resource if description_id not provided) |
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the persona is active (resolved to flag_id) |
| `department_ids` | `string`[] | No | Department UUIDs to associate (replaces existing) |
| `departments` | `string`[] | No | Department names (resolved to UUIDs server-side) |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs to associate (replaces existing) |
| `parameter_fields` | `string`[] | No | Parameter field names (resolved to UUIDs server-side) |
| `example_ids` | `string`[] | No | Example resource UUIDs to associate (replaces existing) |
| `examples` | `string`[] | No | Example texts (creates new example resources) |
| `voice_ids` | `string`[] | No | Voice resource UUIDs to associate (replaces existing) |
| `voices` | `string`[] | No | Voice values (resolved to UUIDs server-side) |

---

## `UpdateProfileItem`

Single profile item for update — profile_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | Yes | UUID of the profile to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `request_limit_id` | `string` | No | UUID of the request limit resource |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `email_ids` | `string`[] | No | Email resource UUIDs |
| `role_ids` | `string`[] | No | Role resource UUIDs |

---

## `UpdateProviderItem`

Single provider item for update — provider_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_id` | `string` | Yes | Target provider identifier to update |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `active_flag_id` | `string` | No | Active flag option identifier |
| `active_flag` | `boolean` | No | Whether the provider is active |
| `department_ids` | `string`[] | No | Department identifiers |
| `departments` | `string`[] | No | Department names to match |
| `endpoint_ids` | `string`[] | No | Endpoint resource identifiers |
| `key_ids` | `string`[] | No | API key resource identifiers |
| `value_ids` | `string`[] | No | Value resource identifiers |

---

## `UpdateRubricItem`

Single rubric item for update — rubric_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | Yes | Rubric UUID to update |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `active_flag_id` | `string` | No | Active flag option UUID |
| `active_flag` | `boolean` | No | Active flag boolean value |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `point_ids` | `string`[] | No | Point UUIDs |
| `standard_group_ids` | `string`[] | No | Standard group UUIDs |
| `standard_ids` | `string`[] | No | Standard UUIDs |

---

## `UpdateScenarioItem`

Single scenario item for update — scenario_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | Yes | UUID of the scenario to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `problem_statement_id` | `string` | No | UUID of the problem statement resource |
| `problem_statement` | `string` | No | Problem statement text value |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `objectives_enabled_flag_id` | `string` | No | UUID of the objectives enabled flag option |
| `images_enabled_flag_id` | `string` | No | UUID of the images enabled flag option |
| `video_enabled_flag_id` | `string` | No | UUID of the video enabled flag option |
| `questions_enabled_flag_id` | `string` | No | UUID of the questions enabled flag option |
| `problem_statement_enabled_flag_id` | `string` | No | UUID of the problem statement enabled flag option |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `document_ids` | `string`[] | No | Associated document UUIDs |
| `parameter_ids` | `string`[] | No | Associated parameter UUIDs |
| `parameter_field_ids` | `string`[] | No | Associated parameter field UUIDs |
| `image_ids` | `string`[] | No | Associated image UUIDs |
| `objective_ids` | `string`[] | No | Associated objective UUIDs |
| `video_ids` | `string`[] | No | Associated video UUIDs |
| `question_ids` | `string`[] | No | Associated question UUIDs |
| `option_ids` | `string`[] | No | Associated option UUIDs |
| `active_flag` | `boolean` | No | Active flag boolean value |
| `departments` | `string`[] | No | Department names for matching |
| `personas` | `string`[] | No | Persona names for matching |
| `documents` | `string`[] | No | Document names for matching |
| `parameter_fields` | `string`[] | No | Parameter field names for matching |
| `objectives` | `string`[] | No | Objective texts for matching |
| `images` | `string`[] | No | Image names for matching |
| `videos` | `string`[] | No | Video names for matching |
| `questions` | `string`[] | No | Question texts for matching |
| `options` | `string`[] | No | Option texts for matching |

---

## `UpdateSettingItem`

Single setting item for update — setting_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `setting_id` | `string` | Yes | UUID of the setting to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the setting is active |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `color_ids` | `string`[] | No | Color resource UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs to assign |
| `auth_ids` | `string`[] | No | Auth provider UUIDs |
| `provider_key_ids` | `string`[] | No | Provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Auth item value UUIDs |
| `system_ids` | `string`[] | No | System UUIDs to assign |
| `threshold_ids` | `string`[] | No | Threshold UUIDs to assign |
| `setting_resource_ids` | `string`[] | No | Setting resource UUIDs |

---

## `UpdateSimulationItem`

Single simulation item for update — simulation_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | UUID of the simulation to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `scenario_ids` | `string`[] | No | Associated scenario UUIDs |
| `scenario_flag_ids` | `string`[] | No | Associated scenario flag UUIDs |
| `scenario_position_ids` | `string`[] | No | Associated scenario position UUIDs |
| `scenario_rubric_ids` | `string`[] | No | Associated scenario rubric UUIDs |
| `scenario_time_limit_ids` | `string`[] | No | Associated scenario time limit UUIDs |
| `is_inactive` | `boolean` | No | Whether the simulation is inactive |
| `is_practice` | `boolean` | No | Whether this is a practice simulation |
| `departments` | `string`[] | No | Department names for matching |
| `scenarios` | `string`[] | No | Scenario names for matching |

---

## `UpdateToolItem`

Single tool item for update — tool_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | Yes | Target tool identifier to update |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `arg_positions_ids` | `string`[] | No | Argument position identifiers |
| `args_ids` | `string`[] | No | Argument identifiers |
| `args_outputs_ids` | `string`[] | No | Argument output identifiers |
| `artifact_ids` | `string`[] | No | Artifact identifiers |
| `operation_ids` | `string`[] | No | Operation identifiers |
| `tool_ids` | `string`[] | No | Related tool identifiers |

---

## `app__infra__attempt__types__ContentEntry`

Content entry with computed display fields.

Each content has its own display info (name/icon/color) computed from
persona metadata on the server. Client renders each content with its
own persona styling.

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | No | Content text of the entry |
| `name` | `string` | No | Display name (user or persona) |
| `color` | `string` | No | Persona color for display |
| `icon` | `string` | No | Icon identifier for display |
| `created_at` | `string` | No | ISO timestamp when content was created |

---

## `app__infra__attempt__types__HintEntry`

Hint entry (practice mode only, message_id implied by parent).

| Field | Type | Required | Description |
|---|---|---|---|
| `hint` | `string` | No | Hint text for practice mode |
| `idx` | `integer` | No | Index position of the hint |

---

## `app__infra__scenario__types__DraftImageValue`

Value for creating an image via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Image name |
| `description` | `string` | Yes | Image description text |
| `upload_id` | `string` | No | UUID of the associated upload |

---

## `app__infra__scenario__types__DraftOptionValue`

Value for creating an option via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `option_text` | `string` | Yes | Option text content |
| `question_id` | `string` | No | UUID of the parent question |

---

## `app__infra__scenario__types__DraftQuestionValue`

Value for creating a question via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `question_text` | `string` | Yes | Question text content |
| `time` | `integer` | No | Time limit in seconds |
| `allow_multiple` | `boolean` | No | Whether multiple answers are allowed |

---

## `app__infra__scenario__types__DraftVideoValue`

Value for creating a video via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Video name |
| `description` | `string` | Yes | Video description text |
| `upload_id` | `string` | No | UUID of the associated upload |
| `length_seconds` | `integer` | No | Video length in seconds |

---