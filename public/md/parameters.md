# Parameters

{/* DEMO_VIDEO: parameters — replace public/demos/parameters.mp4 */}

# Parameters

<DemoVideo topic="parameters" />

Parameters define the dimensions along which simulation scenarios can vary. Each parameter is a category -- like Temperament or Crowdedness -- that contains a set of fields representing its possible values.

![Parameters list showing parameter groups with name, description, and field count](/screenshots/parameters/list.png)

## What is a Parameter?

A parameter is a named axis of variation for your simulations. It represents a category (such as "Temperament" or "Location") and contains fields that define the specific values within that category (such as "Aggressive", "Confused", "Happy", "Passive" for Temperament).

Parameters and their fields are attached to documents and scenarios, letting you organize simulation content along meaningful dimensions and control the conditions under which each simulation runs.

**University example:** A CS department might define these parameters:

| Parameter | Fields |
|---|---|
| **Temperament** | Aggressive, Confused, Happy, Passive |
| **Intensity** | 1 through 10 |
| **Crowdedness** | 1 through 10 (e.g., "Almost Empty (1)" to "Hectic (10)") |
| **Deadline** | Specific deadline contexts |
| **Time** | Time-of-day contexts |
| **Location** | Lawson, Felix Haas Hall |
| **Class** | CS-180, CS-251, CS-252, CS-307, CS-348, CS-381, CS-422 |

## Quick Start

### CLI

```bash
# List all parameters
glow parameters list

# Search parameters
glow parameters search

![Parameter creation form showing name, description, and field selection](/screenshots/parameters/create.png)

# Create a new parameter
glow parameters create --body '{
  "parameters": [
    {
      "name": "Temperament",
      "description": "The emotional disposition of the AI student character"
    }
  ]
}'

# Get a parameter by ID
glow parameters get --body '{"parameter_id": "param-789"}'

# Update an existing parameter
glow parameters update --body '{
  "parameters": [
    {
      "parameter_id": "param-789",
      "name": "Temperament",
      "description": "Updated description for the temperament parameter"
    }
  ]
}'

# Delete a parameter
glow parameters delete --body '{"parameter_id": "param-789"}'
```

### API

All endpoints use `POST` and require both `X-Api-Key` and `Authorization: Bearer` headers.

```bash
# Search parameters
curl -X POST https://<your-instance>/parameter/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "Temperament",
    "page_size": 10
  }'

# Create a parameter
curl -X POST https://<your-instance>/parameter/create \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "parameters": [
      {
        "name": "Crowdedness",
        "description": "How crowded the simulated office hours environment is, from 1 (almost empty) to 10 (hectic)"
      }
    ]
  }'
```

## How It Connects: The 5-Step Workflow

Parameters contribute to step 2 of the Glow workflow by organizing the scenario content:

1. **Create Personas** -- Define AI student characters with temperaments and behaviors.
2. **Assign to Scenarios** -- Attach personas and documents to scenarios. Parameters and fields on those documents categorize the simulation conditions.
3. **Add to Simulations** -- Group scenarios into simulations.
4. **Add to Cohorts** -- Assign profiles and simulations to a cohort.
5. **Run Attempts** -- Learners launch simulations under the conditions defined by parameter values.

Parameters connect to **fields**. Each parameter contains one or more fields. Documents reference both parameters and fields, which helps organize and filter scenarios by their characteristics.

![Parameter detail showing field list with values and linked personas/scenarios](/screenshots/parameters/detail.png)

## Parameters vs. Fields

Understanding the relationship between parameters and fields is essential:

- A **parameter** is the category (e.g., "Temperament").
- A **field** is a specific value within that category (e.g., "Confused").

Parameters own fields. When you create the "Temperament" parameter, you then create fields like "Aggressive", "Confused", "Happy", and "Passive" under it. Documents and scenarios reference specific fields, while parameters provide the organizational grouping.

**Example:** The "Location" parameter has fields for "Lawson" and "Felix Haas Hall". A document for CS-180 office hours might be tagged with the "Lawson" field, so scenarios using that document know the simulated location is Lawson Hall.

## Filtering and Search

Parameters support rich search and filtering. You can filter by:

- **Scenario** -- Find parameters used in specific scenarios (`scenario_ids`, `scenario_search`)
- **Field** -- Find parameters that contain specific fields (`field_ids`, `field_search`)
- **Department** -- Scope to a department (`filter_department_ids`, `department_search`)

```bash
# Search parameters by field
curl -X POST https://<your-instance>/parameter/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "field_search": "Confused",
    "page_size": 20
  }'
```

## Drafts

Parameters support the draft workflow. Changes are saved as a draft before being published.

```bash
# Save a parameter draft
glow parameters draft --body '{
  "name": "Intensity",
  "description": "The intensity level of the simulated interaction, from 1 to 10"
}'
```

Via the API, use `PATCH /parameter/draft` with fields like `input_draft_id`, `expected_version`, `name`, `description`, `flag_ids`, `department_ids`, and `field_ids`.

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all parameters | `glow parameters list` | `POST /parameter/search` |
| Get a parameter | `glow parameters get --body '{...}'` | `POST /parameter/get` |
| Create parameters | `glow parameters create --body '{...}'` | `POST /parameter/create` |
| Update parameters | `glow parameters update --body '{...}'` | `POST /parameter/update` |
| Duplicate a parameter | -- | `POST /parameter/duplicate` |
| Delete parameters | `glow parameters delete --body '{...}'` | `POST /parameter/delete` |
| Export to CSV | `glow parameters export` | `POST /parameter/export` |
| Save a draft | `glow parameters draft --body '{...}'` | `PATCH /parameter/draft` |
| List drafts | -- | `POST /parameter/drafts` |

## Related

- [Parameters API](/api-reference/parameter)
- [Parameters CLI](/cli-reference/parameter)
- [Fields Guide](/field) -- the values within each parameter
- [Documents Guide](/document) -- documents reference parameters and fields
- [Departments Guide](/department) -- scope parameters to departments
