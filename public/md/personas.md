# Personas

Personas are the AI-driven characters that learners interact with during training simulations -- they define who the learner is talking to and how that character behaves.

## What is a Persona?

A persona is a reusable AI character definition that controls the personality, behavior, and communication style of the simulated individual a learner will face. Each persona is built from the following components:

- **Name** -- the character's display name (e.g., "Confused Student", "Aggressive Student")
- **Description** -- a short summary of the character's role and disposition (e.g., "Seeks to understand by asking questions")
- **Instructions** -- the behavioral prompt template that tells the AI how to act, including parameter placeholders
- **Examples** -- sample dialogue exchanges that demonstrate the character's tone and style
- **Color & Icon** -- visual identifiers shown in the simulation UI
- **Voice** -- the text-to-speech voice used when audio mode is enabled
- **Parameter Fields** -- dynamic placeholders (like `{{class}}`, `{{location}}`, `{{intensity}}`) that inject scenario-specific values into instructions at runtime
- **Departments** -- organizational groupings for filtering and access control

Personas are assigned to [Scenarios](/glow/scenarios/guide), not directly to simulations or agents. A single persona can appear in many scenarios.

![Personas list showing cards for each persona with name, color, icon, and description](/screenshots/personas/list.png)

## Quick Start

### Create via CLI

![Persona creation form showing name, description, color, icon, and instructions fields](/screenshots/personas/create.png)

Create a "Confused Student" persona for CS course training:

```bash
glow personas create --body '{
  "personas": [{
    "name": "Confused Student",
    "description": "Seeks to understand by asking questions about course material",
    "instructions": "You are a confused student in {{class}}. You do not understand the material covered in the last lecture. Ask clarifying questions and express frustration when answers are unclear. Your confusion is genuine, not combative."
  }]
}'
```

List all personas:

```bash
glow personas search
```

Get a specific persona:

```bash
glow personas get --body '{"persona_id": "your-persona-uuid"}'
```

### Create via API

```bash
curl -X POST https://<your-instance>/v5/personas/create \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: your-license-key" \
  -H "Authorization: Bearer your-token" \
  -d '{
    "personas": [{
      "name": "Confused Student",
      "description": "Seeks to understand by asking questions about course material",
      "instructions": "You are a confused student in {{class}}. You do not understand the material covered in the last lecture. Ask clarifying questions and express frustration when answers are unclear. Your confusion is genuine, not combative."
    }]
  }'
```

Search personas:

```bash
curl -X POST https://<your-instance>/v5/personas/search \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: your-license-key" \
  -H "Authorization: Bearer your-token" \
  -d '{"search": "confused"}'
```

## How Personas Connect to the Workflow

Personas are **step 1** in the Glow content pipeline:

| Step | Resource | Description |
|------|----------|-------------|
| **1. Create Personas** | **Personas** | **Define AI characters with instructions, examples, and parameter fields** |
| 2. Assign to Scenarios | [Scenarios](/glow/scenarios/guide) | Build training situations and attach personas to them |
| 3. Add Scenarios to Simulations | [Simulations](/glow/simulations/guide) | Bundle scenarios into a complete training session with rubrics and time limits |
| 4. Add Simulations to Cohorts | Cohorts | Assign simulations to groups of learners |
| 5. Run Attempts | [Attempts](/glow/attempt/guide) | Learners start attempts and interact with persona-driven AI in [Chats](/glow/chat/guide) |

## Writing Effective Instructions

![Persona detail page showing the full instructions editor with formatting and example conversation preview](/screenshots/personas/detail.png)

The `instructions` field is the core of a persona. It tells the AI how to behave during a conversation. Well-written instructions produce consistent, realistic interactions.

### Role Definition

Start with a clear statement of who the character is:

```
You are a student in {{class}} who was caught cheating on the midterm exam.
You are meeting with the instructor during office hours.
```

### Behavioral Guidelines

Describe how the character should respond emotionally and conversationally:

```
You feel embarrassed and defensive. You initially deny the accusation,
but if the instructor presents evidence calmly, you gradually admit fault.
Do not become aggressive unless the instructor is accusatory.
```

### Knowledge Boundaries

Define what the character does and does not know:

```
You do not know the specific academic integrity policy. You assume the
penalty is automatic expulsion. You have never been in trouble before.
```

### Communication Style

Set the tone, vocabulary level, and mannerisms:

```
Speak informally. Use short sentences. Avoid eye contact metaphors.
Start responses with hedging phrases like "I mean..." or "Look, I just..."
```

## Using Parameter Fields

Parameter fields make personas dynamic. Instead of hard-coding values, use `{{placeholder}}` syntax in your instructions. Glow resolves these at runtime based on the scenario's parameter configuration.

