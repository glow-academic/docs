# Record

## Commands

### `glow record`

```bash
glow record <action> [--body JSON]
```

### `glow record search`

```bash
glow record search
```

### `glow record get`

```bash
glow record get --body '\{"record_id": "..."}'
```

### `glow record create`

```bash
glow record create --body '\{...}'
```

### `glow record update`

```bash
glow record update --body '\{"record_id": "...", ...}'
```

### `glow record delete`

```bash
glow record delete --body '\{"record_id": "..."}'
```

### `glow record list`

```bash
glow record list
```

### `glow record export`

```bash
glow record export
```

### `glow record draft`

```bash
glow record draft --body '\{...}'
```

### `glow record media`

```bash
glow record <file|image|text|audio|video> <upload|download|create|chunk|status|finalize|discover|preview> [flags]
```