# `POST` `/profile/drafts`

Get Profile Drafts

List profile drafts owned by the current profile.

## Request Body (`GetProfileDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetProfileDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetProfileDraftResponse`](/api-reference/profile/types#getprofiledraftresponse)[] | No | List of profile draft entries |