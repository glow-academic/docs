# `GET` `/model/watch`

Model Watch

## Parameters

| Name | In | Required | Description |
|---|---|---|---|
| `group_id` | query | No | — |
| `run_id` | query | No | Optional run filter. If provided, only events whose envelope run_id matches are streamed. Omit to receive every model event in the group (the FE default). |

## Response

```
{}
```