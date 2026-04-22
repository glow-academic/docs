# `POST` `/setting/get`

Get Setting

Get setting information using the canonical shared setting operation.

## Request Body (`GetSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the setting to retrieve |
| `setting_id` | `string` | No | Legacy setting identifier |
| `settings_id` | `string` | No | Legacy alias for setting identifier |
| `draft_id` | `string` | No | UUID of the draft to load |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for names |
| `descriptions` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for descriptions |
| `colors` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for colors |
| `flags` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for flags |
| `departments` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for departments |
| `logins` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for logins |
| `systems` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for systems |
| `mcp` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for MCP configs |
| `thresholds` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for thresholds |
| `provider_keys` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for provider keys |
| `auth_item_keys` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for auth item keys |
| `auth_item_values` | [`app__infra__setting__types__SectionFilter`](/api-reference/setting/types#app-infra-setting-types-sectionfilter) | No | Filter options for auth item values |

## Response (`GetSettingApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `setting_exists` | `boolean` | No | Whether the setting exists |
| `can_edit` | `boolean` | No | Whether the actor can edit this setting |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `group_id` | `string` | No | Group UUID for draft collaboration |
| `show_ai_generate` | `boolean` | No | Whether any section should show AI generate |
| `basic_show_ai_generate` | `boolean` | No | Whether the basic section should show AI generate |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`SettingNameResource`](/api-reference/setting/types#settingnameresource)[] | No | Name resources |
| `descriptions` | [`SettingDescriptionResource`](/api-reference/setting/types#settingdescriptionresource)[] | No | Description resources |
| `colors` | [`SettingColorResource`](/api-reference/setting/types#settingcolorresource)[] | No | Color resources |
| `flags` | [`SettingFlagConfig`](/api-reference/setting/types#settingflagconfig)[] | No | Flag configs |
| `departments` | [`SettingDepartmentResource`](/api-reference/setting/types#settingdepartmentresource)[] | No | Department resources |
| `logins` | [`SettingLoginsResource`](/api-reference/setting/types#settingloginsresource)[] | No | Logins resources |
| `systems` | [`SettingSystemResource`](/api-reference/setting/types#settingsystemresource)[] | No | System resources |
| `mcp` | [`SettingMcpResource`](/api-reference/setting/types#settingmcpresource)[] | No | MCP resources |
| `thresholds` | [`SettingThresholdResource`](/api-reference/setting/types#settingthresholdresource)[] | No | Threshold resources |
| `provider_keys` | [`SettingProviderKeyResource`](/api-reference/setting/types#settingproviderkeyresource)[] | No | Provider key resources |
| `auth_item_keys` | [`SettingAuthItemKeyResource`](/api-reference/setting/types#settingauthitemkeyresource)[] | No | Auth item key resources |
| `auth_item_values` | [`SettingAuthItemValueResource`](/api-reference/setting/types#settingauthitemvalueresource)[] | No | Auth item value resources |
| `providers` | [`SettingProviderCatalogResource`](/api-reference/setting/types#settingprovidercatalogresource)[] | No | Provider catalog used by provider key editing |
| `keys` | [`SettingKeyCatalogResource`](/api-reference/setting/types#settingkeycatalogresource)[] | No | Key catalog used by provider key and auth item key editing |
| `items` | [`SettingItemCatalogResource`](/api-reference/setting/types#settingitemcatalogresource)[] | No | Claim item catalog used by auth item key/value editing |
| `profiles` | [`SettingProfileCatalogResource`](/api-reference/setting/types#settingprofilecatalogresource)[] | No | Profile catalog used by logins editing |
| `auths` | [`SettingAuthCatalogResource`](/api-reference/setting/types#settingauthcatalogresource)[] | No | Auth catalog used by logins and auth item editing |
| `icons` | [`SettingIconCatalogResource`](/api-reference/setting/types#settingiconcatalogresource)[] | No | Icon catalog used by logins editing |
| `agents` | [`SettingAgentCatalogResource`](/api-reference/setting/types#settingagentcatalogresource)[] | No | Agent catalog used by mcp and systems editing |