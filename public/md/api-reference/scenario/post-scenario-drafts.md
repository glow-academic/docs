# `POST` `/scenario/drafts`

Get Scenario Drafts

List scenario drafts owned by the current profile.

## Request Body (`GetScenarioDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetScenarioDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetScenarioDraftResponse`](/api-reference/scenario/types#getscenariodraftresponse)[] | No | List of scenario draft entries |