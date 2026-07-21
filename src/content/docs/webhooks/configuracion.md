---
title: Configuración
description: Pasos para habilitar un canal y registrar la URL donde Konnect-360 va a enviar tus Webhooks.
---

Antes de recibir eventos por Webhook necesitas habilitar el canal y registrar la URL de tu servidor dentro de la app de Konnect-360.

## Pasos

1. Ingresa a tu cuenta de Konnect-360 y abre la sección **Canales**.
2. Selecciona el canal que querés conectar (WhatsApp, Messenger, etc.) y genera tus credenciales (`client_id` / `client_secret`). Las vas a necesitar para [autenticarte](/auth/) y para validar la firma de los webhooks.
3. En la configuración del canal, registra la **URL de webhook** de tu servidor, por ejemplo `https://tuservidor.com/webhooks/konnect`.
4. Guarda los cambios. Konnect-360 empieza a enviar eventos a esa URL apenas el canal queda activo.

Con la URL registrada, tu servidor va a recibir los eventos documentados en [Webhook Canal](/webhooks/webhook-canal/) y [Webhook App](/webhooks/webhook-app/).
