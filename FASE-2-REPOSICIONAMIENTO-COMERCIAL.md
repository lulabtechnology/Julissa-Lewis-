# Fase 2 - Reposicionamiento comercial de la web

Fecha: 31 de agosto de 2026
Base: ZIP posterior a Fase 1
Dominio principal: https://jjlindependentaccounting.com

## Revision previa de Fase 1

Se verifico sobre el ZIP entregado por el usuario, no sobre la version visible en navegador. Estan presentes: rutas /es y /en, canonical/hreflang, redireccion de dominios, sitemap, robots, manifest, JSON-LD y llms.txt.

Pendiente externo: GA4, Search Console y/o Clarity no se insertan porque el proyecto no contiene IDs/credenciales de medicion. No se inventaron identificadores.

## Objetivo

Cambiar la jerarquia comercial del sitio sin rehacer su identidad visual. La web deja de presentar todos los servicios con el mismo peso y pasa a posicionar dos especialidades principales:

1. Contabilidad y soporte financiero para Multinacionales / Empresas SEM.
2. Outsourcing de Planilla / Payroll, SIPE y cumplimiento laboral en Panama.

Los demas servicios permanecen como capacidades complementarias y oportunidades de upsell.

## Cambios implementados

- Hero reposicionado alrededor de empresas que operan y crecen en Panama.
- CTAs principales separados para Multinacionales & SEM y Payroll & cumplimiento.
- Nueva seccion `PriorityServices` con las dos especialidades principales y audiencias objetivo.
- Navegacion reorganizada: Especialidades -> Equipo -> Soluciones -> Conversion.
- Servicios/planes anteriores bajan de jerarquia y se presentan como soporte complementario.
- Formulario comercial agrega un paso obligatorio para identificar el servicio principal de interes.
- API de contacto incluye el servicio principal en el correo recibido por JJL.
- Metadata de home actualizada para reforzar las dos entidades de posicionamiento.
- JSON-LD actualizado con dos entidades `Service` principales: Multinational/SEM Accounting y Payroll Outsourcing.
- `llms.txt` actualizado con el nuevo posicionamiento para agentes y motores de IA.
- Se mantiene la arquitectura tecnica de Fase 1: /es, /en, canonical, hreflang, sitemap, robots y dominio principal.

## No corresponde todavia a esta fase

- Crear landings SEO independientes para cada servicio.
- Crear blog o clusters de contenido.
- Atacar Ley 526, Formulario 1119, SIPE, CSS, XIII mes, etc. con URLs independientes.
- Backlinks, PR, LinkedIn o distribucion externa.

Eso corresponde a Fase 3.

## Validacion recomendada despues del despliegue

1. Confirmar que el home abre en /es y /en sin cambios de layout inesperados.
2. Confirmar los anchors de Especialidades, Equipo, Soluciones y Contacto.
3. Enviar una prueba del formulario seleccionando cada especialidad y confirmar que el correo recibido incluye "Servicio principal de interes".
4. Revisar el JSON-LD renderizado y metadata en ambas versiones de idioma.
5. Verificar que sitemap/robots/canonicals de Fase 1 continúan funcionando.
