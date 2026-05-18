# `glow logs`

# `glow logs`

Tail container logs (`docker compose logs [-f]`)

## Usage

```bash
glow logs [--name] [--follow] [service]
```

## Options

| Flag | Required | Description |
|---|---|---|
| `--name` | No | — |
| `--follow, -f` | No | Follow log output |
| `service` | No | Optional service name (e.g. `server-blue`, `database`) |
