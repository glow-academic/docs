# `POST` `/practice/docs`

Get Practice Docs Endpoint

Get composed documentation for the practice analytics.

## Request Body (`DocsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entity_id` | `string` | No | — |

## Response (`ComposedDocsResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Artifact name |
| `type` | `string` | Yes | Artifact type identifier |
| `description` | `string` | Yes | Human-readable description |
| `artifact` | [`DocsResponse-Output`](/api-reference/practice/types#docsresponse-output) | No | Artifact tool documentation |
| `entries` | [`DocsResponse-Output`](/api-reference/practice/types#docsresponse-output)[] | Yes | Entry documentation list |
| `resources` | [`DocsResponse-Output`](/api-reference/practice/types#docsresponse-output)[] | Yes | Resource documentation list |
| `permissions` | [`OperationInfo`](/api-reference/practice/types#operationinfo)[] | Yes | Permission function documentation |
| `api_operations` | [`OperationInfo`](/api-reference/practice/types#operationinfo)[] | Yes | API operation documentation |
| `page_metadata` | [`DocsApiResponse`](/api-reference/practice/types#docsapiresponse) | No | Page-level metadata from docs API |