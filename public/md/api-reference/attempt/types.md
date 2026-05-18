# Attempt Types

# Attempt Types

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

## `AnalyticsFacets`

Resolved analytics facets — embeddable in any artifact response.

Contains filter field visibility, available options for dropdowns,
and date range boundaries. Returned inline from artifact get/search
responses so each page has its filter facets ready for SSR.

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`AnalyticsFilterFields`](#analyticsfilterfields) | Yes | Filter field visibility configuration |
| `department_options` | [`AnalyticsFilterOption`](#analyticsfilteroption)[] | No | Department dropdown options |
| `cohort_options` | [`AnalyticsFilterOption`](#analyticsfilteroption)[] | No | Cohort dropdown options |
| `role_options` | [`AnalyticsRoleOption`](#analyticsroleoption)[] | No | Available role resource options |
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

## `AnalyticsRoleOption`

Hydrated role resource option for analytics role filters.

| Field | Type | Required | Description |
|---|---|---|---|
| `value` | `string` | Yes | Option value for the filter |
| `label` | `string` | Yes | Human-readable option label |
| `id` | `string` | Yes | Role resource UUID |
| `name` | `string` | Yes | Role resource name |
| `description` | `string` | No | Role description |
| `icon_id` | `string` | No | Icon resource UUID |
| `color_id` | `string` | No | Color resource UUID |
| `level` | `integer` | Yes | Role privilege level |

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
| `user_persona_id` | `string` | No | UUID of the user's persona entry for this attempt |
| `department_id` | `string` | No | UUID of the department |
| `cohort_id` | `string` | No | UUID of the cohort (home mode only) |
| `is_archived` | `boolean` | No | Whether the attempt is archived |

---

## `AttemptEntries`

Entry payloads grouped by entry type.

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt` | [`GetAttemptResponse`](#getattemptresponse)[] | No | Attempt entry payloads |
| `attempt_chat` | [`ChatData`](#chatdata)[] | No | Chat entry payloads |
| `attempt_message` | [`MessageData`](#messagedata)[] | No | Message entry payloads |
| `runs` | [`GetRunListViewResponse`](#getrunlistviewresponse) | No | Runs list view response |

---

## `AttemptOptionValue`

Inline option value — nested under a question.

| Field | Type | Required | Description |
|---|---|---|---|
| `option_text` | `string` | Yes | — |
| `is_correct` | `boolean` | No | — |

---

## `AttemptQuestionValue`

Inline question value with optional nested options.

| Field | Type | Required | Description |
|---|---|---|---|
| `question_text` | `string` | Yes | — |
| `allow_multiple` | `boolean` | No | — |
| `options` | [`AttemptOptionValue`](#attemptoptionvalue)[] | No | — |

---

## `AttemptResources`

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

## `AvailableContinuationOptions`

Available continuation options for an attempt.

| Field | Type | Required | Description |
|---|---|---|---|
| `options` | [`ContinuationOption`](#continuationoption)[] | Yes | Available continuation option bundles |

---

## `CallerPermissions`

Evaluated permissions for the current caller on this artifact type.

| Field | Type | Required | Description |
|---|---|---|---|
| `can_create` | `boolean` | Yes | Whether the caller can create new artifacts |
| `can_draft` | `boolean` | Yes | Whether the caller can create/update drafts |
| `can_duplicate` | `boolean` | Yes | Whether the caller can duplicate artifacts |
| `has_access` | `boolean` | No | Whether the caller can view this entity |
| `can_edit` | `boolean` | No | Whether the caller can edit this entity |
| `can_delete` | `boolean` | No | Whether the caller can delete this entity |
| `disabled_reason` | `string` | No | Human-readable reason if editing is disabled |

---

## `ChatAnalysisItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | — |

---

## `ChatData`

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
| `hints_enabled` | `boolean` | No | Whether hints should be generated on replies |
| `analyses_enabled` | `boolean` | No | Whether chat-level analyses run during grading |
| `strengths_enabled` | `boolean` | No | Whether strengths are captured during grading |
| `improvements_enabled` | `boolean` | No | Whether improvements are captured during grading |
| `problem_statement_enabled` | `boolean` | No | Whether this chat has a problem statement capability |
| `objectives_enabled` | `boolean` | No | Whether this chat has objectives capability |
| `video_enabled` | `boolean` | No | Whether this chat has a video capability |
| `images_enabled` | `boolean` | No | Whether this chat has an images capability |
| `questions_enabled` | `boolean` | No | Whether this chat has a quiz/questions capability |
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

## `ChatDepartmentResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatDescriptionResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatDocumentResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `file_id` | `string` | No | — |
| `text_id` | `string` | No | — |
| `image_ids` | `string`[] | No | — |
| `template` | `boolean` | No | — |
| `parameter_field_ids` | `string`[] | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description_id` | `string` | No | — |
| `description` | `string` | No | — |
| `problem_statement_id` | `string` | No | — |
| `problem_statement` | `string` | No | — |
| `department_ids` | `string`[] | No | — |
| `document_ids` | `string`[] | No | — |
| `field_ids` | `string`[] | No | — |
| `flag_ids` | `string`[] | No | — |
| `image_ids` | `string`[] | No | — |
| `objective_ids` | `string`[] | No | — |
| `option_ids` | `string`[] | No | — |
| `parameter_field_ids` | `string`[] | No | — |
| `parameter_ids` | `string`[] | No | — |
| `persona_ids` | `string`[] | No | — |
| `question_ids` | `string`[] | No | — |
| `scenario_ids` | `string`[] | No | — |
| `video_ids` | `string`[] | No | — |
| `pending_ids` | `string`[] | No | — |

---

## `ChatFeedbackItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `feedback` | `string` | Yes | — |
| `total` | `number` | No | — |

---

## `ChatFieldResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `value` | `string` | No | — |
| `conditional_parameter_ids` | `string`[] | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatFlagResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `type` | `string` | No | — |
| `icon` | `string` | No | — |
| `value` | `boolean` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatHighlightItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `section` | `string` | Yes | — |
| `idx` | `integer` | No | — |

---

## `ChatHintItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `hint` | `string` | Yes | — |
| `message_id` | `string` | No | — |
| `idx` | `integer` | No | — |

---

## `ChatImageResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `image_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatImprovementItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `message_id` | `string` | No | — |
| `replacements` | [`ChatReplacementItem`](#chatreplacementitem)[] | No | — |

---

## `ChatNameResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatObjectiveResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `objective` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatOptionResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `option_id` | `string` | No | — |
| `option_text` | `string` | No | — |
| `question_id` | `string` | No | — |
| `is_correct` | `boolean` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatParameterFieldResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `field_id` | `string` | No | — |
| `parameter_id` | `string` | No | — |
| `name` | `string` | No | — |
| `parameter_name` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatPersonaResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `icon` | `string` | No | — |
| `color` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatProblemStatementResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_statement_id` | `string` | No | — |
| `name` | `string` | No | — |
| `problem_statement` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatQuestionResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `question_id` | `string` | No | — |
| `question_text` | `string` | No | — |
| `allow_multiple` | `boolean` | No | — |
| `time` | `integer` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ChatReplacementItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `section` | `string` | Yes | — |
| `replace` | `string` | Yes | — |
| `idx` | `integer` | No | — |

---

## `ChatScenarioResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

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

## `ChatStrengthItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `message_id` | `string` | No | — |
| `highlights` | [`ChatHighlightItem`](#chathighlightitem)[] | No | — |

---

## `ChatVideoResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `video_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `length_seconds` | `integer` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

## `ContentEntry`

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

## `ContinuationOption`

A bundle of consecutive scenarios that can be reused from previous attempts.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`PreviousChatOption`](#previouschatoption)[] | Yes | Scenarios in this continuation bundle |
| `total_score` | `number` | Yes | Combined score across scenarios |
| `total_percentage` | `number` | No | Combined score as a percentage |
| `total_time` | `number` | Yes | Combined time across scenarios |

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

## `DashboardFooterMetrics`

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

## `DashboardHeaderMetrics`

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

## `DashboardPrimaryMetrics`

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_heatmap` | [`PrimaryRubricHeatmap`](#primaryrubricheatmap) | No | Rubric correlation heatmap data |
| `rubric_trend` | [`PrimaryRubricTrend`](#primaryrubrictrend) | No | Rubric trend over time |
| `skill_performance` | [`SecondarySkillPerformance`](#secondaryskillperformance) | No | Skill performance radar data |

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

## `DashboardSecondaryMetrics`

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_performance` | [`PrimaryPersonaPerformance`](#primarypersonaperformance) | No | Persona performance data |
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

## `DocsApiResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `list` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `detail` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `new` | [`PageMetaItem`](#pagemetaitem) | Yes | — |

---

## `DocsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Resource or entry name |
| `type` | `string` | Yes | Resource or entry type identifier |
| `description` | `string` | Yes | Human-readable description |
| `materialized_view` | [`MvInfo`](#mvinfo) | No | Materialized view metadata |
| `tables` | [`TableInfo`](#tableinfo)[] | Yes | Related database tables |
| `operations` | [`OperationInfo`](#operationinfo)[] | Yes | Available operations |

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

## `EvalSetup`

Run-level eval scaffold — first-class on the generate response.

Audit's ``**output`` spread carries this onto
``<artifact>.generate.completed``. Null when no rubric-bearing
agent participated.

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `invocations` | [`InvocationSlot`](#invocationslot)[] | Yes | — |

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

## `GenerateConfig`

Developer configuration — all optional with sensible defaults.

| Field | Type | Required | Description |
|---|---|---|---|
| `operations` | `string`[] | No | — |
| `dangerous` | `boolean` | No | — |
| `params` | `object` | No | — |
| `group_id` | `string` | No | — |

---

## `GenerationsAttemptListItem`

Single generation group in the attempt generations response.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the generation group |
| `session_id` | `string` | No | UUID of the parent session |
| `group_name` | `string` | No | Name of the generation group |
| `created_at` | `string` | No | Timestamp of the generation |

---

## `GetAttemptResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |
| `simulation_id` | `string` | Yes | — |
| `profile_id` | `string` | Yes | — |
| `role_id` | `string` | No | — |
| `user_persona_id` | `string` | Yes | — |
| `personas_id` | `string` | Yes | — |
| `cohort_id` | `string` | Yes | — |
| `department_id` | `string` | Yes | — |
| `practice` | `boolean` | Yes | — |
| `attempt_created_at` | `string` | Yes | — |
| `infinite_mode` | `boolean` | Yes | — |
| `num_chats` | `integer` | Yes | — |
| `is_archived` | `boolean` | No | — |
| `is_completed` | `boolean` | No | — |
| `scenario_ids` | `string`[] | Yes | — |
| `chat_entry_id` | `string` | Yes | — |
| `attempt_chat_id` | `string` | Yes | — |

---

## `GetChatDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `session_id` | `string` | Yes | Associated session UUID |
| `name` | `string` | No | Immutable draft label set at create time |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `pending_department_ids` | `string`[] | No | Pending department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `pending_description_ids` | `string`[] | No | Pending description UUIDs |
| `document_ids` | `string`[] | Yes | Associated document UUIDs |
| `pending_document_ids` | `string`[] | No | Pending document UUIDs |
| `field_ids` | `string`[] | Yes | Associated field UUIDs |
| `pending_field_ids` | `string`[] | No | Pending field UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `pending_flag_ids` | `string`[] | No | Pending flag UUIDs |
| `image_ids` | `string`[] | Yes | Associated image UUIDs |
| `pending_image_ids` | `string`[] | No | Pending image UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `pending_name_ids` | `string`[] | No | Pending name UUIDs |
| `objective_ids` | `string`[] | Yes | Associated objective UUIDs |
| `pending_objective_ids` | `string`[] | No | Pending objective UUIDs |
| `option_ids` | `string`[] | Yes | Associated option UUIDs |
| `pending_option_ids` | `string`[] | No | Pending option UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Associated parameter field UUIDs |
| `pending_parameter_field_ids` | `string`[] | No | Pending parameter field UUIDs |
| `parameter_ids` | `string`[] | Yes | Associated parameter UUIDs |
| `pending_parameter_ids` | `string`[] | No | Pending parameter UUIDs |
| `persona_ids` | `string`[] | Yes | Associated persona UUIDs |
| `pending_persona_ids` | `string`[] | No | Pending persona UUIDs |
| `problem_statement_ids` | `string`[] | Yes | Associated problem statement UUIDs |
| `pending_problem_statement_ids` | `string`[] | No | Pending problem statement UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `question_ids` | `string`[] | Yes | Associated question UUIDs |
| `pending_question_ids` | `string`[] | No | Pending question UUIDs |
| `scenario_ids` | `string`[] | Yes | Associated scenario UUIDs |
| `pending_scenario_ids` | `string`[] | No | Pending scenario UUIDs |
| `video_ids` | `string`[] | Yes | Associated video UUIDs |
| `pending_video_ids` | `string`[] | No | Pending video UUIDs |

---

## `GetRunListViewResponse`

Response containing run list data.

| Field | Type | Required | Description |
|---|---|---|---|
| `items` | [`RunViewItem`](#runviewitem)[] | No | Run data items |
| `total_count` | `integer` | No | Total count before pagination |

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

## `GroupCall`

Tool call referenced by a message.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `tool_name` | `string` | No | — |
| `template_name` | `string` | No | — |
| `tool` | `object` | No | — |
| `ledger_status` | `string` | No | — |
| `ledger_operation` | `string` | No | — |
| `ledger_artifact` | `string` | No | — |
| `ledger_artifact_id` | `string` | No | — |

---

## `GroupMessage`

Message within a run.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `role` | `string` | Yes | — |
| `created_at` | `string` | No | — |
| `text_ids` | `string`[] | No | — |
| `audio_ids` | `string`[] | No | — |
| `image_ids` | `string`[] | No | — |
| `video_ids` | `string`[] | No | — |
| `file_ids` | `string`[] | No | — |
| `call_ids` | `string`[] | No | — |
| `calls` | [`GroupCall`](#groupcall)[] | No | — |
| `reasoning` | `boolean` | No | True when this row is a chain-of-thought trace persisted alongside the assistant answer (rendered as a collapsed accordion). |
| `in_context` | `boolean` | No | Whether this message is included in the LLM context for the next generation. Mirrors the dedup pass that builds chat history (see in_context_reason). |
| `in_context_reason` | `string` | No | Why this message is in/out of LLM context. 'kept' = included; 'deduped_read' = older read-only call to a tool that has a fresher result later in the group; future values may include 'trimmed_top_n'. |

---

## `GroupResource`

Lightweight `\{id, name\}` for cross-referencing run-level ids
(``model_id`` / ``agent_id`` / ``profile_id``) against human-readable
names on the analytics panel. Names come from the canonical
``get_models`` / ``get_agents`` / ``get_profiles`` black boxes.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `name` | `string` | No | — |

---

## `GroupRun`

Run within a group, with its messages.

Carries token / cost / model / agent / profile attribution so the
analytics view can render per-run cost + actor info without a
parallel detail shape. ``profile_id`` is the authoring profile
(human user), ``agent_id`` is the LLM-side actor, ``model_id`` is
the model used by that agent. All optional — runs predating these
columns or with unresolved attributions surface ``None``.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `created_at` | `string` | No | — |
| `input_tokens` | `integer` | No | — |
| `output_tokens` | `integer` | No | — |
| `cached_input_tokens` | `integer` | No | — |
| `cost` | `number` | No | — |
| `model_id` | `string` | No | — |
| `agent_id` | `string` | No | — |
| `profile_id` | `string` | No | — |
| `previous_context_start_index` | `integer` | No | Index in ``messages`` where the current run's own messages begin; earlier rows are previous-context replay. ``None`` when the run has no previous context attached. |
| `messages` | [`GroupMessage`](#groupmessage)[] | No | — |

---

## `HighlightEntry`

Highlight entry within a strength.

| Field | Type | Required | Description |
|---|---|---|---|
| `section` | `string` | No | Highlighted text section |
| `idx` | `integer` | No | Index position of the highlight |

---

## `HintEntry`

Hint entry (practice mode only, message_id implied by parent).

| Field | Type | Required | Description |
|---|---|---|---|
| `hint` | `string` | No | Hint text for practice mode |
| `idx` | `integer` | No | Index position of the hint |

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

## `InvocationSlot`

One agent's slot in a multi-agent generation pool.

Populated by ``setup_generation_test`` when an agent carries a
rubric. The client uses these IDs to drive the eval workflow:
review the candidate's output, optionally fire a grader against
its ``invocation_id``, and promote/reject by call_id via the
existing ``idempotency_key + accept`` pattern.

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `agent_id` | `string` | Yes | — |
| `rubric_id` | `string` | No | — |

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

## `LeaderboardDataRow`

Normalized leaderboard row consumed by UI.

| Field | Type | Required | Description |
|---|---|---|---|
| `rank` | `integer` | No | Leaderboard rank position |
| `profile_id` | `string` | No | Profile identifier |
| `name` | `string` | No | Profile display name |
| `simulation_ids` | `string`[] | No | Associated simulation IDs |
| `scenario_ids` | `string`[] | No | Associated scenario IDs |
| `metrics_entry` | [`LeaderboardMetricsEntry`](#leaderboardmetricsentry) | No | Row-level metric values |

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

## `LeaderboardMetricsEntry`

Row metrics for leaderboard cards and table.

| Field | Type | Required | Description |
|---|---|---|---|
| `total_attempts` | [`LeaderboardMetric`](#leaderboardmetric) | No | Total attempts metric |
| `highest_score_avg` | [`LeaderboardMetric`](#leaderboardmetric) | No | Highest score average metric |
| `messages_per_session` | [`LeaderboardMetric`](#leaderboardmetric) | No | Messages per session metric |
| `persona_response_seconds` | [`LeaderboardMetric`](#leaderboardmetric) | No | Persona response time metric |
| `time_spent_minutes` | [`LeaderboardMetric`](#leaderboardmetric) | No | Time spent metric in minutes |
| `improvement_rate_per_day` | [`LeaderboardMetric`](#leaderboardmetric) | No | Daily improvement rate metric |
| `perfect_score_count` | [`LeaderboardMetric`](#leaderboardmetric) | No | Perfect score count metric |
| `quickest_pass_minutes` | [`LeaderboardMetric`](#leaderboardmetric) | No | Quickest pass time metric |

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

## `LeaderboardSections`

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

## `MessageData`

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
| `contents` | [`ContentEntry`](#contententry)[] | No | Content entries with display info |
| `feedbacks` | [`MessageFeedbackEntry`](#messagefeedbackentry)[] | No | Unified strength and improvement feedbacks |
| `hints` | [`HintEntry`](#hintentry)[] | No | Hints for practice mode |
| `parent_message_id` | `string` | No | UUID of the parent message in tree |
| `sibling_index` | `integer` | No | Index among sibling messages |
| `sibling_count` | `integer` | No | Total number of sibling messages |
| `audios_id` | `string` | No | UUID of the attached audios_resource, if any |

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

## `OperationPrompts`

Starter prompts keyed by operation name.

Each key is an operation (e.g. "create", "search", "draft", "export")
and the value is a list of starter prompts for that operation.
The client picks from the operations the caller has permission for
and rotates through them.

| Field | Type | Required | Description |
|---|---|---|---|
| `prompts` | `object` | No | Map of operation name to starter prompts |

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

## `PersonaTrendPoint`

| Field | Type | Required | Description |
|---|---|---|---|
| `date` | `string` | No | Date of the trend point |
| `score` | `number` | No | Score value at this point |
| `timestamp` | `integer` | No | Unix timestamp of the point |
| `simulation_id` | `string` | No | Associated simulation ID |

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

## `PrimaryPersonaPerformance`

| Field | Type | Required | Description |
|---|---|---|---|
| `chart_data` | [`PersonaChartRow`](#personachartrow)[] | No | Persona performance chart rows |
| `valid_simulation_ids` | `string`[] | No | Valid simulation IDs in scope |
| `persona_colors_junction` | [`PersonaColorJunction`](#personacolorjunction)[] | No | Persona-to-color mappings |
| `status` | `string` | No | Section status indicator |

---

## `PrimaryRubricHeatmap`

| Field | Type | Required | Description |
|---|---|---|---|
| `matrices` | [`RubricHeatmapMatrix`](#rubricheatmapmatrix)[] | No | Heatmap matrices per rubric |
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

## `ProducedMedia`

One asset produced by a generation run.

``resource_id`` is the canonical id the per-artifact download tools
accept (e.g. ``Scenario_Image_Download(image_id=resource_id)`` for
``modality="image"``). It maps to ``images_resource.id`` /
``videos_resource.id`` / ``audios_resource.id`` depending on the
modality.

| Field | Type | Required | Description |
|---|---|---|---|
| `modality` | `"image"` \| `"video"` \| `"audio"` | Yes | — |
| `resource_id` | `string` | Yes | — |
| `upload_id` | `string` | Yes | — |
| `mime_type` | `string` | No | — |
| `file_size` | `integer` | No | — |

---

## `ProfileSummary`

Caller identity derived from JWT — who you are on this page.

Superset of the old six-field version: now carries everything the client
needs so that ``/\{artifact\}/context`` fully replaces ``/profiles/context``
and the extra ``getLayoutContextData`` round-trip can be dropped.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Display name of the authenticated user |
| `role` | `string` | Yes | Role name (e.g. 'Super Administrator') |
| `role_level` | `integer` | Yes | Role hierarchy level (0 = highest privilege) |
| `department_ids` | `string`[] | Yes | Departments the user belongs to |
| `artifact_access` | `string`[] | Yes | Artifact types this role can access (sidebar visibility) |
| `role_permissions` | `any`[][] | Yes | Full (artifact, operation) permission tuples for granular page gating |
| `is_active` | `boolean` | Yes | Whether the user's profile is active |
| `id` | `string` | Yes | Profile UUID (SocketProvider, ProfileProvider) |
| `theme` | [`ThemeBundle`](#themebundle) | No | Resolved theme: hex primitives + derived oklch tokens + score thresholds |
| `session_id` | `string` | No | Current session UUID |
| `is_emulation` | `boolean` | No | Whether user is in emulation mode (ProfileProvider) |
| `role_resources` | [`QGetProfileContextV4RoleResource`](#qgetprofilecontextv4roleresource)[] | No | All role resources for emulation display (ProfileProvider) |
| `scoped_roles` | `string`[] | No | Roles the user can emulate (ProfileProvider) |
| `active` | `boolean` | No | Alias for is_active (ProfileProvider uses this name) |

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

## `ReportsDataPoint`

Metric trend point (lightweight equivalent of SQL data_point type).

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | No | Associated profile ID |
| `date` | `string` | No | Date of the data point |
| `value` | `number` \| `integer` | No | Data point value |
| `simulation_id` | `string` | No | Associated simulation ID |
| `scenario_id` | `string` | No | Associated scenario ID |
| `attempt_id` | `string` | No | Associated attempt ID |

---

## `ReportsHeaderMetrics`

Header summary metrics.

| Field | Type | Required | Description |
|---|---|---|---|
| `total_attempts` | [`ReportsMetric`](#reportsmetric) | No | Total attempts metric |
| `average_score` | [`ReportsMetric`](#reportsmetric) | No | Average score metric |
| `completion_percentage` | [`ReportsMetric`](#reportsmetric) | No | Completion percentage metric |
| `first_attempt_pass_rate` | [`ReportsMetric`](#reportsmetric) | No | First attempt pass rate metric |

---

## `ReportsHistoryRow`

History row from attempt facts.

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | No | Attempt identifier |
| `profile_id` | `string` | No | Associated profile ID |
| `simulation_id` | `string` | No | Associated simulation ID |
| `cohort_id` | `string` | No | Associated cohort ID |
| `attempt_created_at` | `string` | No | Attempt creation timestamp |
| `attempt_type` | `string` | No | Type of attempt |
| `is_archived` | `boolean` | No | Whether attempt is archived |
| `infinite_mode` | `boolean` | No | Whether attempt was infinite mode |
| `score_percent` | `number` | No | Score as percentage |
| `has_passed` | `boolean` | No | Whether attempt passed |
| `num_chats` | `integer` | No | Number of chats in attempt |
| `num_chats_completed` | `integer` | No | Number of completed chats |
| `total_time_seconds` | `integer` | No | Total time in seconds |
| `scenario_ids` | `string`[] | No | Associated scenario IDs |

---

## `ReportsHistorySection`

History section output.

| Field | Type | Required | Description |
|---|---|---|---|
| `status` | [`ReportsSectionStatus`](#reportssectionstatus) | No | Section status metadata |
| `rows` | [`ReportsHistoryRow`](#reportshistoryrow)[] | No | History rows |

---

## `ReportsLeaderboardRow`

Leaderboard row from profile metrics.

| Field | Type | Required | Description |
|---|---|---|---|
| `rank` | `integer` | Yes | Leaderboard rank position |
| `profile_id` | `string` | No | Profile identifier |
| `total_attempts` | `integer` | No | Total number of attempts |
| `average_score` | `number` | No | Average score |
| `highest_score` | `number` | No | Highest score achieved |
| `completion_percentage` | `number` | No | Completion percentage |
| `first_attempt_pass_rate` | `number` | No | First attempt pass rate |
| `profile_metrics` | [`ReportsProfileMetrics`](#reportsprofilemetrics) | No | Detailed profile metrics |
| `simulation_ids` | `string`[] | No | Associated simulation IDs |
| `scenario_ids` | `string`[] | No | Associated scenario IDs |

---

## `ReportsLeaderboardSection`

Leaderboard section output.

| Field | Type | Required | Description |
|---|---|---|---|
| `status` | [`ReportsSectionStatus`](#reportssectionstatus) | No | Section status metadata |
| `rows` | [`ReportsLeaderboardRow`](#reportsleaderboardrow)[] | No | Leaderboard rows |

---

## `ReportsMetric`

Small, reusable metric envelope for section outputs.

| Field | Type | Required | Description |
|---|---|---|---|
| `current_value` | `number` \| `integer` | No | Current metric value |
| `has_data` | `boolean` | No | Whether metric has any data |
| `method` | `string` | No | Aggregation method used |
| `data_points` | [`ReportsDataPoint`](#reportsdatapoint)[] | No | Metric data points |
| `hover` | [`ReportsMetricHover`](#reportsmetrichover) | No | Hover tooltip payload |
| `status` | `string` | No | Metric status indicator |

---

## `ReportsMetricHover`

Metric hover payload (compatible field names with legacy SQL bundle).

| Field | Type | Required | Description |
|---|---|---|---|
| `mean` | `integer` | No | Mean value |
| `median` | `integer` | No | Median value |
| `mode` | `integer` | No | Mode value |
| `count` | `integer` | No | Total count |
| `completed` | `integer` | No | Number completed |
| `total` | `integer` | No | Total number |
| `percent` | `integer` | No | Percentage value |
| `top` | `integer`[] | No | Top values list |
| `mean_seconds` | `integer` | No | Mean time in seconds |
| `median_seconds` | `integer` | No | Median time in seconds |
| `samples` | `integer` | No | Number of samples |
| `avg_score_percent` | `integer` | No | Average score percentage |
| `avg_minutes` | `integer` | No | Average duration in minutes |
| `efficiency` | `integer` | No | Efficiency score |
| `tracked` | `integer` | No | Number tracked |
| `stagnant` | `integer` | No | Number stagnant |
| `rate_percent` | `integer` | No | Rate as percentage |
| `total_minutes` | `integer` | No | Total time in minutes |
| `total_hours` | `number` | No | Total time in hours |
| `attempts` | `integer` | No | Number of attempts |
| `unique_simulations` | `integer` | No | Number of unique simulations |
| `per_simulation_mean` | `integer` | No | Mean per simulation |

---

## `ReportsOverviewRow`

Overview row grouped by simulation.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | Simulation identifier |
| `attempts` | `integer` | No | Number of attempts |
| `completed_attempts` | `integer` | No | Number of completed attempts |
| `passed_attempts` | `integer` | No | Number of passing attempts |
| `average_score` | `number` | No | Average score |
| `completion_percentage` | `number` | No | Completion percentage |
| `pass_rate` | `number` | No | Pass rate percentage |

---

## `ReportsOverviewSection`

Overview section output.

| Field | Type | Required | Description |
|---|---|---|---|
| `status` | [`ReportsSectionStatus`](#reportssectionstatus) | No | Section status metadata |
| `rows` | [`ReportsOverviewRow`](#reportsoverviewrow)[] | No | Overview rows by simulation |

---

## `ReportsProfileMetrics`

Per-profile metric bundle aligned to legacy report metric families.

| Field | Type | Required | Description |
|---|---|---|---|
| `average_score` | [`ReportsMetric`](#reportsmetric) | No | Average score metric |
| `completion_percentage` | [`ReportsMetric`](#reportsmetric) | No | Completion percentage metric |
| `first_attempt_pass_rate` | [`ReportsMetric`](#reportsmetric) | No | First attempt pass rate metric |
| `highest_score` | [`ReportsMetric`](#reportsmetric) | No | Highest score metric |
| `messages_per_session` | [`ReportsMetric`](#reportsmetric) | No | Messages per session metric |
| `persona_response_times` | [`ReportsMetric`](#reportsmetric) | No | Persona response times metric |
| `session_efficiency` | [`ReportsMetric`](#reportsmetric) | No | Session efficiency metric |
| `stagnation_rate` | [`ReportsMetric`](#reportsmetric) | No | Stagnation rate metric |
| `time_spent` | [`ReportsMetric`](#reportsmetric) | No | Time spent metric |
| `total_attempts` | [`ReportsMetric`](#reportsmetric) | No | Total attempts metric |

---

## `ReportsResources`

Resource metadata keyed by ID for normalized hydration.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulations` | `object` | No | Simulation resources keyed by ID |
| `profiles` | `object` | No | Profile resources keyed by ID |
| `roles` | `object` | No | Role resources keyed by ID |
| `scenarios` | `object` | No | Scenario resources keyed by ID |
| `cohorts` | `object` | No | Cohort resources keyed by ID |
| `personas` | `object` | No | Persona resources keyed by ID |
| `rubrics` | `object` | No | Rubric resources keyed by ID |

---

## `ReportsSectionStatus`

Section-level status metadata.

| Field | Type | Required | Description |
|---|---|---|---|
| `has_data` | `boolean` | No | Whether section has any data |
| `status` | `string` | No | Section status indicator |
| `note` | `string` | No | Optional status note |

---

## `ReportsSections`

Business-computed section skeletons (built in permissions.py).

| Field | Type | Required | Description |
|---|---|---|---|
| `header_metrics` | [`ReportsHeaderMetrics`](#reportsheadermetrics) | No | Header summary metrics |
| `overview` | [`ReportsOverviewSection`](#reportsoverviewsection) | No | Overview section data |
| `leaderboard` | [`ReportsLeaderboardSection`](#reportsleaderboardsection) | No | Leaderboard section data |
| `trends` | [`ReportsTrendsSection`](#reportstrendssection) | No | Trends section data |
| `history` | [`ReportsHistorySection`](#reportshistorysection) | No | History section data |

---

## `ReportsTrendPoint`

Time-series aggregate point.

| Field | Type | Required | Description |
|---|---|---|---|
| `date` | `string` | No | Date of the trend point |
| `attempts` | `integer` | No | Number of attempts |
| `completed_attempts` | `integer` | No | Number of completed attempts |
| `passed_attempts` | `integer` | No | Number of passing attempts |
| `average_score` | `number` | No | Average score |
| `completion_percentage` | `number` | No | Completion percentage |
| `pass_rate` | `number` | No | Pass rate percentage |

---

## `ReportsTrendsSection`

Trends section output.

| Field | Type | Required | Description |
|---|---|---|---|
| `status` | [`ReportsSectionStatus`](#reportssectionstatus) | No | Section status metadata |
| `chart_data` | [`ReportsTrendPoint`](#reportstrendpoint)[] | No | Trend chart time-series data |

---

## `ReportsViews`

Raw MV slices used to compute section outputs (deprecated — always empty).

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_facts` | `any`[] | No | Raw attempt fact slices |
| `chat_facts` | `any`[] | No | Raw chat fact slices |
| `daily_metrics` | `any`[] | No | Raw daily metric slices |
| `profile_metrics` | `any`[] | No | Raw profile metric slices |

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

## `RubricHeatmapMatrix`

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

## `SecondarySkillPerformance`

| Field | Type | Required | Description |
|---|---|---|---|
| `packages` | [`SecondarySkillPackage`](#secondaryskillpackage)[] | No | Skill performance packages per rubric |
| `valid_rubric_ids` | `string`[] | No | Valid rubric IDs in scope |
| `status` | `string` | No | Section status indicator |

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

## `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

## `ThemeBundle`

Full theme payload for a page bootstrap.

Riding along on every ``/\{artifact\}/context`` response via
``ProfileSummary.theme``. Layers:
  - ``primitives`` / ``dark_primitives`` — hex inputs the settings
    editor reads/writes (light + dark palettes).
  - ``tokens`` / ``dark_tokens`` — oklch tokens the client paints with.
    ``ThemeStyle`` emits two ``<style>`` blocks: one scoped to
    ``:root:not(.dark)`` (light) and one to ``:root.dark`` (dark).
  - ``thresholds`` — numeric score thresholds for analytics components.
Empty-in → empty-out per token: missing values fall through to the
matching ``globals.css`` default.

| Field | Type | Required | Description |
|---|---|---|---|
| `primitives` | [`ThemePrimitives`](#themeprimitives) | No | Hex inputs from the setting (light palette, for the theme editor) |
| `tokens` | [`ThemeTokens`](#themetokens) | No | Derived oklch tokens for light mode (SSR CSS-var injection) |
| `dark_primitives` | [`ThemePrimitives`](#themeprimitives) | No | Hex inputs from the setting (dark palette, for the theme editor) |
| `dark_tokens` | [`ThemeTokens`](#themetokens) | No | Derived oklch tokens for dark mode (SSR CSS-var injection) |
| `thresholds` | [`Thresholds`](#thresholds) | No | Score thresholds resolved from the setting |

---

## `ThemePrimitives`

40 optional fields. The 17 essentials drive the rest; the other 23
are overrides for fine-tuning when derivation isn't what you want.

Empty primitive → empty token → client falls back to globals.css.

| Field | Type | Required | Description |
|---|---|---|---|
| `background` | `string` | No | — |
| `primary` | `string` | No | — |
| `accent` | `string` | No | — |
| `card` | `string` | No | — |
| `sidebar` | `string` | No | — |
| `muted_foreground` | `string` | No | — |
| `ring` | `string` | No | — |
| `border` | `string` | No | — |
| `destructive` | `string` | No | — |
| `success` | `string` | No | — |
| `warning` | `string` | No | — |
| `info` | `string` | No | — |
| `chart1` | `string` | No | — |
| `chart2` | `string` | No | — |
| `chart3` | `string` | No | — |
| `chart4` | `string` | No | — |
| `chart5` | `string` | No | — |
| `foreground` | `string` | No | — |
| `card_foreground` | `string` | No | — |
| `popover` | `string` | No | — |
| `popover_foreground` | `string` | No | — |
| `primary_foreground` | `string` | No | — |
| `secondary` | `string` | No | — |
| `secondary_foreground` | `string` | No | — |
| `muted` | `string` | No | — |
| `accent_foreground` | `string` | No | — |
| `destructive_foreground` | `string` | No | — |
| `danger` | `string` | No | — |
| `danger_foreground` | `string` | No | — |
| `input` | `string` | No | — |
| `success_foreground` | `string` | No | — |
| `warning_foreground` | `string` | No | — |
| `info_foreground` | `string` | No | — |
| `sidebar_foreground` | `string` | No | — |
| `sidebar_primary` | `string` | No | — |
| `sidebar_primary_foreground` | `string` | No | — |
| `sidebar_accent` | `string` | No | — |
| `sidebar_accent_foreground` | `string` | No | — |
| `sidebar_border` | `string` | No | — |
| `sidebar_ring` | `string` | No | — |

---

## `ThemeTokens`

40 fully-resolved CSS variable values (snake_case 1:1 with vars).

| Field | Type | Required | Description |
|---|---|---|---|
| `background` | `string` | No | — |
| `foreground` | `string` | No | — |
| `card` | `string` | No | — |
| `card_foreground` | `string` | No | — |
| `popover` | `string` | No | — |
| `popover_foreground` | `string` | No | — |
| `primary` | `string` | No | — |
| `primary_foreground` | `string` | No | — |
| `secondary` | `string` | No | — |
| `secondary_foreground` | `string` | No | — |
| `muted` | `string` | No | — |
| `muted_foreground` | `string` | No | — |
| `accent` | `string` | No | — |
| `accent_foreground` | `string` | No | — |
| `destructive` | `string` | No | — |
| `destructive_foreground` | `string` | No | — |
| `danger` | `string` | No | — |
| `danger_foreground` | `string` | No | — |
| `border` | `string` | No | — |
| `input` | `string` | No | — |
| `ring` | `string` | No | — |
| `success` | `string` | No | — |
| `success_foreground` | `string` | No | — |
| `warning` | `string` | No | — |
| `warning_foreground` | `string` | No | — |
| `info` | `string` | No | — |
| `info_foreground` | `string` | No | — |
| `chart1` | `string` | No | — |
| `chart2` | `string` | No | — |
| `chart3` | `string` | No | — |
| `chart4` | `string` | No | — |
| `chart5` | `string` | No | — |
| `sidebar` | `string` | No | — |
| `sidebar_foreground` | `string` | No | — |
| `sidebar_primary` | `string` | No | — |
| `sidebar_primary_foreground` | `string` | No | — |
| `sidebar_accent` | `string` | No | — |
| `sidebar_accent_foreground` | `string` | No | — |
| `sidebar_border` | `string` | No | — |
| `sidebar_ring` | `string` | No | — |

---

## `Thresholds`

Numeric score thresholds resolved from the active setting.

Server pre-buckets dashboard metrics into ``success | warning | danger |
neutral`` already, so most components don't need these values. Surface
them for chart reference lines, tooltips, and any client-side bucketing.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `integer` | Yes | Score >= this counts as success |
| `warning` | `integer` | Yes | Score >= this counts as warning |
| `danger` | `integer` | Yes | Score < success threshold but >= this counts as danger; below is neutral/no-data |

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

## `app__infra__attempt__chat__types__DraftImageValue`

Value for creating an image via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Name of the image |
| `description` | `string` | Yes | Description of the image |
| `upload_id` | `string` | No | UUID of the uploaded file |

---

## `app__infra__attempt__chat__types__DraftOptionValue`

Value for creating an option via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `option_text` | `string` | Yes | Display text for the option |
| `question_id` | `string` | No | UUID of the parent question |

---

## `app__infra__attempt__chat__types__DraftQuestionValue`

Value for creating a question via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `question_text` | `string` | Yes | Text of the question |
| `time` | `integer` | No | Video timestamp in seconds |
| `allow_multiple` | `boolean` | No | Whether multiple answers are allowed |

---

## `app__infra__attempt__chat__types__DraftVideoValue`

Value for creating a video via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Name of the video |
| `description` | `string` | Yes | Description of the video |
| `upload_id` | `string` | No | UUID of the uploaded file |

---

## `app__infra__attempt__chat__types__SectionFilter`

Per-section filter options for chat GET requests.

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Filter options by search text |
| `limit` | `integer` | No | Max options to return |
| `selected` | `boolean` | No | Only return selected items |
| `suggested` | `boolean` | No | Only return suggested items |
| `include` | `boolean` | No | Include this section in the response |
| `parameter_ids` | `string`[] | No | Parameter IDs to filter parameter_fields by |

---
