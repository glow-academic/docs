# `POST` `/models/get`

Get Model

Get model information using the canonical shared model operation.

## Request Body (`GetModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | No | Model unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

## Response (`GetModelApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `model_exists` | `boolean` | No | Whether the model exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group identifier for the model |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `provider_show_ai_generate` | `boolean` | No | Show AI generate for provider step |
| `features_show_ai_generate` | `boolean` | No | Show AI generate for features step |
| `names` | [`ModelNameSection`](/api-reference/models/types#modelnamesection) | No | Name section with resources |
| `descriptions` | [`ModelDescriptionSection`](/api-reference/models/types#modeldescriptionsection) | No | Description section with resources |
| `values` | [`ModelValueSection`](/api-reference/models/types#modelvaluesection) | No | Value section with resources |
| `providers` | [`ModelProviderSection`](/api-reference/models/types#modelprovidersection) | No | Provider section with resources |
| `flags` | [`ModelFlagSection`](/api-reference/models/types#modelflagsection) | No | Flag section with configs |
| `departments` | [`ModelDepartmentSection`](/api-reference/models/types#modeldepartmentsection) | No | Department section with resources |
| `modalities` | [`ModelModalitySection`](/api-reference/models/types#modelmodalitysection) | No | Modality section with resources |
| `temperature_levels` | [`ModelTemperatureLevelSection`](/api-reference/models/types#modeltemperaturelevelsection) | No | Temperature level section |
| `pricing` | [`ModelPricingSection`](/api-reference/models/types#modelpricingsection) | No | Pricing section with resources |
| `reasoning_levels` | [`ModelReasoningLevelSection`](/api-reference/models/types#modelreasoninglevelsection) | No | Reasoning level section |
| `qualities` | [`ModelQualitySection`](/api-reference/models/types#modelqualitysection) | No | Quality section with resources |
| `voices` | [`ModelVoiceSection`](/api-reference/models/types#modelvoicesection) | No | Voice section with resources |