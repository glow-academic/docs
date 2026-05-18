# `POST` `/persona/generations`

# `POST` `/persona/generations`

Generations Persona

List persona generation groups — composable infra architecture.

## Request Body (`GenerationsPersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `search` | `string` | No | Name search (ILIKE) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GenerationsPersonaApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `items` | [`GenerationsPersonaListItem`](/api-reference/persona/types#generationspersonalistitem)[] | No | Generation groups |
| `total_count` | `integer` | No | Total number of matching generations |
