# `glow backup create`

Create a new pg_dump backup

## Usage

```bash
glow backup create [--name] [--label]
```

## Options

| Flag | Required | Description |
|---|---|---|
| `--name` | No | — |
| `--label` | No | Optional label tag; filename becomes `manual-<label>-<ts>.sql.gz` |