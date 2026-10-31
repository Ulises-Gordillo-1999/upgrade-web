# UPGRADE Web: Tasks & Implementation Tracker

## Task 1: Inicialización del proyecto Next.js 16 con App Router, TypeScript, Tailwind CSS v4 y configuración standalone

**Description:** Inicializar el proyecto con Next.js 16, TypeScript en modo estricto, Tailwind CSS v4, Lucide React, y estructurar las carpetas base del proyecto (`src/app`, `src/components`, `src/types`, `src/utils`). Configurar `next.config.ts` con `output: 'standalone'`.

**Acceptance criteria:**
- [x] Proyecto Next.js inicializado y ejecutable con Turbopack.
- [x] TypeScript configurado en modo estricto (`tsconfig.json`).
- [x] `next.config.ts` incluye `output: 'standalone'` y opciones de optimización.
- [x] Dependencias instaladas: `lucide-react`, paquetes de soporte necesarios.

**Verification:**
- [x] Build inicial exitoso: `npm run build`
- [x] Estructura de carpetas verificada.

**Dependencies:** None

**Files likely touched:**
- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`

**Estimated scope:** Medium: 3-5 files

---

## Task 2: Implementación de la arquitectura de Temas (Oscuro/Claro/Sistema) con script anti-flicker y tokens globales

**Description:** Configurar Tailwind CSS v4 con `@custom-variant dark`, implementar el script bloqueante en `<head>` de `src/app/layout.tsx` para evitar FOUC (parpadeo blanco), crear `src/components/theme/ThemeProvider.tsx` y el selector `ThemeToggle.tsx` de 3 estados (Claro, Oscuro, Sistema).

**Acceptance criteria:**
- [x] Cero parpadeo blanco (anti-flicker) al cargar la página en modo oscuro.
- [x] Soporte de 3 modos: Claro, Oscuro y preferencia del Sistema con persistencia en `localStorage`.
- [x] Configuración de `globals.css` con variables CSS para el estilo Enterprise Tech (fondos zinc-950, acentos cian y esmeralda, grid blueprint).
- [x] `viewport` exportado en `layout.tsx` con soporte para `themeColor` claro y oscuro.

**Verification:**
- [x] Verificación de script inline en el HTML generado.
- [x] `npm run build` sin errores.

**Dependencies:** Task 1

**Files likely touched:**
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/components/theme/ThemeProvider.tsx`
- `src/components/ui/ThemeToggle.tsx`

**Estimated scope:** Medium: 4 files

---

## Task 3: Estructura de Layout responsivo, Sticky Navbar glassmorphic y Off-Canvas Mobile Drawer

**Description:** Desarrollar el encabezado de navegación fijo con efecto glassmorphic (`backdrop-blur-md`), enlaces a las secciones principales de UPGRADE, botón de acción rápida a WhatsApp, `ThemeToggle` integrado, y navegación móvil off-canvas con backdrop y bloqueo de scroll de página al estar activo.

**Acceptance criteria:**
- [x] Navbar fijo con degradado sutil de cristal, logotipo de UPGRADE y menú de enlaces rápidos.
- [x] Menú móvil hamburguesa con drawer off-canvas accesible (cierre con tecla Esc, backdrop click y botón X).
- [x] Bloqueo de scroll en `document.body` cuando el drawer móvil está abierto.
- [x] Touch targets $\ge 44$px en botones y enlaces interactivos.

**Verification:**
- [x] Navegación interactiva verificable en viewport desktop y móvil.
- [x] `npm run build` sin errores.

**Dependencies:** Task 2

**Files likely touched:**
- `src/components/layout/Navbar.tsx`
- `src/components/layout/MobileNav.tsx`
- `src/components/layout/Header.tsx`

**Estimated scope:** Small: 3 files

---

## Checkpoint: Foundation
- [x] Build de producción compila limpiamente (`npm run build`).
- [x] Cero parpadeo visual entre recargas de página.
- [x] Layout adaptativo y navegación móvil operativa.
- [x] Revisión de arquitectura base antes de avanzar a los pilares de contenido.

