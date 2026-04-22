# Setting Types

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

## `CreateSettingItem`

Single setting item for create — no setting_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional preset UUID for the new setting artifact |
| `resource_id` | `string` | No | Optional preset UUID for the settings_resource snapshot |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the setting is active |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `color_ids` | `string`[] | No | Color resource UUIDs |
| `logins_ids` | `string`[] | No | Logins resource UUIDs to assign |
| `system_ids` | `string`[] | No | System UUIDs to assign |
| `mcp_id` | `string` | No | MCP resource UUID to assign (single) |
| `threshold_ids` | `string`[] | No | Threshold UUIDs to assign |
| `provider_key_ids` | `string`[] | No | Provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Auth item value UUIDs |
| `setting_resource_ids` | `string`[] | No | Setting resource UUIDs |

---

## `DeleteSettingResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `setting_id` | `string` | Yes | UUID of the deleted setting |
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

## `GenerationsSettingListItem`

Single generation group in the setting generations response.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the generation group |
| `session_id` | `string` | No | UUID of the parent session |
| `group_name` | `string` | No | Name of the generation group |
| `created_at` | `string` | No | Timestamp of the generation |

---

## `GetSettingDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `session_id` | `string` | Yes | Associated session UUID |
| `agent_ids` | `string`[] | Yes | Associated agent UUIDs |
| `auth_item_key_ids` | `string`[] | Yes | Associated auth item key UUIDs |
| `auth_ids` | `string`[] | Yes | Associated auth UUIDs |
| `color_ids` | `string`[] | Yes | Associated color UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `item_ids` | `string`[] | Yes | Associated item UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `provider_key_ids` | `string`[] | Yes | Associated provider key UUIDs |
| `threshold_ids` | `string`[] | Yes | Associated threshold UUIDs |
| `mcp_ids` | `string`[] | No | — |
| `logins_ids` | `string`[] | No | — |
| `pending_agent_ids` | `string`[] | No | Pending agent UUIDs |
| `pending_auth_item_key_ids` | `string`[] | No | Pending auth item key UUIDs |
| `pending_auth_ids` | `string`[] | No | Pending auth UUIDs |
| `pending_color_ids` | `string`[] | No | Pending color UUIDs |
| `pending_department_ids` | `string`[] | No | Pending department UUIDs |
| `pending_description_ids` | `string`[] | No | Pending description UUIDs |
| `pending_flag_ids` | `string`[] | No | Pending flag UUIDs |
| `pending_item_ids` | `string`[] | No | Pending item UUIDs |
| `pending_name_ids` | `string`[] | No | Pending name UUIDs |
| `pending_profile_ids` | `string`[] | No | Pending profile UUIDs |
| `pending_provider_key_ids` | `string`[] | No | Pending provider key UUIDs |
| `pending_threshold_ids` | `string`[] | No | Pending threshold UUIDs |
| `pending_mcp_ids` | `string`[] | No | — |
| `pending_logins_ids` | `string`[] | No | — |

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

## `ListSettingApiKey`

Key type for list endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `key_id` | `string` | No | Unique key identifier |
| `name` | `string` | No | Key display name |
| `key_masked` | `string` | No | Masked key value for display |
| `description` | `string` | No | Key description text |
| `active` | `boolean` | No | Whether the key is currently active |
| `department_ids` | `string`[] | No | Associated department IDs |

---

## `ListSettingApiSetting`

Setting type for list endpoint with computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `settings_id` | `string` | No | Unique setting identifier |
| `created_at` | `string` | No | Timestamp when setting was created |
| `active` | `boolean` | No | Whether the setting is currently active |
| `name` | `string` | No | Setting display name |
| `description` | `string` | No | Setting description text |
| `department_ids` | `string`[] | No | Associated department IDs |
| `can_edit` | `boolean` | No | Whether the actor can edit this setting |
| `can_delete` | `boolean` | No | Whether the actor can delete this setting |
| `can_duplicate` | `boolean` | No | Whether the actor can duplicate this setting |

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

## `SettingAgentCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | Agent identifier |
| `name` | `string` | No | Agent display name |
| `description` | `string` | No | Agent description |

---

## `SettingAuthCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_id` | `string` | No | Auth provider identifier |
| `name` | `string` | No | Auth display name |
| `description` | `string` | No | Auth description |
| `slug` | `string` | No | Auth slug |
| `protocol` | `string` | No | Auth protocol |

---

## `SettingAuthItemKeyResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Auth item key identifier |
| `auth_id` | `string` | No | Auth identifier |
| `item_id` | `string` | No | Item identifier |
| `key_id` | `string` | No | Key identifier |
| `generated` | `boolean` | No | Whether the auth-item-key pair was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingAuthItemValueResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Auth item value identifier |
| `auth_id` | `string` | No | Auth provider identifier |
| `item_id` | `string` | No | Claim item identifier |
| `value` | `string` | No | Literal claim value |
| `generated` | `boolean` | No | Whether the value was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingColorResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Color resource identifier |
| `name` | `string` | No | Color display name |
| `description` | `string` | No | Color description |
| `hex_code` | `string` | No | Hex color value |
| `generated` | `boolean` | No | Whether the color was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingDepartmentResource`

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

## `SettingDescriptionResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Setting description |
| `generated` | `boolean` | No | Whether the description was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Validation error message |

---

