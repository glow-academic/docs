# Authentication

## Endpoints

### `GET` `/.well-known/oauth-authorization-server`

Oauth Authorization Server Metadata

RFC 8414 OAuth Authorization Server Metadata — same as OIDC discovery.

**Response:**

```
`any`
```

---

### `GET` `/jwks`

Jwks Endpoint

JWKS endpoint for public key exposure.

**Response:**

```
`any`
```

---

### `GET` `/.well-known/openid-configuration`

Openid Configuration

OIDC discovery endpoint.

**Response:**

```
`object`
```

---

### `GET` `/authorize`

Authorize

OIDC authorization endpoint.

Without profile_id: standard OIDC flow — redirect to Keycloak for login.
With profile_id: Keycloak broker callback — issue auth code directly.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `client_id` | query | Yes | — |
| `redirect_uri` | query | Yes | — |
| `response_type` | query | Yes | — |
| `state` | query | No | — |
| `scope` | query | No | — |
| `nonce` | query | No | — |
| `profile_id` | query | No | — |
| `emulation_grant` | query | No | — |
| `login_hint` | query | No | — |

**Response:**

```
`any`
```

---

### `POST` `/token`

Token

Token endpoint — exchanges authorization codes for tokens.

Supports client_secret_post (form body) and client_secret_basic (Authorization header).

**Response:**

```
`object`
```

---

### `GET` `/userinfo`

Userinfo

UserInfo endpoint — returns user claims from access token.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `authorization` | header | No | — |

**Response:**

```
`object`
```

---

### `GET` `/login`

Login

Redirect to Keycloak login page.

**Response:**

```
`any`
```

---

### `GET` `/callback`

Callback

Handle Keycloak callback — exchange code for tokens.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `code` | query | No | — |
| `error` | query | No | — |

**Response:**

```
`any`
```

---

### `GET` `/logout`

Logout

Redirect to Keycloak logout, then back to login page.

**Response:**

```
`any`
```

---

### `GET` `/me`

Me

Return current authenticated user info.

**Response:**

```
`any`
```

---

### `GET` `/auth/client-config`

Client Config

Return OAuth client credentials for frontend integration.

Authenticated by deployment token (managed or self-hosted).
Any frontend (Next.js, React, mobile) can call this to get
the credentials needed to connect to this server's auth.

Like Google/Microsoft OAuth: you get a client_id + secret,
plug them into your app, done.

**Response:**

```
`any`
```

---