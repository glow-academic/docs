# `POST` `/agent/create`

# `POST` `/agent/create`

Create Agent

Create agents using composable infra architecture.

## Request Body (`CreateAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | [`CreateAgentItem`](/api-reference/agent/types#createagentitem)[] | Yes | List of agents to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateAgentApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`AgentResultItem`](/api-reference/agent/types#agentresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
