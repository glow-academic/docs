# Other

## Endpoints

### `GET` `/oidc-callback`

Oidc Callback

Handle Keycloak's redirect back after user authentication.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `code` | query | No | — |
| `state` | query | No | — |
| `error` | query | No | — |
| `error_description` | query | No | — |

**Response:**

```
`any`
```

---