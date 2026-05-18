# `glow backup restore`

Restore an existing backup (destructive — drops + recreates DB)

## Usage

```bash
glow backup restore [--name] file <file>
```

## Options

| Flag | Required | Description |
|---|---|---|
| `--name` | No | — |
| `file` | Yes | Backup filename inside the instance's `backups/` dir |