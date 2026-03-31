# `POST` `/attempt/message`

Attempt Message

Send a message in an attempt chat.

Browser client: sends message only, internal AI generates response + hints.
Agent: can optionally provide assistant_content, hints, contents to skip AI.

## Request Body (`MessageAttemptApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |
| `chat_id` | `string` | Yes | — |
| `message` | `string` | Yes | — |
| `parent_message_id` | `string` | No | — |
| `assistant_content` | `string` | No | — |
| `hints` | [`app__routes__attempt__message__HintEntry`](/api-reference/attempt/types#app-routes-attempt-message-hintentry)[] | No | — |
| `contents` | [`app__routes__attempt__message__ContentEntry`](/api-reference/attempt/types#app-routes-attempt-message-contententry)[] | No | — |

## Response (`MessageAttemptApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `user_message_id` | `string` | No | — |
| `assistant_message_id` | `string` | No | — |
| `assistant_content` | `string` | No | — |
| `hints` | `object`[] | No | — |