# Cohorts

{/* DEMO_VIDEO: cohorts — replace public/demos/cohorts.mp4 */}

# Cohorts

<DemoVideo topic="cohorts" />

Cohorts bring everything together. A cohort is a group of profiles (learners) assigned to a set of simulations. It is the final assembly step before learners can run simulation attempts.

## What is a Cohort?

A cohort is a named group that links profiles to simulations. When a learner logs in, they see the simulations available in their assigned cohorts. Cohorts also carry profile personas, which tell the AI who each learner is so the AI student character can adapt its behavior.

**University example:** A "Practice Cohort" might include Professor Smith and TA Johnson with access to practice simulations for rehearsing classroom scenarios. A "Training Cohort" might include the University Admin, Professor Smith, and TA Johnson with access to training simulations for onboarding.

![Cohorts list showing cohort cards with name, member count, and simulation count](/screenshots/cohorts/list.png)

## Quick Start

### CLI

![Cohort creation form showing name, description, profile selection, and simulation assignment](/screenshots/cohorts/create.png)

```bash
# List all cohorts
glow cohorts list

# Search cohorts
glow cohorts search

# Create a new cohort
glow cohorts create --body '{
  "cohorts": [
    {
      "name": "Practice Cohort",
      "description": "Practice simulations for CS instructional staff"
    }
  ]
}'

# Get a cohort by ID
glow cohorts get --body '{"cohort_id": "cohort-101"}'

# Update an existing cohort
glow cohorts update --body '{
  "cohorts": [
    {
      "cohort_id": "cohort-101",
      "name": "Practice Cohort",
      "description": "Updated practice cohort description"
    }
  ]
}'

# Delete a cohort
glow cohorts delete --body '{"cohort_id": "cohort-101"}'
```

### API

All endpoints use `POST` and require both `X-Api-Key` and `Authorization: Bearer` headers.

```bash
# Search cohorts
curl -X POST https://<your-instance>/cohort/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "Practice",
    "page_size": 10
  }'

# Create a cohort
curl -X POST https://<your-instance>/cohort/create \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "cohorts": [
      {
        "name": "Training Cohort",
        "description": "Training simulations for new CS department staff"
      }
    ]
  }'
```

## How It Connects: The 5-Step Workflow

Cohorts are step 4 -- the final assembly before learners can run attempts:

1. **Create Personas** -- Define AI student characters with temperaments and behaviors.
2. **Assign to Scenarios** -- Attach personas and documents to scenarios.
3. **Add to Simulations** -- Group scenarios into simulations.
4. **Add to Cohorts** -- Assign *profiles* and *simulations* to a cohort. Configure profile personas to tell the AI who each learner is.
5. **Run Attempts** -- Learners launch simulations from their cohort.

A cohort requires at least one profile and one simulation. Once both are assigned, the profiles in that cohort can begin running simulation attempts.

## Cohort Composition

![Cohort detail showing member list, assigned simulations, and persona override configuration](/screenshots/cohorts/detail.png)

A cohort contains several key sections:

### Profiles

The profiles assigned to a cohort determine who can access its simulations. You can search and filter profiles when adding them.

**Example:** The Practice Cohort includes Professor Smith and TA Johnson. Both can access the practice simulations assigned to this cohort.

### Simulations

The simulations assigned to a cohort determine what learners can practice. A simulation can belong to multiple cohorts.

**Example:** The Practice Cohort has practice simulations for office-hours scenarios, while the Training Cohort has training simulations for onboarding new instructors.

### Simulation Positions and Availability

Cohorts support simulation positions (ordering how simulations appear) and simulation availability (controlling when simulations are accessible). These are managed through `simulation_position_ids` / `simulation_positions` and `simulation_availability_ids` / `simulation_availability` on the draft endpoint.

## Profile Personas

Profile personas tell the AI *who the learner is*, so the AI student character can adapt its behavior accordingly. For example, a Confused student persona might use more technical language when speaking to a graduate-level TA and simpler language when speaking to an introductory TA -- because the profile persona gives the AI context about the learner's background.

Profile personas are configured at the cohort level. Each profile in a cohort can have a persona assigned that describes the learner's role, experience level, and background. This is not about changing which AI character the learner faces -- it is about giving the AI enough context to interact realistically with different types of learners.

**Example:** In the Training Cohort:
- TA Johnson has a profile persona describing them as a first-year graduate TA for CS-180 with limited teaching experience. The AI student character might use simpler questions and be more patient.
- Professor Smith has a profile persona describing them as a tenured professor with 15 years of teaching experience. The AI student character might ask more challenging questions and push back more.

The persona affects the AI's behavior, not the learner's identity. The same "Confused" student character adapts how it expresses confusion based on whether it is speaking with a new TA or a seasoned professor.

Profile personas are managed through `profile_persona_ids` (existing personas) and `profile_personas` (new persona values) on the cohort draft endpoint.

## Filtering and Search

Cohorts support rich search and filtering:

- **Profile** -- Find cohorts containing specific profiles (`filter_profile_ids`, `profile_search`)
- **Simulation** -- Find cohorts containing specific simulations (`filter_simulation_ids`, `simulation_search`)
- **Department** -- Scope to a department (`filter_department_ids`, `department_search`)
- **Flag** -- Filter by cohort flags (`flag_search`)

```bash
# Search cohorts by profile
curl -X POST https://<your-instance>/cohort/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "profile_search": "Johnson",
    "page_size": 20
  }'
```

## Drafts

Cohorts support the draft workflow. Changes are saved as a draft before being published.

```bash
# Save a cohort draft
glow cohorts draft --body '{
  "name": "Practice Cohort",
  "description": "Practice simulations for CS instructional staff"
}'
```

Via the API, use `PATCH /cohort/draft` with fields like `input_draft_id`, `expected_version`, `name`, `description`, `flag_id`, `department_ids`, `simulation_ids`, `profile_ids`, `simulation_position_ids`, `simulation_positions`, `simulation_availability_ids`, `simulation_availability`, `profile_persona_ids`, and `profile_personas`.

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all cohorts | `glow cohorts list` | `POST /cohort/search` |
| Get a cohort | `glow cohorts get --body '{...}'` | `POST /cohort/get` |
| Create cohorts | `glow cohorts create --body '{...}'` | `POST /cohort/create` |
| Update cohorts | `glow cohorts update --body '{...}'` | `POST /cohort/update` |
| Duplicate a cohort | -- | `POST /cohort/duplicate` |
| Delete cohorts | `glow cohorts delete --body '{...}'` | `POST /cohort/delete` |
| Export to CSV | `glow cohorts export` | `POST /cohort/export` |
| Save a draft | `glow cohorts draft --body '{...}'` | `PATCH /cohort/draft` |
| List drafts | -- | `POST /cohort/drafts` |

## Related

- [Cohorts API](/api-reference/cohort)
- [Cohorts CLI](/cli-reference/cohort)
- [Profiles Guide](/profile) -- the people assigned to cohorts
- [Departments Guide](/department) -- cohorts are scoped to departments
