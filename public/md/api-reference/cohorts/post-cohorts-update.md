# `POST` `/cohorts/update`

Update Cohort

Update cohorts using composable infra architecture.

## Request Body (`UpdateCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohorts` | [`UpdateCohortItem`](/api-reference/cohorts/types#updatecohortitem)[] | Yes | List of cohorts to update |

## Response (`UpdateCohortApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`CohortResultItem`](/api-reference/cohorts/types#cohortresultitem)[] | Yes | List of operation results |