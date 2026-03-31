# `POST` `/stream/GetSuiteResponse`

Schema: GetSuiteResponse

## Request Body (`GetSuiteResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | Test identifier |
| `profile_has_access` | `boolean` | No | Whether profile has access |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group ID |
| `names` | [`SuiteNameSection`](/api-reference/stream/types#suitenamesection) | No | Name section data |
| `descriptions` | [`SuiteDescriptionSection`](/api-reference/stream/types#suitedescriptionsection) | No | Description section data |
| `values` | [`SuiteValueSection`](/api-reference/stream/types#suitevaluesection) | No | Value section data |
| `flags` | [`SuiteFlagSection`](/api-reference/stream/types#suiteflagsection) | No | Flag section data |
| `departments` | [`SuiteDepartmentSection`](/api-reference/stream/types#suitedepartmentsection) | No | Department section data |
| `keys` | [`SuiteKeySection`](/api-reference/stream/types#suitekeysection) | No | Key section data |
| `endpoints` | [`SuiteEndpointSection`](/api-reference/stream/types#suiteendpointsection) | No | Endpoint section data |
| `modalities` | [`SuiteModalitySection`](/api-reference/stream/types#suitemodalitysection) | No | Modality section data |
| `temperature_levels` | [`SuiteTemperatureLevelSection`](/api-reference/stream/types#suitetemperaturelevelsection) | No | Temperature level section data |
| `pricing` | [`SuitePricingSection`](/api-reference/stream/types#suitepricingsection) | No | Pricing section data |
| `reasoning_levels` | [`SuiteReasoningLevelSection`](/api-reference/stream/types#suitereasoninglevelsection) | No | Reasoning level section data |
| `qualities` | [`SuiteQualitySection`](/api-reference/stream/types#suitequalitysection) | No | Quality section data |
| `voices` | [`SuiteVoiceSection`](/api-reference/stream/types#suitevoicesection) | No | Voice section data |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getsuiteresponse Schema Stream Getsuiteresponse Post"
}
```