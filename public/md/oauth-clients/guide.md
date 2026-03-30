# OAuth Clients Guide

Register and manage OAuth clients for "Login with LearnLoop" integration.

## What are OAuth Clients?

OAuth clients let third-party applications authenticate users through LearnLoop's OIDC provider. When you register an OAuth client, you get a `client_id` and `client_secret` that your application uses to initiate the standard OAuth 2.0 Authorization Code flow. This enables "Login with LearnLoop" buttons in external tools, LMS integrations, and custom dashboards. For example, a university's custom analytics portal can use an OAuth client to let faculty sign in with the same credentials they use for their Glow deployment.

## Quick Start

### Via CLI

```bash
# Authenticate first
glow admin login

# Register a new OAuth client
glow admin oauth-clients create \
  --name "Analytics Portal" \
  --redirect-uris "https://analytics.university.edu/callback"

# List your organization's clients
glow admin oauth-clients list
```

### Via API

```bash
# Register a client
curl -s -X POST https://api.learnloop.ai/oauth-clients \
  -H "Authorization: Bearer $LEARNLOOP_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "organization_id": "org_abc123",
    "name": "Analytics Portal",
    "redirect_uris": ["https://analytics.university.edu/callback"]
  }' | jq
```

## Registering a Client

```bash
glow admin oauth-clients create \
  --name "My App" \
  --redirect-uris "https://myapp.com/callback,https://localhost:3000/callback"
```

Or via API:

```bash
curl -s -X POST https://api.learnloop.ai/oauth-clients \
  -H "Authorization: Bearer $LEARNLOOP_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "organization_id": "org_abc123",
    "name": "My App",
    "redirect_uris": [
      "https://myapp.com/callback",
      "https://localhost:3000/callback"
    ]
  }' | jq
```

**Response:**

```json
{
  "id": "oc_abc123",
  "client_id": "ll_client_abc123xyz",
  "client_secret": "secret_xyz789...",
  "name": "My App",
  "redirect_uris": [
    "https://myapp.com/callback",
    "https://localhost:3000/callback"
  ],
  "scopes": ["openid", "profile", "email"]
}
```

> **Important:** The `client_secret` is only returned once at creation time. Save it securely -- it cannot be retrieved later.

## Using the Client

Once registered, your application initiates the standard OAuth 2.0 Authorization Code flow:

1. **Redirect user** to LearnLoop's authorize endpoint:
   ```
   GET https://api.learnloop.ai/authorize
     ?client_id=ll_client_abc123xyz
     &redirect_uri=https://myapp.com/callback
     &response_type=code
     &scope=openid%20profile%20email
     &state=random_csrf_token
   ```

2. **User logs in** via LearnLoop (Keycloak-backed)

3. **Receive callback** with authorization code:
   ```
   GET https://myapp.com/callback?code=AUTH_CODE&state=random_csrf_token
   ```

4. **Exchange code for tokens**:
   ```bash
   curl -s -X POST https://api.learnloop.ai/token \
     -d "grant_type=authorization_code" \
     -d "code=AUTH_CODE" \
     -d "redirect_uri=https://myapp.com/callback" \
     -d "client_id=ll_client_abc123xyz" \
     -d "client_secret=secret_xyz789..."
   ```

5. **Use the access token** to call `/userinfo` or other protected endpoints.

See the [OIDC Guide](/oidc/guide) for the full protocol details.

## Listing Clients

```bash
glow admin oauth-clients list
```

Or via API:

```bash
curl -s https://api.learnloop.ai/oauth-clients/org_abc123 \
  -H "Authorization: Bearer $LEARNLOOP_TOKEN" | jq
```

## Updating a Client

```bash
glow admin oauth-clients update ll_client_abc123xyz \
  --name "Updated Name" \
  --redirect-uris "https://newdomain.com/callback"
```

Or via API:

```bash
curl -s -X PUT https://api.learnloop.ai/oauth-clients/org_abc123/ll_client_abc123xyz \
  -H "Authorization: Bearer $LEARNLOOP_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Name", "redirect_uris": ["https://newdomain.com/callback"]}' | jq
```

## Revoking a Client

```bash
glow admin oauth-clients revoke ll_client_abc123xyz
```

Revocation invalidates the client immediately. Any applications using the client credentials will no longer be able to authenticate users.

## Common Operations

| Task | CLI | API |
|---|---|---|
| Register client | `glow admin oauth-clients create --name X --redirect-uris Y` | `POST /oauth-clients` |
| List clients | `glow admin oauth-clients list` | `GET /oauth-clients/{org_id}` |
| Update client | `glow admin oauth-clients update <client_id>` | `PUT /oauth-clients/{org_id}/{client_id}` |
| Revoke client | `glow admin oauth-clients revoke <client_id>` | `DELETE /oauth-clients/{org_id}/{client_id}` |

## Related

- [OAuth Clients API Reference](/oauth-clients/api)
- [OAuth Clients CLI Reference](/oauth-clients/cli)
- [OIDC Guide](/oidc/guide) -- protocol details for the authorization flow
- [Organizations Guide](/organizations/guide) -- clients are scoped to organizations