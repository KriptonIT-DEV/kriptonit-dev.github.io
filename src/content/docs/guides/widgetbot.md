---
title: Widget Chat Bot
description: Esta guía proporciona una descripción de nuestro widget que se implementa en su front-end.
---


El widget se puede auto insertar en su aplicacion web al agregar solo el siguiente script.


```html
<!-- WIDGET === AUTO EJECUTABLE -->
<script
  type="module"
  src="https://dev.kapi.konnect-360.pe/widget/konnectchat.es.min.js"
></script>
```
Otra forma es especificando un ***id*** en su página html como ya se mencionó anteriormente.

```html
<div id="your_widget_name"></div>
```

Adicionalmente al renderizar por un ***id*** es importante añadir el font para el widget en el head de tu página.

```html
  <style>
    @font-face {
      font-family: 'Comfortaa';  /* ¡Nombre de la fuente (Comfortaa) importante ! */
      src: url('your_font') format('woff2');
      font-weight: normal;
      font-style: normal;
    }
  </style>
```

Luego importa este script en la misma página, aquí se especifica más a detalle de las opciones disponibles, que solo se pueden configurar cuando el widget es renderizado por un ***id***.

```html
<script type="module">
  import { konnectchat } from "https://dev.kapi.konnect-360.pe/widget/konnectchat.es.min.js";

  konnectchat("your_widget_name", {
    pagePresentation: {
      title: "Atencion al cliente", // string - titulo de presentación
      withWhatsAppButton: true, // boolean - ocultar boton de whatsapp
    },
    pageBot: {
      title: "Agente Kripton", // string - titulo en página bot
      botName: "Bot", // string - nombre del bot
      avatar: {
        // source - {archivo de local} - {url} - {emojis} - {string} extensiones soportadas ["jpg", "jpeg", "png", "gif", "svg"]
        /**
         * ejemplos
         * source: "./../public/file.xyz",
         * source: "https://i.giphy.com/Vi0Ws3t4JSLOgdkaBq.webp",
         * source: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>`,
         * source: '🤗🤗',
         */
        source: "./../../test/brand-twitter.svg",
      },
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
Aqui puedes puedes ver más detalle [acerca del widget chat cliente](/guides/widgetcustomer/).
