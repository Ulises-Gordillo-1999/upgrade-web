# Implementation Plan: UPGRADE Corporate Web & Commercial Platform

## Overview
Construcción desde cero del sitio web oficial corporativo y comercial de **UPGRADE** (Tecnología, Infraestructura IT y Soluciones de Software). Se trata de una landing page de alto impacto, ultra rápida, responsiva (mobile-first), con estética *Enterprise Tech / Dark Modern* (inspirada en Vercel, Linear y Cloudflare), optimizada para conversión directa a WhatsApp y agenda de reuniones técnicas, preparada para ser desplegada en contenedor Docker standalone sobre Hetzner Cloud con Coolify v4.

---

## Architecture Decisions

### 1. Framework & Core Stack
- **Next.js 16+ con App Router y Turbopack**: Renderizado rápido con React Server Components para el contenido estático y Client Components estrictamente delimitados para la interactividad (cotizador interactivo, modal de demo, drawer móvil, theme toggle).
- **TypeScript 5 (Strict Mode)**: Sin uso de `any`, tipado estricto en todos los modelos de datos, servicios, cotizaciones y componentes.
- **Tailwind CSS v4**: Utilizando `@import "tailwindcss";` y `@custom-variant dark (&:where(.dark, .dark *));`.
- **Lucide React Icons**: Iconografía moderna, consistente y liviana para el ecosistema tecnológico e industrial.

### 2. Estética Visual & Design Tokens (Enterprise Tech)
- **Fondo base**: `bg-zinc-950` / `bg-[#090a0f]` con degradados radiales sutiles y blueprint tech grid de fondo.
- **Bordes y vidrio**: `border-zinc-800/80` con soporte `backdrop-blur-md` y micro-bordes con acentos de gradiente.
- **Acentos lumínicos**: Cian eléctrico (`#00f0ff` / `#06b6d4`), Azul tecnológico (`#2563eb` / `#3b82f6`) y Verde Esmeralda operativo (`#10b981`).
- **Sistema de Temas (Claro, Oscuro y Sistema)**:
  - Script bloqueante anti-flicker inline en `<head>` en `src/app/layout.tsx`.
  - Proveedor `ThemeProvider` de React 19 y selector accesible `ThemeToggle` de 3 estados.
  - Modo oscuro por defecto pero 100% accesible y probado en modo claro.

### 3. Ergonomía Móvil & Accesibilidad (Mobile-First)
- **Unidades de alto dinámico**: `min-h-dvh` en lugar de `100vh` para evitar cortes en barras de navegación de Safari/Chrome móvil.
- **Navegación adaptativa**: Navbar fijo con efecto glassmorphism en desktop + Mobile Topbar con Off-Canvas Drawer desacoplado con bloqueo de scroll.
- **Targets táctiles**: Mínimo `44px` de alto/ancho en todos los botones y enlaces interactivos.
- **Inputs táctiles**: Tamaño mínimo de fuente de `16px` (`text-base`) para evitar el zoom accidental de iOS.
- **Modales con React Portals**: Modal de demo interactiva inyectado en `document.body` con light dismiss, tecla `Escape` y scroll interno.

### 4. Motor de Conversión & Cotizador Interactivo
- **Selector de servicios multinivel**: Infraestructura IT & Redes, Cámaras CCTV & Seguridad, UPGRADE Barber OS, UPGRADE Gym OS, Software a Medida, Abono de Mantenimiento Corporativo.
- **Calculador de alcance**: Tamaño de empresa / puestos / requerimientos técnicos.
- **Generador de enlace WhatsApp**: Construcción de mensaje enriquecido con codificación URI listo para enviar con 1 click a WhatsApp comercial.

### 5. Contenerización para Coolify v4 + Hetzner Cloud
- **Dockerfile Multi-Stage**: 3 etapas (`deps`, `builder`, `runner`) basadas en `node:20-alpine`.
- **Modo Standalone**: `output: 'standalone'` en `next.config.ts` copiando solo los assets necesarios (`.next/standalone`, `.next/static`, `public`) para una imagen ultra ligera (<150MB).
- **Healthcheck endpoint**: `/api/health` para probes de uptime y orquestación con Traefik/Coolify.

---

## Task List

### Phase 1: Scaffolding & Core Architecture
- [x] Task 1: Inicialización del proyecto Next.js 16 con App Router, TypeScript, Tailwind CSS v4 y configuración standalone
- [x] Task 2: Implementación de la arquitectura de Temas (Oscuro/Claro/Sistema) con script anti-flicker y tokens globales
- [x] Task 3: Creación de la estructura de Layout responsivo, Sticky Navbar glassmorphic y Off-Canvas Mobile Drawer

### Checkpoint: Foundation
- [x] El proyecto compila sin errores con Turbopack (`npm run build`).
- [x] No hay destello de tema (anti-flicker) al recargar en modo oscuro o claro.
- [x] La navegación desktop y el drawer móvil funcionan con bloqueo de scroll y accesibilidad.

### Phase 2: Hero Section & Los 3 Pilares Estrella
- [x] Task 4: Desarrollo del Hero Section de alto impacto con propuesta de valor, badge de disponibilidad y visual tech
- [x] Task 5: Componente Pilar 1 — Infraestructura IT, Cableado Estructurado, Redes Wi-Fi & Seguridad Perimetral
- [x] Task 6: Componente Pilar 2 — Software Suite Especializada (Barber OS, Gym OS, ERPs) y Modal interactivo "Ver Demo"
- [x] Task 7: Componente Pilar 3 — Soporte Técnico Especializado, Mantenimiento Corporativo y Abonos Mensuales

