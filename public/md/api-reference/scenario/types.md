# Scenario Types

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

## `CreateScenarioItem`

Single scenario item for create — no scenario_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the scenario |
| `resource_id` | `string` | No | Optional preset UUID for the resource snapshot |
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
| `images_enabled_flag` | `boolean` | No | Whether images are enabled |
| `objectives_enabled_flag` | `boolean` | No | Whether objectives are enabled |
| `problem_statement_enabled_flag` | `boolean` | No | Whether problem statement is enabled |
| `questions_enabled_flag` | `boolean` | No | Whether questions are enabled |
| `video_enabled_flag` | `boolean` | No | Whether video is enabled |
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

## `DeleteScenarioResult`

Per-item result from bulk delete.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | No | Whether the operation succeeded |
| `scenario_id` | `string` | No | UUID of the deleted scenario |
| `message` | `string` | No | Human-readable result message |

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

## `GenerateConfig`

Developer configuration — all optional with sensible defaults.

| Field | Type | Required | Description |
|---|---|---|---|
| `operations` | `string`[] | No | — |
| `dangerous` | `boolean` | No | — |
| `params` | `object` | No | — |
| `group_id` | `string` | No | — |

---

## `GenerationsScenarioListItem`

Single generation group in the scenario generations response.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the generation group |
| `session_id` | `string` | No | UUID of the parent session |
| `group_name` | `string` | No | Name of the generation group |
| `created_at` | `string` | No | Timestamp of the generation |

---

## `GetScenarioDraftResponse`

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
| `pending_name_ids` | `string`[] | No | Pending name UUIDs |
| `pending_description_ids` | `string`[] | No | Pending description UUIDs |
| `pending_problem_statement_ids` | `string`[] | No | Pending problem statement UUIDs |
| `pending_department_ids` | `string`[] | No | Pending department UUIDs |
| `pending_persona_ids` | `string`[] | No | Pending persona UUIDs |
| `pending_document_ids` | `string`[] | No | Pending document UUIDs |
| `pending_objective_ids` | `string`[] | No | Pending objective UUIDs |
| `pending_image_ids` | `string`[] | No | Pending image UUIDs |
| `pending_video_ids` | `string`[] | No | Pending video UUIDs |
| `pending_question_ids` | `string`[] | No | Pending question UUIDs |
| `pending_option_ids` | `string`[] | No | Pending option UUIDs |
| `pending_flag_ids` | `string`[] | No | Pending flag UUIDs |
| `pending_parameter_field_ids` | `string`[] | No | Pending parameter field UUIDs |

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

## `ListScenarioApiCohort`

Cohort in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | No | UUID of the cohort |
| `name` | `string` | No | Cohort name |
| `description` | `string` | No | Cohort description text |

---

## `ListScenarioApiDepartment`

Department in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | UUID of the department |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description text |

---

## `ListScenarioApiField`

Field in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | UUID of the field |
| `name` | `string` | No | Field name |
| `description` | `string` | No | Field description text |

---

## `ListScenarioApiObjective`

Objective in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `objective_id` | `string` | No | UUID of the objective |
| `name` | `string` | No | Objective name |
| `description` | `string` | No | Objective description text |

---

## `ListScenarioApiPersona`

Persona in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of the persona |
| `name` | `string` | No | Persona name |
| `description` | `string` | No | Persona description text |
| `color` | `string` | No | Display color for the persona |
| `icon` | `string` | No | Icon identifier for the persona |

---

## `ListScenarioApiScenario`

Scenario item in list response with Python-computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | UUID of the scenario |
| `name` | `string` | No | Display name |
| `problem_statement` | `string` | No | Problem statement text |
| `is_inactive` | `boolean` | No | Whether the scenario is inactive |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether this is an MCP scenario |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `objective_ids` | `string`[] | No | Associated objective UUIDs |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `field_ids` | `string`[] | No | Associated field UUIDs |
| `simulation_ids` | `string`[] | No | Associated simulation UUIDs |
| `num_simulations` | `integer` | No | Total number of simulations |
| `active_simulation_count` | `integer` | No | Number of active simulations |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `cohort_ids` | `string`[] | No | Associated cohort UUIDs |
| `updated_at` | `string` | No | Last updated timestamp |

