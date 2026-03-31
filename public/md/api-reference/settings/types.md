# Settings Types

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
| `id` | `string` | No | Optional preset UUID for the new setting |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the setting is active |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `color_ids` | `string`[] | No | Color resource UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs to assign |
| `auth_ids` | `string`[] | No | Auth provider UUIDs |
| `provider_key_ids` | `string`[] | No | Provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Auth item value UUIDs |
| `system_ids` | `string`[] | No | System UUIDs to assign |
| `threshold_ids` | `string`[] | No | Threshold UUIDs to assign |
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

## `GetSettingDraftResponse`

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

## `SettingAuthItemKeySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned auth item keys |
| `resources` | `any`[] | No | Available auth item key resources |

---

## `SettingAuthSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned auth providers |
| `resources` | `any`[] | No | Available auth resources |

---

## `SettingColorSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned colors |
| `resources` | `any`[] | No | Available color resources |

---

## `SettingDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned departments |
| `resources` | `any`[] | No | Available department resources |

---

## `SettingDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `object` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `SettingDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource UUID |
| `description_id` | `string` | No | Resolved description resource UUID |
| `flag_id` | `string` | No | Resolved flag option UUID |
| `department_ids` | `string`[] | Yes | Assigned department UUIDs |
| `color_ids` | `string`[] | Yes | Assigned color UUIDs |
| `profile_ids` | `string`[] | Yes | Assigned profile UUIDs |
| `auth_ids` | `string`[] | Yes | Assigned auth provider UUIDs |
| `provider_key_ids` | `string`[] | Yes | Assigned provider key UUIDs |
| `auth_item_key_ids` | `string`[] | Yes | Assigned auth item key UUIDs |
| `threshold_ids` | `string`[] | Yes | Assigned threshold UUIDs |

---

## `SettingFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Validation error message |

---

## `SettingFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier (e.g. 'active') |
| `label` | `string` | Yes | Human-readable flag label (e.g. 'Active') |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | UUID of the flag option to use when enabling |
| `show` | `boolean` | No | Whether the flag is visible to the client |
| `required` | `boolean` | No | Whether the flag is required |
| `generated` | `boolean` | No | Whether the flag was AI-generated |

---

## `SettingFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`SettingFlagConfig`](#settingflagconfig) | No | Currently selected flag config |
| `resources` | [`SettingFlagConfig`](#settingflagconfig)[] | No | Available flag configs |

---

## `SettingNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `object` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `SettingProfileSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned profiles |
| `resources` | `any`[] | No | Available profile resources |

---

## `SettingProviderKeySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned provider keys |
| `resources` | `any`[] | No | Available provider key resources |

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

## `SettingSystemSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned systems |
| `resources` | `any`[] | No | Available system resources |

---

## `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

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
| `profile_ids` | `string`[] | No | Profile UUIDs to assign |
| `auth_ids` | `string`[] | No | Auth provider UUIDs |
| `provider_key_ids` | `string`[] | No | Provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Auth item value UUIDs |
| `system_ids` | `string`[] | No | System UUIDs to assign |
| `threshold_ids` | `string`[] | No | Threshold UUIDs to assign |
| `setting_resource_ids` | `string`[] | No | Setting resource UUIDs |

---