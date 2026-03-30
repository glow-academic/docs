# Stream

## Endpoints

### `GET` `/stream/`

Stream Events

Stream artifact events via SSE, scoped to the session's joined entities.

Callers must first obtain an ``sid`` via POST /connect, then join
entities via POST /attempt/join or POST /test/join.  Only events
matching joined entities are delivered.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `sid` | query | No | — |
| `artifact` | query | No | — |
| `operation` | query | No | — |
| `entity_id` | query | No | — |
| `cursor` | query | No | — |
| `types` | query | No | — |
| `limit` | query | No | — |

**Response:**

```
`any`
```

---