---

## Task 4: Hero Section de alto impacto con propuesta de valor, badge de disponibilidad y visual tech

**Description:** Construir el Hero corporativo con la propuesta de valor: *"Infraestructura tecnológica robusta y software a medida para empresas que no se detienen"*, badge animado de disponibilidad inmediata en Catamarca y región NOA, botones de acción rápida ("Explorar Soluciones" y "Contactar por WhatsApp"), y visualización gráfica inspirada en topologías de red/nodos con brillo ambiental.

**Acceptance criteria:**
- [x] Título, subtítulo y badges con jerarquía Enterprise Tech nítida y tipografía de alto impacto.
- [x] Botones CTA interactivos: enlace suave a soluciones y enlace directo a WhatsApp.
- [x] Métricas clave destacadas (+50 empresas protegidas, 99.9% uptime de red, respuesta técnica < 2hs).
- [x] Fondo con rejilla blueprint tecnológica y halos de luz sutiles (cian y azul eléctrico).

**Verification:**
- [x] Renderizado sin saltos de layout (CLS = 0).
- [x] `npm run build` sin errores.

**Dependencies:** Task 3

**Files likely touched:**
- `src/components/sections/HeroSection.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/Button.tsx`

**Estimated scope:** Small: 3 files

---

## Task 5: Componente Pilar 1 — Infraestructura IT, Cableado Estructurado, Redes Wi-Fi & Seguridad Perimetral

**Description:** Desarrollar la sección destacada para la especialidad activa de UPGRADE: Cableado estructurado (Cat 6 / Fibra Óptica), redes Wi-Fi empresariales de alta densidad (MikroTik, Ubiquiti UniFi), servidores locales, racks y almacenamiento NAS, circuitos cerrados CCTV (Cámaras IP, NVR, monitoreo) y enlaces con redundancia Dual WAN failover.

**Acceptance criteria:**
- [x] Tarjetas interactivas con bordes de cristal, acentos luminosos e iconografía técnica representativa.
- [x] Desglose técnico de especificaciones (normas de cableado, balanceo de carga, retención de grabaciones).
- [x] Botón de llamada a la acción contextual para cotizar infraestructura de red por WhatsApp.

**Verification:**
- [x] Componente totalmente responsivo (cards en móvil, grilla 2/3 columnas en desktop).
- [x] `npm run build` exitoso.

**Dependencies:** Task 4

**Files likely touched:**
- `src/components/sections/InfrastructureSection.tsx`
- `src/data/infrastructureData.ts`

**Estimated scope:** Small: 2 files

---

## Task 6: Componente Pilar 2 — Software Suite Especializada (Barber OS, Gym OS, ERPs) y Modal interactivo "Ver Demo"

**Description:** Construir la sección de productos SaaS sectoriales de UPGRADE destacando **UPGRADE Barber OS** (turnos online, cobro Mercado Pago, control de inventario con cadete propio, PWA con huella), **UPGRADE Gym & Fitness** (socios, cuotas recurrentes, molinetes y métricas) y **Software a Medida / ERPs**. Integrar un modal interactivo mediante React Portals para visualizar la demo interactiva de Barber OS con capturas, flujos y simulación de la experiencia.

**Acceptance criteria:**
- [x] Tarjeta destacada de Barber OS con badge "SaaS Activo", lista de características y botón *"Ver Demo en Vivo"*.
- [x] Tarjeta de Gym & Fitness y Software a Medida con sus respectivas métricas y soluciones.
- [x] Modal interactivo accesible con React Portal (`createPortal(..., document.body)`), bloqueo de scroll, cierre con tecla Escape y clic exterior (`light dismiss`).
- [x] Pestañas interactivas dentro de la demo (Turnero en vivo, Pago Online, PWA Huella, Cadetería).

**Verification:**
- [x] Apertura, navegación entre tabs y cierre correcto del modal de demo.
- [x] `npm run build` sin errores.

**Dependencies:** Task 5

**Files likely touched:**
- `src/components/sections/SoftwareSuitesSection.tsx`
- `src/components/modals/DemoBarberModal.tsx`
- `src/data/softwareData.ts`

