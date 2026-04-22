# Parameter Types

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

## `CreateParameterItem`

Single parameter item for create — no parameter_id.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned identifier |
| `resource_id` | `string` | No | Optional preset UUID for the resource snapshot |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `departments` | `string`[] | No | Department names to match |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `field_ids` | `string`[] | No | Field identifiers |
| `persona_parameter` | `boolean` | No | Show on persona edit page |
| `document_parameter` | `boolean` | No | Show on document edit page |
| `scenario_parameter` | `boolean` | No | Show on scenario edit page |
| `video_parameter` | `boolean` | No | Show on video edit page |

---

## `DeleteParameterResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `parameter_id` | `string` | Yes | Deleted parameter identifier |
| `message` | `string` | Yes | Result message |

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

## `GenerationsParameterListItem`

Single generation group in the parameter generations response.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the generation group |
| `session_id` | `string` | No | UUID of the parent session |
| `group_name` | `string` | No | Name of the generation group |
| `created_at` | `string` | No | Timestamp of the generation |

---

## `GetParameterDraftResponse`

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
| `field_ids` | `string`[] | Yes | Associated field UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `pending_department_ids` | `string`[] | No | Pending department UUIDs |
| `pending_description_ids` | `string`[] | No | Pending description UUIDs |
| `pending_field_ids` | `string`[] | No | Pending field UUIDs |
| `pending_flag_ids` | `string`[] | No | Pending flag UUIDs |
| `pending_name_ids` | `string`[] | No | Pending name UUIDs |

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

## `ListParameterApiParameter`

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter unique identifier |
| `name` | `string` | No | Display name of the parameter |
| `description` | `string` | No | Parameter description text |
| `active` | `boolean` | No | Whether this parameter is currently active |
| `department_ids` | `string`[] | No | Associated department identifiers |
| `scenario_ids` | `string`[] | No | Associated scenario identifiers |
| `document_ids` | `string`[] | No | Associated document identifiers |
| `num_items` | `integer` | No | Number of items in this parameter |
| `sample_items` | `string`[] | No | Sample items for preview |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `updated_at` | `string` | No | Timestamp of last update |

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

## `ParameterDepartmentResource`

Department resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | Department identifier |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `ParameterDescriptionResource`

Description resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `description` | `string` | No | Field description |
| `conditional_parameter_id` | `string` | No | Conditional parameter identifier |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `ParameterFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `icon` | `string` | No | Resolved SVG markup for the icon (hydrated from icons_resource) |
| `flag_option_id` | `string` | No | Option ID to use when enabling |
| `show` | `boolean` | No | Whether to display this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this flag was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `ParameterNameResource`

Name resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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

## `app__infra__parameter__types__DraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource identifier |
| `name` | `string` | No | Echoed name value |
| `description_id` | `string` | No | Resolved description resource identifier |
| `description` | `string` | No | Echoed description value |
| `flag_ids` | `string`[] | Yes | Flag option identifiers |
| `department_ids` | `string`[] | Yes | Department identifiers |
| `field_ids` | `string`[] | Yes | Field identifiers |
| `pending_ids` | `string`[] | No | Pending resource identifiers |

---

## `app__infra__parameter__types__SectionFilter`

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