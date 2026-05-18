# `POST` `/model/drafts`

Get Model Drafts

List model drafts owned by the current profile.

## Request Body (`GetModelDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetModelDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetModelDraftResponse`](/api-reference/model/types#getmodeldraftresponse)[] | No | List of model draft entries |