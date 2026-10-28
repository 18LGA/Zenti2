# ZENTI · Landing page

Abre `index.html` en el navegador (no necesita servidor).

```
zenti/
├── index.html            Estructura de la página (solo HTML)
├── css/                  Estilos, uno por sección (se cargan en este orden)
│   ├── base.css          Variables, tipografía, botones, utilidades
│   ├── header.css        Barra superior, progreso de scroll, botón modo noche
│   ├── hero.css          Portada
│   ├── steps.css         Cómo funciona (3 pasos)
│   ├── segments.css      Para quién es
│   ├── capabilities.css  Capacidades
│   ├── company.css       Qué es ZENTI
│   ├── testimonials.css  Opiniones
│   ├── faq.css           Preguntas frecuentes
│   ├── contact.css       Sección final con el equipo
│   ├── footer.css        Pie de página
│   └── dark-mode.css     Modo noche (siempre al final)
├── js/
│   ├── theme-init.js     Aplica el tema guardado antes de pintar (evita parpadeo)
│   ├── main.js           Iconos, carrusel, FAQ y animaciones de entrada
│   ├── gsap-safety.js    Red de seguridad de animaciones
│   ├── scroll-progress.js  Barra de progreso del scroll
│   └── theme-toggle.js   Botón de modo noche/día
└── assets/img/           Imágenes de la página
```

Imágenes y modo noche:
- Portada: `asistente-de-ia-de-whatsapp-con-mujer.jpg` (día) y `hero-noche.webp` (noche, fondo transparente). `dark-mode.css` intercambia una por otra.
- QR y catálogo (`qr-sin-fondo.webp`, `catalogo-sin-fondo.webp`) tienen fondo transparente: toman el color del panel en ambos modos.
- Si cambias una imagen con fondo claro, exporta también una versión con fondo transparente para el modo noche.

Colores y tamaños globales: `:root` en `css/base.css`.
Colores del modo noche: `html[data-theme="dark"]` en `css/dark-mode.css`.
