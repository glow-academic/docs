# Emulation

## Endpoints

### `POST` `/emulate`

Emulate Profile

Create emulation grant. Next request will resolve to target profile.

**Request body** (`EmulateProfileApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `target_profile_id` | `string` | Yes | UUID of the profile to emulate |
| `ttl_minutes` | `integer` | No | Emulation duration in minutes |

**Response** (`EmulateProfileApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `allowed` | `boolean` | Yes | Whether emulation is allowed |
| `reason` | `string` | No | Reason if emulation is denied |
| `grant_id` | `string` | No | UUID of the emulation grant |
| `expires_at` | `string` | No | When the emulation grant expires |

---

### `POST` `/unemulate`

Unemulate Profile

Exit innermost emulation layer. Next request resolves one layer less.

**Response** (`UnemulateProfileApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `ok` | `boolean` | Yes | Whether unemulation succeeded |
| `reason` | `string` | No | Reason if unemulation failed |

---