# Simulation Types

# Simulation Types

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

## `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

## `CreateSimulationItem`

Single simulation item for create — no simulation_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the simulation |
| `resource_id` | `string` | No | Optional preset UUID for the resource snapshot |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `scenario_ids` | `string`[] | No | Associated scenario UUIDs |
| `scenario_flag_ids` | `string`[] | No | Associated scenario flag UUIDs |
| `scenario_position_ids` | `string`[] | No | Associated scenario position UUIDs |
| `scenario_rubric_ids` | `string`[] | No | Associated scenario rubric UUIDs |
| `scenario_time_limit_ids` | `string`[] | No | Associated scenario time limit UUIDs |
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the simulation is active (resolved to flag_id) |
| `practice_flag` | `boolean` | No | Whether this is a practice simulation |
| `practice_flag_id` | `string` | No | Practice flag resource UUID |
| `departments` | `string`[] | No | Department names for matching |
| `scenarios` | `string`[] | No | Scenario names for matching |

---

## `DeleteSimulationResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `simulation_id` | `string` | Yes | UUID of the deleted simulation |
| `message` | `string` | Yes | Human-readable result message |

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

## `GenerateConfig`

Developer configuration — all optional with sensible defaults.

| Field | Type | Required | Description |
|---|---|---|---|
| `operations` | `string`[] | No | — |
| `dangerous` | `boolean` | No | — |
| `params` | `object` | No | — |
| `group_id` | `string` | No | — |

---

## `GenerationsSimulationListItem`

Single generation group in the simulation generations response.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the generation group |
| `session_id` | `string` | No | UUID of the parent session |
| `group_name` | `string` | No | Name of the generation group |
| `created_at` | `string` | No | Timestamp of the generation |

---

## `GetSimulationDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
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
| `pending_department_ids` | `string`[] | No | Pending department UUIDs |
| `pending_description_ids` | `string`[] | No | Pending description UUIDs |
| `pending_flag_ids` | `string`[] | No | Pending flag UUIDs |
| `pending_name_ids` | `string`[] | No | Pending name UUIDs |
| `pending_scenario_flag_ids` | `string`[] | No | Pending scenario flag UUIDs |
| `pending_scenario_position_ids` | `string`[] | No | Pending scenario position UUIDs |
| `pending_scenario_rubric_ids` | `string`[] | No | Pending scenario rubric UUIDs |
| `pending_scenario_time_limit_ids` | `string`[] | No | Pending scenario time limit UUIDs |
| `pending_scenario_ids` | `string`[] | No | Pending scenario UUIDs |

---

## `GroupCall`

Tool call referenced by a message.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `tool_name` | `string` | No | — |
| `template_name` | `string` | No | — |

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

---

## `GroupRun`

