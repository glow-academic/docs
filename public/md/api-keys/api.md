# Api Keys

## Endpoints

### `POST` `/api-keys`

Create Key

Create a new API key. The plaintext key is only returned once.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `authorization` | header | No | — |

**Request body** (`CreateApiKeyRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `organization_id` | `string` | Yes | — |
| `name` | `string` | No | — |
| `scopes` | `string`[] | No | — |
| `spend_limit_cents` | `integer` | No | — |
| `environment` | `string` | No | — |

**Response** (`ApiKeyCreateResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `key` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `key_prefix` | `string` | Yes | — |
| `scopes` | `string`[] | Yes | — |
| `spend_limit_cents` | `integer` | No | — |

---

### `GET` `/api-keys/\{org_id\}`

List Keys

List all active API keys for an org.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `org_id` | path | Yes | — |
| `authorization` | header | No | — |

**Response** (`ApiKeyListResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `keys` | [`ApiKeyResponse`](#apikeyresponse)[] | Yes | — |

---

### `DELETE` `/api-keys/\{org_id\}/\{key_id\}`

Revoke Key

Revoke (deactivate) an API key.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `org_id` | path | Yes | — |
| `key_id` | path | Yes | — |
| `authorization` | header | No | — |

**Response** (`ApiKeyRevokeResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `revoked` | `boolean` | Yes | — |

---

### `GET` `/api-keys/\{org_id\}/usage`

Get Usage

Get AI usage summary for an org.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `org_id` | path | Yes | — |
| `days` | query | No | — |
| `authorization` | header | No | — |

**Response:**

```
`any`
```

---

## Types

### `ApiKeyResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `key_prefix` | `string` | Yes | — |
| `key` | `string` | No | — |
| `scopes` | `string`[] | Yes | — |
| `spend_limit_cents` | `integer` | No | — |
| `spent_cents` | `integer` | No | — |
| `active` | `boolean` | No | — |
| `created_at` | `string` | No | — |
| `expires_at` | `string` | No | — |
| `last_used_at` | `string` | No | — |

---