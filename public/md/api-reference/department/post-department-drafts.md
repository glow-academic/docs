# `POST` `/department/drafts`

Get Department Drafts

List department drafts owned by the current profile.

## Request Body (`GetDepartmentDraftsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Name search (ILIKE substring) |
| `date_from` | `string` | No | Start date filter |
| `date_to` | `string` | No | End date filter |
| `page_limit` | `integer` | No | Maximum items per page |
| `page_offset` | `integer` | No | Offset for pagination |

## Response (`GetDepartmentDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetDepartmentDraftResponse`](/api-reference/department/types#getdepartmentdraftresponse)[] | No | List of department draft entries |