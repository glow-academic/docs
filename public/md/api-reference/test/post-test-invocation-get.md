# `POST` `/test/invocation_get`

Invocation Get

Get hydrated resources for benchmark bundle customization.

## Request Body (`GetInvocationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Invocation identifier |
| `invocation_id` | `string` | No | Invocation identifier |
| `benchmark_bundle_entry_id` | `string` | No | Legacy invocation identifier |
| `test_id` | `string` | No | Owning test identifier |
| `draft_id` | `string` | No | Optional draft identifier |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for descriptions section |
| `values` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for values section |
| `flags` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for departments section |
| `keys` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for keys section |
| `endpoints` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for endpoints section |
| `modalities` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for modalities section |
| `temperature_levels` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for temperature levels section |
| `pricing` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for pricing section |
| `reasoning_levels` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for reasoning levels section |
| `qualities` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for qualities section |
| `voices` | [`app__infra__invocation__types__SectionFilter`](/api-reference/test/types#app-infra-invocation-types-sectionfilter) | No | Filter options for voices section |
| `descriptions_search` | `string` | No | Legacy search string for descriptions |

## Response (`GetSuiteResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `test_id` | `string` | No | Owning test identifier |
| `invocation_id` | `string` | No | Invocation identifier |
| `profile_has_access` | `boolean` | No | Whether profile has access |
| `can_edit` | `boolean` | No | Whether the actor can edit this invocation draft |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `group_id` | `string` | No | Associated group ID |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate anywhere |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`InvocationNameResource`](/api-reference/test/types#invocationnameresource)[] | No | Name resources |
| `descriptions` | [`InvocationDescriptionResource`](/api-reference/test/types#invocationdescriptionresource)[] | No | Description resources |
| `values` | [`InvocationValueResource`](/api-reference/test/types#invocationvalueresource)[] | No | Value resources |
| `flags` | [`InvocationFlagResource`](/api-reference/test/types#invocationflagresource)[] | No | Flag resources |
| `departments` | [`InvocationDepartmentResource`](/api-reference/test/types#invocationdepartmentresource)[] | No | Department resources |
| `keys` | [`InvocationKeyResource`](/api-reference/test/types#invocationkeyresource)[] | No | Key resources |
| `endpoints` | [`InvocationEndpointResource`](/api-reference/test/types#invocationendpointresource)[] | No | Endpoint resources |
| `modalities` | [`InvocationModalityResource`](/api-reference/test/types#invocationmodalityresource)[] | No | Modality resources |
| `temperature_levels` | [`InvocationTemperatureLevelResource`](/api-reference/test/types#invocationtemperaturelevelresource)[] | No | Temperature level resources |
| `pricing` | [`InvocationPricingResource`](/api-reference/test/types#invocationpricingresource)[] | No | Pricing resources |
| `reasoning_levels` | [`InvocationReasoningLevelResource`](/api-reference/test/types#invocationreasoninglevelresource)[] | No | Reasoning level resources |
| `qualities` | [`InvocationQualityResource`](/api-reference/test/types#invocationqualityresource)[] | No | Quality resources |
| `voices` | [`InvocationVoiceResource`](/api-reference/test/types#invocationvoiceresource)[] | No | Voice resources |
| `model_flags` | [`InvocationModelFlagResource`](/api-reference/test/types#invocationmodelflagresource)[] | No | Per-model flag junction rows |
| `model_flag_options` | [`InvocationModelFlagOptionResource`](/api-reference/test/types#invocationmodelflagoptionresource)[] | No | Cross-product (model × flag-type × value) options for the ModelFlags picker. |