# Scenario Types

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
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
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
| `name` | `string` | No | Immutable draft label set at create time |
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

## `ImportField`

Field descriptor for CSV import column mapping.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | — |
| `label` | `string` | Yes | — |
| `required` | `boolean` | No | — |
| `multi` | `boolean` | No | — |
| `type` | `string` | No | — |
| `example` | `string` | No | — |
| `description` | `string` | No | — |

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
| `pending_status` | `string` | No | Latest soft_calls_mv status: 'pending' / 'accepted' / 'rejected' |
| `pending_operation` | `string` | No | Operation type ('create'|'update'|'delete'|'duplicate') of the pending op |
| `pending_call_id` | `string` | No | call_id (idempotency key for ack) of the pending op |
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
| `active` | `boolean` | No | Echoed scenario_active flag state |
| `video_enabled` | `boolean` | No | Echoed video_enabled flag state |
| `problem_statement_enabled` | `boolean` | No | Echoed problem_statement_enabled flag state |
| `objectives_enabled` | `boolean` | No | Echoed objectives_enabled flag state |
| `images_enabled` | `boolean` | No | Echoed images_enabled flag state |
| `questions_enabled` | `boolean` | No | Echoed questions_enabled flag state |
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

## `ScenarioFlagResource`

Flag option row — one per (name, type, value) entry in flags_resource.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Flag resource identifier |
| `name` | `string` | No | Flag display name |
| `type` | `string` | No | Flag type (e.g. 'scenario_active') |
| `value` | `boolean` | No | Underlying bool value of this option |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `icon` | `string` | No | Resolved SVG markup (hydrated from icons_resource) |
| `generated` | `boolean` | No | Whether the flag was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

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

## `UpdateScenarioItem`

Single scenario item for update — scenario_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the scenario to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `problem_statement_id` | `string` | No | UUID of the problem statement resource |
| `problem_statement` | `string` | No | Problem statement text value |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
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

## `UpdateScenarioPatch`

Shared patch for bulk-update-all-matching mode.

Inherits every field from ``UpdateScenarioItem`` and just relaxes
``id`` to optional — the bulk impl stamps the resolved id onto a
clone of the patch per matched row, so any client-supplied id is
ignored. Sparse semantics: only fields the client sets are written.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Ignored — bulk impl stamps the resolved scenario id per matched row |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `problem_statement_id` | `string` | No | UUID of the problem statement resource |
| `problem_statement` | `string` | No | Problem statement text value |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
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
