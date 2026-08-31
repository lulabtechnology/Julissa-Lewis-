# JJL Independent Accounting

Sitio bilingüe ES/EN de JJL Independent Accounting construido con Next.js 14 App Router, TypeScript, Tailwind CSS y GSAP.

## Producción

- Dominio principal: https://jjlindependentaccounting.com
- Español: `/es`
- Inglés: `/en`
- Sitemap XML bilingüe: `/sitemap.xml`
- Robots: `/robots.txt`
- LLM/GEO: `/llms.txt` y `/llm.txt`
- RSS: `/es/feed.xml` y `/en/feed.xml`

## Arquitectura de rutas

La aplicación usa un único nombre de segmento dinámico por nivel, requisito del router de Next.js:

- `app/[lang]/[slug]/page.tsx`: servicios, artículos y centro de recursos.
- `app/[lang]/[slug]/[subslug]/page.tsx`: perfiles, estándares, prensa y fuentes.

No debe volver a crearse `app/[lang]/[section]/[slug]`, ya que entra en conflicto con `[lang]/[slug]` y produce el error `You cannot use different slug names for the same dynamic path`.

## Branding

- Logo vectorial: `public/brand/jjl-logo.svg`
- Isotipo: `public/brand/jjl-mark.svg`
- Favicon: `app/favicon.ico`
- App icon: `app/icon.svg`
- Apple icon: `app/apple-icon.png`
- Social share: `public/social/`

## SEO / GEO

El proyecto incluye metadata bilingüe, canonicals, hreflang, sitemap localizado, robots, JSON-LD para LocalBusiness/AccountingService, Service, Person, Article, FAQPage y BreadcrumbList, páginas de fuentes, política editorial y llms.txt.

## Desarrollo

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
```
