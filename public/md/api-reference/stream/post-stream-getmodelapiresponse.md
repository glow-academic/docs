# `POST` `/stream/GetModelApiResponse`

Schema: GetModelApiResponse

## Request Body (`GetModelApiResponse`)

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
| `names` | [`ModelNameResource`](/api-reference/stream/types#modelnameresource)[] | No | Name resources |
| `descriptions` | [`ModelDescriptionResource`](/api-reference/stream/types#modeldescriptionresource)[] | No | Description resources |
| `values` | [`ModelValueResource`](/api-reference/stream/types#modelvalueresource)[] | No | Value resources |
| `providers` | [`ModelProviderResource`](/api-reference/stream/types#modelproviderresource)[] | No | Provider resources |
| `flags` | [`ModelFlagConfig`](/api-reference/stream/types#modelflagconfig)[] | No | Flag configs |
| `departments` | [`ModelDepartmentResource`](/api-reference/stream/types#modeldepartmentresource)[] | No | Department resources |
| `modalities` | [`ModelModalityResource`](/api-reference/stream/types#modelmodalityresource)[] | No | Modality resources |
| `temperature_levels` | [`ModelTemperatureLevelResource`](/api-reference/stream/types#modeltemperaturelevelresource)[] | No | Temperature level resources |
| `pricing` | [`ModelPricingResource`](/api-reference/stream/types#modelpricingresource)[] | No | Pricing resources |
| `reasoning_levels` | [`ModelReasoningLevelResource`](/api-reference/stream/types#modelreasoninglevelresource)[] | No | Reasoning level resources |
| `qualities` | [`ModelQualityResource`](/api-reference/stream/types#modelqualityresource)[] | No | Quality resources |
| `voices` | [`ModelVoiceResource`](/api-reference/stream/types#modelvoiceresource)[] | No | Voice resources |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getmodelapiresponse Schema Stream Getmodelapiresponse Post"
}
```