# Session

## Commands

### `glow session`

```bash
glow session <action> [--body JSON]
```

### `glow session search`

```bash
glow session search
```

### `glow session get`

```bash
glow session get --body '\{"session_id": "..."}'
```

### `glow session create`

```bash
glow session create --body '\{...}'
```

### `glow session update`

```bash
glow session update --body '\{"session_id": "...", ...}'
```

### `glow session delete`

```bash
glow session delete --body '\{"session_id": "..."}'
```

### `glow session list`

```bash
glow session list
```

### `glow session export`

```bash
glow session export
```

### `glow session draft`

```bash
glow session draft --body '\{...}'
```

### `glow session media`

```bash
glow session <file|image|text|audio|video> <upload|download|create|chunk|status|finalize|discover|preview> [flags]
```