# Providers

{/* DEMO_VIDEO: providers-overview — replace public/demos/providers-overview.mp4 */}

# Providers

Providers represent the LLM backends that power Glow. Each provider encapsulates an external AI service -- such as OpenAI or Anthropic -- along with its API endpoints, authentication keys, and configuration values. Models connect to providers to gain access to these backends.

<DemoVideo
  topic="providers-overview"
  caption="The providers list -- rows by service name with endpoint count, model usage count, and the encrypted key inventory hidden behind a decrypt action."
/>

---

## What is a Provider?

A provider in Glow is the infrastructure layer between your platform and an external LLM service. It stores:

- **Endpoints** -- the base URL for API calls (e.g., `https://api.openai.com/v1`)
- **Keys** -- encrypted API credentials for authenticating with the service
- **Values** -- configuration parameters specific to the provider
- **Departments** -- organizational scoping for access control

Providers are shared resources. A single "OpenAI" provider can serve multiple models (`gpt-4o`, `gpt-4o-mini`, `o1`), each configured with its own temperature, quality, and modality settings.

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

{/* DEMO_VIDEO: providers-create — replace public/demos/providers-create.mp4 */}

## Create a provider

<DemoVideo
  topic="providers-create"
  caption="Creating an Anthropic Production provider, then attaching an initial endpoint -- model wiring comes after."
/>

### Via the CLI

```bash
glow providers create --body '{
  "providers": [{
    "name": "OpenAI Production",
    "description": "Production OpenAI API for TA training simulations"
  }]
}'
```

### Via the API

```bash
curl -X POST https://<your-instance>/provider/create \
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

Each entry returns the new `provider_id`, a generated `draft_id`, and the initial `version`.

---

{/* DEMO_VIDEO: providers-endpoints — replace public/demos/providers-endpoints.mp4 */}

## Endpoints

Provider endpoints define where API calls are routed. Each provider can have multiple endpoints configured through `endpoint_ids`. Endpoints are managed as resources within the provider's configuration sections.

<DemoVideo
  topic="providers-endpoints"
  caption="Adding a second endpoint to point at a regional API gateway, then flipping the active endpoint -- linked models pick up the change on next request."
/>

When you retrieve a provider with `GET`, the response includes an `endpoints` section containing the current endpoint resource and all available endpoint options.

---

{/* DEMO_VIDEO: providers-keys — replace public/demos/providers-keys.mp4 */}

## API key management

Provider keys hold encrypted credentials. Keys are never returned in plaintext from list or search operations. To decrypt a key, use the dedicated decrypt endpoint -- every decrypt request is audited with the requesting user's identity.

<DemoVideo
  topic="providers-keys"
  caption="Rotating a key: adding a new encrypted key, decrypting once to copy into a deploy step, then deleting the old key -- all without exposing plaintext in list views."
/>

```bash
curl -X POST https://<your-instance>/provider/decrypt \
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

{/* DEMO_VIDEO: providers-draft — replace public/demos/providers-draft.mp4 */}

## The draft cycle

Providers support a draft workflow for staging configuration changes. This is useful when rotating API keys or switching endpoints without disrupting running simulations.

<DemoVideo
  topic="providers-draft"
  caption="Staging a key+endpoint swap as a draft, reviewing the form_state, then publishing -- linked models cut over atomically."
/>

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

{/* DEMO_VIDEO: providers-search — replace public/demos/providers-search.mp4 */}

## Search & filter

<DemoVideo
  topic="providers-search"
  caption="Filtering providers by department and free-text search, then drilling into one to see linked models."
/>

```bash
glow providers search --body '{"search": "openai"}'

glow providers search --body '{
  "filter_department_ids": ["CS_DEPT_UUID"],
  "page_size": 25
}'
```

---

{/* DEMO_VIDEO: providers-bulk — replace public/demos/providers-bulk.mp4 */}

## Bulk operations

Bulk delete and update follow the canonical *all-matching* shape -- explicit IDs, or `all: true` with flat filter fields plus optional `excluded_ids` and a `patch` body. The persona surface is the prove-out; providers adopt the same shape.

<DemoVideo
  topic="providers-bulk"
  caption="Bulk-deleting providers tagged with a retired department; excluded_ids preserves the one still serving an active eval."
/>

**Delete by explicit IDs:**

```bash
curl -X POST https://<your-instance>/provider/delete \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"provider_ids": ["UUID_1", "UUID_2"]}'
```

Each item in the `results` array indicates whether that specific deletion succeeded, along with a `message`.

**Delete all matching a filter (with exclusions):**

```bash
glow providers delete --body '{
  "all": true,
  "filter_department_ids": ["dept-retired"],
  "excluded_ids": ["provider-keep-this-one"]
}'
```

**Duplicate a provider:**

```bash
curl -X POST https://<your-instance>/provider/duplicate \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"provider_id": "PROVIDER_UUID"}'
```

The response returns a new `provider_id` for the duplicated provider.

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all providers | `glow providers search` | `POST /provider/search` |
| Get provider details | `glow providers get --body '{"provider_id": "..."}'` | `POST /provider/get` |
| Create provider | `glow providers create --body '{...}'` | `POST /provider/create` |
| Update provider | `glow providers update --body '{"provider_id": "...", ...}'` | `POST /provider/update` |
| Duplicate provider | -- | `POST /provider/duplicate` |
| Delete provider(s) | `glow providers delete --body '{"provider_id": "..."}'` | `POST /provider/delete` |
| Bulk delete (filter) | `glow providers delete --body '{"all": true, "filter_…": "…"}'` | `POST /provider/delete` |
| Decrypt a key | -- | `POST /provider/decrypt` |
| Export to CSV | `glow providers export` | `POST /provider/export` |
| Stage a draft | `glow providers draft --body '{...}'` | `PATCH /provider/draft` |
| List drafts | `glow providers list` | `POST /provider/drafts` |

---

## Related

- [Providers API Reference](/api-reference/provider) -- full endpoint and type documentation
- [Providers CLI Reference](/cli-reference/provider) -- all CLI commands
- [Models Guide](/model) -- configure models that use these providers
