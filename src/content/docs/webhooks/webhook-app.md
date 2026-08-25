---
title: Webhook App
description: Referencia técnica del webhook que Konnect-360 envía a tu servidor cuando ocurre un evento en el widget de chat embebido.
---

Este webhook se dispara cuando ocurre un evento en el [widget de chat](/guides/widgetbot/) embebido en tu sitio (por ejemplo, el inicio de una conversación). Usa la misma autenticación y forma de respuesta que [Webhook Canal](/webhooks/webhook-canal/) — solo cambia el origen del evento y el body.

### Endpoint

`POST {tu_webhook_url}`

### Headers

| Header | Valor | Descripción |
|---|---|---|
| `Authorization` | `Bearer {tu_token}` | El mismo token que usás para [autenticarte](/authentication/) contra la API. |
| `Content-Type` | `application/json` | |

### Body

```json
{
  "event": "conversation_started",
  "widget_id": "your_widget_name",
  "message": "Hola, necesito ayuda con mi pedido",
  "sender": "visitor-9f3a2e"
}
```

| Campo | Tipo | Descripción |
|---|---|---|
| `event` | string | Tipo de evento del widget: `conversation_started`, `message_received`, etc. |
| `widget_id` | string | Id del widget que originó el evento (el mismo que usaste al [inicializarlo](/guides/example/)). |
| `message` | string | Texto del mensaje, si el evento incluye uno. |
| `sender` | string | Identificador de la sesión/visitante del widget. |

### Respuesta Esperada

Igual que en Webhook Canal: `200 OK` con un cuerpo mínimo de confirmación.

```json
{
  "success": true
}
```

:::note
Este contrato es una propuesta inicial para el equipo — a diferencia de Webhook Canal, todavía no hay un endpoint real registrado en el backend.
:::