## `SettingFlagConfig`

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `icon` | `string` | No | Resolved SVG markup for the icon (hydrated from icons_resource) |
| `flag_option_id` | `string` | No | UUID of the flag option to use when enabling |
| `show` | `boolean` | No | Whether the flag is visible to the client |
| `required` | `boolean` | No | Whether the flag is required |
| `generated` | `boolean` | No | Whether the flag was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingIconCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `icon_id` | `string` | No | Icon identifier |
| `name` | `string` | No | Icon display name |
| `description` | `string` | No | Icon description |
| `value` | `string` | No | Icon value (SVG markup or slug) |

---

## `SettingItemCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `item_id` | `string` | No | Claim item identifier |
| `name` | `string` | No | Claim item display name (e.g. clientId) |
| `description` | `string` | No | Claim item description |
| `encrypted` | `boolean` | No | Whether the item value must be stored encrypted |
| `position` | `integer` | No | Display ordering position |

---

## `SettingKeyCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `key_id` | `string` | No | Key identifier |
| `name` | `string` | No | Key display name |
| `description` | `string` | No | Key description |
| `masked_key` | `string` | No | Masked key value for display |

---

## `SettingLoginsResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `logins_id` | `string` | No | Logins resource identifier |
| `profile_id` | `string` | No | Profile for test login |
| `auth_id` | `string` | No | Auth provider for OIDC login |
| `icon_id` | `string` | No | Icon for login button |
| `icon` | `string` | No | Resolved SVG markup for the icon (hydrated from icons_resource) |
| `display_name` | `string` | No | Display text for login button |
| `login_type` | `string` | No | Login type: 'auth' or 'profile' |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingMcpResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `mcp_id` | `string` | No | MCP resource identifier |
| `agent_id` | `string` | No | Agent providing MCP tools |
| `name` | `string` | No | MCP config display name |
| `description` | `string` | No | MCP config description |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingNameResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Setting display name |
| `generated` | `boolean` | No | Whether the name was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingProfileCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | No | Profile identifier |
| `name` | `string` | No | Profile display name |
| `description` | `string` | No | Profile description |

---

## `SettingProviderCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_id` | `string` | No | Provider identifier |
| `name` | `string` | No | Provider display name |
| `description` | `string` | No | Provider description |

---

## `SettingProviderKeyResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Provider key identifier |
| `provider_id` | `string` | No | Provider identifier |
| `key_id` | `string` | No | Key identifier |
| `key` | `string` | No | Key value |
| `name` | `string` | No | Key display name |
| `description` | `string` | No | Key description |
| `generated` | `boolean` | No | Whether the provider-key pair was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `setting_id` | `string` | No | UUID of the created or updated setting |
| `message` | `string` | Yes | Result message |
| `errors` | [`SettingFieldError`](#settingfielderror)[] | No | Per-field validation errors |

---

## `SettingSystemResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `system_id` | `string` | No | System identifier |
| `name` | `string` | No | System display name |
| `description` | `string` | No | System description |
| `agent_ids` | `string`[] | No | Linked agent identifiers |
| `resolution_strategy` | `string` | No | Resolution strategy |
| `resolution_threshold` | `number` | No | Resolution threshold |
| `generated` | `boolean` | No | Whether the system was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingThresholdResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Threshold resource identifier |
| `type` | `string` | No | Threshold type (e.g. 'success') |
| `value` | `integer` | No | Threshold integer value |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

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

## `UpdateSettingItem`

Single setting item for update — setting_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `setting_id` | `string` | Yes | UUID of the setting to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the setting is active |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `color_ids` | `string`[] | No | Color resource UUIDs |
| `logins_ids` | `string`[] | No | Logins resource UUIDs to assign |
| `system_ids` | `string`[] | No | System UUIDs to assign |
| `mcp_id` | `string` | No | MCP resource UUID to assign (single) |
| `threshold_ids` | `string`[] | No | Threshold UUIDs to assign |
| `provider_key_ids` | `string`[] | No | Provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Auth item value UUIDs |
| `setting_resource_ids` | `string`[] | No | Setting resource UUIDs |

---

## `app__infra__setting__types__DraftFormState`

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource UUID |
| `name` | `string` | No | Echoed name value when available |
| `description_id` | `string` | No | Resolved description resource UUID |
| `description` | `string` | No | Echoed description value when available |
| `active_flag_id` | `string` | No | Resolved active flag option UUID |
| `flag_id` | `string` | No | Legacy alias for the active flag option UUID |
| `department_ids` | `string`[] | No | Assigned department UUIDs |
| `color_ids` | `string`[] | No | Assigned color UUIDs |
| `logins_ids` | `string`[] | No | Assigned logins resource UUIDs |
| `system_ids` | `string`[] | No | Assigned system UUIDs |
| `mcp_id` | `string` | No | Assigned MCP resource UUID |
| `threshold_ids` | `string`[] | No | Assigned threshold UUIDs |
| `provider_key_ids` | `string`[] | No | Assigned provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Assigned auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Assigned auth item value UUIDs |
| `pending_ids` | `string`[] | No | Pending resource identifiers |

---

## `app__infra__setting__types__SectionFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Filter options by search text |
| `limit` | `integer` | No | Max options to return |
| `selected` | `boolean` | No | Only return selected items |
| `suggested` | `boolean` | No | Only return suggested items |
| `include` | `boolean` | No | Include this section in response (default true) |
| `parameter_ids` | `string`[] | No | Reserved for compatibility with shared filter parsing |

---