---

## `ListScenarioApiSimulation`

Simulation in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | UUID of the simulation |
| `name` | `string` | No | Simulation name |
| `description` | `string` | No | Simulation description text |
| `department_ids` | `string`[] | No | Associated department UUIDs |

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

## `ScenarioDepartment`

Department for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | UUID of the department |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description text |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ScenarioDescriptionResource`

Description resource for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ScenarioDocument`

Document for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | No | UUID of the document |
| `name` | `string` | No | Document name |
| `description` | `string` | No | Document description text |
| `file_id` | `string` | No | UUID of the files_resource (used for download) |
| `file_path` | `string` | No | Storage path of the file |
| `mime_type` | `string` | No | MIME type of the document |
| `upload_id` | `string` | No | UUID of the associated upload |
| `html` | `boolean` | No | Whether the document is HTML content |
| `parameter_ids` | `string`[] | No | Linked parameter UUIDs |
| `field_ids` | `string`[] | No | Linked field UUIDs |
| `parent_document_id` | `string` | No | UUID of the parent document |
| `video_document` | `boolean` | No | Has linked parameter with video enabled |
| `non_video_document` | `boolean` | No | Has linked parameter with video disabled |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

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
| `id` | `string` | No | UUID of the parameter_fields_resource junction row; required by the client picker to select a field |
| `field_id` | `string` | No | UUID of the field |
| `name` | `string` | No | Field name |
| `description` | `string` | No | Field description text |
| `parameter_id` | `string` | No | UUID of the linked parameter |
| `parameter_name` | `string` | No | Name of the linked parameter |
| `conditional_parameter_ids` | `string`[] | No | Conditional parameter UUIDs |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ScenarioFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field with the error |
| `message` | `string` | Yes | Human-readable error message |

---

## `ScenarioFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag config key identifier |
| `label` | `string` | Yes | Display label for the flag |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | UUID of the selected icon resource |
| `icon` | `string` | No | Resolved SVG markup for the icon (hydrated from icons_resource) |
| `flag_option_id` | `string` | No | UUID of the flag option to use when enabling |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |
| `video_flag` | `boolean` | No | Whether this flag only shows when video is enabled |

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
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ScenarioNameResource`

Name resource for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ScenarioObjective`

Objective for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the objective |
| `objective` | `string` | No | Objective text |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

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
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

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
| `generated` | `boolean` | No | Whether this was AI-generated |
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ScenarioProblemStatement`

Problem statement for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_statement_id` | `string` | No | UUID of the problem statement |
| `name` | `string` | No | Problem statement name |
| `problem_statement` | `string` | No | Problem statement text |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `ScenarioQuestion`

Question for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `question_id` | `string` | No | UUID of the question |
| `question_text` | `string` | No | Question text content |
| `allow_multiple` | `boolean` | No | Whether multiple answers are allowed |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

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
| `selected` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

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
| `images_enabled_flag` | `boolean` | No | Whether images are enabled |
| `objectives_enabled_flag` | `boolean` | No | Whether objectives are enabled |
| `problem_statement_enabled_flag` | `boolean` | No | Whether problem statement is enabled |
| `questions_enabled_flag` | `boolean` | No | Whether questions are enabled |
| `video_enabled_flag` | `boolean` | No | Whether video is enabled |
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

## `app__infra__persona__types__SectionFilter`

Per-section filter options for GET requests.

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Filter options by search text |
| `limit` | `integer` | No | Max options to return |
| `selected` | `boolean` | No | Only return selected items |
| `suggested` | `boolean` | No | Only return suggested items |
| `include` | `boolean` | No | Include this section in response (default true) |
| `parameter_ids` | `string`[] | No | Parameter group IDs to filter by (parameter_fields section only) |

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