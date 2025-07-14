---
title: Empezamos
description: Esta guía proporciona una descripción general de los plugins y las APIs de nuestra plataforma, ayudándote a comenzar a extender e integrarte con nuestros servicios.
---

Esta guia te ayudara a como empezar a usar nuestros plugins y APIs. Los plugins son herramientas pre-configuradas para facilitar la integración de nuestras funcionalidades en tu aplicacion. 

## Requisitos previos

Bien aqui se describen algunos requisitos minimos para utilizar nuestros servicios.

##### Widget o plugin

Para nuestro widget necesitarás que tu aplicacion o sitio web no tenga ***polyfills*** (son scripts que proveen compatibilidad con navegadores antiguos) que provengan del marco ***vue***.

Bien para agregar nuestro plugin debes copiar y pegar el siguiente codigo.

- En el **index.html** de tu página de inicio, o donde se empieza a ejecutar tu app agrega esta etiqueta.

```html
<div id="your_widget_name"></div>

```

- Luego importa este script en la misma página

```html
<script type="module">
    import kriptonchat from "https://kapi.konnect-360.pe/widget/kriptonchat.es.min.js";

    kriptonchat('your_widget_name',
      {
        pagePresentation: {
          title: 'Atencion al cliente', // string - titulo de presentación
          withWhatsAppButton: true, // boolean - ocultar boton de whatsapp
          withHeaderBot: true, // boolean - ver/ocultar header del bot
        },
        // ...
      }
    );
</script>
```
Aqui puedes puedes ver más detalle [acerca del widget](/guides/widgetbot/).


##### Apis & Webhooks

Para nuestras apis y webhooks es necesario obtener unas credenciales en **CANALES** de konnect-360, esto te permitira la ejecución de las operaciones solicitadas.


Aqui puedes puedes ver más detalle [acerca de las Apis](/auth/).

Aqui puedes puedes ver más detalle [acerca de los Webhook](/auth/).


