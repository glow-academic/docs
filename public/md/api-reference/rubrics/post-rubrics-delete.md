# `POST` `/rubrics/delete`

Delete Rubric

Bulk delete rubrics — composable infra architecture.

## Request Body (`DeleteRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_ids` | `string`[] | Yes | Rubric UUIDs to delete |

## Response (`DeleteRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteRubricResult`](/api-reference/rubrics/types#deleterubricresult)[] | Yes | List of operation results |