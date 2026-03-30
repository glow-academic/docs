# Models Guide

Models define the LLM configurations that power AI student personas during office hour simulations. Each model wraps a specific LLM (such as `gpt-4o` or `claude-3-opus`) with settings for temperature, reasoning level, modalities, and pricing, and links back to the provider that supplies the underlying API.

![Models list showing available models with provider, name, and assigned agent count](/screenshots/models/list.png)

---

## What is a Model?

A model in Glow represents a configured LLM identity. It connects an external language model to the platform by pairing it with a provider, quality tier, and feature flags. Models are then attached to agents through the `agent_models_junction`, giving each agent a specific conversational capability during simulations.

For example, a university might configure a `gpt-4o-sim` model with medium temperature and text-only modality for TA training conversations, and a separate `claude-3-haiku-quick` model for rapid policy-lookup agents.

---

## Quick Start

### CLI

List all available models:

```bash
glow models search
```

Get details for a specific model:

```bash
glow models get --body '{"model_id": "MODEL_UUID"}'
```

Create a new model linked to a provider:

```bash
glow models create --body '{
  "models": [{
    "name": "gpt-4o-sim",
    "description": "GPT-4o configured for student persona simulations",
    "provider_ids": ["PROVIDER_UUID"]
  }]
}'
```

### API

All endpoints use `POST` and require `X-Api-Key` and `Authorization: Bearer` headers.

**Search models:**

```bash
curl -X POST https://<your-instance>/v5/models/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Create a model:**

```bash
curl -X POST https://<your-instance>/v5/models/create \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "models": [{
      "name": "gpt-4o-sim",
      "description": "GPT-4o for TA training simulations",
      "provider_ids": ["PROVIDER_UUID"]
    }]
  }'
```

---

## How it Connects

```
Provider  -->  Model  -->  Agent (via agent_models_junction)
                |
                +--> Eval (via eval model_ids)
```

- **Provider** supplies the LLM backend (API keys, endpoints). Every model has a `provider_id`.
- **Agent** uses one or more models through the `agent_models_junction` table. The model determines which LLM powers that agent's conversations.
- **Eval** references models through `model_ids` so that evaluation runs can score performance across different LLM configurations.

---

![Model detail showing provider, endpoint, and configuration options](/screenshots/models/detail.png)

## Model Configuration

### Provider Linking

Every model requires at least one provider. The `provider_ids` field connects the model to the provider that holds the API endpoint and credentials. When you search models, the response includes `provider_id` and `provider_name` for each entry, along with `filter_provider_ids` for filtering.

```bash
# Filter models by provider
curl -X POST https://<your-instance>/v5/models/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"filter_provider_ids": ["OPENAI_PROVIDER_UUID"]}'
```

### Feature Flags and Capabilities

Models support several capability dimensions configured through resource IDs:

| Dimension | Field | Purpose |
|---|---|---|
| Modalities | `modality_ids` | Text, image, audio, video support |
| Temperature | `temperature_level_ids` | Controls response randomness |
| Reasoning | `reasoning_level_ids` | Depth of chain-of-thought |
| Quality | `quality_ids` | Output quality tier |
| Pricing | `pricing_ids` | Cost tier classification |
| Voice | `voice_ids` | TTS voice selection |

Use `flag_ids` to toggle boolean capabilities like `image_model` or active/inactive status.

---

## Departments and Filtering

Models can be scoped to departments (e.g., "Computer Science", "Biology") using `department_ids`. The search endpoint supports department-scoped filtering:

```bash
glow models search --body '{"filter_department_ids": ["CS_DEPT_UUID"]}'
```

The response includes a `department_filter` section with available options, counts, and selected IDs for building filter UIs.

---

## Drafts

Models support a draft workflow for staging changes before publishing. Use the draft system to preview configuration changes without affecting running simulations.

```bash
# Create or update a draft
glow models draft --body '{
  "name": "gpt-4o-sim-v2",
  "description": "Updated temperature for more natural conversation",
  "temperature_level_ids": ["MEDIUM_TEMP_UUID"],
  "provider_ids": ["OPENAI_PROVIDER_UUID"]
}'

# List your drafts
glow models list
```

The draft endpoint uses `PATCH` semantics with optimistic concurrency via `expected_version`. The response returns a `draft_id`, `new_version`, and the server-authoritative `form_state`.

---

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all models | `glow models search` | `POST /models/search` |
| Get model details | `glow models get --body '{"model_id": "..."}'` | `POST /models/get` |
| Create model | `glow models create --body '{...}'` | `POST /models/create` |
| Update model | `glow models update --body '{"model_id": "...", ...}'` | `POST /models/update` |
| Duplicate model | `glow models create --body '{...}'` | `POST /models/duplicate` |
| Delete model(s) | `glow models delete --body '{"model_id": "..."}'` | `POST /models/delete` |
| Export to CSV | `glow models export` | `POST /models/export` |
| Stage a draft | `glow models draft --body '{...}'` | `PATCH /models/draft` |
| List drafts | `glow models list` | `POST /models/drafts` |

---

## Related

- [Models API Reference](/glow/models/api) -- full endpoint and type documentation
- [Models CLI Reference](/glow/models/cli) -- all CLI commands
- [Providers Guide](/glow/providers/guide) -- set up the LLM backend a model connects to
- [Evals Guide](/glow/evals/guide) -- evaluate model performance across simulations