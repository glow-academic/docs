# Simulations Types

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

## `DocsResponse-Output`

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

## `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

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