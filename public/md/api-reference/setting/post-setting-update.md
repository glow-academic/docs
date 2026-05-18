# `POST` `/setting/update`

Update Setting

Update settings using composable infra architecture.

## Request Body (`UpdateSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `settings` | [`UpdateSettingItem`](/api-reference/setting/types#updatesettingitem)[] | No | List of settings to update (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, apply ``patch`` to every setting matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `patch` | [`UpdateSettingPatch`](/api-reference/setting/types#updatesettingpatch) | No | Shared change set applied to every matched row when ``all=true`` (sparse — only set fields are updated; ``patch.id`` ignored) |
| `search` | `string` | No | Full-text search query |
| `flag_ids` | `string`[] | No | Filter by flag UUIDs |
| `provider_ids` | `string`[] | No | Filter by provider UUIDs |
| `auth_ids` | `string`[] | No | Filter by auth UUIDs |
| `system_ids` | `string`[] | No | Filter by system UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `provider_search` | `string` | No | Search text for provider facet (no-op for row filtering) |
| `auth_search` | `string` | No | Search text for auth facet (no-op for row filtering) |
| `system_search` | `string` | No | Search text for system facet (no-op for row filtering) |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateSettingApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`SettingResultItem`](/api-reference/setting/types#settingresultitem)[] | Yes | Per-item update results |
| `settings` | [`ListSettingApiSetting`](/api-reference/setting/types#listsettingapisetting)[] | No | Hydrated list rows for the updated settings. Mirrors the shape of ``/setting/search`` result rows so the client's ghost rail can swap the live card without a refresh. |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |