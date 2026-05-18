# `POST` `/tool/update`

# `POST` `/tool/update`

Update Tool

Update tools using composable infra architecture.

## Request Body (`UpdateToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`UpdateToolItem`](/api-reference/tool/types#updatetoolitem)[] | Yes | List of tools to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateToolApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ToolResultItem`](/api-reference/tool/types#toolresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
