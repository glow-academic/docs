# Departments

{/* DEMO_VIDEO: departments-overview — replace public/demos/departments-overview.mp4 */}

# Departments

Departments are the organizational boundary in Glow. They scope nearly every resource -- profiles, documents, parameters, fields, scenarios, simulations, and cohorts -- so that different groups within your institution can work independently.

<DemoVideo
  topic="departments-overview"
  caption="The departments list -- cards by name with counts of attached profiles, documents, scenarios, and cohorts; drill in to see member assignments and settings."
/>

## What is a Department?

A department is a top-level organizational unit that controls visibility and access across Glow. Every resource is scoped to one or more departments, and profiles can only see and manage resources within their assigned departments.

**University example:** The "University" department might be described as an "Innovative base of knowledge in the emerging field of computing." All CS-related resources -- profiles for Professor Smith and TA Johnson, parameters like Temperament and Class, documents like the Academic Integrity Policy -- are scoped to this department.

## How It Connects: The 5-Step Workflow

Departments underpin every step of the Glow workflow by scoping resources:

1. **Create Personas** -- Personas are scoped to a department.
2. **Assign to Scenarios** -- Scenarios, documents, and their parameters/fields are all scoped to a department.
3. **Add to Simulations** -- Simulations are scoped to a department.
4. **Add to Cohorts** -- Cohorts are scoped to a department. Only profiles belonging to the same department can be added.
5. **Run Attempts** -- Learners only see simulations within cohorts from their department.

Departments connect to nearly everything. They are the first resource you should set up when configuring a new Glow instance.

---

{/* DEMO_VIDEO: departments-create — replace public/demos/departments-create.mp4 */}

## Create a department

<DemoVideo
  topic="departments-create"
  caption="Filling out a University department: name and description, then committing -- the new department_id is immediately available as a scoping target."
/>

### Via the CLI

```bash
glow departments create --body '{
  "departments": [
    {
      "name": "University",
      "description": "Innovative base of knowledge in the emerging field of computing"
    }
  ]
}'
```

### Via the API

All endpoints use `POST` and require both `X-Api-Key` and `Authorization: Bearer` headers.

```bash
curl -X POST https://<your-instance>/department/create \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "departments": [
      {
        "name": "University",
        "description": "Innovative base of knowledge in the emerging field of computing"
      }
    ]
  }'
```

---

{/* DEMO_VIDEO: departments-members — replace public/demos/departments-members.mp4 */}

## Member assignment

Profiles belong to one or more departments and can only manage resources within those departments. Assignment happens by updating each profile's `department_ids`, but the department detail surface is the natural place to audit who currently sits inside a scope.

<DemoVideo
  topic="departments-members"
  caption="Walking through department membership: filtering profiles by department, assigning a TA into the CS department, and watching their visible resource pool change."
/>

## What Departments Scope

| Resource | How departments apply |
|---|---|
| **Profiles** | A profile belongs to one or more departments and can only manage resources within those departments |
| **Documents** | Each document is scoped to a department |
| **Parameters** | Each parameter is scoped to a department |
| **Fields** | Each field is scoped to a department |
| **Scenarios** | Scenarios inherit department scope |
| **Simulations** | Simulations are scoped to a department |
| **Cohorts** | Cohorts are scoped to a department; only same-department profiles can be members |

---

{/* DEMO_VIDEO: departments-settings — replace public/demos/departments-settings.mp4 */}

## Settings and flags

Departments have a settings section that controls department-level configuration. Settings are managed through the `settings` field on the department get response and the `setting_ids` field on the draft endpoint. Flags toggle department-level feature behavior.

<DemoVideo
  topic="departments-settings"
  caption="Editing department-level settings + flags -- enabling a department-only feature flag and persisting it through the draft endpoint."
/>

---

{/* DEMO_VIDEO: departments-draft — replace public/demos/departments-draft.mp4 */}

## The draft cycle

Departments support the draft workflow. Changes are saved as a draft before being published, with `expected_version` providing optimistic concurrency.

<DemoVideo
  topic="departments-draft"
  caption="Editing a department in two tabs: the second save sees the expected_version mismatch and surfaces the conflict instead of clobbering."
/>

```bash
glow departments draft --body '{
  "input_draft_id": "dept-draft-uuid",
  "expected_version": 2,
  "name": "University",
  "description": "Innovative base of knowledge in the emerging field of computing"
}'
```

Via the API, use `PATCH /department/draft` with fields like `input_draft_id`, `expected_version`, `name`, `description`, `flag_id`, and `setting_ids`.

---

{/* DEMO_VIDEO: departments-search — replace public/demos/departments-search.mp4 */}

## Search & filter

<DemoVideo
  topic="departments-search"
  caption="Free-text search across departments to locate the right scope, then drilling in to its members and attached resources."
/>

```bash
curl -X POST https://<your-instance>/department/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "University",
    "page_size": 10
  }'
```

---

{/* DEMO_VIDEO: departments-bulk — replace public/demos/departments-bulk.mp4 */}

## Bulk operations

Bulk delete and update follow the canonical *all-matching* shape -- explicit IDs, or `all: true` with flat filter fields plus optional `excluded_ids` and a `patch` body. The persona surface is the prove-out; departments follow the same shape.

<DemoVideo
  topic="departments-bulk"
  caption="Bulk-archiving every department matching a name pattern in one round-trip; excluded_ids keeps a department that still owns active simulations alive."
/>

**Delete by explicit IDs:**

```bash
glow departments delete --body '{"department_ids": ["dept-1", "dept-2"]}'
```

**Delete all matching a filter (with exclusions):**

```bash
glow departments delete --body '{
  "all": true,
  "search": "deprecated",
  "excluded_ids": ["dept-keep-this-one"]
}'
```

**Bulk update via `patch`:**

```bash
glow departments update --body '{
  "all": true,
  "search": "archived-",
  "patch": { "archived": true }
}'
```

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all departments | `glow departments list` | `POST /department/search` |
| Get a department | `glow departments get --body '{...}'` | `POST /department/get` |
| Create departments | `glow departments create --body '{...}'` | `POST /department/create` |
| Update departments | `glow departments update --body '{...}'` | `POST /department/update` |
| Duplicate a department | -- | `POST /department/duplicate` |
| Delete departments | `glow departments delete --body '{...}'` | `POST /department/delete` |
| Bulk delete (filter) | `glow departments delete --body '{"all": true, "filter_…": "…"}'` | `POST /department/delete` |
| Export to CSV | `glow departments export` | `POST /department/export` |
| Save a draft | `glow departments draft --body '{...}'` | `PATCH /department/draft` |
| List drafts | -- | `POST /department/drafts` |

## Related

- [Departments API](/api-reference/department)
- [Departments CLI](/cli-reference/department)
- [Profiles Guide](/profile) -- profiles belong to departments
- [Documents Guide](/document) -- documents are scoped to departments
- [Parameters Guide](/parameter) -- parameters are scoped to departments
- [Cohorts Guide](/cohort) -- cohorts are scoped to departments
