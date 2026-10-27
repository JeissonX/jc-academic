# Design System: Landing CRO - JC Academic

> Documento de especificación visual y CRO que sobreescribe `MASTER.md` para la landing page de **JC Academic**.

---

## 1. Paleta de Colores Universitaria Sobria (Dark Glassmorphism)

| Rol | Hex / RGBA | Variable CSS / Clase Tailwind | Uso |
|---|---|---|---|
| **Background Deep** | `#080E1A` | `--bg-deep` (`bg-[#080E1A]`) | Fondo principal de la landing |
| **Surface Dark / Card** | `#0F172A` | `--surface-dark` (`bg-[#0F172A]`) | Tarjetas, contenedores, barras |
| **Glass Card Bg** | `rgba(15, 23, 42, 0.75)` | `backdrop-blur-md bg-slate-900/75` | Efecto vidrio templado premium |
| **Glass Border** | `rgba(255, 255, 255, 0.08)` | `border border-white/10` | Separadores y bordes sutiles |
| **Azul Cobalto (Brand)** | `#2563EB` | `--primary-cobalt` (`bg-blue-600`) | Botones primarios, acentos activos |
| **Cobalto Hover** | `#1D4ED8` | `hover:bg-blue-700` | Interacciones de botones |
| **Glow / Cyan Accent** | `#38BDF8` | `text-sky-400`, `shadow-sky-500/20` | Badges de garantía, highlights |
| **Verde WhatsApp** | `#22C55E` | `bg-emerald-500`, `hover:bg-emerald-600` | Botón final de cotización instantánea |
| **Texto Primario** | `#F8FAFC` | `text-slate-50` | Titulares h1, h2, h3, datos clave |
| **Texto Secundario** | `#94A3B8` | `text-slate-400` | Párrafos, descripciones, microcopy |
| **Texto Atenuado** | `#64748B` | `text-slate-500` | Metadatos, notas al pie |

---

## 2. Tipografía y Jerarquía (Plus Jakarta Sans)

- **Fuente Principal:** `Plus Jakarta Sans`, sans-serif.
- **Import Google Fonts:**
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  ```
- **Escala de Jerarquía:**
  - **H1 (Hero):** 2.5rem – 3.75rem (40px–60px), Font-Weight 800 (ExtraBold), `tracking-tight`, `leading-[1.15]`.
  - **H2 (Secciones):** 2rem – 2.5rem (32px–40px), Font-Weight 700 (Bold), `tracking-tight`.
  - **H3 (Tarjetas):** 1.25rem – 1.5rem (20px–24px), Font-Weight 600 (SemiBold).
  - **Body / Párrafos:** 1rem – 1.125rem (16px–18px), Font-Weight 400 (Regular) / 500 (Medium), `leading-relaxed`.
  - **Badges / Overlines:** 0.75rem – 0.875rem (12px–14px), Font-Weight 600, `uppercase tracking-wider`.

---

## 3. Patrón de Conversión CRO (Academic High-Trust Funnel)

1. **Header / Navbar:**
   - Imagotipo vectorial SVG "JC Academic" (birrete geométrico + escudo minimalista + tipografía bold).
   - Enlaces de salto suave: Servicios, Metodología, Garantías, Cotizador, FAQ.
   - CTA rápido directo: "Cotizar por WhatsApp".

2. **Hero Section (Above the Fold):**
   - Social Proof Badge: "🔒 100% Confidencial • Informe Anti-Plagio Turnitin® Incluido".
   - Titular de alto impacto orientado a aliviar el estrés del estudiante/investigador universitario.
   - Dual CTA: [Cotizar Mi Proyecto Ahora] (Scroll al cotizador) + [Consultar por WhatsApp].
   - Métricas de confianza: +1,200 proyectos asesorados, 99.2% tasa de aprobación, 0% plagio garantizado.

3. **Módulo de Servicios Especializados:**
   - Tesis de Grado & Posgrado (Pregrado, Maestría, Doctorado).
   - Ensayos Críticos & Monografías.
   - Artículos Científicos (Indexados Scopus / SciELO / Publindex).
   - Asesoría Metodológica & Estadística (SPSS, R, Python, Stata).
   - Corrección de Estilo & Formato Normativo (APA 7ma, Vancouver, IEEE, Chicago).

4. **Garantías Institucionales (Reducción de Fricción):**
   - Informe Turnitin anti-plagio oficial con cada entrega.
   - Correcciones y ajustes ilimitados según retroalimentación del asesor o jurado.
   - Pagos por fases o entregas parciales.
   - Riguroso acuerdo de confidencialidad y cesión de derechos de autor.

5. **Cotizador Dinámico Interactivo (Core CRO Feature):**
   - Inputs dinámicos:
     1. Tipo de Proyecto (Tesis, Ensayo, Artículo, Corrección APA, Análisis Estadístico).
     2. Nivel Académico (Pregrado, Especialización, Maestría, Doctorado).
     3. Área de Conocimiento (Ciencias Sociales, Salud, Ingeniería, Negocios, Derecho, etc.).
     4. Fecha Límite / Plazo (Normal +15 días, Prioritario 7-14 días, Urgente 3-6 días).
     5. Número estimado de páginas o avances requeridos.
   - Output dinámico en tiempo real: Resumen estructurado + Botón de WhatsApp conectado a `+573223876905` con mensaje codificado en `encodeURIComponent`.

6. **Proceso Metodológico en 4 Pasos Transparentes:**
   - Paso 1: Diagnóstico y cronograma personalizado.
   - Paso 2: Asignación de especialista en tu disciplina.
   - Paso 3: Entregas parciales con reporte de originalidad.
   - Paso 4: Ajustes finales y preparación para sustentación.

7. **Pruebas Sociales y Testimonios Reales:**
   - Tarjetas de estudiantes de diversas universidades (reputación protegida).
   - Capturas de feedback verificables o citas con calificaciones 5.0.

8. **Preguntas Frecuentes (FAQ Acordeón Accesible):**
   - ¿Cómo garantizan que no haya plagio?
   - ¿Qué pasa si mi tutor me pide correcciones?
   - ¿Cómo se manejan los pagos?
   - ¿La asesoría es 100% confidencial?

9. **Barra Flotante Sticky en Móviles (Bottom Bar):**
   - CTA omnipresente para pantallas móviles: "Cotizar en 2 min" con icono de WhatsApp directo.

---

## 4. Reglas de Accesibilidad y Performance

- Iconografía 100% SVG nativo (sin dependencias externas pesadas).
- Contraste superior a 4.5:1 en todos los textos sobre fondos oscuros.
- `cursor-pointer` en todos los elementos interactivos.
- Transiciones fluidas de 200ms (`transition-all duration-200`).
- No CLS (Cumulative Layout Shift) en carga de fuentes o imágenes.
