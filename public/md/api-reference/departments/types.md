# Departments Types

## `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

## `CreateDepartmentItem`

Single department item for create — no department_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional preset UUID for the new department |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the department is active |
| `settings_ids` | `string`[] | No | Setting UUIDs to assign |
| `department_ids` | `string`[] | No | Sub-department UUIDs to assign |

---

## `DeleteDepartmentResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `department_id` | `string` | Yes | UUID of the deleted department |
| `message` | `string` | Yes | Result message |

---

## `DepartmentDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

## `DepartmentDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource UUID |
| `description_id` | `string` | No | Resolved description resource UUID |
| `flag_id` | `string` | No | Resolved flag option UUID |
| `setting_ids` | `string`[] | Yes | Assigned setting UUIDs |

---

## `DepartmentFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Validation error message |

---

## `DepartmentFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | UUID of the selected flag option |
| `show` | `boolean` | No | Whether the flag is visible to the client |
| `required` | `boolean` | No | Whether the flag is required |
| `generated` | `boolean` | No | Whether the flag was AI-generated |

---

## `DepartmentFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DepartmentFlagConfig`](#departmentflagconfig)[] | No | Currently assigned flag configs |
| `resources` | [`DepartmentFlagConfig`](#departmentflagconfig)[] | No | Available flag configs |

---

## `DepartmentNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

## `DepartmentResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `department_id` | `string` | No | UUID of the created or updated department |
| `message` | `string` | Yes | Result message |
| `errors` | [`DepartmentFieldError`](#departmentfielderror)[] | No | Per-field validation errors |

---

## `DepartmentSettingSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned settings |
| `resources` | `any`[] | No | Available setting resources |

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

## `GetDepartmentDraftResponse`

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
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `setting_ids` | `string`[] | Yes | Associated setting UUIDs |

---

## `ListDepartmentApiDepartment`

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | Unique department identifier |
| `name` | `string` | No | Department display name |
| `description` | `string` | No | Department description text |
| `staff_count` | `integer` | No | Number of staff in the department |
| `is_inactive` | `boolean` | No | Whether the department is inactive |
| `can_edit` | `boolean` | No | Whether the actor can edit this department |
| `can_duplicate` | `boolean` | No | Whether the actor can duplicate this department |
| `can_delete` | `boolean` | No | Whether the actor can delete this department |
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

## `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

## `UpdateDepartmentItem`

Single department item for update — department_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | Yes | UUID of the department to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `active_flag` | `boolean` | No | Whether the department is active |
| `settings_ids` | `string`[] | No | Setting UUIDs to assign |
| `department_ids` | `string`[] | No | Sub-department UUIDs to assign |

---