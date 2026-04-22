# `POST` `/cohort/generations`

Generations Cohort

List cohort generation groups — composable infra architecture.

## Request Body (`GenerationsCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GenerationsCohortApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `items` | [`GenerationsCohortListItem`](/api-reference/cohort/types#generationscohortlistitem)[] | No | Generation groups |
| `total_count` | `integer` | No | Total number of matching generations |