# `POST` `/rubric/get`

Get Rubric

Get rubric information using the canonical shared rubric operation.

## Request Body (`GetRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Rubric UUID to retrieve |
| `rubric_id` | `string` | No | Legacy rubric UUID to retrieve |
| `draft_id` | `string` | No | Draft UUID to load from |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__rubric__types__SectionFilter`](/api-reference/rubric/types#app-infra-rubric-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__rubric__types__SectionFilter`](/api-reference/rubric/types#app-infra-rubric-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__rubric__types__SectionFilter`](/api-reference/rubric/types#app-infra-rubric-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__rubric__types__SectionFilter`](/api-reference/rubric/types#app-infra-rubric-types-sectionfilter) | No | Filter options for departments section |
| `points` | [`app__infra__rubric__types__SectionFilter`](/api-reference/rubric/types#app-infra-rubric-types-sectionfilter) | No | Filter options for points section |
| `standard_groups` | [`app__infra__rubric__types__SectionFilter`](/api-reference/rubric/types#app-infra-rubric-types-sectionfilter) | No | Filter options for standard groups section |
| `standards` | [`app__infra__rubric__types__SectionFilter`](/api-reference/rubric/types#app-infra-rubric-types-sectionfilter) | No | Filter options for standards section |

## Response (`GetRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `rubric_exists` | `boolean` | No | Whether the rubric exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Associated group UUID |
| `show_ai_generate` | `boolean` | No | Whether any section supports AI generation |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for the basic step |
| `content_show_ai_generate` | `boolean` | No | Whether to show AI generate for the content step |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`RubricNameResource`](/api-reference/rubric/types#rubricnameresource)[] | No | Name resources |
| `descriptions` | [`RubricDescriptionResource`](/api-reference/rubric/types#rubricdescriptionresource)[] | No | Description resources |
| `flags` | [`RubricFlagConfig`](/api-reference/rubric/types#rubricflagconfig)[] | No | Flag configs |
| `departments` | [`RubricDepartmentResource`](/api-reference/rubric/types#rubricdepartmentresource)[] | No | Department resources |
| `points` | [`RubricPointResource`](/api-reference/rubric/types#rubricpointresource)[] | No | Point resources |
| `standard_groups` | [`RubricStandardGroupResource`](/api-reference/rubric/types#rubricstandardgroupresource)[] | No | Standard group resources |
| `standards` | [`RubricStandardResource`](/api-reference/rubric/types#rubricstandardresource)[] | No | Standard resources |