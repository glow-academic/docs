# `POST` `/attempt/problem`

Problem Attempt

Report an attempt problem — composable infra architecture.

## Request Body (`ProblemAttemptApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | `string` | Yes | Problem type: feature, bug, question, other |
| `message` | `string` | Yes | Problem description (max 1000 chars) |

## Response (`ProblemAttemptApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_id` | `string` | Yes | UUID of the created problem |
| `success` | `boolean` | No | Whether the problem was created |
| `message` | `string` | No | Status message |