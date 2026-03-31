# `POST` `/auths/get`

Get Auth

Get auth information using the canonical shared auth operation.

## Request Body (`GetAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_id` | `string` | No | UUID of the auth provider to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load |

## Response (`GetAuthApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `auth_exists` | `boolean` | No | Whether the auth provider exists |
| `can_edit` | `boolean` | No | Whether the actor can edit this auth |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group UUID for draft collaboration |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `names` | [`AuthNameSection`](/api-reference/auths/types#authnamesection) | No | Name section with resources |
| `descriptions` | [`AuthDescriptionSection`](/api-reference/auths/types#authdescriptionsection) | No | Description section with resources |
| `flags` | [`AuthFlagSection`](/api-reference/auths/types#authflagsection) | No | Flag section with configs |
| `protocols` | [`AuthProtocolSection`](/api-reference/auths/types#authprotocolsection) | No | Protocol section with resources |
| `slugs` | [`AuthSlugSection`](/api-reference/auths/types#authslugsection) | No | Slug section with resources |
| `items` | [`AuthItemSection`](/api-reference/auths/types#authitemsection) | No | Auth item section with resources |