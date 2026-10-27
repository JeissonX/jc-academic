# JC Academic — Asesoría Académica Especializada en Colombia

> Landing estática de alta conversión (CRO) para servicios académicos universitarios (Tesis, Asesorías, Ensayos, Artículos Científicos y Talleres Prácticos).
> **Producción en vivo:** [https://jc-academy-seven.vercel.app](https://jc-academy-seven.vercel.app)  
> **Repositorio oficial:** [https://github.com/JeissonX/jc-academic](https://github.com/JeissonX/jc-academic)

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Producci%C3%B3n-black?style=flat-square&logo=vercel)](https://jc-academy-seven.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-jc--academic-181717?style=flat-square&logo=github)](https://github.com/JeissonX/jc-academic)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-CDN_Optimized-38BDF8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![WCAG AA](https://img.shields.io/badge/A11Y-WCAG_2.1_AA-success?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Colombia](https://img.shields.io/badge/Cobertura-Colombia_(Nacional)-FCD116?style=flat-square)](https://jc-academy-seven.vercel.app)

---

## 📌 Visión del Proyecto y Enfoque CRO

**JC Academic** es una solución de consultoría académica universitaria enfocada en resolver las fricciones operativas y de tiempo de estudiantes y profesionales que trabajan en Colombia. Su diseño responde a una arquitectura **CRO (Conversion Rate Optimization)** condensada en 6 bloques de alto impacto que reducen el scroll vertical en un 50%, eliminan barreras de desconfianza y agilizan el contacto inmediato por WhatsApp.

### 🛡️ Propuestas de Valor y Garantías Operativas

* **Entregas Puntuales contra Reloj:** Planificación rigurosa con compromisos de radicación la noche anterior o antes de las **7:00 AM**.
* **Garantía Dual Anti-Plagio & Cero IA:** Redacción 100% humana con fuentes indexadas en Scopus, SciELO y Redalyc. Cada entrega incluye un reporte oficial **Turnitin sin depósito** institucional (< 10% de similitud) y compatibilidad total contra detectores de IA.
* **Esquema de Pago Protegido 50/50:** 50% de anticipo para asignación inmediata del especialista con posgrado en la misma disciplina, y 50% final contra entrega de avance verificado con su reporte Turnitin.
* **10 Días de Revisiones Incluidas:** Período de garantía post-entrega para atender observaciones menores del tutor o jurado sin costo sobre la rúbrica acordada.
* **Canales Oficiales Locales:** Transferencias directas en Colombia vía **Bancolombia, Nequi, Daviplata y PSE**.
* **Transparencia Operativa:** Cero testimonios ficticios; enfoque basado en rúbricas institucionales, acuerdos de reserva y cumplimiento de la **Ley 23 de 1982** (derechos patrimoniales) y **Ley 1581 de 2012** (Habeas Data).

---

## 🧱 Arquitectura de 6 Bloques Compactos

La landing page fue condensada y estructurada para maximizar la retención y la velocidad de carga en móvil y escritorio:

1. **Hero de Conversión:** Titular sobrio de alto contraste, insignias horizontales de confianza (Turnitin, 10 Días, Pago 50/50, Pasarelas colombianas) y doble botón de acción táctil (`min-h-[48px]`).
2. **Por qué JC Academic (4 Pilares):** Fusión de puntos de dolor y garantías en un grid adaptativo (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
3. **Servicios Consolidados (Grid 2x2):**
   * *Tesis y Monografías:* Planteamiento, marco teórico, metodología, campo y discusión.
   * *Ensayos e Informes Académicos:* Artículos IMRyD y fuentes indexadas Scopus/SciELO.
   * *Talleres y Ejercicios Prácticos:* Casos analíticos y estadística en SPSS, R o Python.
   * *Diapositivas y Sustentaciones:* Láminas técnicas con guion verbal para sustentación.
4. **Cómo Trabajamos (3 Pasos Metodológicos) + Medios de Pago:** Diagnóstico rápido, asignación con Turnitin y entrega final con 10 días de ajustes, acompañados de la franja oficial de medios de pago.
5. **Cotizador Dinámico Compacto:** Formulario de 4 campos limpios (Tipo de encargo, Carrera/Área, Extensión adaptativa y Plazo) con generación reactiva del mensaje estructurado y botón directo a WhatsApp mediante `encodeURIComponent()`.
6. **Preguntas Frecuentes (FAQ Nativa HTML5) + Footer Legal:** Desplegables construidos con etiquetas estándar `<details class="faq-native">` y `<summary>` (100% inmunes a fallos de scripts), acompañados del pie de página con canales de atención y modal accesible de Habeas Data.

---

## 💻 Stack Tecnológico y Principios de Diseño

* **Núcleo:** HTML5 Semántico sin sobrecarga de dependencias ni librerías pesadas.
* **Estilos & Paleta:** Tailwind CSS CDN extendido con tokens CSS Vanilla en `css/styles.css`:
  * *Dark Navy:* `#080E1A` (Fondo inmersivo principal)
  * *Slate Surface:* `#0F172A` / `#1E293B` (Superficies elevadas y tarjetas glassmorphism)
  * *Azul Cobalto:* `#2563EB` (Color primario de acción)
  * *Electric Cyan:* `#38BDF8` (Acentos de foco y lectura)
  * *Emerald Green:* `#22C55E` (Canal de WhatsApp y micro-estados de éxito)
* **Tipografía:** *Plus Jakarta Sans* (Google Fonts) en escalas tipográficas fluidas.
* **Interactividad:** JavaScript ES Modules nativo (`js/data.js` y `js/app.js`) envuelto en `DOMContentLoaded` con programación defensiva contra errores de nodo.
* **Mobile-First Blindado:** Contenedores fluidos (`max-w-full overflow-x-hidden`) con soporte estricto para pantallas de 360px a 430px (iPhone SE, Galaxy S, Pixel) y escritorio.
* **Sticky Mobile Bar:** Barra fija inferior en resoluciones `< 1024px` con holgura de `padding-bottom: 96px` (`pb-24`) en el cuerpo del documento.

---

## 📂 Estructura del Repositorio

```text
jc-academy/
├── .agent/
│   └── PROGRESS.md           # Registro histórico de hitos y trazabilidad
├── css/
│   └── styles.css            # Tokens CSS, glassmorphism, chevron SVG y media queries
├── design-system/
│   └── jc-academic/          # Especificaciones de diseño UI/UX y CRO inferidas
├── js/
│   ├── app.js                # Lógica modular cliente, cotizador reactivo y eventos A11Y
│   └── data.js               # Catálogo estructurado de servicios, áreas, plazos y FAQs
├── .gitignore                # Reglas de exclusión para Git y Vercel
├── index.html                # Documento principal semántico, JSON-LD y 6 bloques CRO
└── README.md                 # Documentación técnica oficial del proyecto
```

---

## 📞 Canales Oficiales de Atención

* **WhatsApp Directo:** [+57 322 387 6905](https://wa.me/573223876905)
* **Correo Electrónico Oficial:** [academyasistenciajc@gmail.com](mailto:academyasistenciajc@gmail.com)
* **Horario de Operación:** Lunes a Sábado, 7:00 AM – 8:00 PM (Hora Colombia).
* **Ubicación:** Bogotá D.C., Colombia (Cobertura en todo el territorio nacional).

---

## 🛠️ Comprobaciones y Validación Autónoma

Para validar la integridad del código en entornos locales Windows 11 con PowerShell 5.1:

```powershell
# 1. Comprobación de codificación UTF-8 pura sin BOM
$files = @('index.html', 'css/styles.css', 'js/data.js', 'js/app.js', 'README.md')
foreach ($f in $files) {
    $bytes = [System.IO.File]::ReadAllBytes((Resolve-Path $f))
    $hasBom = ($bytes.Length -ge 3 -and $bytes[0] -eq 239 -and $bytes[1] -eq 187 -and $bytes[2] -eq 191)
    Write-Output "$f BOM: $hasBom"
}

# 2. Validación de sintaxis JavaScript
node --check js/data.js
node --check js/app.js

# 3. Verificación de correo y WhatsApp oficial sanitizado
Select-String -Path "js\data.js", "index.html", "README.md" -Pattern "academyasistenciajc@gmail.com"
Select-String -Path "js\*.js", "index.html", "README.md" -Pattern "573223876905"
```

---

## 🚀 Despliegue en Producción

El proyecto está vinculado al workspace de **Vercel** (`jeisson1/jc-academy`) y automatizado para despliegues de producción inmediatos:

```bash
# Publicar cambios a la rama principal de GitHub
git add .
git commit -m "docs: actualizar documentacion tecnica en README.md"
git push origin main

# Desplegar directamente al entorno de producción Vercel
npx vercel --prod --yes
```

---

*© 2026 JC Academic. Todos los derechos reservados. Cumplimiento de la Ley 23 de 1982 y Ley 1581 de 2012 de la República de Colombia.*
