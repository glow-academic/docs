# `POST` `/document/search`

Search Document

Search documents — composable infra architecture.

## Request Body (`SearchDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `scenario_ids` | `string`[] | No | — |
| `field_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `scenario_search` | `string` | No | — |
| `field_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`ListDocumentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `documents` | [`ListDocumentApiDocument`](/api-reference/document/types#listdocumentapidocument)[] | No | List of documents |
| `scenario_filter` | [`ListFilterSection`](/api-reference/document/types#listfiltersection) | No | Filter options for scenarios in list UI |
| `field_filter` | [`ListFilterSection`](/api-reference/document/types#listfiltersection) | No | Filter options for fields in list UI |
| `department_filter` | [`ListFilterSection`](/api-reference/document/types#listfiltersection) | No | Filter options for departments in list UI |
| `total_count` | `integer` | No | Total number of matching records |