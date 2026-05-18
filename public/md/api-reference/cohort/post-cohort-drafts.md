# `POST` `/cohort/drafts`

# `POST` `/cohort/drafts`

Get Cohort Drafts

List cohort drafts owned by the current profile.

## Request Body (`GetCohortDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetCohortDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetCohortDraftResponse`](/api-reference/cohort/types#getcohortdraftresponse)[] | No | List of cohort draft entries |
