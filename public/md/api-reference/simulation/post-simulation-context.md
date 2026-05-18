# `POST` `/simulation/context`

# `POST` `/simulation/context`

Get Simulation Context

Get page context for the simulation artifact.

Returns docs + profile identity + evaluated permissions in a single call.
Superset of /docs — clients can migrate from /docs to /context incrementally.

## Request Body (`DocsApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entity_id` | `string` | No | — |
| `snapshot_key` | `string` | No | — |

## Response (`ComposedContextResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Artifact name |
| `type` | `string` | Yes | Artifact type identifier |
| `description` | `string` | Yes | Human-readable description |
| `artifact` | [`DocsResponse`](/api-reference/simulation/types#docsresponse) | No | Artifact tool documentation |
| `entries` | [`DocsResponse`](/api-reference/simulation/types#docsresponse)[] | Yes | Entry documentation list |
| `resources` | [`DocsResponse`](/api-reference/simulation/types#docsresponse)[] | Yes | Resource documentation list |
| `permission_docs` | [`OperationInfo`](/api-reference/simulation/types#operationinfo)[] | Yes | Permission function signatures (for MCP/dev tooling) |
| `api_operations` | [`OperationInfo`](/api-reference/simulation/types#operationinfo)[] | Yes | API operation documentation |
| `page_metadata` | [`DocsApiResponse`](/api-reference/simulation/types#docsapiresponse) | No | Page-level metadata |
| `prompts` | [`OperationPrompts`](/api-reference/simulation/types#operationprompts) | No | Starter prompts keyed by operation |
| `profile` | [`ProfileSummary`](/api-reference/simulation/types#profilesummary) | Yes | Caller identity from JWT |
| `caller_permissions` | [`CallerPermissions`](/api-reference/simulation/types#callerpermissions) | Yes | Evaluated permissions for this caller |
