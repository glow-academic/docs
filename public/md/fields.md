# Fields

{/* DEMO_VIDEO: fields-overview — replace public/demos/fields-overview.mp4 */}

# Fields

Fields are the specific values within a parameter. While parameters define categories like "Temperament" or "Class", fields define the individual options within those categories -- "Confused", "Happy", "CS-180", and so on.

<DemoVideo
  topic="fields-overview"
  caption="The fields list grouped by parent parameter, showing each value and which personas / documents reference it."
/>

![Fields list showing field entries with name, value, and parent parameter](/screenshots/fields/list.png)

## What is a Field?

A field is a single value that belongs to a parameter. Fields are the building blocks that get attached to documents and scenarios, letting you tag simulation content with precise characteristics.

**University example:** The "Temperament" parameter has four fields:

| Field | Description |
|---|---|
| **Confused** | The AI student character is uncertain, asks clarifying questions, and struggles to follow along |
| **Happy** | The AI student character is positive, engaged, and receptive to instruction |
| **Passive** | The AI student character is quiet, requires prompting, and gives minimal responses |
| **Aggressive** | The AI student character is confrontational, challenges authority, and pushes back |

Other examples include "CS-180" and "CS-251" as fields under the "Class" parameter, or "Almost Empty (1)" through "Hectic (10)" as fields under the "Crowdedness" parameter.

## How It Connects: The 5-Step Workflow

Fields contribute to step 2 of the Glow workflow through their role in organizing documents:

1. **Create Personas** -- Define AI student characters with temperaments and behaviors.
2. **Assign to Scenarios** -- Attach personas and documents to scenarios. Documents are tagged with *fields* to indicate their specific characteristics.
3. **Add to Simulations** -- Group scenarios into simulations.
4. **Add to Cohorts** -- Assign profiles and simulations to a cohort.
5. **Run Attempts** -- Learners launch simulations; the AI uses field-tagged content during the conversation.

Fields connect to **parameters** (each field belongs to a parameter) and to **documents** (documents are tagged with fields for categorization and filtering).

---

{/* DEMO_VIDEO: fields-create — replace public/demos/fields-create.mp4 */}

## Create a field

<DemoVideo
  topic="fields-create"
  caption="Filling out the create form: name, description, picking the parent parameter so the value shows up wherever that parameter is referenced."
/>

### Via the CLI

> Calls below assume you've authenticated — see [Authentication](/authentication) for the bearer + license-key headers.

```bash
glow fields create --body '{
  "fields": [
    {
      "name": "Confused",
      "description": "The AI student character is uncertain and struggles to follow along"
    }
  ]
}'
```

### Via the API

All endpoints use `POST` and require both `X-Api-Key` and `Authorization: Bearer` headers.

```bash
curl -X POST https://<your-instance>/field/create \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "fields": [
      {
        "name": "CS-180",
        "description": "Introduction to Computer Science course field"
      }
    ]
  }'
```

---

{/* DEMO_VIDEO: fields-edit — replace public/demos/fields-edit.mp4 */}

## Conditional parameters and multiple descriptions

<DemoVideo
  topic="fields-edit"
  caption="Wiring CS-180 to conditionally surface the Location parameter, and adding a long-form description that the AI uses at runtime alongside the short label."
/>

![Field detail showing name, description, value, and linked parameter](/screenshots/fields/detail.png)

### Conditional Parameters

Fields can have conditional parameters. This means a field can specify that when it is selected, certain additional parameters become relevant. This enables dynamic scenario configuration where selecting one field value unlocks further options.

**Example:** Selecting the "CS-180" field under the "Class" parameter might conditionally require the "Location" parameter, since CS-180 has specific classroom and lab locations.

The API exposes this through `conditional_parameter_ids` on the field draft, and the get endpoint returns a `conditional_parameters` section.

### Descriptions

Fields support multiple descriptions. This is useful when a field needs different levels of detail for different contexts -- a short label for list views and a longer description for the AI to use during simulation.

The get endpoint accepts a `descriptions_search` parameter, letting you search through a field's descriptions when it has many.

---

{/* DEMO_VIDEO: fields-draft — replace public/demos/fields-draft.mp4 */}

## Drafts

Fields support the draft workflow. Changes are saved as a draft before being published, with optimistic concurrency via `expected_version`.

<DemoVideo
  topic="fields-draft"
  caption="Editing the same field in two tabs — second save sees a version mismatch and surfaces the conflict instead of clobbering."
/>

```bash
# Save a field draft
glow fields draft --body '{
  "name": "Happy",
  "description": "The AI student character is positive, engaged, and receptive to instruction"
}'
```

Via the API, use `PATCH /field/draft` with fields like `input_draft_id`, `expected_version`, `name`, `description`, `flag_id`, `department_ids`, and `conditional_parameter_ids`.

---

{/* DEMO_VIDEO: fields-search — replace public/demos/fields-search.mp4 */}

## Filtering and search

Fields support rich search and filtering:

<DemoVideo
  topic="fields-search"
  caption="Filtering fields by parent parameter (Temperament) and by the personas that reference them."
/>

- **Parameter** -- Find fields belonging to specific parameters (`parameter_ids`, `parameter_search`)
- **Persona** -- Find fields used by specific personas (`persona_ids`, `persona_search`)
- **Department** -- Scope to a department (`filter_department_ids`, `department_search`)

```bash
# Search fields by parameter
curl -X POST https://<your-instance>/field/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "parameter_search": "Temperament",
    "page_size": 20
  }'
```

---

{/* DEMO_VIDEO: fields-bulk — replace public/demos/fields-bulk.mp4 */}

## Bulk operations

Bulk delete and update follow the canonical *all-matching* shape -- pass either explicit IDs, or `all: true` with flat filter fields + optional `excluded_ids` + a `patch` for updates.

<DemoVideo
  topic="fields-bulk"
  caption="Bulk-deleting every field under a retired parameter in one round-trip, keeping a couple of canonical values via excluded_ids."
/>

```bash
# Delete every field under a retired parameter, except a manual keeplist
glow fields delete --body '{
  "all": true,
  "parameter_ids": ["retired-parameter-uuid"],
  "excluded_ids": ["field-keep-canonical"]
}'

# Bulk update via patch
glow fields update --body '{
  "all": true,
  "filter_department_ids": ["dept-archive"],
  "patch": { "archived": true }
}'
```

See the [Personas guide](/personas#bulk-operations) for the canonical write-up of this pattern.

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all fields | `glow fields list` | `POST /field/search` |
| Get a field | `glow fields get --body '{...}'` | `POST /field/get` |
| Create fields | `glow fields create --body '{...}'` | `POST /field/create` |
| Update fields | `glow fields update --body '{...}'` | `POST /field/update` |
| Duplicate a field | -- | `POST /field/duplicate` |
| Delete fields | `glow fields delete --body '{...}'` | `POST /field/delete` |
| Bulk delete (filter) | `glow fields delete --body '{"all": true, "filter_…": "…"}'` | `POST /field/delete` |
| Export to CSV | `glow fields export` | `POST /field/export` |
| Save a draft | `glow fields draft --body '{...}'` | `PATCH /field/draft` |
| List drafts | -- | `POST /field/drafts` |

## Related

- [Fields API](/api-reference/field)
- [Fields CLI](/cli-reference/field)
- [Parameters Guide](/parameter) -- the categories that contain fields
- [Documents Guide](/document) -- documents reference fields
- [Departments Guide](/department) -- scope fields to departments
