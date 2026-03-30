# Models

## Commands

### `glow models`

```bash
glow models <action> [--body JSON]
```

### `glow models search`

```bash
glow models search
```

### `glow models get`

```bash
glow models get --body '\{"model_id": "..."}'
```

### `glow models create`

```bash
glow models create --body '\{...}'
```

### `glow models update`

```bash
glow models update --body '\{"model_id": "...", ...}'
```

### `glow models delete`

```bash
glow models delete --body '\{"model_id": "..."}'
```

### `glow models list`

```bash
glow models list
```

### `glow models export`

```bash
glow models export
```

### `glow models draft`

```bash
glow models draft --body '\{...}'
```

### `glow models media`

```bash
glow models <file|image|text|audio|video> <upload|download|create|chunk|status|finalize|discover|preview> [flags]
```