Run within a group, with its messages.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `created_at` | `string` | No | — |
| `messages` | [`GroupMessage`](#groupmessage)[] | No | — |

---

## `ListFilterOption`

Standardized option for list endpoint filter sections.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier for this filter option |
| `name` | `string` | No | Display name |
| `count` | `integer` | No | Number of matching records |
| `hex_code` | `string` | No | Hex color code for display |
| `value` | `string` | No | Internal value |
| `type` | `string` | No | Option type discriminator |

---

## `ListFilterSection`

Filter section with options and echoed request state.

| Field | Type | Required | Description |
|---|---|---|---|
| `options` | [`ListFilterOption`](#listfilteroption)[] | No | Available filter options |
| `selected_ids` | `string`[] | No | Currently selected filter option IDs |
| `search` | `string` | No | Active search text for filtering |

---

## `ListSimulationApiPersona`

Persona in list response (minimal: only for color dot rendering).

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of the persona |
| `color` | `string` | No | Display color for the persona |

---

## `ListSimulationApiScenario`

Scenario in list response (minimal: only for color dot rendering).

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | UUID of the scenario |
| `name` | `string` | No | Scenario name |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `persona_mapping` | [`ListSimulationApiPersona`](#listsimulationapipersona)[] | No | Persona color mapping for rendering |

---

## `ListSimulationApiSimulation`

Simulation item in list response with Python-computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | UUID of the simulation |
| `name` | `string` | No | Display name |
| `description` | `string` | No | Simulation description text |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `is_inactive` | `boolean` | No | Whether the simulation is inactive |
| `practice_simulation` | `boolean` | No | Whether this is a practice simulation |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether this is an MCP simulation |
| `scenario_ids` | `string`[] | No | Associated scenario UUIDs |
| `num_cohorts` | `integer` | No | Total number of cohorts |
| `cohort_usage_count` | `integer` | No | Number of cohorts using this simulation |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `cohort_ids` | `string`[] | No | Associated cohort UUIDs |
| `updated_at` | `string` | No | Last updated timestamp |

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
| `theme` | [`ThemePrimitives`](#themeprimitives) | No | Theme primitives (ThemeHydrator) |
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

## `SimulationDepartment`

Department for simulation.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | UUID of the department |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description text |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `SimulationDescriptionResource`

Description resource for simulation.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `icon` | `string` | No | Resolved SVG markup for the icon (hydrated from icons_resource) |
| `flag_option_id` | `string` | No | UUID of the flag option |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `SimulationNameResource`

Name resource for simulation.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `SimulationScenarioPosition`

Scenario position.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the scenario position |
| `scenario_id` | `string` | No | UUID of the parent scenario |
| `value` | `integer` | No | Position value |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `SimulationScenarioRubric`

Scenario rubric.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the scenario rubric |
| `scenario_id` | `string` | No | UUID of the parent scenario |
| `rubric_id` | `string` | No | UUID of the rubric resource |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

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
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `scenario_ids` | `string`[] | No | Associated scenario UUIDs |
| `scenario_flag_ids` | `string`[] | No | Associated scenario flag UUIDs |
| `scenario_position_ids` | `string`[] | No | Associated scenario position UUIDs |
| `scenario_rubric_ids` | `string`[] | No | Associated scenario rubric UUIDs |
| `scenario_time_limit_ids` | `string`[] | No | Associated scenario time limit UUIDs |
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the simulation is active (resolved to flag_id) |
| `practice_flag` | `boolean` | No | Whether this is a practice simulation |
| `practice_flag_id` | `string` | No | Practice flag resource UUID |
| `departments` | `string`[] | No | Department names for matching |
| `scenarios` | `string`[] | No | Scenario names for matching |

---

## `app__infra__simulation__types__DraftFormState`

Full form state after draft patch — server is source of truth.

Client replaces its local form state with this after every successful patch.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | UUID of the selected name resource |
| `name` | `string` | No | Saved name value |
| `description_id` | `string` | No | UUID of the selected description resource |
| `description` | `string` | No | Saved description value |
| `flag_ids` | `string`[] | No | Selected flag UUIDs |
| `department_ids` | `string`[] | No | Selected department UUIDs |
| `scenario_ids` | `string`[] | No | Selected scenario UUIDs |
| `scenario_flag_ids` | `string`[] | No | Selected scenario flag UUIDs |
| `scenario_position_ids` | `string`[] | No | Selected scenario position UUIDs |
| `scenario_rubric_ids` | `string`[] | No | Selected scenario rubric UUIDs |
| `scenario_time_limit_ids` | `string`[] | No | Selected scenario time limit UUIDs |
| `pending_ids` | `string`[] | No | Pending resource UUIDs (empty until tool-layer support exists) |

---

## `app__infra__simulation__types__SectionFilter`

Per-section filter options for GET requests.

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Filter options by search text |
| `limit` | `integer` | No | Max options to return |
| `selected` | `boolean` | No | Only return selected items |
| `suggested` | `boolean` | No | Only return suggested items |
| `include` | `boolean` | No | Include this section in response (default true) |
| `parameter_ids` | `string`[] | No | Reserved for parity with persona pattern |

---
