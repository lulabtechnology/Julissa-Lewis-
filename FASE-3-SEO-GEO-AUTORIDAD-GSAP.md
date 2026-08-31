# Fase 3 — SEO/GEO, autoridad temática y experiencia GSAP

Fecha: 31 de agosto de 2026
Base: ZIP posterior al hotfix de Fase 2.
Dominio canónico: https://jjlindependentaccounting.com

## Objetivo

Convertir las dos especialidades definidas en Fase 2 en activos SEO/GEO independientes, construir los primeros clusters de autoridad temática y elevar la experiencia visual sin esconder contenido detrás de JavaScript ni sacrificar accesibilidad.

## 1. Landings comerciales principales

Se agregaron páginas indexables independientes en ambos idiomas:

### SEM / Multinacionales
- /es/contabilidad-empresas-sem-panama
- /en/sem-accounting-services-panama

### Payroll
- /es/outsourcing-planilla-panama
- /en/payroll-outsourcing-panama

Cada landing contiene:
- H1 específico por intención de búsqueda.
- Metadata propia.
- canonical y hreflang.
- Schema Service.
- FAQ visible + FAQPage.
- Breadcrumbs.
- contenido de alcance, proceso, controles y público ideal.
- fuentes oficiales.
- enlaces al cluster relacionado.
- CTA a evaluación y WhatsApp.

## 2. Centro de recursos SEO/GEO

Se agregaron:
- /es/recursos
- /en/resources

El hub conecta los dos clusters y permite que Google y sistemas de IA comprendan la relación entre el servicio principal y los contenidos que demuestran experiencia temática.

## 3. Cluster SEM / Multinacionales

Español:
- /es/que-es-empresa-sem-panama
- /es/formulario-1119-sem-panama
- /es/ley-526-sustancia-economica-panama
- /es/renta-fuente-extranjera-panama

English:
- /en/what-is-sem-company-panama
- /en/form-1119-sem-panama
- /en/panama-law-526-economic-substance
- /en/foreign-source-income-panama

Temas cubiertos:
- régimen SEM y actividades publicadas por MICI.
- contabilidad del grupo empresarial y soporte financiero.
- Formulario 1119 de Retenciones SEM de DGI.
- Ley 526 de 28 de mayo de 2026.
- preparación contable/documental frente a reglas de sustancia económica aplicables desde el período fiscal 2027.
- trazabilidad de operaciones con renta de fuente extranjera.

Nota: el contenido diferencia expresamente el soporte contable de la asesoría legal o fiscal especializada.

## 4. Cluster Payroll / SIPE / CSS

Español:
- /es/sipe-panama-guia-empleadores
- /es/cuota-patronal-css-panama-2026-2027
- /es/decimo-tercer-mes-panama-empresas

English:
- /en/sipe-panama-employer-guide
- /en/panama-employer-social-security-contributions
- /en/thirteenth-month-panama-employers

Temas cubiertos:
- SIPE para empleadores.
- planilla mensual y novedades.
- controles operativos de payroll.
- tasas patronales CSS publicadas para 2026–2029.
- preparación operativa del décimo tercer mes.

## 5. Calculadora interactiva CSS

Se agregó una calculadora de cuota patronal CSS a la landing de payroll y al artículo de tasas patronales.

Muestra el efecto estimado de:
- 13.25% hasta febrero de 2027.
- 14.25% desde marzo de 2027.
- 15.25% desde marzo de 2029.

La herramienta indica de forma visible que calcula únicamente la cuota patronal CSS y no el costo laboral total.

## 6. GSAP + ScrollTrigger

Dependencia agregada:
- gsap ^3.15.0

Implementación:
- carga dinámica en cliente.
- ScrollTrigger registrado explícitamente.
- reveal progresivo de contenido.
- stagger de cards.
- parallax ligero en fondos decorativos.
- no se usa scroll-jacking.
- no se oculta contenido SEO en JavaScript.
- respeta prefers-reduced-motion.

## 7. Enlazado interno

Se modificó el home para:
- enlazar directamente a las dos landings principales.
- agregar un bloque de recursos destacados equilibrado entre SEM y Payroll.
- convertir el navbar en una navegación orientada a las dos especialidades y al Knowledge Hub.

Las páginas de artículo enlazan al servicio comercial correspondiente y a otros artículos del mismo cluster.

## 8. Cambio de idioma mejorado

En las páginas nuevas, ES/EN dirige a la traducción equivalente de la URL actual, no al home genérico.

## 9. Schema / GEO

Las páginas nuevas incluyen, según corresponda:
- Organization / AccountingService.
- Person.
- Service.
- Article.
- FAQPage.
- BreadcrumbList.
- CollectionPage.
- ItemList.

Se mantienen IDs de entidad consistentes con Fases 1 y 2.

## 10. Sitemap y llms.txt

- sitemap.xml incorpora todas las páginas nuevas y sus alternates ES/EN.
- llms.txt ahora expone servicios principales, Knowledge Hub, clusters, personas y URLs directas de conocimiento.

## 11. Fuentes públicas utilizadas

Fuentes principales:
- MICI / Dirección de Sedes de Empresas Multinacionales.
- Dirección General de Ingresos — Formulario 1119.
- Caja de Seguro Social — SIPE y cuotas patronales.
- Ley 526 de 28 de mayo de 2026 / Gaceta Oficial.

Los enlaces a estas fuentes aparecen también dentro de las páginas de conocimiento correspondientes.

## 12. Validación realizada

- 25 archivos TS/TSX revisados con el compilador TypeScript en modo de transpilación: 0 errores de sintaxis.
- 18 páginas de contenido validadas programáticamente.
- 9 páginas ES y 9 páginas EN.
- alternates ES/EN simétricos: OK.
- slugs duplicados: 0.
- enlaces relacionados inexistentes: 0.
- revisión estática de sitemap y rutas: OK.

No fue posible completar `npm install` dentro del entorno de trabajo por timeout de red. Por esa razón no se afirma que se ejecutó un `next build` real aquí. Vercel deberá instalar la nueva dependencia `gsap` antes de ejecutar su build normal.

## 13. Qué no se cambió

- No se reemplazó la identidad visual existente.
- No se eliminó la arquitectura /es y /en de Fase 1.
- No se revirtió la estrategia comercial de Fase 2.
- No se inventaron IDs de GA4, Search Console o Clarity.
- No se agregaron credenciales fiscales, legales o profesionales que no estuvieran ya comunicadas por la web.

## Después del deployment

Revisar en vivo:
1. build de Vercel.
2. /es/contabilidad-empresas-sem-panama
3. /en/sem-accounting-services-panama
4. /es/outsourcing-planilla-panama
5. /en/payroll-outsourcing-panama
6. /es/recursos y /en/resources
7. calculadora CSS.
8. sitemap.xml.
9. canonical/hreflang de una landing y un artículo.
10. JSON-LD en Rich Results Test / Schema Validator.
11. solicitar indexación de las páginas prioritarias en Search Console.
