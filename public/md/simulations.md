# Simulations

# Simulations

Simulations are complete training sessions that bundle one or more scenarios together with rubrics, time limits, and ordering -- they are what learners actually launch to begin practicing.

## What is a Simulation?

A simulation is a runnable training package. It wraps one or more [Scenarios](/glow/scenarios/guide) and adds session-level configuration: which rubrics to evaluate against, how much time the learner has per scenario, the order scenarios appear, and behavioral flags.

A simulation contains:

- **Name** -- a descriptive title (e.g., "Academic Integrity Training", "Aggressive Practice")
- **Description** -- what the simulation covers and its purpose
- **Scenarios** -- the training situations included in this simulation, each with per-scenario configuration:
  - **Rubrics** -- evaluation criteria applied to that scenario (e.g., Communication Skills, Policy Knowledge, De-escalation)
  - **Flags** -- per-scenario boolean settings
  - **Time Limits** -- maximum duration for the learner on that scenario
  - **Positions** -- the order in which scenarios are presented
- **Departments** -- organizational groupings for filtering and access control
- **Flags** -- simulation-level boolean settings

Simulations are assigned to Cohorts, which control which learners have access. When a learner starts a simulation, Glow creates an [Attempt](/glow/attempt/guide) with one [Chat](/glow/chat/guide) per scenario.

![Simulations list showing simulation cards with name, scenario count, and active status](/screenshots/simulations/list.png)

## Quick Start

### Create via CLI

![Simulation creation form showing name, description, and scenario selection](/screenshots/simulations/create.png)

Create an "Academic Integrity Training" simulation with one scenario:

```bash
glow simulations create --body '{
  "simulations": [{
    "name": "Academic Integrity Training",
    "description": "Structured training for handling academic integrity violations"
  }]
}'
```

Then add scenarios to it via the draft system:

```bash
glow simulations draft --body '{
  "input_draft_id": "simulation-draft-uuid",
  "scenario_ids": ["academic-integrity-scenario-uuid"],
  "scenario_rubrics": [
    {"scenario_id": "academic-integrity-scenario-uuid", "rubric_id": "communication-skills-rubric-uuid"},
    {"scenario_id": "academic-integrity-scenario-uuid", "rubric_id": "policy-knowledge-rubric-uuid"}
  ],
  "scenario_time_limits": [
    {"scenario_id": "academic-integrity-scenario-uuid", "time_limit": 600}
  ]
}'
```

Search simulations:

```bash
glow simulations search
```

Get a specific simulation:

```bash
glow simulations get --body '{"simulation_id": "your-simulation-uuid"}'
```

### Create via API

```bash
curl -X POST https://<your-instance>/v5/simulations/create \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: your-license-key" \
  -H "Authorization: Bearer your-token" \
  -d '{
    "simulations": [{
      "name": "Academic Integrity Training",
      "description": "Structured training for handling academic integrity violations"
    }]
  }'
```

Configure scenarios via draft:

```bash
curl -X PATCH https://<your-instance>/v5/simulations/draft \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: your-license-key" \
  -H "Authorization: Bearer your-token" \
  -d '{
    "input_draft_id": "simulation-draft-uuid",
    "scenario_ids": ["academic-integrity-scenario-uuid"],
    "scenario_rubrics": [
      {"scenario_id": "academic-integrity-scenario-uuid", "rubric_id": "communication-skills-rubric-uuid"}
    ]
  }'
```

## How Simulations Connect to the Workflow

Simulations are **step 3** in the Glow content pipeline:

| Step | Resource | Description |
|------|----------|-------------|
| 1. Create Personas | [Personas](/glow/personas/guide) | Define AI characters with instructions and parameter fields |
| 2. Assign to Scenarios | [Scenarios](/glow/scenarios/guide) | Build training situations and attach personas, documents, and objectives |
| **3. Add Scenarios to Simulations** | **Simulations** | **Bundle scenarios into a complete training session with rubrics and time limits** |
| 4. Add Simulations to Cohorts | Cohorts | Assign simulations to groups of learners |
| 5. Run Attempts | [Attempts](/glow/attempt/guide) | Learners start attempts and interact with AI in [Chats](/glow/chat/guide) |

## Configuring Scenarios Within a Simulation

![Simulation detail showing scenario list with ordering, time limits, and rubric assignments](/screenshots/simulations/detail.png)

Each scenario added to a simulation gets its own per-scenario configuration. This is managed through the simulation draft endpoint.

### Rubrics

Rubrics define how the learner's performance is evaluated for each scenario. Available rubrics in the university seed data include:

- **Communication Skills** -- evaluates clarity, empathy, and professionalism
- **Policy Knowledge** -- evaluates correct application of relevant policies
- **De-escalation** -- evaluates ability to reduce tension in confrontational situations

