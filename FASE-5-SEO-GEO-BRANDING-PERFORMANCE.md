# Fase 5 — SEO/GEO, branding, rendimiento y cierre de Fase 4

Fecha: 2026-08-31

## Error de Vercel corregido

Se eliminó físicamente la ruta conflictiva `app/[lang]/[section]/[slug]/page.tsx`.
La estructura válida es:

- `app/[lang]/[slug]/page.tsx`
- `app/[lang]/[slug]/[subslug]/page.tsx`

Las URLs públicas no cambian.

## Branding

- Nuevo logo JJL en SVG transparente, inspirado en el símbolo original y con mayor presencia.
- Nuevo isotipo SVG.
- Favicon ICO generado desde el nuevo isotipo.
- Icono SVG para App Router.
- Apple icon PNG.
- Header actualizado al nuevo logo.
- Footer reforzado con isotipo JJL.
- Footer: “Diseñado por Lulab Technology” enlazado a https://lulabtech.com/.

## SEO técnico

- Títulos únicos auditados.
- Meta descriptions únicas y en longitudes razonables.
- Canonicals y hreflang ES/EN conservados.
- H1 único por plantilla/página.
- Sitemap XML manual y bilingüe, sin duplicados, con `xhtml:link` ES/EN/x-default. Se evita depender del generador localizado de Next 14.2.3.
- Robots mejorado y acceso explícito para crawlers de búsqueda/IA.
- `/llms.txt` ampliado y alias `/llm.txt` agregado.
- Enlaces internos reforzados desde footer, recursos, artículos y páginas de autoridad.
- Página bilingüe de fuentes oficiales agregada.
- LocalBusiness + AccountingService + ProfessionalService en el grafo de entidad.
- Directorio de fuentes enlaza MICI, SEM, DGI, CSS, Gaceta Oficial y Órgano Judicial.

## Social y assets

- OG default 1200×630.
- OG SEM 1200×630.
- OG Payroll 1200×630.
- OG Julissa Lewis 1200×630.
- OG Jissbeth Lewis 1200×630.
- WhatsApp usa su icono oficial visual en lugar del teléfono genérico.
- LinkedIn usa icono de LinkedIn.
- Correo usa icono de correo.
- Todas las instancias de `next/image` tienen `alt` (decorativas usan alt vacío).

## 404

Nueva página 404 responsive usando los colores de JJL, logo SVG, rutas a inicio, recursos, SEM, Payroll y sitio en inglés. Se marca `noindex`.

## Rendimiento

- `productionBrowserSourceMaps: false` explícito.
- `removeConsole` en producción.
- Brotli/Gzip gestionado por plataforma mediante `compress: true`.
- AVIF/WebP habilitado en Next Image.
- GSAP sigue cargándose mediante import dinámico y ahora no se descarga si la página no contiene targets de animación.
- ContactSection y calculadora se cargan mediante componentes dinámicos.
- Assets estáticos de branding/social tienen headers de cache.
- Imágenes antiguas/no utilizadas retiradas del proyecto.
- Middleware evita ejecutarse sobre la mayoría de assets estáticos/metadata.

## QA realizado

- 0 conflictos de rutas dinámicas detectados.
- 34 URLs indexables únicas en el mapa de contenido actual.
- 34 URLs únicas generadas por sitemap.
- 34/34 con alternates ES/EN y x-default.
- 18 páginas de contenido + 12 páginas de autoridad verificadas.
- 0 enlaces alternates/related rotos en los datos del sitio.
- 20/20 títulos SEO de Fase 3 únicos.
- 12/12 títulos SEO de autoridad únicos.
- 20/20 descriptions de Fase 3 únicas.
- 12/12 descriptions de autoridad únicas.
- Auditoría de `next/image`: sin imágenes sin atributo alt.
- Todos los archivos TS/TSX pasan transpilación sintáctica con TypeScript.

## Build local

El entorno de edición no puede resolver `registry.npmjs.org`, por lo que no es posible instalar `node_modules` y ejecutar `next build` localmente. El conflicto que detenía Vercel fue corregido a nivel de árbol de rutas y validado estáticamente. Vercel sí dispone de conectividad para instalar dependencias durante el deployment.
