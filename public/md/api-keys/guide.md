# API Keys Guide

Create and manage API keys for the LearnLoop AI gateway.

## What are API Keys?

API keys authenticate requests to the LearnLoop AI gateway, which provides an OpenAI-compatible interface to a catalog of AI models (local LLMs, image generators, video models, and frontier models from OpenAI, Anthropic, and Google). Each key is scoped to an organization, can have an optional spend limit, and tracks usage automatically. For example, a Glow deployment at `cs-training.learn-loop.org` can use an API key to route LLM requests through the gateway, which handles rate limiting and cost tracking.

## Quick Start

### Via CLI

```bash
# Authenticate first
glow admin login

# Create an API key
glow admin api-keys create --name "Production Key" --scopes ai

# List your organization's keys
glow admin api-keys list

# View AI usage
glow admin api-keys usage --days 7
```

### Via API

```bash
# Create an API key
curl -s -X POST https://api.learnloop.ai/api-keys \
  -H "Authorization: Bearer $LEARNLOOP_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"organization_id": "org_abc123", "name": "Production Key", "scopes": ["ai"]}' | jq

# List keys
curl -s https://api.learnloop.ai/api-keys/org_abc123 \
  -H "Authorization: Bearer $LEARNLOOP_TOKEN" | jq
```

## Creating an API Key

```bash
glow admin api-keys create --name "Production Key" --scopes ai --spend-limit 10000
```

Or via API:

```bash
curl -s -X POST https://api.learnloop.ai/api-keys \
  -H "Authorization: Bearer $LEARNLOOP_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "organization_id": "org_abc123",
    "name": "Production Key",
    "scopes": ["ai"],
    "spend_limit_cents": 10000
  }' | jq
```

**Response:**

```json
{
  "id": "key_abc123",
  "key": "ll_live_abc123xyz789...",
  "name": "Production Key",
  "key_prefix": "ll_live_abc1",
  "scopes": ["ai"],
  "spend_limit_cents": 10000
}
```

> **Important:** The full key value is only returned once at creation time. Save it securely -- it cannot be retrieved later.

### Key Fields

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique identifier for the key |
| `key` | string | Full API key (shown only at creation) |
| `name` | string | Human-readable name |
| `key_prefix` | string | First 16 characters for identification |
| `scopes` | string[] | Authorized scopes (e.g., `["ai"]`) |
| `spend_limit_cents` | integer | Optional spend cap in cents |

## Listing API Keys

```bash
glow admin api-keys list
```

Or via API:

```bash
curl -s https://api.learnloop.ai/api-keys/org_abc123 \
  -H "Authorization: Bearer $LEARNLOOP_TOKEN" | jq
```

The full key is never returned in list responses -- only the `key_prefix` for identification.

## Viewing Usage

See aggregate AI usage across all keys for an organization:

```bash
glow admin api-keys usage --days 30
```

Or via API:

```bash
curl -s "https://api.learnloop.ai/api-keys/org_abc123/usage?days=30" \
  -H "Authorization: Bearer $LEARNLOOP_TOKEN" | jq
```

**Response:**

```json
{
  "total_requests": 1500,
  "total_tokens": 2500000,
  "total_cost_cents": 4200,
  "by_model": {
    "qwen-3.5-9b": {"requests": 1200, "tokens": 2000000, "cost_cents": 0},
    "gpt-5": {"requests": 300, "tokens": 500000, "cost_cents": 4200}
  }
}
```

## Revoking an API Key

```bash
glow admin api-keys revoke key_abc123
```

Or via API:

```bash
curl -s -X DELETE https://api.learnloop.ai/api-keys/org_abc123/key_abc123 \
  -H "Authorization: Bearer $LEARNLOOP_TOKEN" | jq
```

Revocation is immediate. Any in-flight requests using the key will fail.

## Using an API Key

Once created, use the key to authenticate requests to the AI gateway:

```bash
curl -s -X POST https://api.learnloop.ai/ai/chat/completions \
  -H "Authorization: Bearer ll_live_abc123xyz789..." \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen-3.5-9b",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

See the [AI Gateway Guide](/ai/guide) for details on available models, rate limits, and pricing tiers.

## Common Operations

| Task | CLI | API |
|---|---|---|
| Create key | `glow admin api-keys create --name X` | `POST /api-keys` |
| List keys | `glow admin api-keys list` | `GET /api-keys/{org_id}` |
| View usage | `glow admin api-keys usage` | `GET /api-keys/{org_id}/usage` |
| Revoke key | `glow admin api-keys revoke <key_id>` | `DELETE /api-keys/{org_id}/{key_id}` |

## Related

- [API Keys API Reference](/api-keys/api)
- [API Keys CLI Reference](/api-keys/cli)
- [AI Gateway Guide](/ai/guide) -- use API keys to access AI models
- [Organizations Guide](/organizations/guide) -- keys are scoped to organizations