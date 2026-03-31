# `POST` `/stream/GetProviderApiResponse`

Schema: GetProviderApiResponse

## Request Body (`GetProviderApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `provider_exists` | `boolean` | No | Whether the provider exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group identifier for the provider |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `integrations_show_ai_generate` | `boolean` | No | Show AI generate for integrations step |
| `names` | [`ProviderNameSection`](/api-reference/stream/types#providernamesection) | No | Name section with resources |
| `descriptions` | [`ProviderDescriptionSection`](/api-reference/stream/types#providerdescriptionsection) | No | Description section with resources |
| `flags` | [`ProviderFlagSection`](/api-reference/stream/types#providerflagsection) | No | Flag section with configs |
| `departments` | [`ProviderDepartmentSection`](/api-reference/stream/types#providerdepartmentsection) | No | Department section with resources |
| `values` | [`ProviderValueSection`](/api-reference/stream/types#providervaluesection) | No | Value section with resources |
| `endpoints` | [`ProviderEndpointSection`](/api-reference/stream/types#providerendpointsection) | No | Endpoint section with resources |
| `keys` | [`ProviderKeySection`](/api-reference/stream/types#providerkeysection) | No | Key section with resources |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getproviderapiresponse Schema Stream Getproviderapiresponse Post"
}
```