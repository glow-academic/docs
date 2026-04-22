# `POST` `/cohort/update`

Update Cohort

Update cohorts using composable infra architecture.

## Request Body (`UpdateCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohorts` | [`UpdateCohortItem`](/api-reference/cohort/types#updatecohortitem)[] | Yes | List of cohorts to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateCohortApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`CohortResultItem`](/api-reference/cohort/types#cohortresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |