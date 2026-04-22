# Persona Types

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

## `CreatePersonaItem`

Single persona item for create — no persona_id.

Required fields (name, color, icon, instructions): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the new persona |
| `resource_id` | `string` | No | Optional preset UUID for the resource snapshot |
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

## `DeletePersonaResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `id` | `string` | Yes | UUID of the deleted persona |
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

## `GenerateConfig`

Developer configuration — all optional with sensible defaults.

| Field | Type | Required | Description |
|---|---|---|---|
| `operations` | `string`[] | No | — |
| `dangerous` | `boolean` | No | — |
| `params` | `object` | No | — |
| `group_id` | `string` | No | — |

---

## `GenerationsPersonaListItem`

Single generation group in the persona generations response.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the generation group |
| `session_id` | `string` | No | UUID of the parent session |
| `group_name` | `string` | No | Name of the generation group |
| `created_at` | `string` | No | Timestamp of the generation |

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

## `GetPersonaDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
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
| `pending_color_ids` | `string`[] | No | Pending color UUIDs |
| `pending_department_ids` | `string`[] | No | Pending department UUIDs |
| `pending_description_ids` | `string`[] | No | Pending description UUIDs |
| `pending_example_ids` | `string`[] | No | Pending example UUIDs |
| `pending_flag_ids` | `string`[] | No | Pending flag UUIDs |
| `pending_icon_ids` | `string`[] | No | Pending icon UUIDs |
| `pending_instruction_ids` | `string`[] | No | Pending instruction UUIDs |
| `pending_name_ids` | `string`[] | No | Pending name UUIDs |
| `pending_parameter_field_ids` | `string`[] | No | Pending parameter field UUIDs |
| `pending_voice_ids` | `string`[] | No | Pending voice UUIDs |

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

## `ListPersonaApiPersona`

Persona type for list endpoint with computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of the persona |
| `name` | `string` | No | Display name |
| `description` | `string` | No | Persona description text |
| `color` | `string` | No | Hex color code |
| `icon` | `string` | No | Icon identifier |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `scenario_ids` | `string`[] | No | Scenarios using this persona |
| `field_ids` | `string`[] | No | Associated field UUIDs |
| `is_inactive` | `boolean` | No | Whether the persona is marked inactive |
| `generated` | `boolean` | No | Whether the persona was AI-generated |
| `mcp` | `boolean` | No | Whether this persona uses MCP tooling |
| `num_scenarios` | `integer` | No | Count of scenarios using this persona |
| `num_profiles` | `integer` | No | Count of profiles who have interacted with this persona |
| `can_edit` | `boolean` | No | Whether the current user can edit this persona |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate this persona |
| `can_delete` | `boolean` | No | Whether the current user can delete this persona |
| `updated_at` | `string` | No | Last modification timestamp |

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

## `PersonaColorResource`

Color resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `hex_code` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `PersonaDepartmentResource`

Department resource for persona.

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

## `PersonaDescriptionResource`

Description resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `PersonaExampleResource`

Example resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `example` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

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
| `icon` | `string` | No | Resolved SVG markup for the icon (hydrated from icons_resource) |
| `flag_option_id` | `string` | No | — |
| `show` | `boolean` | No | — |
| `required` | `boolean` | No | — |
| `generated` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

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
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `PersonaInstructionResource`

Instruction resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `template` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `PersonaNameResource`

Name resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

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
| `conditional_parameter_id` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

---

## `PersonaResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded for this item |
| `id` | `string` | No | UUID of the affected persona |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`PersonaFieldError`](#personafielderror)[] | No | Per-field validation errors, if any |

---

## `PersonaVoiceResource`

Voice resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `voice` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `suggested` | `boolean` | No | — |
| `selected` | `boolean` | No | — |
| `pending` | `boolean` | No | — |

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

## `UpdatePersonaItem`

Single persona item for update — id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the persona to update (required) |
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

## `app__infra__persona__types__DraftFormState`

Full form state after draft patch — server is source of truth.

Client replaces its local form state with this after every successful patch.
Includes both resolved IDs and echoed values for AI model feedback.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Currently selected name resource UUID |
| `name` | `string` | No | Name value that was saved |
| `description_id` | `string` | No | Currently selected description resource UUID |
| `description` | `string` | No | Description value that was saved |
| `instructions_id` | `string` | No | Currently selected instruction resource UUID |
| `instructions` | `string` | No | Instructions value that was saved |
| `color_id` | `string` | No | Currently selected color resource UUID |
| `color` | `string` | No | Color value that was saved (hex code) |
| `icon_id` | `string` | No | Currently selected icon resource UUID |
| `icon` | `string` | No | Icon value that was saved |
| `active_flag_id` | `string` | No | Currently selected flag option UUID |
| `department_ids` | `string`[] | No | Currently associated department UUIDs |
| `example_ids` | `string`[] | No | Currently associated example resource UUIDs |
| `parameter_field_ids` | `string`[] | No | Currently associated parameter field UUIDs |
| `voice_ids` | `string`[] | No | Currently associated voice resource UUIDs |

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