### Checkpoint: Core Solutions
- [x] Los 3 pilares se visualizan con jerarquía Enterprise Tech, micro-interacciones y badges técnicos.
- [x] El modal de Barber OS abre con React Portal y se cierra con Escape / click exterior.
- [x] Los CTAs dirigen a las secciones correspondientes o al WhatsApp corporativo.

### Phase 3: Casos de Éxito, Cotizador WhatsApp & Footer
- [x] Task 8: Showcase de Casos de Éxito / Galería de Trabajos Reales con filtrado interactivo
- [x] Task 9: Cotizador Interactivo y Formulario Rápido con generación dinámica de mensaje para WhatsApp
- [x] Task 10: Footer Corporativo completo con datos de contacto, horario, soporte técnico y cobertura regional

### Checkpoint: Conversion & Completion
- [x] El cotizador interactivo calcula el alcance y genera el enlace `https://wa.me/...` con el mensaje estructurado.
- [x] Todos los enlaces internos y externos responden adecuadamente.
- [x] Diseño 100% responsivo probado en viewports móvil (360px-390px), tablet (768px) y desktop (1280px+).

### Phase 4: Optimización, Docker Standalone & Despliegue en Coolify
- [x] Task 11: Configuración de Dockerfile Multi-Stage (`node:20-alpine`), `.dockerignore` y Endpoint de Healthcheck (`/api/health`)
- [x] Task 12: Auditoría final de TypeScript, accesibilidad, performance y verificación de build de producción

### Checkpoint: Production Ready
- [x] `npm run build` genera la salida `standalone` limpia sin errores ni warnings de TypeScript.
- [x] Dockerfile compila correctamente y el contenedor expone el servicio en puerto 3000.
- [x] Listo para despliegue en Coolify v4 sobre VPS Hetzner.

### Phase 5: SEO Técnico, Datos Estructurados JSON-LD & Indexación en Google
- [x] Task 13: Generación de Sitemap dinámico (`src/app/sitemap.ts`) y Robots (`src/app/robots.ts`)
- [x] Task 14: Implementación de Datos Estructurados JSON-LD (Schema.org) para LocalBusiness & Rich Results
- [x] Task 15: Optimización de Geo-Metadatos de Catamarca/NOA y Verificación de Indexabilidad

### Checkpoint: SEO & Google Indexation Ready
- [x] `/sitemap.xml` y `/robots.txt` responden correctamente con tipos de contenido XML y texto plano.
- [x] Datos estructurados Schema.org validados sin errores de sintaxis ni campos requeridos faltantes.
- [x] Build limpio con Turbopack y listo para envío a Google Search Console.

### Phase 6: PWA (Progressive Web App) & Web App Manifest
- [x] Task 16: Generación de Assets PWA (Iconos 192x192, 512x512 y Maskable con Safe Area)
- [x] Task 17: Configuración de Web App Manifest dinámico (`src/app/manifest.ts`)
- [x] Task 18: Metadatos extendidos para Apple iOS Web App y Viewport Standalone en `src/app/layout.tsx`
- [x] Task 19: Componente interactivo y accesible de Instalación PWA en Navegación Móvil (`InstallPrompt`)

### Checkpoint: PWA Installation Ready
- [x] `/manifest.webmanifest` se genera estáticamente con HTTP 200 y tipos correctos.
- [x] Iconos PWA estándar y maskable accesibles en `public/icons/`.
- [x] Experiencia de instalación disponible en Android y Safari iOS sin interferir en la navegación estándar.
- [x] `npm run build` compila con 0 errores y despliegue sincronizado en producción.

---

## Risks and Mitigations

| Riesgo | Impacto | Mitigación |
| :--- | :--- | :--- |
| **FOUC / Parpadeo de tema en SSR** | Alto | Inyectar script bloqueante en `<head>` de `layout.tsx` para evaluar `localStorage` y `prefers-color-scheme` antes del renderizado de React. |
| **Corte de layout en navegadores móviles (iOS/Android)** | Medio | Utilizar unidades `dvh` (`min-h-dvh`) en lugar de `100vh` y exportar `viewport` en `layout.tsx`. |
| **Tamaño excesivo de imagen Docker en Coolify** | Medio | Utilizar Dockerfile multi-stage con Alpine Linux y `output: 'standalone'` para copiar únicamente los binarios y assets mínimos indispensables. |
| **Disrupción al abrir links de WhatsApp** | Bajo | Validar y codificar (`encodeURIComponent`) los parámetros del cotizador para garantizar compatibilidad multiplataforma (WhatsApp Web y app móvil). |

---

## Open Questions & Decisiones de Diseño
- **Número de WhatsApp de destino**: Se configurará un número corporativo de UPGRADE con variable de entorno o fallback para Catamarca (`+54 9 383 ...`).
- **Demostración de Barber OS**: Se incluirá un preview interactivo guiado en modal con pestañas de funcionalidades (Turnero en vivo, Pago Mercado Pago, PWA Huella, Cadete) para que el cliente experimente la solución en vivo sin salir de la web.

