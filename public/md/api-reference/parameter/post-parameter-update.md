# `POST` `/parameter/update`

Update Parameter

Update parameters using composable infra architecture.

## Request Body (`UpdateParameterApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `parameters` | [`UpdateParameterItem`](/api-reference/parameter/types#updateparameteritem)[] | No | List of parameters to update (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, apply ``patch`` to every parameter matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `patch` | [`UpdateParameterPatch`](/api-reference/parameter/types#updateparameterpatch) | No | Shared change set applied to every matched row when ``all=true`` (sparse — only set fields are updated; ``patch.id`` ignored) |
| `search` | `string` | No | Full-text search query |
| `scenario_ids` | `string`[] | No | Filter by scenario UUIDs |
| `field_ids` | `string`[] | No | Filter by field UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `scenario_search` | `string` | No | Search text for scenario facet (no-op for row filtering) |
| `field_search` | `string` | No | Search text for field facet (no-op for row filtering) |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateParameterApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ParameterResultItem`](/api-reference/parameter/types#parameterresultitem)[] | Yes | List of operation results |
| `parameters` | [`ListParameterApiParameter`](/api-reference/parameter/types#listparameterapiparameter)[] | No | Hydrated list rows for the just-updated parameters — same shape as ``/parameter/search`` returns. Lets the client patch in updated rows directly from the response without a follow-up search. Omitted on the soft-pending (ack-shaped) paths. |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |