# Document Types

# Document Types

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

## `CreateDocumentItem`

Single document item for create — no document_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned UUID |
| `resource_id` | `string` | No | Optional preset UUID for the resource snapshot |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
| `active` | `boolean` | No | Denormalized document_active flag state; resolved to a flag_ids entry server-side |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs |
| `upload_ids` | `string`[] | No | File upload UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `text_ids` | `string`[] | No | Text resource UUIDs |
| `file_id` | `string` | No | Files resource UUID for document file |
| `text_id` | `string` | No | Texts resource UUID for document text |

---

## `DeleteDocumentResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `document_id` | `string` | No | Document UUID |
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

## `DocumentDepartmentResource`

Department resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | Department UUID |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `DocumentDescriptionResource`

Description resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `DocumentFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that has the error |
| `message` | `string` | Yes | Human-readable error message |

---

## `DocumentFileResource`

File resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `files_id` | `string` | No | File resource UUID |
| `file_path` | `string` | No | Stored file path |
| `mime_type` | `string` | No | File MIME type |
| `size` | `integer` | No | File size in bytes |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `DocumentFlagResource`

Flag option row — one per (name, type, value) entry in flags_resource.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Flag resource identifier |
| `name` | `string` | No | Flag display name |
| `type` | `string` | No | Flag type (e.g. 'document_active') |
| `value` | `boolean` | No | Underlying bool value of this option |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `icon` | `string` | No | Resolved SVG markup for the icon |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `DocumentImageResource`

Image resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `image_id` | `string` | No | Image resource UUID |
| `name` | `string` | No | Image name |
| `description` | `string` | No | Image description |
| `file_path` | `string` | No | Stored file path |
| `mime_type` | `string` | No | File MIME type |
| `size` | `integer` | No | File size in bytes |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `DocumentNameResource`

Name resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `conditional_parameter_id` | `string` | No | Conditional parameter UUID for grouping |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `DocumentParameterResource`

Parameter catalog item exposed to the client.

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter UUID |
| `name` | `string` | No | Parameter name |
| `description` | `string` | No | Parameter description |
| `value` | `string` | No | Parameter value |
| `department_ids` | `string`[] | No | Department UUIDs |
| `persona_parameter` | `boolean` | No | Whether this is a persona parameter |
| `document_parameter` | `boolean` | No | Whether this is a document parameter |
| `scenario_parameter` | `boolean` | No | Whether this is a scenario parameter |
| `video_parameter` | `boolean` | No | Whether this is a video parameter |
| `field_ids` | `string`[] | No | Associated field UUIDs |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `texts_id` | `string` | No | Text resource UUID |
| `file_path` | `string` | No | Stored file path |
| `mime_type` | `string` | No | File MIME type |
| `content` | `string` | No | Optional text content when available |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `DraftFileValue`

Value for creating a file via the draft endpoint.

Client provides the upload_id from a finalized TUS upload.
Server creates the full chain: files_resource → files_entry → file_uploads_entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | Upload UUID from a finalized TUS upload |

---

## `DraftTextValue`

Value for creating a text via the draft endpoint.

Client provides text content.
Server creates the full chain: uploads_entry → texts_resource → texts_entry → text_uploads_entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Text content to create |

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

## `GenerationsDocumentListItem`

Single generation group in the document generations response.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the generation group |
| `session_id` | `string` | No | UUID of the parent session |
| `group_name` | `string` | No | Name of the generation group |
| `created_at` | `string` | No | Timestamp of the generation |

---

## `GetDocumentDraftResponse`

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
| `file_ids` | `string`[] | Yes | Associated file UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `image_ids` | `string`[] | Yes | Associated image UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Associated parameter field UUIDs |
| `parameter_ids` | `string`[] | Yes | Associated parameter UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `text_ids` | `string`[] | Yes | Associated text UUIDs |
| `pending_department_ids` | `string`[] | No | Pending department UUIDs |
| `pending_description_ids` | `string`[] | No | Pending description UUIDs |
| `pending_file_ids` | `string`[] | No | Pending file UUIDs |
| `pending_flag_ids` | `string`[] | No | Pending flag UUIDs |
| `pending_image_ids` | `string`[] | No | Pending image UUIDs |
| `pending_name_ids` | `string`[] | No | Pending name UUIDs |
| `pending_parameter_field_ids` | `string`[] | No | Pending parameter field UUIDs |
| `pending_parameter_ids` | `string`[] | No | Pending parameter UUIDs |
| `pending_text_ids` | `string`[] | No | Pending text UUIDs |

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

## `ListDocumentApiDocument`

Document type for list endpoint with computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | No | Document UUID |
| `name` | `string` | No | Document name |
| `description` | `string` | No | Document description |
| `department_ids` | `string`[] | No | Associated department IDs |
| `scenario_ids` | `string`[] | No | Associated scenario UUIDs |
| `field_ids` | `string`[] | No | Associated field UUIDs |
| `flag_ids` | `string`[] | No | Currently selected flag option UUIDs |
| `is_inactive` | `boolean` | No | Whether the document is inactive (derived from document_active flag) |
| `is_template` | `boolean` | No | Whether the document is a template (derived from document_template flag) |
| `pending_status` | `string` | No | Latest soft_calls_mv status: 'pending' / 'accepted' / 'rejected' |
| `pending_operation` | `string` | No | Operation type ('create'|'update'|'delete'|'duplicate') of the pending op |
| `pending_call_id` | `string` | No | call_id (idempotency key for ack) of the pending op |
| `extension` | `string` | No | File extension derived from the primary file (e.g. 'pdf', 'docx', 'txt') |
| `num_scenarios` | `integer` | No | Total number of scenarios |
| `active_scenario_count` | `integer` | No | Number of active scenarios |
| `file_id` | `string` | No | Associated file resource UUID |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `updated_at` | `string` | No | Last updated timestamp |

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

## `UpdateDocumentItem`

Single document item for update — document_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | Document UUID to update |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
| `active` | `boolean` | No | Denormalized document_active flag state; resolved to a flag_ids entry server-side |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs |
| `upload_ids` | `string`[] | No | File upload UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `text_ids` | `string`[] | No | Text resource UUIDs |

---

## `UpdateDocumentPatch`

Shared patch for bulk-update-all-matching mode.

Inherits every field from ``UpdateDocumentItem`` and just relaxes
``id`` to optional — the bulk impl stamps the resolved id onto a
clone of the patch per matched row, so any client-supplied id is
ignored. Sparse semantics: only fields the client sets are written.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Ignored — bulk impl stamps the resolved document id per matched row |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
| `active` | `boolean` | No | Denormalized document_active flag state; resolved to a flag_ids entry server-side |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs |
| `upload_ids` | `string`[] | No | File upload UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `text_ids` | `string`[] | No | Text resource UUIDs |

---

## `app__infra__document__types__DraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | No | Echoed unresolved name value |
| `name_id` | `string` | No | Selected name resource UUID |
| `description` | `string` | No | Echoed unresolved description value |
| `description_id` | `string` | No | Selected description resource UUID |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs |
| `active` | `boolean` | No | Echoed document_active flag state |
| `department_ids` | `string`[] | No | Selected department UUIDs |
| `file_ids` | `string`[] | No | Selected file resource UUIDs |
| `image_ids` | `string`[] | No | Selected image UUIDs |
| `text_ids` | `string`[] | No | Selected text resource UUIDs |
| `parameter_field_ids` | `string`[] | No | Selected parameter field UUIDs |
| `parameter_ids` | `string`[] | No | Selected parameter UUIDs |
| `pending_ids` | `string`[] | No | Pending resource UUIDs where supported |

---

## `app__infra__document__types__DraftImageValue`

Value for creating an image via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Image name |
| `description` | `string` | Yes | Image description text |
| `upload_id` | `string` | No | Associated upload UUID |

---

## `app__infra__document__types__SectionFilter`

Per-section filter options for GET requests.

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Filter options by search text |
| `limit` | `integer` | No | Max options to return |
| `selected` | `boolean` | No | Only return selected items |
| `suggested` | `boolean` | No | Only return suggested items |
| `include` | `boolean` | No | Include this section in response (default true) |
| `parameter_ids` | `string`[] | No | Parameter group IDs for parameter field hydration |

---
