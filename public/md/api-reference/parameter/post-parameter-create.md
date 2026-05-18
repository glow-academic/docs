# `POST` `/parameter/create`

# `POST` `/parameter/create`

Create Parameter

Create parameters using composable infra architecture.

## Request Body (`CreateParameterApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `parameters` | [`CreateParameterItem`](/api-reference/parameter/types#createparameteritem)[] | Yes | List of parameters to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateParameterApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ParameterResultItem`](/api-reference/parameter/types#parameterresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
