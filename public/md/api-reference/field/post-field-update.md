# `POST` `/field/update`

# `POST` `/field/update`

Update Field

Update fields using composable infra architecture.

## Request Body (`UpdateFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`UpdateFieldItem`](/api-reference/field/types#updatefielditem)[] | No | List of fields to update (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, apply ``patch`` to every field matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `patch` | [`UpdateFieldPatch`](/api-reference/field/types#updatefieldpatch) | No | Shared change set applied to every matched row when ``all=true`` (sparse — only set fields are updated; ``patch.id`` ignored) |
| `search` | `string` | No | Full-text search query |
| `parameter_ids` | `string`[] | No | Filter by parameter UUIDs |
| `persona_ids` | `string`[] | No | Filter by persona UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `parameter_search` | `string` | No | Search text for parameter facet (no-op for row filtering) |
| `persona_search` | `string` | No | Search text for persona facet (no-op for row filtering) |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](/api-reference/field/types#fieldresultitem)[] | Yes | Per-item update results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