**Example: Aggressive Student with parameters**

```
You are an aggressive student in {{class}} at {{location}}.
A {{issue_type}} has occurred and you are upset.
Your intensity level is {{intensity}} on a scale of 1-10.
The deadline for resolution is {{deadline}}.

At intensity 1-3, you are irritated but civil.
At intensity 4-6, you raise your voice and interrupt.
At intensity 7-10, you USE ALL CAPS and make demands.
```

Available parameter fields from the university seed data include:

| Parameter | Example Values |
|-----------|---------------|
| `{{class}}` | CS-180, CS-251, CS-307, CS-422 |
| `{{location}}` | Lawson, Felix Haas Hall, Data Science Building |
| `{{intensity}}` | 1 through 10 |
| `{{deadline}}` | A date string |
| `{{time}}` | A time string |
| `{{temperament}}` | Aggressive, Confused, Happy, Passive |
| `{{crowdedness}}` | 1 through 10 |

Parameter fields are defined on the persona and then resolved when the persona is used within a scenario that provides parameter values.

## Working with Examples

Examples teach the AI the persona's voice through concrete dialogue samples. They are especially useful for characters with distinctive speech patterns.

**Example: Passive Student persona**

When creating or updating the persona, supply examples as an array of dialogue strings:

```bash
glow personas draft --body '{
  "name": "Passive Student",
  "description": "Low engagement, avoids conflict, starts with Uh...",
  "instructions": "You are a disengaged student. You avoid confrontation and give minimal responses. Always start your reply with \"Uh...\" and trail off when pressed for details.",
  "examples": [
    "Instructor: Can you tell me why you missed the last three labs?\nStudent: Uh... I guess I just forgot. Sorry.",
    "Instructor: This is going to affect your grade significantly. What happened?\nStudent: Uh... I dunno. Stuff, I guess. Can I just make them up?",
    "Instructor: I need you to take this seriously.\nStudent: Uh... yeah. I mean, I am. Sort of."
  ]
}'
```

Examples help the AI replicate specific verbal tics, sentence structures, and emotional registers that are difficult to capture through instructions alone.

## Working with Drafts

Glow uses a draft system for editing personas. When you modify a persona through the draft endpoint, changes are saved as a draft version that can be reviewed before publishing.

**Create or update a draft:**

```bash
# Via CLI
glow personas draft --body '{
  "input_draft_id": "existing-draft-uuid",
  "expected_version": 1,
  "name": "Updated Confused Student",
  "description": "Seeks to understand by asking repeated questions",
  "instructions": "You are a confused student in {{class}}...",
  "parameter_field_ids": ["param-field-uuid-1", "param-field-uuid-2"],
  "voice_ids": ["voice-uuid"]
}'
```

```bash
# Via API
curl -X PATCH https://<your-instance>/v5/personas/draft \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: your-license-key" \
  -H "Authorization: Bearer your-token" \
  -d '{
    "name": "Updated Confused Student",
    "description": "Seeks to understand by asking repeated questions"
  }'
```

**List your drafts:**

```bash
# CLI
glow personas list

# API
curl -X POST https://<your-instance>/v5/personas/drafts \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: your-license-key" \
  -H "Authorization: Bearer your-token"
```

The draft response includes `draft_id`, `new_version`, and `form_state` so your client can track optimistic concurrency.

## Common Operations

| Task | CLI | API |
|------|-----|-----|
| List all personas | `glow personas search` | `POST /personas/search` |
| Get one persona | `glow personas get --body '{"persona_id": "..."}' ` | `POST /personas/get` |
| Create personas | `glow personas create --body '{"personas": [...]}'` | `POST /personas/create` |
| Update personas | `glow personas update --body '{"personas": [...]}'` | `POST /personas/update` |
| Duplicate a persona | -- | `POST /personas/duplicate` |
| Delete personas | `glow personas delete --body '{"persona_ids": [...]}'` | `POST /personas/delete` |
| Save a draft | `glow personas draft --body '{...}'` | `PATCH /personas/draft` |
| List drafts | `glow personas list` | `POST /personas/drafts` |
| Export to CSV | `glow personas export` | `POST /personas/export` |
| Import from CSV | -- | `POST /personas/csv` |

## Related

- [Personas API Reference](/glow/personas/api) -- full endpoint schemas and field definitions
- [Personas CLI Reference](/glow/personas/cli) -- all CLI commands and flags
- [Scenarios Guide](/glow/scenarios/guide) -- building training situations that use personas
- [Simulations Guide](/glow/simulations/guide) -- bundling scenarios into complete training sessions
- [Cohorts Guide](/glow/cohorts/guide) -- assigning profile personas so the AI adapts to each learner