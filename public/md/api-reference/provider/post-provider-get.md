# `POST` `/provider/get`

Get Provider

Get provider information using the canonical shared provider operation.

## Request Body (`GetProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Provider unique identifier |
| `provider_id` | `string` | No | Legacy alias for provider unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__provider__types__SectionFilter`](/api-reference/provider/types#app-infra-provider-types-sectionfilter) | No | Filter options for names |
| `descriptions` | [`app__infra__provider__types__SectionFilter`](/api-reference/provider/types#app-infra-provider-types-sectionfilter) | No | Filter options for descriptions |
| `flags` | [`app__infra__provider__types__SectionFilter`](/api-reference/provider/types#app-infra-provider-types-sectionfilter) | No | Filter options for flags |
| `departments` | [`app__infra__provider__types__SectionFilter`](/api-reference/provider/types#app-infra-provider-types-sectionfilter) | No | Filter options for departments |
| `values` | [`app__infra__provider__types__SectionFilter`](/api-reference/provider/types#app-infra-provider-types-sectionfilter) | No | Filter options for values |
| `endpoints` | [`app__infra__provider__types__SectionFilter`](/api-reference/provider/types#app-infra-provider-types-sectionfilter) | No | Filter options for endpoints |
| `keys` | [`app__infra__provider__types__SectionFilter`](/api-reference/provider/types#app-infra-provider-types-sectionfilter) | No | Filter options for keys |

## Response (`GetProviderApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `provider_exists` | `boolean` | No | Whether the provider exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Group identifier for the provider |
| `draft_name` | `string` | No | Immutable draft label from the active draft entry, when a ``draft_id`` was supplied. ``None`` for non-draft fetches. |
| `provider_id` | `string` | No | Provider identifier |
| `show_ai_generate` | `boolean` | No | Whether any step should show AI generate |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `integrations_show_ai_generate` | `boolean` | No | Show AI generate for integrations step |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`ProviderNameResource`](/api-reference/provider/types#providernameresource)[] | No | Name resources |
| `descriptions` | [`ProviderDescriptionResource`](/api-reference/provider/types#providerdescriptionresource)[] | No | Description resources |
| `flags` | [`ProviderFlagResource`](/api-reference/provider/types#providerflagresource)[] | No | Flag resources (one per flags_resource row, value=true/false) |
| `departments` | [`ProviderDepartmentResource`](/api-reference/provider/types#providerdepartmentresource)[] | No | Department resources |
| `values` | [`ProviderValueResource`](/api-reference/provider/types#providervalueresource)[] | No | Value resources |
| `endpoints` | [`ProviderEndpointResource`](/api-reference/provider/types#providerendpointresource)[] | No | Endpoint resources |
| `keys` | [`ProviderKeyResource`](/api-reference/provider/types#providerkeyresource)[] | No | Key resources |