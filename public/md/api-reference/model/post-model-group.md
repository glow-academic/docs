# `POST` `/model/group`

Group Model

Resolve or create a model group with optional naming.

## Request Body (`GroupModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | No | Existing group UUID (omit to create or reuse via time window) |
| `name` | `string` | No | Optional name for the group |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant group |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`GroupModelApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | Resolved or newly created group UUID |
| `group_name_id` | `string` | No | UUID of the created group_names entry (if name was provided) |
| `name` | `string` | No | The name that was set (if provided) |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
| `runs` | [`GroupRun`](/api-reference/model/types#grouprun)[] | No | Conversation history — populated when resolving an existing group for fetch |