**Estimated scope:** Medium: 3 files

---

## Task 7: Componente Pilar 3 — Soporte Técnico Especializado, Mantenimiento Corporativo y Abonos Mensuales

**Description:** Construir la sección de soporte técnico de UPGRADE: Mantenimiento preventivo y correctivo de estaciones de trabajo y notebooks corporativas, diagnóstico avanzado de hardware, optimización y limpieza térmica, y planes de abonos mensuales para empresas y comercios con tiempo de respuesta garantizado (cero tiempos muertos).

**Acceptance criteria:**
- [x] Visualización de servicios de taller y soporte on-site / remoto.
- [x] Comparativa o tabla de planes de Abonos de Mantenimiento (Básico, Empresa Pyme, Corporativo).
- [x] Indicador de SLA y garantía de tiempo de respuesta técnica en Catamarca y región.

**Verification:**
- [x] Diseño responsivo con tarjeta interactiva en móvil y columnas en desktop.
- [x] `npm run build` sin errores.

**Dependencies:** Task 6

**Files likely touched:**
- `src/components/sections/TechnicalSupportSection.tsx`
- `src/data/supportData.ts`

**Estimated scope:** Small: 2 files

---

## Checkpoint: Core Solutions
- [x] Los 3 pilares estrella funcionan y están integrados armoniosamente en la página principal.
- [x] Modal interactivo de Barber OS responde fluidamente con navegación de características.
- [x] Pruebas en diferentes anchos de pantalla (`360px`, `768px`, `1280px`).

---

## Task 8: Showcase de Casos de Éxito / Galería de Trabajos Reales con filtrado interactivo

**Description:** Diseñar una galería interactiva con fichas de proyectos e instalaciones reales ejecutadas por UPGRADE (Racks 42U ordenados, enlaces Wi-Fi de alta densidad, sistemas CCTV de 32 cámaras con IA perimetral, puestos de trabajo optimizados), con filtros por categoría (Infraestructura, Cámaras & Seguridad, Redes & Servidores).

**Acceptance criteria:**
- [x] Filtro por categorías sin recarga de página (estado local React).
- [x] Fichas detalladas con métricas de la obra (tiempo de despliegue, componentes instalados, resultado para el cliente).
- [x] Diseño visual con estética blueprint y acabados Enterprise Tech.

**Verification:**
- [x] El filtrado actualiza la vista de forma inmediata y accesible.
- [x] `npm run build` sin errores.

**Dependencies:** Task 7

**Files likely touched:**
- `src/components/sections/CaseStudiesSection.tsx`
- `src/data/caseStudiesData.ts`

**Estimated scope:** Small: 2 files

---

## Task 9: Cotizador Interactivo y Formulario Rápido con generación dinámica de mensaje para WhatsApp

**Description:** Implementar el Cotizador Express interactivo de UPGRADE: selector intuitivo de servicio (Infraestructura, Cámaras, Barber OS / Gym OS, Software a Medida, Abono Soporte), selector de escala de la empresa (Comercio / Pyme / Industria), campos de contacto rápidos y cálculo de resumen. Botón para generar enlace directo a WhatsApp con mensaje perfectamente redactado y codificado.

**Acceptance criteria:**
- [x] Selector interactivo de opciones con feedback visual inmediato al seleccionar.
- [x] Validación de campos antes del envío (`:user-valid` / react state).
- [x] Generación automática del mensaje estructurado para WhatsApp con codificación `encodeURIComponent`.
- [x] Acceso directo a WhatsApp Web o App al hacer clic en "Solicitar Cotización por WhatsApp".
- [x] Botón alternativo para agendar llamada / reunión de diagnóstico sin costo.

**Verification:**
- [x] Generación correcta de URLs de WhatsApp (`https://wa.me/...`).
- [x] Campos de formulario con tamaño de fuente $\ge 16$px para evitar auto-zoom en iOS.
- [x] `npm run build` sin errores.

**Dependencies:** Task 8

