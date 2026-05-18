# `POST` `/attempt/practice`

Practice Get

Get simulations available for practice (operational).

## Request Body (`GetPracticeRequest`)

```
{
  "properties": {},
  "type": "object",
  "title": "GetPracticeRequest",
  "description": "Request for practice get endpoint — simulation cards only."
}
```

## Response (`GetPracticeResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Current user display name |
| `items` | [`ChatSimulationOperational`](/api-reference/attempt/types#chatsimulationoperational)[] | No | Available practice simulation cards |
| `rubrics` | [`RubricMapping`](/api-reference/attempt/types#rubricmapping)[] | No | Rubric mapping data |
| `standard_groups` | [`StandardGroupMapping`](/api-reference/attempt/types#standardgroupmapping)[] | No | Standard group mapping data |
| `standards` | [`StandardMapping`](/api-reference/attempt/types#standardmapping)[] | No | Standard mapping data |
| `analytics` | [`AnalyticsFacets`](/api-reference/attempt/types#analyticsfacets) | No | Inline analytics facets for SSR |