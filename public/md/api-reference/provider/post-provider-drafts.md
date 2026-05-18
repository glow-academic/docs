# `POST` `/provider/drafts`

Get Provider Drafts

List provider drafts owned by the current profile.

## Request Body (`GetProviderDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetProviderDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetProviderDraftResponse`](/api-reference/provider/types#getproviderdraftresponse)[] | No | List of provider draft entries |