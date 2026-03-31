# Rubrics

Rubrics define the scoring criteria used to evaluate TA performance during office hour simulations. Each rubric organizes standards into groups, assigns point values, and sets passing thresholds -- giving evaluators a structured framework to assess how well a TA handled a student interaction.

![Rubrics list showing rubric cards with name, total points, pass threshold, and standard group count](/screenshots/rubrics/list.png)

---

## What is a Rubric?

A rubric in Glow is a hierarchical scoring instrument composed of:

- **Standard Groups** -- categories of competency (e.g., "Communication Skills", "Policy Knowledge", "De-escalation")
- **Standards** -- individual criteria within each group (e.g., "Active Listening", "Empathy", "Clarity of Explanations")
- **Points** -- the total point value and passing threshold for the rubric

Rubrics connect to three parts of the platform:

1. **Agents** through the `agent_rubrics_junction` -- defines what the agent is scored on
2. **Simulations** through `simulation_scenario_rubrics_junction` -- attaches rubrics to specific scenarios
3. **Evals** through `eval_model_rubrics_junction` -- applies rubrics during automated evaluation runs

---

## Quick Start

### CLI

List all rubrics:

```bash
glow rubrics search
```

Get details for a specific rubric:

```bash
glow rubrics get --body '{"rubric_id": "RUBRIC_UUID"}'
```

Create a rubric for communication skills:

![Rubric creation form showing name, description, total points, and pass points fields](/screenshots/rubrics/create.png)

```bash
glow rubrics create --body '{
  "rubrics": [{
    "name": "Communication Skills",
    "description": "Evaluates TA ability to communicate clearly and empathetically during student interactions"
  }]
}'
```

### API

All endpoints use `POST` and require `X-Api-Key` and `Authorization: Bearer` headers.

**Search rubrics:**

```bash
curl -X POST https://<your-instance>/v5/rubrics/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Create a rubric:**

```bash
curl -X POST https://<your-instance>/v5/rubrics/create \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "rubrics": [{
      "name": "De-escalation",
      "description": "Measures TA effectiveness at calming frustrated students and redirecting conversations productively"
    }]
  }'
```

---

## How it Connects

```
Rubric
  |
  +-- Standard Groups
  |     +-- Standards (with point values)
  |
  +-- Agent (via agent_rubrics_junction)
  +-- Simulation Scenario (via simulation_scenario_rubrics_junction)
  +-- Eval (via eval_model_rubrics_junction)
```

- **Agents** are scored against rubrics attached through the junction table. The rubric defines *what* is measured; the agent's behavior during the simulation provides the data.
- **Simulation Scenarios** can have per-scenario rubrics, allowing different scenarios to emphasize different competencies (e.g., a grade dispute scenario uses the "De-escalation" rubric while a conceptual question uses "Clarity of Explanations").
- **Evals** reference rubrics through `model_rubric_ids` to apply scoring criteria during automated evaluation runs.

---

## Standard Groups and Standards

![Rubric detail showing standard groups expanded with individual standards and behavioral descriptions at each level](/screenshots/rubrics/detail.png)

### Building a Rubric Structure

A well-structured rubric organizes standards into logical groups. Here is an example for a TA training program:

**Rubric: "Communication Skills"** (Total: 30 points, Pass: 21 points / 70%)

| Standard Group | Standards | Points per Standard |
|---|---|---|
| Active Listening | Paraphrases student concerns, Asks clarifying questions, Acknowledges emotions | 3 each |
| Empathy | Uses supportive language, Validates student experience, Avoids dismissive responses | 4 each |
| Clarity of Explanations | Uses appropriate vocabulary, Provides step-by-step guidance, Confirms understanding | 3 each |

### Managing Standards via API

Standards and standard groups are managed through their respective resource IDs on the rubric:

- `standard_group_ids` -- attach standard groups to the rubric
- `standard_ids` -- attach individual standards
- `point_ids` -- configure point values and passing thresholds

The search response includes denormalized `standard_groups` and `standards` arrays alongside the rubric list, so you can display the full rubric structure without additional API calls.

Each standard group in the response includes:

| Field | Description |
|---|---|
| `standard_group_id` | Group UUID |
| `rubric_id` | Parent rubric UUID |
| `name` | Group name (e.g., "Active Listening") |
| `points` | Total points for this group |
| `pass_points` | Points required to pass this group |

Each standard includes:

| Field | Description |
|---|---|
| `standard_id` | Standard UUID |
| `standard_group_id` | Parent group UUID |
| `name` | Standard name (e.g., "Paraphrases student concerns") |
| `points` | Points for this standard |

---

## Points and Passing Thresholds

Rubrics define scoring at multiple levels. The rubric list response includes `points`, `pass_points`, and `pass_percentage` for each rubric:

```bash
# Search rubrics and inspect scoring
glow rubrics search
```

The response for each rubric entry includes:

| Field | Description |
|---|---|
| `points` | Total points possible |
| `pass_points` | Minimum points to pass |
| `pass_percentage` | Percentage required to pass |
| `active_simulation_count` | Number of active simulations using this rubric |

---

## Drafts

Rubrics support a draft workflow for staging changes. This is especially important because modifying a rubric can affect scoring across active simulations and evaluations.

```bash
# Create or update a rubric draft
glow rubrics draft --body '{
  "name": "Communication Skills v2",
  "description": "Added empathy standards for improved scoring",
  "standard_group_ids": ["ACTIVE_LISTENING_UUID", "EMPATHY_UUID", "CLARITY_UUID"],
  "standard_ids": ["PARAPHRASE_UUID", "CLARIFY_UUID", "ACKNOWLEDGE_UUID"],
  "point_ids": ["POINTS_CONFIG_UUID"]
}'

# List your drafts
glow rubrics list
```

The draft endpoint uses `PATCH` semantics with `expected_version` for optimistic concurrency. The response includes `draft_id`, `new_version`, and a `form_state` containing the resolved `standard_group_ids`, `standard_ids`, `point_ids`, and other fields.

---

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all rubrics | `glow rubrics search` | `POST /rubrics/search` |
| Get rubric details | `glow rubrics get --body '{"rubric_id": "..."}'` | `POST /rubrics/get` |
| Create rubric | `glow rubrics create --body '{...}'` | `POST /rubrics/create` |
| Update rubric | `glow rubrics update --body '{"rubric_id": "...", ...}'` | `POST /rubrics/update` |
| Duplicate rubric | -- | `POST /rubrics/duplicate` |
| Delete rubric(s) | `glow rubrics delete --body '{"rubric_id": "..."}'` | `POST /rubrics/delete` |
| Export to CSV | `glow rubrics export` | `POST /rubrics/export` |
| Stage a draft | `glow rubrics draft --body '{...}'` | `PATCH /rubrics/draft` |
| List drafts | `glow rubrics list` | `POST /rubrics/drafts` |

---

## Related

- [Rubrics API Reference](/glow/rubrics/api) -- full endpoint and type documentation
- [Rubrics CLI Reference](/glow/rubrics/cli) -- all CLI commands
- [Evals Guide](/glow/evals/guide) -- use rubrics within automated evaluation runs
- [Tools Guide](/glow/tools/guide) -- tools that agents use alongside rubric-scored behavior