# Glow

# Glow

> **Glow API v2.6.0** — Generated from OpenAPI specification

Glow runs on each customer instance. It powers the web client and CLI for managing personas, agents, sessions, and other artifacts.

## Authentication

All requests require authentication via one or both of:

| Scheme | Type | Header | Description |
|---|---|---|---|
| **BearerAuth** | HTTP bearer | `Authorization` | Keycloak-issued JWT token. Resolves the caller's profile and session. |

## Base URL

Each Glow instance has its own URL:

```
https://<your-instance>/v5
```

## Stream CLI

### `glow stream`

Stream events via SSE (Server-Sent Events)

```bash
glow stream
```

| Flag | Required | Description |
|---|---|---|
| `--artifact` | Yes | Artifact type to stream |
| `--operation` | Yes | Operation to stream (e.g. create, update, delete) |
| `--entity-id` | No | Filter by entity ID |
| `--cursor` | No | Cursor for resuming from a position |

## Instance Management

### `glow instances`

Manage configured Glow instances

```bash
glow instances
```

### `glow use`

Switch to a configured Glow instance

```bash
glow use
```

| Flag | Required | Description |
|---|---|---|
| `name` | Yes | Instance name (as configured with 'glow instances add') |

## CLI Global Flags

| Flag | Short | Env | Description |
|---|---|---|---|
| `--api-url` | — | `GLOW_API_URL` | Glow API URL |
| `--instance-url` | — | `GLOW_INSTANCE_URL` | Glow instance URL |
| `--license-key` | — | `GLOW_LICENSE_KEY` | License key |
| `--client-id` | — | `GLOW_CLIENT_ID` | OAuth client ID |
| `--json` | — | — | Output in JSON format |
| `--yes` | `-y` | — | Skip confirmation prompts for destructive actions |
