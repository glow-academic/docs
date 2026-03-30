# Dashboard

## Commands

### `glow dashboard`

```bash
glow dashboard <action> [--body JSON]
```

### `glow dashboard search`

```bash
glow dashboard search
```

### `glow dashboard get`

```bash
glow dashboard get --body '\{"dashboard_id": "..."}'
```

### `glow dashboard create`

```bash
glow dashboard create --body '\{...}'
```

### `glow dashboard update`

```bash
glow dashboard update --body '\{"dashboard_id": "...", ...}'
```

### `glow dashboard delete`

```bash
glow dashboard delete --body '\{"dashboard_id": "..."}'
```

### `glow dashboard list`

```bash
glow dashboard list
```

### `glow dashboard export`

```bash
glow dashboard export
```

### `glow dashboard draft`

```bash
glow dashboard draft --body '\{...}'
```

### `glow dashboard media`

```bash
glow dashboard <file|image|text|audio|video> <upload|download|create|chunk|status|finalize|discover|preview> [flags]
```