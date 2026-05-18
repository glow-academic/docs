# `POST` `/provider/duplicate`

Duplicate Provider

Duplicate a provider — composable infra architecture.

## Request Body (`DuplicateProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the provider to duplicate |
| `provider_id` | `string` | No | Legacy alias for id — prefer id |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateProviderApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `provider_id` | `string` | Yes | New duplicated provider identifier |
| `message` | `string` | Yes | Result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
| `providers` | [`ListProviderApiProvider`](/api-reference/provider/types#listproviderapiprovider)[] | No | Hydrated row for the newly-created duplicate provider (mirrors /provider/search shape) |