# Portafolio · Nordic Monolith

Adaptación estática del diseño de Stitch para GitHub Pages. Presentación personalizada con la experiencia, formación y habilidades de Mathias Kneis; proyectos y diario están vacíos. Sitio: https://mkneis.github.io/portafolio/

## Archivos

- `referencias-stitch/`: copia completa de los HTML, capturas y guía de diseño originales. Se conserva como contexto; no se publica.
- `dist/`: sitio listo para publicar, con presentación, proyectos y blog, estilos e imagen local.
- `scripts/prepare.mjs`: adapta la presentación de Stitch y genera los estados vacíos.
- `scripts/profile.mjs`: contenido personal y adaptación basada en el CV de 2026.
- `styles/input.css` y `dist/assets/adjustments.css`: estilos base y ajustes de navegación, accesibilidad y pantallas pequeñas.
- `.github/workflows/pages.yml`: publicación de `dist/` al subir cambios a `main`.

## Vista local

Con Node.js instalado: `node scripts/serve.mjs`. Abrir http://127.0.0.1:4173.

Para regenerar: `npm install` y `npm run build` (o los equivalentes de pnpm). Los archivos de `dist/` ya están generados; GitHub Pages no necesita instalar dependencias. Después de regenerar, incluir los cambios de `dist/` en el commit.

## Publicar más adelante

1. Crear un repositorio en GitHub y subir este proyecto a la rama `main`.
2. En **Settings → Pages → Build and deployment**, seleccionar **GitHub Actions**.
3. Ejecutar el flujo de publicación o subir un nuevo commit a `main`.

El flujo publica únicamente `dist/`. Los enlaces relativos permiten alojarlo bajo `usuario.github.io/repositorio/`.

Documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Pendiente de personalizar

La presentación usa el CV de 2026 para el perfil, experiencia, formación, certificaciones, herramientas e idiomas. La foto de muestra se sustituyó por un monograma MK. GitHub, LinkedIn y correo están configurados. El teléfono y el PDF original no están incluidos en el repositorio ni publicados. El botón de CV lleva a la experiencia dentro de la página. Los proyectos personales del CV no se publicaron: proyectos y blog permanecen vacíos por decisión del propietario.

Las fuentes Inter y Material Symbols se cargan de Google Fonts; el resto de estilos y la imagen del sitio se sirven localmente. Los ejemplos de proyectos y artículos solo se conservan en la carpeta de referencia.
