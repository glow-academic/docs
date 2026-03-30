# AI Gateway Guide

Access a unified catalog of AI models through the LearnLoop AI gateway.

## What is the AI Gateway?

The AI gateway provides an OpenAI-compatible API that routes requests to a catalog of models organized into tiers by cost and capability. It handles authentication via API keys, enforces per-plan rate limits, and tracks token usage and cost. Glow deployments use the gateway for all LLM interactions (chat responses, grading, content generation), and organizations can also use it directly via API keys for custom integrations.

## Model Tiers

Models are organized into four tiers:

| Tier | Cost | Models | Use Case |
|---|---|---|---|
| **Light** | Free | qwen-3.5-9b, qwen-2.5-vl-7b, parakeet-stt, vibevoice-tts | Local LLMs, speech-to-text, text-to-speech |
| **Heavy** | Included | sana-sprint | Image generation |
| **Intensive** | Included | wan-video | Video generation |
| **Frontier** | Pay-per-use | gpt-5, gemini-2.5-flash, sora-2, imagen-4.0 | Premium cloud models from OpenAI, Google |

### Rate Limits by Plan

| Tier | Free (RPM / RPD) | Pay-as-you-go (RPM / RPD) | Self-hosted (RPM / RPD) |
|---|---|---|---|
| Light | 5 / 100 | 20 / 1,000 | 40 / 5,000 |
| Heavy | 1 / 20 | 5 / 200 | 10 / 500 |
| Intensive | 0 / 0 | 1 / 10 | 2 / 50 |
| Frontier | 0 / 0 | 20 / 500 | 40 / 2,000 |

RPM = requests per minute, RPD = requests per day.

Free plan organizations cannot access Intensive or Frontier tier models.

## Quick Start

### Via CLI

```bash
# View the model catalog and pricing
glow admin ai pricing
```

### Via API

```bash
# Get pricing and rate limit info (public, no auth required)
curl -s https://api.learnloop.ai/ai/pricing | jq

# List available models (requires API key)
curl -s https://api.learnloop.ai/ai/models \
  -H "Authorization: Bearer ll_live_abc123..." | jq

# Chat completion (OpenAI-compatible)
curl -s -X POST https://api.learnloop.ai/ai/chat/completions \
  -H "Authorization: Bearer ll_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen-3.5-9b",
    "messages": [{"role": "user", "content": "Explain photosynthesis in one sentence."}]
  }'
```

## Chat Completions

The gateway exposes an OpenAI-compatible `/ai/chat/completions` endpoint. Any application that works with the OpenAI API can point to the LearnLoop gateway by changing the base URL and API key:

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.learnloop.ai/ai",
    api_key="ll_live_abc123..."
)

response = client.chat.completions.create(
    model="qwen-3.5-9b",
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)
```

### Supported Parameters

Standard OpenAI parameters are supported:
- `model` (required) -- model name from the catalog
- `messages` (required) -- conversation messages
- `temperature`, `max_tokens`, `top_p` -- generation controls
- `stream` -- set to `true` for streaming responses

## Viewing Pricing

The pricing endpoint is public (no authentication needed):

```bash
glow admin ai pricing
```

This displays all model tiers, individual models with descriptions, and rate limits for each plan.

## Usage Tracking

Every request through the gateway is logged with model, token counts, latency, and cost. View aggregate usage with:

```bash
glow admin api-keys usage --days 30
```

See the [API Keys Guide](/api-keys/guide) for details on managing keys and monitoring spend.

## Common Operations

| Task | CLI | API |
|---|---|---|
| View pricing/catalog | `glow admin ai pricing` | `GET /ai/pricing` |
| List models | -- | `GET /ai/models` |
| Chat completion | -- | `POST /ai/chat/completions` |
| View usage | `glow admin api-keys usage` | `GET /api-keys/{org_id}/usage` |

## Related

- [AI Gateway API Reference](/ai/api)
- [AI Gateway CLI Reference](/ai/cli)
- [API Keys Guide](/api-keys/guide) -- create keys to authenticate gateway requests
- [Billing Guide](/billing/guide) -- frontier model costs appear on your invoice