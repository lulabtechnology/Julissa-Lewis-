# JJL Fase 4 - Hotfix de rutas dinamicas Next.js

## Error corregido

Vercel mostraba:

`You cannot use different slug names for the same dynamic path ('section' !== 'slug').`

La causa era tener al mismo tiempo:

- `app/[lang]/[slug]/page.tsx`
- `app/[lang]/[section]/[slug]/page.tsx`

Next.js 14 no permite que el mismo segmento dinamico bajo `[lang]` use nombres distintos (`slug` y `section`).

## Solucion aplicada

La ruta de Fase 4 se mueve a:

`app/[lang]/[slug]/[subslug]/page.tsx`

Esto NO cambia las URLs publicas. Por ejemplo:

- `/es/equipo/julissa-lewis`
- `/es/estandares/politica-editorial`
- `/en/team/julissa-lewis`
- `/en/press/media-center`

siguen exactamente iguales.

## Aplicacion recomendada en Git

Desde la raiz del proyecto:

```bash
git apply JJL-FASE-4-HOTFIX-RUTAS.patch
```

El patch hace el movimiento y las modificaciones de parametros en una sola operacion.

## Aplicacion manual

Si no usas `git apply`:

1. BORRA este archivo/ruta anterior:
   `app/[lang]/[section]/[slug]/page.tsx`
2. Si queda vacia, borra tambien la carpeta:
   `app/[lang]/[section]`
3. Copia el archivo incluido en este ZIP a:
   `app/[lang]/[slug]/[subslug]/page.tsx`
4. Vuelve a desplegar en Vercel.

IMPORTANTE: copiar el archivo nuevo sin borrar el viejo NO corrige el error, porque Next seguira detectando ambos segmentos dinamicos.

## QA realizado

- Patch probado sobre una copia limpia del ZIP `Julissa-Lewis--main (8).zip`.
- Ruta vieja despues del patch: inexistente.
- Ruta nueva despues del patch: presente.
- Conflictos entre segmentos dinamicos hermanos: 0.
- Referencias restantes a `params.section` en `app`, `components` y `lib`: 0.
- No se cambiaron URLs canonicas, hreflang, sitemap, contenido, diseno, GSAP ni schema de Fases 1-4.

El entorno local no pudo completar `npm install` por timeout de red, por lo que el build final debe validarse en Vercel.
