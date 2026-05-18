# `POST` `/simulation/drafts`

Get Simulation Drafts

List simulation drafts owned by the current profile.

## Request Body (`GetSimulationDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetSimulationDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetSimulationDraftResponse`](/api-reference/simulation/types#getsimulationdraftresponse)[] | No | List of simulation draft entries |