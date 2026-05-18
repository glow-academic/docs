# `POST` `/test/drafts`

# `POST` `/test/drafts`

Get Invocation Drafts

List invocation drafts owned by the current profile.

## Request Body (`GetInvocationDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetInvocationDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetInvocationDraftResponse`](/api-reference/test/types#getinvocationdraftresponse)[] | No | List of invocation draft entries |
