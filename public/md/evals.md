# Evals

{/* DEMO_VIDEO: evals — replace public/demos/evals.mp4 */}

# Evals

<DemoVideo topic="evals" />

Evals assess how well TAs handled student interactions during office hour simulations. An eval brings together models, rubrics, and configuration flags to run automated scoring across simulation transcripts, producing actionable feedback on TA performance.

![Evals list showing recent evaluations with scores, pass/fail status, and timestamps](/screenshots/evals/list.png)

---

## What is an Eval?

An eval in Glow is an automated assessment pipeline that scores simulation conversations. Each eval combines:

- **Models** -- the LLM configurations used as evaluator judges (via `model_ids`)
- **Model Rubrics** -- the scoring criteria applied during evaluation (via `model_rubric_ids`)
- **Model Flags** -- behavioral flags that tag specific patterns in conversations (via `model_flag_ids`)
- **Model Positions** -- ordering of models in multi-judge setups (via `model_position_ids`)
- **Configuration Flags** -- control whether the eval is active, dynamic, or uses groups

For example, a university might run an eval called "Fall 2025 TA Assessment" that uses GPT-4o as the evaluator model, applies the "Communication Skills" and "Policy Knowledge" rubrics, and flags instances of "Incorrect Information" or "Inappropriate Tone".

---

## Quick Start

### CLI

List all evals:

```bash
glow evals search
```

Get details for a specific eval:

```bash
glow evals get --body '{"eval_id": "EVAL_UUID"}'
```

Create a new eval:

```bash
glow evals create --body '{
  "evals": [{
    "name": "Fall 2025 TA Assessment",
    "description": "Automated scoring of TA office hour simulations for the fall semester",
    "model_ids": ["GPT4O_MODEL_UUID"],
    "model_rubric_ids": ["COMM_SKILLS_RUBRIC_UUID", "POLICY_KNOWLEDGE_RUBRIC_UUID"]
  }]
}'
```

### API

All endpoints use `POST` and require `X-Api-Key` and `Authorization: Bearer` headers.

**Search evals:**

```bash
curl -X POST https://<your-instance>/eval/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Create an eval:**

```bash
curl -X POST https://<your-instance>/eval/create \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "evals": [{
      "name": "Spring 2026 CS Department Eval",
      "description": "Evaluate TA performance across all CS course simulations",
      "department_ids": ["CS_DEPT_UUID"],
      "model_ids": ["EVALUATOR_MODEL_UUID"],
      "model_rubric_ids": ["DE_ESCALATION_RUBRIC_UUID"]
    }]
  }'
```

---

## How it Connects

```
Eval
  |
  +-- Models (evaluator LLMs via model_ids)
  +-- Model Rubrics (scoring criteria via model_rubric_ids)
  +-- Model Flags (behavioral tags via model_flag_ids)
  +-- Model Positions (judge ordering via model_position_ids)
  +-- Departments (scoping via department_ids)
```

- **Models** serve as the evaluator judges. The eval uses these models to read simulation transcripts and produce scores. These are separate from the models that *powered* the simulation -- they are the models that *grade* it.
- **Rubrics** connect through `model_rubric_ids` (the `eval_model_rubrics_junction`). Each rubric's standard groups and standards define what the evaluator model scores.
- **Model Flags** tag specific patterns in conversations (e.g., "Gave Incorrect Deadline", "Used Empathetic Language"). These are distinct from the eval-level configuration flags.
- **Departments** scope the eval to specific organizational units, enabling department-level reporting.

---

![Eval detail showing per-criterion scores with feedback text and conversation highlights](/screenshots/evals/detail.png)

## Eval Configuration Flags

Evals support several configuration flags that control their behavior:

| Flag Section | Purpose |
|---|---|
| `active_flags` | Whether the eval is currently active and running |
| `dynamic_flags` | Whether the eval uses dynamic mode for on-the-fly scoring |
| `groups_flags` | Whether the eval organizes results into groups |

These flags appear as sections in the GET response, each containing the current flag config and available options. The list response also surfaces these as boolean fields:

| Field | Description |
|---|---|
| `is_inactive` | Whether the eval is currently inactive |
| `is_dynamic` | Whether the eval uses dynamic mode |
| `use_groups` | Whether the eval uses groups |
| `num_runs` | Total number of eval runs completed |
| `num_groups` | Number of eval groups |

---

## Models, Rubrics, and Flags in Evals

### Attaching Evaluator Models

Evals reference models through `model_ids`. These models act as judges -- they read simulation transcripts and score TA performance against the attached rubrics. You can attach multiple models to compare scoring consistency across different LLMs.

```bash
# Update an eval to add a second evaluator model
glow evals update --body '{
  "evals": [{
    "eval_id": "EVAL_UUID",
    "model_ids": ["GPT4O_MODEL_UUID", "CLAUDE_MODEL_UUID"]
  }]
}'
```

### Attaching Rubrics

Use `model_rubric_ids` to attach rubrics that define the scoring criteria. Each rubric's standard groups and standards become the dimensions on which the evaluator model scores the conversation.

For example, attaching both "Communication Skills" and "De-escalation" rubrics means every simulation transcript will be scored on active listening, empathy, clarity, conflict resolution, and other standards defined in those rubrics.

### Behavioral Flags

Use `model_flag_ids` to define specific behaviors the evaluator should tag. Unlike rubric standards (which are scored on a point scale), flags are binary markers that call out notable patterns:

- "Provided Incorrect Information"
- "Successfully De-escalated Conflict"
- "Referred Student to Appropriate Resource"

---

## Drafts

Evals support a draft workflow for staging changes before they affect scoring pipelines. This is important because modifying an active eval can change how future simulation runs are scored.

```bash
# Create or update an eval draft
glow evals draft --body '{
  "name": "Fall 2025 TA Assessment v2",
  "description": "Added de-escalation rubric and behavioral flags",
  "model_ids": ["EVALUATOR_MODEL_UUID"],
  "rubric_ids": ["COMM_SKILLS_UUID", "DE_ESCALATION_UUID"]
}'

# List your drafts
glow evals list
```

The draft endpoint uses `PATCH` semantics with `expected_version` for optimistic concurrency. The draft request supports `model_ids`, `rubric_ids`, `flag_ids`, and `department_ids`. The response includes `draft_id`, `new_version`, and a `form_state` with the resolved state of all fields.

---

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all evals | `glow evals search` | `POST /eval/search` |
| Get eval details | `glow evals get --body '{"eval_id": "..."}'` | `POST /eval/get` |
| Create eval | `glow evals create --body '{...}'` | `POST /eval/create` |
| Update eval | `glow evals update --body '{"eval_id": "...", ...}'` | `POST /eval/update` |
| Duplicate eval | -- | `POST /eval/duplicate` |
| Delete eval(s) | `glow evals delete --body '{"eval_id": "..."}'` | `POST /eval/delete` |
| Export to CSV | `glow evals export` | `POST /eval/export` |
| Stage a draft | `glow evals draft --body '{...}'` | `PATCH /eval/draft` |
| List drafts | `glow evals list` | `POST /eval/drafts` |

---

## Related

- [Evals API Reference](/api-reference/eval) -- full endpoint and type documentation
- [Evals CLI Reference](/cli-reference/eval) -- all CLI commands
- [Rubrics Guide](/rubric) -- define scoring criteria used by evals
- [Models Guide](/model) -- configure the evaluator models that power evals
- [Providers Guide](/provider) -- set up LLM backends for evaluator models
