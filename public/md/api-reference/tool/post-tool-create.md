# `POST` `/tool/create`

# `POST` `/tool/create`

Create Tool

Create tools using composable infra architecture.

## Request Body (`CreateToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`CreateToolItem`](/api-reference/tool/types#createtoolitem)[] | Yes | List of tools to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateToolApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ToolResultItem`](/api-reference/tool/types#toolresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
