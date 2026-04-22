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
| `flag_id` | `string` | No | Flag option UUID |
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the document is active (resolved to flag_id) |
| `template_flag` | `boolean` | No | Whether this is a template document |
| `template_flag_id` | `string` | No | Template flag resource UUID |
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
| `document_id` | `string` | Yes | Document UUID |
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
| `is_inactive` | `boolean` | No | Whether the document is inactive |
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
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the document is active (resolved to flag_id) |
| `template_flag` | `boolean` | No | Whether this is a template document |
| `template_flag_id` | `string` | No | Template flag resource UUID |
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