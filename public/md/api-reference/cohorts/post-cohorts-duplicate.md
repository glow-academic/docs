# `POST` `/cohorts/duplicate`

Duplicate Cohort

Duplicate a cohort — composable infra architecture.

## Request Body (`DuplicateCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | Yes | Cohort UUID to duplicate |

## Response (`DuplicateCohortApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `cohort_id` | `string` | Yes | Newly created cohort UUID |
| `message` | `string` | Yes | Human-readable result message |