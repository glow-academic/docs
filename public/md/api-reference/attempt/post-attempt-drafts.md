# `POST` `/attempt/drafts`

# `POST` `/attempt/drafts`

Get Chat Drafts

List chat drafts owned by the current profile.

## Request Body (`GetChatDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetChatDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetChatDraftResponse`](/api-reference/attempt/types#getchatdraftresponse)[] | No | List of chat draft entries |
