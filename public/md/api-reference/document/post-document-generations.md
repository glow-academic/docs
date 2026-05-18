# `POST` `/document/generations`

Generations Document

List document generation groups — composable infra architecture.

## Request Body (`GenerationsDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GenerationsDocumentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `items` | [`GenerationsDocumentListItem`](/api-reference/document/types#generationsdocumentlistitem)[] | No | Generation groups |
| `total_count` | `integer` | No | Total number of matching generations |