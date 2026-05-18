# `POST` `/system/activity/resolve`

# `POST` `/system/activity/resolve`

Resolve Problem

Resolve or unresolve a problem entry.

## Request Body (`ResolveProblemApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_id` | `string` | Yes | ID of the problem to resolve |
| `resolved` | `boolean` | No | Whether the problem is resolved |

## Response (`ResolveProblemApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_id` | `string` | Yes | ID of the resolved problem |
| `resolved` | `boolean` | Yes | Current resolved status |
| `updated_at` | `string` | Yes | Timestamp of the update |
