# `POST` `/field/drafts`

# `POST` `/field/drafts`

Get Field Drafts

List field drafts owned by the current profile.

## Request Body (`GetFieldDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetFieldDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetFieldDraftResponse`](/api-reference/field/types#getfielddraftresponse)[] | No | List of field draft entries |