**Files likely touched:**
- `src/components/sections/InteractiveQuoteSection.tsx`
- `src/utils/whatsapp.ts`

**Estimated scope:** Small: 2 files

---

## Task 10: Footer Corporativo completo con datos de contacto, horario, soporte técnico y cobertura regional

**Description:** Desarrollar el pie de página institucional con la información legal de UPGRADE, horarios de atención comercial y guardia de emergencias de red, área de cobertura geográfica (Catamarca capital, Valle Central y región NOA), enlaces de acceso rápido a servicios, accesos directos a WhatsApp/Email y créditos tecnológicos.

**Acceptance criteria:**
- [x] Información clara de contacto y ubicación física / operativa en Catamarca.
- [x] Enlaces ancla rápidos y accesibles que realizan scroll suave a cada sección.
- [x] Badges de seguridad tecnológica y copyright de UPGRADE.

**Verification:**
- [x] Enlaces ancla verificados.
- [x] `npm run build` exitoso.

**Dependencies:** Task 9

**Files likely touched:**
- `src/components/layout/Footer.tsx`
- `src/app/page.tsx`

**Estimated scope:** Small: 2 files

---

## Checkpoint: Conversion & Completion
- [x] El flujo completo de landing page está integrado en `src/app/page.tsx`.
- [x] El cotizador interactivo genera los mensajes de WhatsApp con datos reales.
- [x] Responsive design verificado en móviles de 360px a monitores 2K.

---

## Task 11: Configuración de Dockerfile Multi-Stage (`node:20-alpine`), `.dockerignore` y Endpoint de Healthcheck (`/api/health`)

**Description:** Crear el archivo `Dockerfile` multi-stage optimizado para Coolify v4 y servidores Hetzner, configurando las etapas `deps`, `builder` y `runner` con `output: 'standalone'`. Crear `.dockerignore` para excluir archivos innecesarios. Implementar la ruta API `/api/health` para verificaciones de disponibilidad en Coolify/Traefik.

**Acceptance criteria:**
- [x] `Dockerfile` multi-stage basado en `node:20-alpine` que copia solo `.next/standalone`, `.next/static` y `public`.
- [x] Usuario no-root (`nextjs`) configurado en el contenedor para máxima seguridad perimetral.
- [x] Puerto `3000` expuesto con variable de entorno `PORT=3000` y `HOSTNAME=0.0.0.0`.
- [x] Endpoint `/api/health` responde `{ status: 'ok', timestamp: ... }` con código HTTP 200.
- [x] `.dockerignore` configurado excluyendo `.git`, `node_modules`, `.next`, etc.

**Verification:**
- [x] Verificación de sintaxis de Dockerfile.
- [x] Respuesta HTTP de `/api/health` validada.
- [x] `npm run build` genera la carpeta `.next/standalone`.

**Dependencies:** Task 10

**Files likely touched:**
- `Dockerfile`
- `.dockerignore`
- `src/app/api/health/route.ts`

**Estimated scope:** Small: 3 files

---

## Task 12: Auditoría final de TypeScript, accesibilidad, performance y verificación de build de producción

**Description:** Ejecutar una auditoría integral del código fuente: chequeo de tipos de TypeScript estricto, verificación de variables CSS, validación de etiquetas semánticas y accesibilidad (WCAG AA), optimización de metadatos SEO (`OpenGraph`, `Twitter cards`, `keywords` para Catamarca y NOA en `src/app/layout.tsx`).

**Acceptance criteria:**
- [x] Compilación de producción con cero errores y cero advertencias críticas (`npm run build`).
- [x] Metadatos SEO completos y enriquecidos en `src/app/layout.tsx` (título, descripción corporativa, keywords de infraestructura IT, redes, soporte y software).
- [x] Todos los botones e inputs cumplen los requisitos de tamaño táctil ($\ge 44$px) y fuente ($\ge 16$px).

**Verification:**
- [x] Ejecución exitosa de `npm run build`.
- [x] Validación de tipos con `npx tsc --noEmit`.

**Dependencies:** Task 11

