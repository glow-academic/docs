# Cohort Types

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

## `CohortDepartment`

Department for cohort.

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

## `CohortDescriptionResource`

Description resource for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `icon` | `string` | No | Resolved SVG markup for the icon (hydrated from icons_resource) |
| `flag_option_id` | `string` | No | Selected flag option UUID |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `CohortNameResource`

Name resource for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `CohortPersonaResource`

Persona option exposed from cohort GET.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Persona UUID |
| `name` | `string` | No | Persona name |
| `description` | `string` | No | Persona description |
| `icon` | `string` | No | Persona icon |
| `color` | `string` | No | Persona color |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `instructions` | `string` | No | Persona instructions |
| `examples` | `string`[] | No | Persona examples |
| `parameter_field_ids` | `string`[] | No | Associated parameter field UUIDs |
| `active` | `boolean` | No | Whether the persona is active |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

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
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `CohortSimulationPosition`

Simulation position for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `simulation_id` | `string` | No | Associated simulation UUID |
| `value` | `integer` | No | Position value |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |
| `suggested` | `boolean` | No | Whether this is a suggested option |
| `selected` | `boolean` | No | Whether this is currently selected |
| `pending` | `boolean` | No | Whether this selection is pending acceptance |

---

## `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

## `CreateCohortItem`

Single cohort item for create — no cohort_id.

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
| `department_ids` | `string`[] | No | Department UUIDs |
| `simulation_ids` | `string`[] | No | Simulation UUIDs |
| `simulation_position_ids` | `string`[] | No | Simulation position UUIDs |
| `simulation_availability_ids` | `string`[] | No | Simulation availability UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs |
| `profile_persona_ids` | `string`[] | No | Profile persona UUIDs |
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the cohort is active (resolved to flag_id) |
| `departments` | `string`[] | No | Department names for resolution |
| `simulations` | `string`[] | No | Simulation names for resolution |
| `profiles` | `string`[] | No | Profile names for resolution |

---

## `DeleteCohortResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `cohort_id` | `string` | Yes | Cohort UUID |
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

## `DraftProfilePersonaValue`

Value for creating a profile_persona resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | Yes | Associated profile UUID |
| `persona_id` | `string` | Yes | Associated persona UUID |

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

## `GenerateConfig`

Developer configuration — all optional with sensible defaults.

| Field | Type | Required | Description |
|---|---|---|---|
| `operations` | `string`[] | No | — |
| `dangerous` | `boolean` | No | — |
| `params` | `object` | No | — |
| `group_id` | `string` | No | — |

---

## `GenerationsCohortListItem`

Single generation group in the cohort generations response.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the generation group |
| `session_id` | `string` | No | UUID of the parent session |
| `group_name` | `string` | No | Name of the generation group |
| `created_at` | `string` | No | Timestamp of the generation |

---

## `GetCohortDraftResponse`

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
| `profile_persona_ids` | `string`[] | Yes | Associated profile persona UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `simulation_availability_ids` | `string`[] | Yes | Associated simulation availability UUIDs |
| `simulation_position_ids` | `string`[] | Yes | Associated simulation position UUIDs |
| `simulation_ids` | `string`[] | Yes | Associated simulation UUIDs |
| `pending_department_ids` | `string`[] | No | Pending department UUIDs |
| `pending_description_ids` | `string`[] | No | Pending description UUIDs |
| `pending_flag_ids` | `string`[] | No | Pending flag UUIDs |
| `pending_name_ids` | `string`[] | No | Pending name UUIDs |
| `pending_profile_persona_ids` | `string`[] | No | Pending profile persona UUIDs |
| `pending_profile_ids` | `string`[] | No | Pending profile UUIDs |
| `pending_simulation_availability_ids` | `string`[] | No | Pending simulation availability UUIDs |
| `pending_simulation_position_ids` | `string`[] | No | Pending simulation position UUIDs |
| `pending_simulation_ids` | `string`[] | No | Pending simulation UUIDs |

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

## `ListCohortApiCohort`

Cohort item in list response with Python-computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | No | Cohort UUID |
| `name` | `string` | No | Cohort name |
| `description` | `string` | No | Cohort description |
| `is_inactive` | `boolean` | No | Whether the cohort is inactive |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |
| `department_ids` | `string`[] | No | Associated department IDs |
| `profile_ids` | `string`[] | No | Associated profile IDs |
| `simulation_ids` | `string`[] | No | Associated simulation IDs |
| `usage_count` | `integer` | No | Number of times this cohort is used |
| `num_members` | `integer` | No | Number of members in the cohort |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `can_leave` | `boolean` | No | Whether the current user can leave |
| `updated_at` | `string` | No | Last updated timestamp |

---

## `ListCohortApiDepartment`

Department in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | Department UUID |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |

---

## `ListCohortApiProfile`

Profile in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | No | Profile UUID |
| `name` | `string` | No | Profile name |
| `description` | `string` | No | Profile description |

---

## `ListCohortApiSimulation`

Simulation in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | Simulation UUID |
| `name` | `string` | No | Simulation name |
| `description` | `string` | No | Simulation description |
| `department_ids` | `string`[] | No | Associated department IDs |

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
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the cohort is active (resolved to flag_id) |
| `departments` | `string`[] | No | Department names for resolution |
| `simulations` | `string`[] | No | Simulation names for resolution |
| `profiles` | `string`[] | No | Profile names for resolution |

---

## `app__infra__cohort__types__DraftFormState`

Full form state after draft patch — server is source of truth.

Client replaces its local form state with this after every successful patch.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Selected name resource UUID |
| `name` | `string` | No | Name value that was saved |
| `description_id` | `string` | No | Selected description resource UUID |
| `description` | `string` | No | Description value that was saved |
| `flag_id` | `string` | No | Selected flag option UUID |
| `flag` | `string` | No | Flag value that was saved |
| `active_flag_id` | `string` | No | Selected active flag option UUID |
| `active_flag` | `boolean` | No | Whether the active flag was enabled |
| `department_ids` | `string`[] | No | Selected department UUIDs |
| `departments` | `string`[] | No | Department values that were saved |
| `simulation_ids` | `string`[] | No | Selected simulation UUIDs |
| `simulations` | `string`[] | No | Simulation values that were saved |
| `simulation_position_ids` | `string`[] | No | Selected simulation position UUIDs |
| `simulation_positions` | [`DraftSimulationPositionValue`](#draftsimulationpositionvalue)[] | No | Simulation position values that were saved |
| `simulation_availability_ids` | `string`[] | No | Selected simulation availability UUIDs |
| `simulation_availability` | [`DraftSimulationAvailabilityValue`](#draftsimulationavailabilityvalue)[] | No | Simulation availability values that were saved |
| `profile_ids` | `string`[] | No | Selected profile UUIDs |
| `profiles` | `string`[] | No | Profile values that were saved |
| `profile_persona_ids` | `string`[] | No | Selected profile persona UUIDs |
| `profile_personas` | [`DraftProfilePersonaValue`](#draftprofilepersonavalue)[] | No | Profile persona values that were saved |
| `pending_ids` | `string`[] | No | Pending resource IDs retained on the draft |

---

## `app__infra__cohort__types__SectionFilter`

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