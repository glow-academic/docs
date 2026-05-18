# `POST` `/provider/create`

# `POST` `/provider/create`

Create Provider

Create providers using composable infra architecture.

## Request Body (`CreateProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `providers` | [`CreateProviderItem`](/api-reference/provider/types#createprovideritem)[] | Yes | List of providers to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateProviderApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ProviderResultItem`](/api-reference/provider/types#providerresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
| `providers` | [`ListProviderApiProvider`](/api-reference/provider/types#listproviderapiprovider)[] | No | Hydrated rows for the successfully-created providers (mirrors /provider/search shape) |
