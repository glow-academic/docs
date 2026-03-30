# Providers Guide

Providers represent the LLM backends that power Glow. Each provider encapsulates an external AI service -- such as OpenAI or Anthropic -- along with its API endpoints, authentication keys, and configuration values. Models connect to providers to gain access to these backends.

![Providers list showing configured providers with name, endpoint count, and status](/screenshots/providers/list.png)

---

## What is a Provider?

A provider in Glow is the infrastructure layer between your platform and an external LLM service. It stores:

- **Endpoints** -- the base URL for API calls (e.g., `https://api.openai.com/v1`)
- **Keys** -- encrypted API credentials for authenticating with the service
- **Values** -- configuration parameters specific to the provider
- **Departments** -- organizational scoping for access control

Providers are shared resources. A single "OpenAI" provider can serve multiple models (`gpt-4o`, `gpt-4o-mini`, `o1`), each configured with its own temperature, quality, and modality settings.

---

## Quick Start

### CLI

List all providers:

```bash
glow providers search
```

Get details for a specific provider:

```bash
glow providers get --body '{"provider_id": "PROVIDER_UUID"}'
```

Create a new provider for OpenAI:

```bash
glow providers create --body '{
  "providers": [{
    "name": "OpenAI Production",
    "description": "Production OpenAI API for TA training simulations"
  }]
}'
```

### API

All endpoints use `POST` and require `X-Api-Key` and `Authorization: Bearer` headers.

**Search providers:**

```bash
curl -X POST https://<your-instance>/v5/providers/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Create a provider:**

```bash
curl -X POST https://<your-instance>/v5/providers/create \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "providers": [{
      "name": "Anthropic Production",
      "description": "Anthropic Claude API for office hour simulations"
    }]
  }'
```

---

## How it Connects

```
Provider  -->  Model (model has provider_id)
   |               |
   |               +--> Agent (via agent_models_junction)
   |
   +-- endpoints, keys, values (encrypted config)
```

- **Models** reference providers through `provider_ids`. Each model's search result includes `provider_id` and `provider_name`.
- The `model_usage_count` and `model_ids` fields on the provider list response show how many models depend on each provider.
- Providers do not connect directly to agents, tools, rubrics, or evals. They are always accessed through models.

---

![Provider detail showing endpoints, API configuration, and linked models](/screenshots/providers/detail.png)

## Endpoints and Keys

### Managing Endpoints

Provider endpoints define where API calls are routed. Each provider can have multiple endpoints configured through `endpoint_ids`. Endpoints are managed as resources within the provider's configuration sections.

When you retrieve a provider with `GET`, the response includes an `endpoints` section containing the current endpoint resource and all available endpoint options.

### API Key Management

Provider keys hold encrypted credentials. Keys are never returned in plaintext from list or search operations. To decrypt a key, use the dedicated decrypt endpoint:

```bash
curl -X POST https://<your-instance>/v5/providers/decrypt \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "provider_id": "PROVIDER_UUID",
    "key_id": "KEY_UUID"
  }'
```

The response returns the decrypted `key` value, the key `name`, and the `actor_name` of the requesting user.

---

## Duplicating and Bulk Operations

### Duplicate a Provider

To quickly create a copy of an existing provider configuration:

```bash
curl -X POST https://<your-instance>/v5/providers/duplicate \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"provider_id": "PROVIDER_UUID"}'
```

The response returns a new `provider_id` for the duplicated provider.

### Bulk Delete

Delete multiple providers in a single call:

```bash
curl -X POST https://<your-instance>/v5/providers/delete \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"provider_ids": ["UUID_1", "UUID_2"]}'
```

Each item in the `results` array indicates whether that specific deletion succeeded, along with a `message`.

---

## Drafts

Providers support a draft workflow for staging configuration changes. This is useful when rotating API keys or switching endpoints without disrupting running simulations.

```bash
# Create or update a provider draft
glow providers draft --body '{
  "name": "OpenAI Production",
  "description": "Updated endpoint for v2 API",
  "endpoint_ids": ["NEW_ENDPOINT_UUID"],
  "key_ids": ["NEW_KEY_UUID"]
}'

# List your drafts
glow providers list
```

The draft endpoint uses `PATCH` semantics. Include `input_draft_id` and `expected_version` for updates to existing drafts. The response includes `draft_id`, `new_version`, and a `form_state` object reflecting the server-authoritative state of all fields.

---

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all providers | `glow providers search` | `POST /providers/search` |
| Get provider details | `glow providers get --body '{"provider_id": "..."}'` | `POST /providers/get` |
| Create provider | `glow providers create --body '{...}'` | `POST /providers/create` |
| Update provider | `glow providers update --body '{"provider_id": "...", ...}'` | `POST /providers/update` |
| Duplicate provider | -- | `POST /providers/duplicate` |
| Delete provider(s) | `glow providers delete --body '{"provider_id": "..."}'` | `POST /providers/delete` |
| Decrypt a key | -- | `POST /providers/decrypt` |
| Export to CSV | `glow providers export` | `POST /providers/export` |
| Stage a draft | `glow providers draft --body '{...}'` | `PATCH /providers/draft` |
| List drafts | `glow providers list` | `POST /providers/drafts` |

---

## Related

- [Providers API Reference](/glow/providers/api) -- full endpoint and type documentation
- [Providers CLI Reference](/glow/providers/cli) -- all CLI commands
- [Models Guide](/glow/models/guide) -- configure models that use these providers