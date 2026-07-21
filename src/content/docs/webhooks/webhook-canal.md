---
title: Webhook Canal
description: Referencia técnica del webhook que Konnect-360 envía a tu servidor cuando llega un mensaje por un canal conectado (WhatsApp, Messenger, etc).
---

Este webhook se dispara cuando llega un mensaje nuevo por un canal externo conectado a tu cuenta (WhatsApp, Messenger, etc). Konnect-360 hace un `POST` a la URL que registraste en [Configuración](/webhooks/configuracion/).

## Endpoint

`POST {tu_webhook_url}`

### Headers

| Header | Valor | Descripción |
|---|---|---|
| `Authorization` | `Bearer {tu_token}` | El mismo token que usás para [autenticarte](/auth/) contra la API. Validalo antes de procesar el evento. |
| `Content-Type` | `application/json` | |

### Body

```json
{
  "canal": "whatsapp",
  "message": "Informacion sobre mi pedido",
  "sender": "51987654321"
}
```

| Campo | Tipo | Descripción |
|---|---|---|
| `canal` | string | Canal de origen del evento: `whatsapp`, `messenger`, etc. |
| `message` | string | Texto del mensaje recibido. |
| `sender` | string | Identificador del remitente (número de teléfono o id de usuario del canal). |

### Respuesta esperada

Tu servidor debe responder `200 OK` para confirmar la recepción del evento.

```json
{
  "success": true
}
```
