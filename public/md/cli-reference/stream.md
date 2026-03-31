# `glow stream`

Stream events via SSE (Server-Sent Events)

## Usage

```bash
glow stream --artifact <artifact> --operation <operation> [--entity-id] [--cursor]
```

## Options

| Flag | Required | Description |
|---|---|---|
| `--artifact` | Yes | Artifact type to stream |
| `--operation` | Yes | Operation to stream (e.g. create, update, delete) |
| `--entity-id` | No | Filter by entity ID |
| `--cursor` | No | Cursor for resuming from a position |