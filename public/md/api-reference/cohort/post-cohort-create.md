# `POST` `/cohort/create`

Create Cohort

Create cohorts using composable infra architecture.

## Request Body (`CreateCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohorts` | [`CreateCohortItem`](/api-reference/cohort/types#createcohortitem)[] | Yes | List of cohorts to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateCohortApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`CohortResultItem`](/api-reference/cohort/types#cohortresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |