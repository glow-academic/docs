# `POST` `/eval/drafts`

# `POST` `/eval/drafts`

Get Eval Drafts

List eval drafts owned by the current profile.

## Request Body (`GetEvalDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetEvalDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetEvalDraftResponse`](/api-reference/eval/types#getevaldraftresponse)[] | No | List of eval draft entries |