**Files likely touched:**
- `src/app/layout.tsx`
- `src/app/page.tsx`

**Estimated scope:** Small: 2 files

---

## Checkpoint: Production Ready
- [x] Todos los checkpoints previos superados.
- [x] Aplicación lista para despliegue directo en Coolify v4 sobre VPS Hetzner.

---

## Task 13: Generación de Sitemap dinámico (`src/app/sitemap.ts`) y Robots (`src/app/robots.ts`)

**Description:** Crear las rutas de convención de Next.js App Router `src/app/sitemap.ts` y `src/app/robots.ts` para generar automáticamente `/sitemap.xml` y `/robots.txt`. Vincular la URL canónica `https://upgrade-informatica.com`, prioridades, frecuencias de actualización y reglas de rastreo para bots de búsqueda.

**Acceptance criteria:**
- [x] `sitemap.ts` exporta la función por defecto que retorna el array de URLs del sitio con fecha actualizada, `changeFrequency: 'weekly'` y `priority: 1.0`.
- [x] `robots.ts` permite indexación general (`allow: '/'`), restringe rutas internas (`disallow: '/api/'`) e incluye la referencia directa a `https://upgrade-informatica.com/sitemap.xml`.
- [x] Ambos endpoints son generados estáticamente por Next.js en tiempo de build.

**Verification:**
- [x] Compilación exitosa de `/sitemap.xml` y `/robots.txt` con `npm run build`.

**Dependencies:** Task 12

**Files likely touched:**
- `src/app/sitemap.ts`
- `src/app/robots.ts`

**Estimated scope:** Small: 2 files

---

## Task 14: Implementación de Datos Estructurados JSON-LD (Schema.org) para LocalBusiness & Rich Results

**Description:** Crear el componente de datos estructurados Schema.org (`LocalBusiness` / `ProfessionalService`) para Google Knowledge Graph y Google Maps/Local Pack. Incluir datos de la empresa (UPGRADE Informática y Seguridad), teléfonos de contacto de Ulises y Gabriel, geo-coordenadas de Catamarca (-28.4696, -65.7852), horarios de atención, guardia 24/7 y catálogo de servicios detallado (`hasOfferCatalog`).

**Acceptance criteria:**
- [x] Componente `JsonLd` implementado con tipado TypeScript y serialización JSON válida.
- [x] Esquema `ProfessionalService` con atributos obligatorios de Google (nombre, imagen, teléfono, dirección, coordenadas, horario, catálogo de servicios).
- [x] Inyección en el `<head>` de `src/app/layout.tsx` sin impactar el rendimiento de hidratación.

**Verification:**
- [x] Validación de la estructura JSON en build y chequeo de sintaxis.

**Dependencies:** Task 13

**Files likely touched:**
- `src/components/seo/JsonLd.tsx`
- `src/app/layout.tsx`

**Estimated scope:** Small: 2 files

---

## Task 15: Optimización de Geo-Metadatos de Catamarca/NOA y Verificación de Indexabilidad

**Description:** Configurar en `src/app/layout.tsx` las metaetiquetas geográficas regionales (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) para potenciar el SEO local en búsquedas orgánicas desde Catamarca y provincias del NOA. Ejecutar build final y preparar instrucciones de alta en Google Search Console.

**Acceptance criteria:**
- [x] Metaetiquetas geográficas integradas en los metadatos de Next.js.
- [x] `npm run build` compila con 0 errores y genera las rutas estáticas de SEO.
- [x] Commit y push sincronizado con el repositorio GitHub.

**Verification:**
- [x] `npx tsc --noEmit` sin errores.
- [x] `npm run build` genera `/sitemap.xml` y `/robots.txt`.

**Dependencies:** Task 14

**Files likely touched:**
- `src/app/layout.tsx`

**Estimated scope:** Small: 1 file

---

## Checkpoint: SEO & Google Indexation Ready
- [x] `/sitemap.xml` y `/robots.txt` compilados y accesibles.
- [x] JSON-LD estructurado presente en el HTML generado.
- [x] Código desplegado y listo para vincular en Google Search Console.

