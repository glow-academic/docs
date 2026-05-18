# `POST` `/agent/update`

# `POST` `/agent/update`

Update Agent

Update agents using composable infra architecture.

## Request Body (`UpdateAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | [`UpdateAgentItem`](/api-reference/agent/types#updateagentitem)[] | Yes | List of agents to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateAgentApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`AgentResultItem`](/api-reference/agent/types#agentresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
