# Oauth Clients

## Endpoints

### `POST` `/oauth-clients`

Register Client

Register an OAuth client app. Returns client_id + client_secret (shown once).

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `authorization` | header | No | — |

**Request body** (`CreateOAuthClientRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `organization_id` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `redirect_uris` | `string`[] | Yes | — |

**Response** (`OAuthClientCreateResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `client_id` | `string` | Yes | — |
| `client_secret` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `redirect_uris` | `string`[] | Yes | — |
| `scopes` | `string`[] | Yes | — |

---

### `GET` `/oauth-clients/\{org_id\}`

List Clients

List registered OAuth clients for an org.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `org_id` | path | Yes | — |
| `authorization` | header | No | — |

**Response** (`OAuthClientListResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `clients` | [`OAuthClientResponse`](#oauthclientresponse)[] | Yes | — |

---

### `PUT` `/oauth-clients/\{org_id\}/\{client_uuid\}`

Update Client

Update an OAuth client's name or redirect URIs.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `org_id` | path | Yes | — |
| `client_uuid` | path | Yes | — |
| `authorization` | header | No | — |

**Request body** (`UpdateOAuthClientRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | No | — |
| `redirect_uris` | `string`[] | No | — |

**Response** (`OAuthClientResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `client_id` | `string` | Yes | — |
| `client_secret_prefix` | `string` | No | — |
| `name` | `string` | Yes | — |
| `redirect_uris` | `string`[] | Yes | — |
| `scopes` | `string`[] | No | — |
| `active` | `boolean` | No | — |
| `organization_id` | `string` | No | — |
| `created_by` | `string` | No | — |
| `created_at` | `string` | No | — |
| `updated_at` | `string` | No | — |

---

### `DELETE` `/oauth-clients/\{org_id\}/\{client_uuid\}`

Revoke Client

Revoke an OAuth client.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `org_id` | path | Yes | — |
| `client_uuid` | path | Yes | — |
| `authorization` | header | No | — |

**Response** (`OAuthClientRevokeResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `revoked` | `boolean` | Yes | — |

---

## Types

### `OAuthClientResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `client_id` | `string` | Yes | — |
| `client_secret_prefix` | `string` | No | — |
| `name` | `string` | Yes | — |
| `redirect_uris` | `string`[] | Yes | — |
| `scopes` | `string`[] | No | — |
| `active` | `boolean` | No | — |
| `organization_id` | `string` | No | — |
| `created_by` | `string` | No | — |
| `created_at` | `string` | No | — |
| `updated_at` | `string` | No | — |

---