Assign rubrics per scenario:

```bash
glow simulations draft --body '{
  "input_draft_id": "simulation-draft-uuid",
  "scenario_rubrics": [
    {"scenario_id": "scenario-uuid-1", "rubric_id": "communication-skills-uuid"},
    {"scenario_id": "scenario-uuid-1", "rubric_id": "de-escalation-uuid"},
    {"scenario_id": "scenario-uuid-2", "rubric_id": "policy-knowledge-uuid"}
  ]
}'
```

### Time Limits

Set maximum durations per scenario to simulate real-world time pressure:

```bash
glow simulations draft --body '{
  "input_draft_id": "simulation-draft-uuid",
  "scenario_time_limits": [
    {"scenario_id": "scenario-uuid-1", "time_limit": 600},
    {"scenario_id": "scenario-uuid-2", "time_limit": 300}
  ]
}'
```

### Positions

Control the order in which scenarios are presented to the learner:

```bash
glow simulations draft --body '{
  "input_draft_id": "simulation-draft-uuid",
  "scenario_positions": [
    {"scenario_id": "scenario-uuid-1", "position": 0},
    {"scenario_id": "scenario-uuid-2", "position": 1}
  ]
}'
```

## Simulation Patterns

The university seed data demonstrates two common simulation patterns:

### Structured Training Simulations

Multi-scenario simulations designed to train a specific skill. Scenarios are presented in a fixed order and each has rubrics attached:

- **Academic Integrity Training** -- a complete training session on handling cheating incidents
- **FERPA Training** -- end-to-end practice with FERPA violation procedures
- **Upset Student Training** -- structured practice for de-escalation in office hours

### Open Practice Simulations

Single-scenario simulations designed for free-form practice with a specific personality type. These are lower-stakes and let the learner experiment:

- **Confused Practice** -- practice with a student who asks clarifying questions
- **Happy Practice** -- practice with a positive, uplifting student
- **Passive Practice** -- practice with a disengaged student
- **Aggressive Practice** -- practice with a confrontational student
- **General Practice** -- open-ended interaction practice

## Working with Drafts

Simulations use the draft system for all edits. The draft endpoint supports optimistic concurrency via `expected_version`.

```bash
# Create or update a draft
glow simulations draft --body '{
  "input_draft_id": "existing-draft-uuid",
  "expected_version": 2,
  "name": "Updated Academic Integrity Training",
  "description": "Revised training with new de-escalation scenarios",
  "scenario_ids": ["scenario-uuid-1", "scenario-uuid-2"]
}'
```

```bash
# Via API
curl -X PATCH https://<your-instance>/v5/simulations/draft \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: your-license-key" \
  -H "Authorization: Bearer your-token" \
  -d '{
    "input_draft_id": "existing-draft-uuid",
    "expected_version": 2,
    "name": "Updated Academic Integrity Training"
  }'
```

**List your drafts:**

```bash
# CLI
glow simulations list

# API
curl -X POST https://<your-instance>/v5/simulations/drafts \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: your-license-key" \
  -H "Authorization: Bearer your-token"
```

## Common Operations

| Task | CLI | API |
|------|-----|-----|
| List all simulations | `glow simulations search` | `POST /simulations/search` |
| Get one simulation | `glow simulations get --body '{"simulation_id": "..."}'` | `POST /simulations/get` |
| Create simulations | `glow simulations create --body '{"simulations": [...]}'` | `POST /simulations/create` |
| Update simulations | `glow simulations update --body '{"simulations": [...]}'` | `POST /simulations/update` |
| Duplicate a simulation | -- | `POST /simulations/duplicate` |
| Delete simulations | `glow simulations delete --body '{"simulation_ids": [...]}'` | `POST /simulations/delete` |
| Save a draft | `glow simulations draft --body '{...}'` | `PATCH /simulations/draft` |
| List drafts | `glow simulations list` | `POST /simulations/drafts` |
| Export to CSV | `glow simulations export` | `POST /simulations/export` |
| Import from CSV | -- | `POST /simulations/csv` |

## Related

- [Simulations API Reference](/glow/simulations/api) -- full endpoint schemas and field definitions
- [Simulations CLI Reference](/glow/simulations/cli) -- all CLI commands and flags
- [Scenarios Guide](/glow/scenarios/guide) -- creating the training situations that simulations contain
- [Personas Guide](/glow/personas/guide) -- the AI characters used within scenarios
- [Attempts Guide](/glow/attempt/guide) -- what happens when a learner starts a simulation
- [Agents Guide](/glow/agents/guide) -- configuring the AI engine that powers simulations
