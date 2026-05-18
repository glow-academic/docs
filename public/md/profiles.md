# Profiles

{/* DEMO_VIDEO: profiles — replace public/demos/profiles.mp4 */}

# Profiles

<DemoVideo topic="profiles" />

Profiles represent the people who use Glow -- instructors, teaching assistants, and administrators. Every user in your institution gets a profile that determines what they can access and how they interact with simulations through cohorts.

![Profiles list showing user cards with name, role, department, and last login](/screenshots/profiles/list.png)

## What is a Profile?

A profile is a user identity in Glow. Each profile has a name, email, role, department membership, and optional request limits. Profiles are the foundation of the platform: they are assigned to cohorts, which in turn give learners access to simulations.

**University example:** Your CS department might have profiles for Professor Smith (Instructional Staff), TA Johnson (Instructional Staff), and a University Admin (Super Administrator). Each profile's role controls what they can create, edit, and view across the platform.

## Quick Start

### CLI

```bash
# List all profiles
glow profiles list

# Search for a specific profile
glow profiles search

![Profile creation form showing name, role selection, and department assignment](/screenshots/profiles/create.png)

# Create a new profile
glow profiles create --body '{
  "profiles": [
    {
      "name": "TA Johnson",
      "email": "johnson@university.edu",
      "role": "Instructional Staff"
    }
  ]
}'

# Get a profile by ID
glow profiles get --body '{"profile_id": "abc-123"}'

# Update an existing profile
glow profiles update --body '{
  "profiles": [
    {
      "profile_id": "abc-123",
      "name": "TA Johnson",
      "role": "Administrator"
    }
  ]
}'

# Delete a profile
glow profiles delete --body '{"profile_id": "abc-123"}'
```

### API

All endpoints use `POST` and require both `X-Api-Key` and `Authorization: Bearer` headers.

```bash
# Search profiles
curl -X POST https://<your-instance>/profile/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "Johnson",
    "role_filter": "Instructional Staff",
    "page_size": 10
  }'

# Create a profile
curl -X POST https://<your-instance>/profile/create \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "profiles": [
      {
        "name": "Professor Smith",
        "email": "smith@university.edu",
        "role": "Instructional Staff"
      }
    ]
  }'
```

## How It Connects: The 5-Step Workflow

Profiles participate in step 4 of the Glow workflow:

1. **Create Personas** -- Define AI student characters with temperaments and behaviors.
2. **Assign to Scenarios** -- Attach personas and documents to scenarios.
3. **Add to Simulations** -- Group scenarios into simulations.
4. **Add to Cohorts** -- Assign *profiles* and simulations to a cohort. Profile personas tell the AI who each learner is, so the AI character can adapt.
5. **Run Attempts** -- Learners launch simulations from their cohort.

Profiles are the link between real users and the simulation experience. Without a profile assigned to a cohort, a user cannot access any simulations.

## Roles

Glow supports three profile roles, each with different permissions:

| Role | Description |
|---|---|
| **Instructional Staff** | Can run simulations, view assigned cohorts, and access learner-facing features. Used for TAs and professors. |
| **Administrator** | Can create and manage resources (scenarios, documents, parameters) within their department. |
| **Super Administrator** | Full platform access across all departments. Can manage profiles, departments, and system settings. |

**Example:** TA Johnson has the Instructional Staff role and can run practice simulations in their assigned cohorts. The University Admin has the Super Administrator role and can manage profiles across all departments.

## Department Membership

Every profile belongs to one or more departments. Department membership controls:

- Which resources (documents, parameters, scenarios) the profile can see
- Which cohorts the profile can be added to
- Which other profiles the user can manage (for administrators)

**Example:** Professor Smith belongs to the "University" department and can see all resources scoped to that department.

## Request Limits

Profiles can have request limits that cap how many simulation attempts a learner can make. This is useful for controlling API usage in large courses.

## Drafts

Profiles support the draft workflow. When you create or update a profile through the UI, changes are saved as a draft before being published. This lets you preview changes before they take effect.

```bash
# Save a profile draft
glow profiles draft --body '{
  "name": "TA Johnson",
  "email": "johnson@university.edu",
  "role": "Instructional Staff"
}'
```

Via the API, use `PATCH /profile/draft` with fields like `input_draft_id`, `expected_version`, `name`, `email`, `flag_id`, `department_ids`, and `role_ids`.

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all profiles | `glow profiles list` | `POST /profile/search` |
| Get a profile | `glow profiles get --body '{...}'` | `POST /profile/get` |
| Create profiles | `glow profiles create --body '{...}'` | `POST /profile/create` |
| Update profiles | `glow profiles update --body '{...}'` | `POST /profile/update` |
| Duplicate a profile | -- | `POST /profile/duplicate` |
| Delete profiles | `glow profiles delete --body '{...}'` | `POST /profile/delete` |
| Export to CSV | `glow profiles export` | `POST /profile/export` |
| Save a draft | `glow profiles draft --body '{...}'` | `PATCH /profile/draft` |
| List drafts | -- | `POST /profile/drafts` |

## Related

- [Profiles API](/api-reference/profile)
- [Profiles CLI](/cli-reference/profile)
- [Cohorts Guide](/cohort) -- assign profiles to cohorts
- [Departments Guide](/department) -- manage department membership
