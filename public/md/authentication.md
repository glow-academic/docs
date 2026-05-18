# Authentication

{/* DEMO_VIDEO: authentication-overview — replace public/demos/authentication-overview.mp4 */}

# Authentication

Every Glow request needs a caller identity. The platform supports two
schemes, both attached as HTTP headers:

| Scheme | Header | Issued by | Resolves to |
|---|---|---|---|
| **BearerAuth** | `Authorization: Bearer <jwt>` | Keycloak (interactive) or service-account exchange | profile + session |
| **ApiKeyAuth** | `X-Api-Key: <license-key>` | the instance's license seed | license context (rate limits, feature gates) |

Most user-driven calls send **both** — bearer for who you are, api-key
for what the license entitles. CLI flows handle both automatically
after `glow login` writes the bearer to `~/.config/glow/tokens.json`
and the license key is read from `~/.glow/instances/<name>/glow-deploy.yaml`.

<DemoVideo topic="authentication-overview" caption="Both schemes side-by-side: bearer JWT in Authorization header, license key in X-Api-Key, request flowing through." />

{/* DEMO_VIDEO: authentication-login — replace public/demos/authentication-login.mp4 */}

## Interactive flow (`glow login`)

<DemoVideo
  topic="authentication-login"
  caption="PKCE round-trip end-to-end: localhost listener spawning, browser hitting Keycloak, callback with code+state, token exchange, JSON landing in ~/.config/glow."
/>

```bash
glow login --instance-url https://my-school.example.com
```

What happens:

1. The CLI hits `GET /.well-known/openid-configuration` on the
   instance to discover Keycloak endpoints.
2. It spawns a localhost listener and opens your browser to the
   `authorize_endpoint` with a generated `state` + `code_verifier`
   (PKCE — no client secret needed for the public CLI client).
3. Keycloak logs you in (or returns to your existing SSO session) and
   redirects to `http://127.0.0.1:<port>/callback?code=…&state=…`.
4. The CLI exchanges the code at `token_endpoint` for an access token
   + refresh token and writes both to `~/.config/glow/tokens.json`,
   keyed by instance URL.

After login, every subsequent CLI call attaches `Authorization: Bearer
<access_token>` automatically. The refresh token is used silently when
the access token expires.

{/* DEMO_VIDEO: authentication-service-account — replace public/demos/authentication-service-account.mp4 */}

## Service-account flow (`--token`)

<DemoVideo
  topic="authentication-service-account"
  caption="Headless CI flow: minting a service-account JWT, passing it via `glow login --token`, no browser, immediate authenticated `glow personas search`."
/>

For CI / scripted use, mint a service-account JWT once and pass it
explicitly:

```bash
glow login --instance-url https://my-school.example.com \
  --token "$SERVICE_ACCOUNT_JWT"
```

This skips the browser dance and stores the token directly. The JWT
must be signed by the same Keycloak realm and carry a
`profile.is_service_account = true` claim.

## Server-side logout

```bash
glow logout
```

Fires `GET /logout` on the instance (which writes a `logouts_entry`
row so the next request mints a fresh session) and then clears the
local `tokens.json`. The server-side call is best-effort — the local
clear always runs even if the server is unreachable.

## Raw HTTP

If you're calling the API directly without the CLI, the canonical
shape is:

```bash
curl -X POST https://my-school.example.com/persona/search \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $GLOW_TOKEN" \
  -H "X-Api-Key: $GLOW_LICENSE_KEY" \
  -d '{}'
```

`Authorization` alone works for most read paths; mutation endpoints
typically require both headers.

### Discovery endpoints

| Endpoint | Purpose |
|---|---|
| `GET /.well-known/openid-configuration` | OIDC discovery doc (issuer, endpoints) |
| `GET /jwks` | public signing keys for verifying issued JWTs |
| `GET /authorize` | OAuth authorization endpoint (browser redirect) |
| `GET /oidc_callback` | OAuth callback (used by browser flows) |
| `POST /token` | code → access token / refresh exchange |
| `GET /userinfo` | introspect the bearer's profile claims |
| `GET /login` / `GET /logout` | bare browser-flow entry points |

These mirror the standard OIDC surface — most clients only need
`/.well-known/...` to bootstrap.

## Multiple instances

```bash
glow login --instance-url https://school-a.example.com
glow login --instance-url https://school-b.example.com

# tokens.json now has both; the --instance-url flag (or GLOW_INSTANCE_URL
# env var) selects which one a given command uses.
GLOW_INSTANCE_URL=https://school-b.example.com glow personas search
```

Sessions are listed in the CLI via the `instance` config under
`~/.config/glow/`. There's no first-class `glow sessions list` command
today — read the file directly if needed.

## Related

- [Start](/start) — install + first-boot
- [CLI Reference: login](/cli-reference/login/) · [logout](/cli-reference/logout/)
- API Reference: [`POST /profile/context`](/api-reference/profile/post-profile-context/) returns the authenticated profile
