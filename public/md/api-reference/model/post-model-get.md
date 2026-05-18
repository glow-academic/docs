# `POST` `/model/get`

# `POST` `/model/get`

Get Model

Get model information using the canonical shared model operation.

## Request Body (`GetModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Model unique identifier |
| `model_id` | `string` | No | Legacy alias for model unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for names |
| `descriptions` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for descriptions |
| `values` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for values |
| `providers` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for providers |
| `flags` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for flags |
| `departments` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for departments |
| `modalities` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for modalities |
| `temperature_levels` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for temperature levels |
| `pricing` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for pricing |
| `reasoning_levels` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for reasoning levels |
| `qualities` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for qualities |
| `voices` | [`app__infra__model__types__SectionFilter`](/api-reference/model/types#app-infra-model-types-sectionfilter) | No | Filter options for voices |

## Response (`GetModelApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `model_exists` | `boolean` | No | Whether the model exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Group identifier for the model |
| `model_id` | `string` | No | Model identifier |
| `show_ai_generate` | `boolean` | No | Whether any step should show AI generate |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `provider_show_ai_generate` | `boolean` | No | Show AI generate for provider step |
| `features_show_ai_generate` | `boolean` | No | Show AI generate for features step |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`ModelNameResource`](/api-reference/model/types#modelnameresource)[] | No | Name resources |
| `descriptions` | [`ModelDescriptionResource`](/api-reference/model/types#modeldescriptionresource)[] | No | Description resources |
| `values` | [`ModelValueResource`](/api-reference/model/types#modelvalueresource)[] | No | Value resources |
| `providers` | [`ModelProviderResource`](/api-reference/model/types#modelproviderresource)[] | No | Provider resources |
| `flags` | [`ModelFlagConfig`](/api-reference/model/types#modelflagconfig)[] | No | Flag configs |
| `departments` | [`ModelDepartmentResource`](/api-reference/model/types#modeldepartmentresource)[] | No | Department resources |
| `modalities` | [`ModelModalityResource`](/api-reference/model/types#modelmodalityresource)[] | No | Modality resources |
| `temperature_levels` | [`ModelTemperatureLevelResource`](/api-reference/model/types#modeltemperaturelevelresource)[] | No | Temperature level resources |
| `pricing` | [`ModelPricingResource`](/api-reference/model/types#modelpricingresource)[] | No | Pricing resources |
| `reasoning_levels` | [`ModelReasoningLevelResource`](/api-reference/model/types#modelreasoninglevelresource)[] | No | Reasoning level resources |
| `qualities` | [`ModelQualityResource`](/api-reference/model/types#modelqualityresource)[] | No | Quality resources |
| `voices` | [`ModelVoiceResource`](/api-reference/model/types#modelvoiceresource)[] | No | Voice resources |
