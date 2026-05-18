# `POST` `/auth/drafts`

# `POST` `/auth/drafts`

Get Auth Drafts

List auth drafts owned by the current profile.

## Request Body (`GetAuthDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetAuthDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetAuthDraftResponse`](/api-reference/auth/types#getauthdraftresponse)[] | No | List of auth draft entries |
