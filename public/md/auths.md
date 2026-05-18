# Auths

{/* DEMO_VIDEO: auths-overview — replace public/demos/auths-overview.mp4 */}

# Auths

Auths manages authentication providers for your Glow instance -- the SSO configurations, login methods, and access controls that determine how TAs and administrators sign in. It supports full CRUD operations with a draft system for safe, staged edits.

<DemoVideo
  topic="auths-overview"
  caption="The auths list -- rows by login method, protocol badge, and enabled flag; encrypted items hidden behind a dedicated edit drawer."
/>

## What is an Auth?

An auth provider defines a login method for your Glow instance. This could be a university SSO integration, an email-based login, or another authentication protocol. Each auth provider is composed of sections:

- **Names** and **Descriptions** -- Display identity for the provider
- **Flags** -- Feature toggles (e.g., enabled/disabled)
- **Protocols** -- Authentication protocol configuration
- **Slugs** -- URL-friendly identifiers for login routes
- **Items** -- Individual auth items (e.g., client IDs, secrets, redirect URIs)

Auths uses a composable architecture with full CRUD, duplication, and a draft system with optimistic locking -- the same pattern as Settings.

---

{/* DEMO_VIDEO: auths-create — replace public/demos/auths-create.mp4 */}

## Create an auth provider

<DemoVideo
  topic="auths-create"
  caption="Spinning up a new University SSO entry -- name and description first, then immediately wiring protocol and slug in the follow-up draft."
/>

### Via the CLI

```bash
glow auths create --body '{"auths": [{"name": "University SSO", "description": "SAML SSO for university login"}]}'
```

### Via the API

```bash
curl -X POST https://<your-instance>/auth/create \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "auths": [{
      "name": "University SSO",
      "description": "SAML-based single sign-on for university TA login"
    }]
  }'
```

Returns per-item results in `results`, each carrying the new `auth_id` and a `draft_id` ready for protocol wiring.

---

{/* DEMO_VIDEO: auths-oidc — replace public/demos/auths-oidc.mp4 */}

## OIDC / protocol wiring

The `protocols` section captures which authentication protocol (OIDC, SAML, ...) this provider speaks; `items` carry the encrypted client IDs, secrets, and redirect URIs. Item values are never returned in plaintext from list or get -- pull them on demand through the dedicated edit drawer.

<DemoVideo
  topic="auths-oidc"
  caption="Wiring an OIDC provider end-to-end: protocol set, slug claimed, client_id and client_secret pasted into encrypted items, then a test login round-trip."
/>

```bash
glow auths draft --body '{
  "input_draft_id": "auth-draft-uuid",
  "expected_version": 1,
  "protocol_ids": ["protocol-oidc"],
  "slug_ids": ["slug-university"],
  "item_ids": ["item-client-id", "item-client-secret", "item-redirect-uri"]
}'
```

---

{/* DEMO_VIDEO: auths-draft — replace public/demos/auths-draft.mp4 */}

## The draft cycle

Auths uses a draft system with optimistic locking -- the same pattern as Settings. Saving via `PATCH /auth/draft` returns the new `version`; pass it as `expected_version` on the next save so concurrent edits surface a conflict instead of clobbering.

<DemoVideo
  topic="auths-draft"
  caption="Editing the same auth provider in two tabs: the second save sees the expected_version mismatch and surfaces the conflict instead of overwriting."
/>

```bash
curl -X PATCH https://<your-instance>/auth/draft \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "input_draft_id": "existing-draft-uuid",
    "expected_version": 2,
    "name": "Updated University SSO",
    "description": "Updated SAML configuration",
    "protocol_ids": ["protocol-saml"],
    "slug_ids": ["slug-university"],
    "department_ids": ["dept-cs"],
    "item_ids": ["item-client-id", "item-secret"]
  }'
```

Key fields:
- `input_draft_id` -- UUID of existing draft (omit for new)
- `expected_version` -- Optimistic lock version
- `name`, `name_id` -- Name value or resource UUID
- `description`, `description_id` -- Description value or resource UUID
- `flag_id` -- Feature flag option UUID
- `protocol_ids`, `slug_ids`, `item_ids`, `department_ids` -- Resource assignments

Response: `success`, `draft_id`, `new_version`, `message`, and `form_state`.

**List your drafts:**

```bash
curl -X POST https://<your-instance>/auth/drafts \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>"
```

**Loading a draft:**

```bash
glow auths get --body '{"auth_id": "auth-uuid", "draft_id": "draft-uuid"}'
```

---

{/* DEMO_VIDEO: auths-search — replace public/demos/auths-search.mp4 */}

## Search & filter

<DemoVideo
  topic="auths-search"
  caption="Filtering by department + free-text name search to find the right SSO entry, then drilling in to its protocol and items."
/>

`POST /auth/search` returns a paginated list of auth providers:

- `actor_name` -- Current user's display name
- `auths` -- Array of `ListAuthApiAuth` items
- `department_filter` -- Department filter options
- `total_count` -- Total number of auth providers

Optional filters:

| Filter | Field | Description |
|---|---|---|
| Text search | `search` | Search across auth provider names |
| Departments | `filter_department_ids` | Filter by department |
| Department search | `department_search` | Text search for departments |
| Pagination | `page_size`, `page_offset` | Control page size |

```bash
curl -X POST https://<your-instance>/auth/search \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"search": "sso", "filter_department_ids": ["dept-cs"], "page_size": 25}'
```

---

{/* DEMO_VIDEO: auths-bulk — replace public/demos/auths-bulk.mp4 */}

## Bulk operations

Bulk delete and update follow the canonical *all-matching* shape -- explicit IDs, or `all: true` with flat filter fields plus optional `excluded_ids` and a `patch` body. The persona surface is the prove-out; auths follows the same shape.

<DemoVideo
  topic="auths-bulk"
  caption="Bulk-deleting every auth provider scoped to a retired department; excluded_ids keeps a shared SSO entry that other departments still depend on."
/>

**Delete by explicit IDs:**

```bash
curl -X POST https://<your-instance>/auth/delete \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"auth_ids": ["auth-uuid-1", "auth-uuid-2"]}'
```

**Delete all matching a filter (with exclusions):**

```bash
glow auths delete --body '{
  "all": true,
  "filter_department_ids": ["dept-retired"],
  "excluded_ids": ["auth-shared-sso"]
}'
```

**Duplicate an auth provider:**

```bash
curl -X POST https://<your-instance>/auth/duplicate \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"auth_id": "auth-uuid"}'
```

Returns `success`, `auth_id` (new UUID), and `message`.

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List auth providers | `glow auths search` | `POST /auth/search` |
| Get auth provider | `glow auths get` | `POST /auth/get` |
| Create auth provider | `glow auths create` | `POST /auth/create` |
| Update auth provider | `glow auths update` | `POST /auth/update` |
| Duplicate auth | -- | `POST /auth/duplicate` |
| Delete auths | `glow auths delete` | `POST /auth/delete` |
| Bulk delete (filter) | `glow auths delete --body '{"all": true, "filter_…": "…"}'` | `POST /auth/delete` |
| Save draft | `glow auths draft` | `PATCH /auth/draft` |
| List drafts | -- | `POST /auth/drafts` |
| Export | `glow auths export` | `POST /auth/export` |
| View docs | -- | `POST /auth/docs` |

## Related

- [Auths API Reference](/api-reference/auth)
- [Auths CLI Reference](/cli-reference/auth)
- [Settings Guide](/setting) -- instance configuration (links auth providers)
