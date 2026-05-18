# Agent Types

# Agent Types

## `AgentDepartmentResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | Department identifier |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |
| `generated` | `boolean` | No | Whether the department was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentDescriptionResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Agent description |
| `generated` | `boolean` | No | Whether the description was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field with the error |
| `message` | `string` | Yes | Human-readable error message |

---

## `AgentFlagConfig`

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
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentInstructionResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Instruction resource identifier |
| `template` | `string` | No | Instruction template |
| `generated` | `boolean` | No | Whether the instruction was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentModelResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Model resource identifier |
| `name` | `string` | No | Model name |
| `description` | `string` | No | Model description |
| `value` | `string` | No | Model value |
| `provider_id` | `string` | No | Provider identifier |
| `department_ids` | `string`[] | No | Associated department identifiers |
| `temperature_level_ids` | `string`[] | No | Associated temperature level identifiers |
| `reasoning_level_ids` | `string`[] | No | Associated reasoning level identifiers |
| `quality_ids` | `string`[] | No | Associated quality identifiers |
| `voice_ids` | `string`[] | No | Associated voice identifiers |
| `modality_ids` | `string`[] | No | Associated modality identifiers |
| `generated` | `boolean` | No | Whether the model was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentNameResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Agent name |
| `generated` | `boolean` | No | Whether the name was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentPromptResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Prompt resource identifier |
| `system_prompt` | `string` | No | Prompt system text |
| `name` | `string` | No | Prompt name |
| `description` | `string` | No | Prompt description |
| `generated` | `boolean` | No | Whether the prompt was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentQualityResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Quality resource identifier |
| `quality` | `string` | No | Quality value |
| `generated` | `boolean` | No | Whether the quality was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentReasoningLevelResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Reasoning level resource identifier |
| `reasoning_level` | `string` | No | Reasoning level value |
| `generated` | `boolean` | No | Whether the reasoning level was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | No | UUID of the affected agent |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`AgentFieldError`](#agentfielderror)[] | No | List of per-field errors |

---

## `AgentRubricResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Rubric resource identifier |
| `name` | `string` | No | Rubric name |
| `description` | `string` | No | Rubric description |
| `department_ids` | `string`[] | No | Associated department identifiers |
| `total_points` | `integer` | No | Total points |
| `pass_points` | `integer` | No | Passing points |
| `simulation_rubric` | `boolean` | No | Whether this rubric is for simulation |
| `video_rubric` | `boolean` | No | Whether this rubric is for video |
| `standard_group_ids` | `string`[] | No | Associated standard group identifiers |
| `generated` | `boolean` | No | Whether the rubric was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentTemperatureLevelResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Temperature level resource identifier |
| `temperature` | `number` | No | Temperature value |
| `generated` | `boolean` | No | Whether the temperature level was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentToolResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Tool resource identifier |
| `name` | `string` | No | Tool name |
| `description` | `string` | No | Tool description |
| `permission_ids` | `string`[] | No | Associated permission identifiers |
| `department_ids` | `string`[] | No | Associated department identifiers |
| `args_ids` | `string`[] | No | Associated arg identifiers |
| `args_output_ids` | `string`[] | No | Associated arg output identifiers |
| `instruction_id` | `string` | No | Associated instruction identifier |
| `agent_id` | `string` | No | Associated denormalized agent identifier |
| `generated` | `boolean` | No | Whether the tool was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `AgentVoiceResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Voice resource identifier |
| `voice` | `string` | No | Voice value |
| `generated` | `boolean` | No | Whether the voice was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

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

## `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

## `CreateAgentItem`

Single agent item for create — no agent_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the agent |
| `resource_id` | `string` | No | Optional preset UUID for the resource snapshot |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `departments` | `string`[] | No | Department names for matching |
| `active_flag` | `boolean` | No | Whether this agent is active |
| `active_flag_id` | `string` | No | Active flag resource UUID |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `model_id` | `string` | No | Associated model UUID |
| `reasoning_level_ids` | `string`[] | No | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | No | Associated temperature level UUIDs |
| `tool_ids` | `string`[] | No | Associated tool UUIDs |
| `voice_ids` | `string`[] | No | Associated voice UUIDs |
| `agent_ids` | `string`[] | No | Associated agent resource UUIDs |
| `rubric_ids` | `string`[] | No | Associated rubric UUIDs |
| `prompt_id` | `string` | No | System prompt resource UUID |
| `instruction_ids` | `string`[] | No | Instruction template resource UUIDs |

---

## `CreatePromptInput`

Inline prompt creation input.

| Field | Type | Required | Description |
|---|---|---|---|
| `system_prompt` | `string` | Yes | System prompt text |
| `name` | `string` | No | Prompt name |
| `description` | `string` | No | Prompt description |

---

## `DeleteAgentResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | Yes | UUID of the deleted agent |
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

## `GenerationsAgentListItem`

Single generation group in the agent generations response.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the generation group |
| `session_id` | `string` | No | UUID of the parent session |
| `group_name` | `string` | No | Name of the generation group |
| `created_at` | `string` | No | Timestamp of the generation |

---

## `GetAgentDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `session_id` | `string` | Yes | Associated session UUID |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `model_ids` | `string`[] | Yes | Associated model UUIDs |
| `tool_ids` | `string`[] | Yes | Associated tool UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `reasoning_level_ids` | `string`[] | Yes | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | Yes | Associated temperature level UUIDs |
| `voice_ids` | `string`[] | Yes | Associated voice UUIDs |
| `quality_ids` | `string`[] | Yes | Associated quality UUIDs |
| `rubric_ids` | `string`[] | No | Associated rubric UUIDs |
| `prompt_ids` | `string`[] | No | Associated prompt UUIDs |
| `instruction_ids` | `string`[] | No | Associated instruction UUIDs |
| `agent_ids` | `string`[] | No | Associated agent snapshot UUIDs |
| `pending_name_ids` | `string`[] | No | Pending name UUIDs |
| `pending_description_ids` | `string`[] | No | Pending description UUIDs |
| `pending_flag_ids` | `string`[] | No | Pending flag UUIDs |
| `pending_department_ids` | `string`[] | No | Pending department UUIDs |
| `pending_model_ids` | `string`[] | No | Pending model UUIDs |
| `pending_tool_ids` | `string`[] | No | Pending tool UUIDs |
| `pending_reasoning_level_ids` | `string`[] | No | Pending reasoning level UUIDs |
| `pending_temperature_level_ids` | `string`[] | No | Pending temperature level UUIDs |
| `pending_voice_ids` | `string`[] | No | Pending voice UUIDs |
| `pending_quality_ids` | `string`[] | No | Pending quality UUIDs |
| `pending_rubric_ids` | `string`[] | No | Pending rubric UUIDs |
| `pending_prompt_ids` | `string`[] | No | Pending prompt UUIDs |
| `pending_instruction_ids` | `string`[] | No | Pending instruction UUIDs |
| `pending_agent_ids` | `string`[] | No | Pending agent snapshot UUIDs |

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

## `ListAgentApiAgent`

Agent type for list endpoint with computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | UUID of the agent |
| `name` | `string` | No | Display name |
| `description` | `string` | No | Agent description text |
| `reasoning` | `string` | No | Reasoning level label |
| `temperature` | `number` | No | Temperature setting value |
| `model_id` | `string` | No | UUID of the selected model |
| `model_name` | `string` | No | Display name of the model |
| `model_description` | `string` | No | Description of the model |
| `role` | `string` | No | Agent role identifier |
| `updated_at` | `string` | No | Last updated timestamp |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `can_delete` | `boolean` | No | Whether the current user can delete |

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

## `UpdateAgentItem`

Single agent item for update — agent_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | Yes | UUID of the agent to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `departments` | `string`[] | No | Department names for matching |
| `active_flag` | `boolean` | No | Whether this agent is active |
| `active_flag_id` | `string` | No | Active flag resource UUID |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `model_id` | `string` | No | Associated model UUID |
| `reasoning_level_ids` | `string`[] | No | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | No | Associated temperature level UUIDs |
| `tool_ids` | `string`[] | No | Associated tool UUIDs |
| `voice_ids` | `string`[] | No | Associated voice UUIDs |
| `agent_ids` | `string`[] | No | Associated agent resource UUIDs |

---

## `app__infra__agent__types__DraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | UUID of the selected name resource |
| `name` | `string` | No | Resolved name value |
| `description_id` | `string` | No | UUID of the selected description resource |
| `description` | `string` | No | Resolved description value |
| `flag_ids` | `string`[] | Yes | Selected flag UUIDs |
| `active_flag_id` | `string` | No | Selected active flag UUID |
| `department_ids` | `string`[] | Yes | Selected department UUIDs |
| `model_id` | `string` | No | Selected model UUID |
| `tool_ids` | `string`[] | Yes | Selected tool UUIDs |
| `reasoning_level_id` | `string` | No | Selected reasoning level UUID |
| `temperature_level_id` | `string` | No | Selected temperature level UUID |
| `voice_ids` | `string`[] | Yes | Selected voice UUIDs |
| `quality_ids` | `string`[] | Yes | Selected quality UUIDs |
| `rubric_ids` | `string`[] | Yes | Selected rubric UUIDs |
| `prompt_id` | `string` | No | Selected prompt UUID when provided |
| `instruction_id` | `string` | No | Selected instruction UUID when provided |
| `pending_ids` | `string`[] | No | Pending resource identifiers |

---

## `app__infra__agent__types__SectionFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Filter options by search text |
| `limit` | `integer` | No | Max options to return |
| `selected` | `boolean` | No | Only return selected items |
| `suggested` | `boolean` | No | Only return suggested items |
| `include` | `boolean` | No | Include this section in response (default true) |

---
