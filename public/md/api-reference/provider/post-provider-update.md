# `POST` `/provider/update`

Update Provider

Update providers using composable infra architecture.

## Request Body (`UpdateProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `providers` | [`UpdateProviderItem`](/api-reference/provider/types#updateprovideritem)[] | Yes | List of providers to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateProviderApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ProviderResultItem`](/api-reference/provider/types#providerresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |