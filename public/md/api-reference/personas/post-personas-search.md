# `POST` `/personas/search`

Search Persona

Search personas — composable infra architecture.

## Request Body (`SearchPersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Full-text search query for personas |
| `scenario_ids` | `string`[] | No | Filter by scenario UUIDs |
| `field_ids` | `string`[] | No | Filter by field UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `scenario_search` | `string` | No | Search text for scenario facet |
| `field_search` | `string` | No | Search text for field facet |
| `department_search` | `string` | No | Search text for department facet |
| `color_search` | `string` | No | Search text for color facet |
| `icon_search` | `string` | No | Search text for icon facet |
| `voice_search` | `string` | No | Search text for voice facet |
| `instruction_search` | `string` | No | Search text for instruction facet |
| `page_size` | `integer` | No | Number of results per page |
| `page_offset` | `integer` | No | Pagination offset |

## Response (`ListPersonaApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the authenticated user |
| `personas` | [`ListPersonaApiPersona`](/api-reference/personas/types#listpersonaapipersona)[] | No | List of personas with computed permissions |
| `scenario_filter` | [`ListFilterSection`](/api-reference/personas/types#listfiltersection) | No | Scenario filter options for the list UI |
| `field_filter` | [`ListFilterSection`](/api-reference/personas/types#listfiltersection) | No | Field filter options for the list UI |
| `department_filter` | [`ListFilterSection`](/api-reference/personas/types#listfiltersection) | No | Department filter options for the list UI |
| `color_filter` | [`ListFilterSection`](/api-reference/personas/types#listfiltersection) | No | Color filter options for bulk edit |
| `icon_filter` | [`ListFilterSection`](/api-reference/personas/types#listfiltersection) | No | Icon filter options for bulk edit |
| `voice_filter` | [`ListFilterSection`](/api-reference/personas/types#listfiltersection) | No | Voice filter options for bulk edit |
| `instruction_filter` | [`ListFilterSection`](/api-reference/personas/types#listfiltersection) | No | Instruction filter options for bulk edit |
| `total_count` | `integer` | No | Total number of personas matching filters |