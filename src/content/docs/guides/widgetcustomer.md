---
title: Widget Chat Cliente
description: Esta guía proporciona una descripción de nuestro widget que se implementa en su front-end.
---

Este es un complemento de nuestro widget que requiere una clave publica de autenticación.

```html
<div id="your_widget_chat_name"></div>
```

Luego importa este script en la misma página, con el **_id_** correspondiente, e importar la función como se muestra a continuación.

Dado que es un complemento su configuración va por separado.

```html
<script type="module">
  import  { konnectchatdata } from "https://dev.kapi.konnect-360.pe/widget/konnectchat.es.min.js";
  // ...

  konnectchatdata("your_widget_chat_name", {
    publicKey: 'xxxx-yyyy-xxxx-yyyy-xxxx-yyyy', // esta clave publica se genera en la plataforma principal
    apiQuery: {
        channel: 'whatsapp' // 'whatsapp' | 'messenger' | 'instagram' | 'widget'
        identifier: '999888777' // email | id | nro telefono
    },
    theme: {
      // colors - rgb(35, 115, 255) solo poner los valores
      colors: {
        "primary-color": "35, 115, 255", // color principal
        "primary-sub-color": "35, 115, 255", // color principal un poco opaco {a criterio}
        "secondary-color": "86, 148, 255", // color secundario
        "secondary-sub-color": "35, 115, 255", // color secundario  un poco opaco {a criterio}
        /*
              (colores principales)
              primary-color: 92, 6, 140;
              primary-sub-color: 104, 7, 157;
              secondary-color: 127, 8, 191;
              secondary-sub-color: 150, 10, 225;

              whatsapp-color: 34, 197, 94;
              whatsapp-sub-color: 60, 215, 80;

              (colores base)
              whitemain: 255, 255, 255;
              whitemain-sub: 248, 251, 255;
              blackmain: 37, 37, 38;
              blackmain-sub: 57, 57, 57;
              graymain: 184, 186, 188;
              graymain-sub: 230, 231, 234;
              */
      },
      // modo oscuro
      darkMode: false,
    },
    // tamaño del {widget}
    // width: '40rem',
    // height: '40rem'
  });
</script>
```
