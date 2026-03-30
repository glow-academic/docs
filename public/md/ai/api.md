# Ai

## Endpoints

### `POST` `/ai/chat/completions`

Chat Completions

Proxy OpenAI-compatible chat completions to LiteLLM.

**Response** (`ChatCompletionResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `object` | `string` | No | — |
| `created` | `integer` | Yes | — |
| `model` | `string` | Yes | — |
| `choices` | [`ChatCompletionChoice`](#chatcompletionchoice)[] | Yes | — |
| `usage` | [`ChatCompletionUsage`](#chatcompletionusage) | No | — |

---

### `GET` `/ai/models`

List Models

List available AI models — proxied from LiteLLM.

**Response** (`AIModelsResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `object` | `string` | No | — |
| `data` | [`AIModelEntry`](#aimodelentry)[] | Yes | — |

---

### `GET` `/ai/pricing`

Gateway Pricing

Public endpoint — AI gateway model catalog, rate limits, and pricing.

**Response** (`GatewayPricingResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tiers` | [`GatewayTier`](#gatewaytier)[] | Yes | — |
| `rate_limits` | [`GatewayRateLimits`](#gatewayratelimits) | Yes | — |

---

## Types

### `AIModelEntry`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `object` | `string` | No | — |
| `created` | `integer` | No | — |
| `owned_by` | `string` | No | — |

---

### `ChatCompletionChoice`

| Field | Type | Required | Description |
|---|---|---|---|
| `index` | `integer` | Yes | — |
| `message` | [`ChatCompletionMessage`](#chatcompletionmessage) | Yes | — |
| `finish_reason` | `string` | No | — |

---

### `ChatCompletionMessage`

| Field | Type | Required | Description |
|---|---|---|---|
| `role` | `string` | Yes | — |
| `content` | `string` | No | — |

---

### `ChatCompletionUsage`

| Field | Type | Required | Description |
|---|---|---|---|
| `prompt_tokens` | `integer` | No | — |
| `completion_tokens` | `integer` | No | — |
| `total_tokens` | `integer` | No | — |

---

### `GatewayModelInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | — |
| `type` | `string` | Yes | — |
| `params` | `string` | No | — |
| `description` | `string` | No | — |
| `provider` | `string` | No | — |

---

### `GatewayRateLimits`

| Field | Type | Required | Description |
|---|---|---|---|
| `description` | `string` | Yes | — |
| `plans` | `object` | Yes | — |

---

### `GatewayTier`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `cost` | `string` | Yes | — |
| `models` | [`GatewayModelInfo`](#gatewaymodelinfo)[] | Yes | — |

---