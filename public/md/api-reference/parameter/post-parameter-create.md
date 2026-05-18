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

## Response (`CreateParameterApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ParameterResultItem`](/api-reference/parameter/types#parameterresultitem)[] | Yes | List of operation results |
| `parameters` | [`ListParameterApiParameter`](/api-reference/parameter/types#listparameterapiparameter)[] | No | Hydrated list rows for the just-created parameters — same shape as ``/parameter/search`` returns. Lets the client materialize the new rows directly from the response (or audit ``.completed`` payload) without a follow-up search burst. Omitted on the soft-pending (ack-shaped) paths — dormant rows aren't fully active until accepted. |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
