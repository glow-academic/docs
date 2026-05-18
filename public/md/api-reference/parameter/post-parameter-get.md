# `POST` `/parameter/get`

# `POST` `/parameter/get`

Get Parameter

Get parameter information using the canonical shared parameter operation.

## Request Body (`GetParameterApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Parameter unique identifier |
| `parameter_id` | `string` | No | Legacy alias for parameter unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__parameter__types__SectionFilter`](/api-reference/parameter/types#app-infra-parameter-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__parameter__types__SectionFilter`](/api-reference/parameter/types#app-infra-parameter-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__parameter__types__SectionFilter`](/api-reference/parameter/types#app-infra-parameter-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__parameter__types__SectionFilter`](/api-reference/parameter/types#app-infra-parameter-types-sectionfilter) | No | Filter options for departments section |
| `parameter_fields` | [`app__infra__parameter__types__SectionFilter`](/api-reference/parameter/types#app-infra-parameter-types-sectionfilter) | No | Filter options for parameter fields section |
| `fields` | [`app__infra__parameter__types__SectionFilter`](/api-reference/parameter/types#app-infra-parameter-types-sectionfilter) | No | Legacy alias for parameter_fields |

## Response (`GetParameterApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `parameter_exists` | `boolean` | No | Whether the parameter exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Group identifier for the parameter |
| `show_ai_generate` | `boolean` | No | Show AI generate if any resource supports it |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `fields_step_show_ai_generate` | `boolean` | No | Show AI generate for fields step |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`ParameterNameResource`](/api-reference/parameter/types#parameternameresource)[] | No | Name resources |
| `descriptions` | [`ParameterDescriptionResource`](/api-reference/parameter/types#parameterdescriptionresource)[] | No | Description resources |
| `flags` | [`ParameterFlagConfig`](/api-reference/parameter/types#parameterflagconfig)[] | No | Flag configs |
| `departments` | [`ParameterDepartmentResource`](/api-reference/parameter/types#parameterdepartmentresource)[] | No | Department resources |
| `parameter_fields` | [`ParameterFieldResource`](/api-reference/parameter/types#parameterfieldresource)[] | No | Parameter field resources |
