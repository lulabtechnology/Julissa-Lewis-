# Fase 1 - SEO + GEO tecnico

Fecha: 31 de agosto de 2026
Dominio principal: https://jjlindependentaccounting.com
Dominio legado: https://julissalewis.com

## Implementado

- Dominio principal unificado en `jjlindependentaccounting.com`.
- Redireccion permanente 308 desde `julissalewis.com`, `www.julissalewis.com` y `www.jjlindependentaccounting.com` al dominio principal.
- La raiz `/` redirige permanentemente a `/es`.
- Version espanola indexable en `/es` y version inglesa indexable en `/en`.
- Canonical independiente para cada idioma.
- `hreflang` ES/EN y `x-default`.
- Metadata SEO bilingue, Open Graph y Twitter Cards.
- `robots.txt` generado por Next.js.
- `sitemap.xml` bilingue con alternates.
- `manifest.webmanifest`.
- Datos estructurados JSON-LD para JJL Independent Accounting, Julissa Lewis, Jissbeth Lewis, WebSite, WebPage y servicios actuales.
- `llms.txt` como archivo complementario y experimental para agentes/LLM; no reemplaza sitemap, schema ni SEO tradicional.
- Cabeceras tecnicas de seguridad y privacidad basicas.
- Optimizacion de formatos de imagen de Next.js para AVIF/WebP.
- Respeto a `prefers-reduced-motion` para accesibilidad.
- Logo corregido a PNG real sin alterar el diseno visible.
- Formularios y correos internos actualizados para identificar el sitio principal como `jjlindependentaccounting.com`.

## No se cambio en esta fase

- Linea visual principal.
- Estructura comercial de los planes.
- Reposicionamiento fuerte del home hacia Payroll / SEM.
- Nuevas landings de servicios.
- Cluster de contenidos o blog SEO.

Eso corresponde a las fases siguientes.

## Despliegue

Este ZIP es incremental: copiar/mezclar su contenido sobre la version actual del proyecto y reemplazar los archivos existentes que coincidan.

Despues de desplegar, verificar:

1. `https://jjlindependentaccounting.com/` -> `/es`.
2. `https://jjlindependentaccounting.com/es` carga en espanol.
3. `https://jjlindependentaccounting.com/en` carga en ingles.
4. `https://julissalewis.com/` redirige a `https://jjlindependentaccounting.com/es`.
5. `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` y `/llms.txt` responden 200.
6. En Google Search Console, enviar el nuevo sitemap del dominio principal despues del despliegue.
