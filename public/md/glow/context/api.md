# Context

## Endpoints

### `POST` `/context`

Get Profile Context

Identity + permissions + theme context endpoint.

**Request body** (`GetProfileContextApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | — |

**Response** (`ProfileContextApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Profile UUID |
| `name` | `string` | No | Profile display name |
| `role` | `string` | No | User role (e.g. admin, user, viewer) |
| `active` | `boolean` | No | Whether the profile is active |
| `role_artifacts` | `string`[] | No | Artifact types accessible by role |
| `scoped_roles` | `string`[] | No | Roles scoped to the user |
| `department_ids` | `string`[] | No | Associated department IDs |
| `primary_department_id` | `string` | No | Primary department ID |
| `settings_id` | `string` | No | Active settings UUID |
| `theme` | [`ThemePrimitives`](#themeprimitives) | No | Theme color primitives from settings |
| `session_id` | `string` | No | Current session UUID |
| `is_emulation` | `boolean` | No | Whether user is in emulation mode |
| `emulation_depth` | `integer` | No | Number of emulation layers deep |
| `role_resources` | [`QGetProfileContextV4RoleResource`](#qgetprofilecontextv4roleresource)[] | No | All role resources for display |

---

## Types

### `QGetProfileContextV4RoleResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `role` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `icon_value` | `string` | No | — |
| `color_hex` | `string` | No | — |

---

### `ThemePrimitives`

Raw theme color primitives (hex values) from settings.

General-purpose — not CSS-specific. Clients derive their own
presentation tokens (oklch, CSS variables, etc.) from these.

| Field | Type | Required | Description |
|---|---|---|---|
| `primary` | `string` | No | Primary color hex value |
| `accent` | `string` | No | Accent color hex value |
| `background` | `string` | No | Background color hex value |
| `surface` | `string` | No | Surface color hex value |
| `success` | `string` | No | Success state color hex value |
| `warning` | `string` | No | Warning state color hex value |
| `error` | `string` | No | Error state color hex value |
| `chart1` | `string` | No | Chart color 1 hex value |
| `chart2` | `string` | No | Chart color 2 hex value |
| `chart3` | `string` | No | Chart color 3 hex value |
| `chart4` | `string` | No | Chart color 4 hex value |
| `chart5` | `string` | No | Chart color 5 hex value |

---