# `POST` `/simulations/docs`

Get Simulation Docs Endpoint

Get composed documentation for the simulation artifact.

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
| `artifact` | [`DocsResponse-Output`](/api-reference/simulations/types#docsresponse-output) | No | Artifact tool documentation |
| `entries` | [`DocsResponse-Output`](/api-reference/simulations/types#docsresponse-output)[] | Yes | Entry documentation list |
| `resources` | [`DocsResponse-Output`](/api-reference/simulations/types#docsresponse-output)[] | Yes | Resource documentation list |
| `permissions` | [`OperationInfo`](/api-reference/simulations/types#operationinfo)[] | Yes | Permission function documentation |
| `api_operations` | [`OperationInfo`](/api-reference/simulations/types#operationinfo)[] | Yes | API operation documentation |
| `page_metadata` | [`DocsApiResponse`](/api-reference/simulations/types#docsapiresponse) | No | Page-level metadata from docs API |