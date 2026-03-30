# Pricing Guide

Pricing tracks the AI costs associated with running TA training simulations. It aggregates cost data by day and model, and provides a paginated history of generation groups with token counts and dollar amounts.

![Pricing dashboard showing usage costs broken down by model, simulation, and time period](/screenshots/pricing/dashboard.png)

## What is Pricing?

Every time a TA interacts with a student persona during an office-hours simulation, Glow makes AI model calls that consume tokens and incur costs. Pricing gives administrators visibility into this spending with:

1. **Daily cost chart** (`/pricing/get`) -- Daily aggregations showing `total_cost` and `run_count` per model, with filter options for models and agents.
2. **Group history** (`/pricing/search`) -- Paginated table of AI generation groups showing per-group token counts, costs, and associated models/agents.

This helps institutions monitor budget consumption, compare model costs, and forecast future spending for their TA training programs.

## Quick Start

### CLI

```bash
# Get daily cost chart data
glow pricing get

# Get pricing for a specific date range
glow pricing get --body '{"start_date": "2025-01-01", "end_date": "2025-01-31"}'

# Search group history (paginated)
glow pricing search --body '{"page": 1, "page_size": 25, "sort_order": "desc"}'

# Export pricing data
glow pricing export
```

### API

```bash
# Get daily cost aggregations
curl -X POST https://<your-instance>/v5/pricing/get \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "start_date": "2025-01-01",
    "end_date": "2025-01-31"
  }'

# Search group history
curl -X POST https://<your-instance>/v5/pricing/search \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1,
    "page_size": 20,
    "sort_order": "desc"
  }'
```

## Filtering

| Filter | Field | Description |
|---|---|---|
| Date range | `start_date`, `end_date` | Scope costs to a time window |
| Date range (alias) | `date_from`, `date_to` | Alternative date field names |
| Pagination | `page`, `page_size` (search only) | Control page size |
| Sort direction | `sort_order` (search only) | `"asc"` or `"desc"` |

## Understanding the Daily Cost Response

The `/pricing/get` response includes:

- **`daily`** -- Array of `PricingDailyItem` buckets:
  - `date_key` -- Date bucket (e.g., `"2025-01-15"`)
  - `model_id` -- Which AI model was used
  - `total_cost` -- Dollar cost for this day + model combination
  - `run_count` -- Number of AI runs in this bucket
- **`model_options`** -- Filter dropdown options for models (`value`, `label`, `count`).
- **`agent_options`** -- Filter dropdown options for agents.
- **`resources`** -- Resource metadata keyed by ID:
  - `agents` -- Agent display names
  - `models` -- Model display names
- **`total_count`** -- Total number of matching records.
- **`analytics`** -- Filter facets for the page.

## Understanding Group History

The `/pricing/search` response returns paginated `PricingGroupItem` rows:

- `group_id` -- UUID of the generation group
- `session_id` -- Associated session
- `group_name` -- Display name of the group
- `first_run_at`, `last_run_at` -- Time span of the group's runs
- `run_count` -- Number of AI runs
- `total_input_tokens` -- Input tokens consumed
- `total_output_tokens` -- Output tokens generated
- `total_tokens` -- Combined token count
- `total_cost` -- Dollar cost as a string
- `agent_ids`, `agent_names` -- Agents used
- `model_ids`, `model_names` -- Models used

## Exporting

```bash
# Export all pricing data as a denormalized ZIP
glow pricing export
```

The response includes `content` (base64-encoded), `file_name`, `mime_type`, and `row_count`.

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| Daily cost chart | `glow pricing get` | `POST /pricing/get` |
| Group history | `glow pricing search` | `POST /pricing/search` |
| Export data | `glow pricing export` | `POST /pricing/export` |
| Refresh caches | -- | `POST /pricing/refresh` |

## Related

- [Pricing API Reference](/glow/pricing/api)
- [Pricing CLI Reference](/glow/pricing/cli)
- [Invocation Guide](/glow/invocation/guide) -- individual AI model call tracking
- [Group Guide](/glow/group/guide) -- AI generation group details