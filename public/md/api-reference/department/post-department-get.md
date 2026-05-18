# `POST` `/department/get`

# `POST` `/department/get`

Get Department

Get department information using the canonical shared department operation.

## Request Body (`GetDepartmentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Department UUID to retrieve |
| `department_id` | `string` | No | Legacy department UUID to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__department__types__SectionFilter`](/api-reference/department/types#app-infra-department-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__department__types__SectionFilter`](/api-reference/department/types#app-infra-department-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__department__types__SectionFilter`](/api-reference/department/types#app-infra-department-types-sectionfilter) | No | Filter options for flags section |
| `settings` | [`app__infra__department__types__SectionFilter`](/api-reference/department/types#app-infra-department-types-sectionfilter) | No | Filter options for settings section |

## Response (`GetDepartmentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `department_exists` | `boolean` | No | Whether the department exists |
| `can_edit` | `boolean` | No | Whether the actor can edit this department |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `group_id` | `string` | No | Group UUID for draft collaboration |
| `draft_name` | `string` | No | Immutable draft label from the active draft entry, when a ``draft_id`` was supplied. ``None`` for non-draft fetches. |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate anywhere |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic sections |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`DepartmentNameResource`](/api-reference/department/types#departmentnameresource)[] | No | Name resources |
| `descriptions` | [`DepartmentDescriptionResource`](/api-reference/department/types#departmentdescriptionresource)[] | No | Description resources |
| `flags` | [`DepartmentFlagResource`](/api-reference/department/types#departmentflagresource)[] | No | Flag resources (one per flags_resource row, value=true/false) |
| `settings` | [`DepartmentSettingResource`](/api-reference/department/types#departmentsettingresource)[] | No | Setting resources |
