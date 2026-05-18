# `POST` `/field/get`

# `POST` `/field/get`

Get Field

Get field information using the canonical shared field operation.

## Request Body (`GetFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Field UUID to retrieve |
| `field_id` | `string` | No | UUID of the field to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__field__types__SectionFilter`](/api-reference/field/types#app-infra-field-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__field__types__SectionFilter`](/api-reference/field/types#app-infra-field-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__field__types__SectionFilter`](/api-reference/field/types#app-infra-field-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__field__types__SectionFilter`](/api-reference/field/types#app-infra-field-types-sectionfilter) | No | Filter options for departments section |
| `conditional_parameters` | [`app__infra__field__types__SectionFilter`](/api-reference/field/types#app-infra-field-types-sectionfilter) | No | Filter options for conditional parameters section |
| `descriptions_search` | `string` | No | Search query for description resources |
| `conditional_parameter_search` | `string` | No | Search query for conditional parameters |
| `conditional_parameter_show_selected` | `boolean` | No | Whether to show only selected parameters |

## Response (`GetFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `field_exists` | `boolean` | No | Whether the field exists |
| `can_edit` | `boolean` | No | Whether the actor can edit this field |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `group_id` | `string` | No | Group UUID for draft collaboration |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button anywhere |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`FieldNameResource`](/api-reference/field/types#fieldnameresource)[] | No | Name resources |
| `descriptions` | [`FieldDescriptionResource`](/api-reference/field/types#fielddescriptionresource)[] | No | Description resources |
| `flags` | [`FieldFlagConfig`](/api-reference/field/types#fieldflagconfig)[] | No | Flag configs |
| `departments` | [`FieldDepartmentResource`](/api-reference/field/types#fielddepartmentresource)[] | No | Department resources |
| `conditional_parameters` | [`FieldConditionalParameterResource`](/api-reference/field/types#fieldconditionalparameterresource)[] | No | Conditional parameter resources |
