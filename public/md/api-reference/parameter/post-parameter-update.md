# `POST` `/parameter/update`

Update Parameter

Update parameters using composable infra architecture.

## Request Body (`UpdateParameterApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `parameters` | [`UpdateParameterItem`](/api-reference/parameter/types#updateparameteritem)[] | Yes | List of parameters to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateParameterApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ParameterResultItem`](/api-reference/parameter/types#parameterresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |