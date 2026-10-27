// ==========================================================================
// JC Academic — Lógica Modular de Interacción y Cotizador en Vivo
// Codificación: UTF-8 sin BOM
// Directivas: Vanilla JS, A11Y WCAG AA, WhatsApp Routing con encodeURIComponent
// ==========================================================================

import JC from './data.js';

// Respaldo de objeto de datos para entorno seguro
const data = typeof JC !== 'undefined' ? JC : (window.JC || {});
const WA_PHONE = data.whatsapp || "573223876905";

/* ── Utilidad para construcción segura de enlaces a WhatsApp con encodeURIComponent ── */
export function buildWhatsAppUrl(mensaje) {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(mensaje)}`;
}

export function construirUrlWhatsApp(mensaje) {
  return buildWhatsAppUrl(mensaje);
}

export function abrirWhatsApp(mensaje) {
  const url = buildWhatsAppUrl(mensaje);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ── Heurística para obtener la configuración de extensión según el servicio ── */
function obtenerConfigExtension(tipoNombre) {
  const servicio = (data.servicios || []).find(s => s.titulo === tipoNombre);
  const tipoExt = servicio?.tipoExtension;

  if (tipoExt && data.tiposExtension && data.tiposExtension[tipoExt]) {
    return data.tiposExtension[tipoExt];
  }

  const norm = (tipoNombre || '').toLowerCase();
  if (norm.includes('taller') || norm.includes('ejercicio') || norm.includes('caso')) {
    return data.tiposExtension?.ejercicios || {
      label: "Número de ejercicios o puntos",
      placeholder: "Ej: 5 ejercicios o 10 puntos analíticos",
      unidad: "ejercicios",
      permiteGuion: false
    };
  }
  if (norm.includes('diapositiva') || norm.includes('defensa') || norm.includes('presentac')) {
    return data.tiposExtension?.diapositivas || {
      label: "Número de láminas / diapositivas",
      placeholder: "Ej: 15 láminas de presentación",
      unidad: "láminas",
      permiteGuion: true
    };
  }
  return data.tiposExtension?.paginas || {
    label: "Páginas o Palabras estimadas",
    placeholder: "Ej: 15 páginas / 4.500 palabras",
    unidad: "páginas/palabras",
    permiteGuion: false
  };
}

/* ── 1. Inicialización del Cotizador Interactivo ── */
function initCotizador() {
  const selTipo = document.getElementById('cot-tipo');
  const selNivel = document.getElementById('cot-nivel');
  const selArea = document.getElementById('cot-area');
  const selPlazo = document.getElementById('cot-plazo');
  const inpExtension = document.getElementById('cot-extension');
  const lblExtension = document.getElementById('cot-extension-label');
  const wrapGuion = document.getElementById('cot-guion-wrap');
  const chkGuion = document.getElementById('cot-guion');
  const txtNotas = document.getElementById('cot-notas');
  const boxPreview = document.getElementById('cot-preview');
  const btnEnviar = document.getElementById('cot-enviar');

  if (!selTipo) return;

  // Poblar select de tipos de trabajo desde catálogo estructurado
  if (data.servicios && selTipo.options.length <= 1) {
    data.servicios.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.titulo;
      opt.textContent = s.titulo;
      selTipo.appendChild(opt);
    });
  }

  // Poblar select de niveles académicos
  if (data.niveles && selNivel && selNivel.options.length <= 1) {
    data.niveles.forEach(n => {
      const opt = document.createElement('option');
      opt.value = n;
      opt.textContent = n;
      selNivel.appendChild(opt);
    });
  }

  // Poblar select de áreas disciplinares
  if (data.areas && selArea && selArea.options.length <= 1) {
    data.areas.forEach(a => {
      const opt = document.createElement('option');
      opt.value = a;
      opt.textContent = a;
      selArea.appendChild(opt);
    });
  }

  // Poblar select de plazos
  if (data.plazos && selPlazo && selPlazo.options.length <= 1) {
    data.plazos.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.label;
      opt.textContent = `${p.label} — ${p.detalle}`;
      selPlazo.appendChild(opt);
    });
  }

  // Actualizar etiqueta, placeholder y opción de guion según el tipo seleccionado
  function actualizarCamposExtension() {
    const config = obtenerConfigExtension(selTipo.value);
    if (lblExtension) {
      lblExtension.textContent = config.label;
    }
    if (inpExtension) {
      inpExtension.placeholder = config.placeholder;
      inpExtension.setAttribute('aria-label', config.label);
    }
    if (wrapGuion) {
      if (config.permiteGuion) {
        wrapGuion.classList.remove('hidden');
      } else {
        wrapGuion.classList.add('hidden');
        if (chkGuion) chkGuion.checked = false;
      }
    }
  }

  // Construcción del mensaje estructurado para WhatsApp
  function generarMensaje() {
    const tipo = (selTipo && selTipo.value) ? selTipo.value : 'Por definir';
    const area = (selArea && selArea.value) ? selArea.value : 'Por definir';
    const nivel = (selNivel && selNivel.value) ? ` (${selNivel.value})` : '';
    const plazo = (selPlazo && selPlazo.value) ? selPlazo.value : 'Normal (15+ días)';
    
    let extension = (inpExtension && inpExtension.value.trim()) ? inpExtension.value.trim() : 'Por coordinar';
    if (chkGuion && wrapGuion && !wrapGuion.classList.contains('hidden') && chkGuion.checked) {
      extension += ' + Guion de exposición incluido';
    }

    const notas = (txtNotas && txtNotas.value.trim()) ? txtNotas.value.trim() : 'Sin observaciones adicionales previas';

    return [
      `👋 Hola JC Academic, requiero cotizar un trabajo: ${tipo} | Área: ${area}${nivel} | Extensión: ${extension} | Plazo: ${plazo} | Detalles: ${notas}`,
      '',
      '¿Podrían confirmarme disponibilidad del especialista y presupuesto estimado?'
    ].join('\n');
  }

  // Actualizar la vista previa en vivo
  function refrescarPreview() {
    if (boxPreview) {
      boxPreview.textContent = generarMensaje();
    }
  }

  // Escuchador para cambio de tipo de trabajo (actualiza placeholder/labels dinámicamente)
  selTipo.addEventListener('change', () => {
    actualizarCamposExtension();
    refrescarPreview();
  });

  // Escuchadores de eventos para formulario reactivo
  [selTipo, selNivel, selArea, selPlazo, inpExtension, txtNotas, chkGuion].forEach(control => {
    if (control) {
      control.addEventListener('change', refrescarPreview);
      control.addEventListener('input', refrescarPreview);
    }
  });

  // Inicialización de campos y preview
  actualizarCamposExtension();
  refrescarPreview();

  // Envío del cotizador a WhatsApp
  if (btnEnviar) {
    btnEnviar.addEventListener('click', (e) => {
      e.preventDefault();
      const mensaje = generarMensaje();
      abrirWhatsApp(mensaje);
    });
  }
}

/* ── 2. Botones de WhatsApp Rápido (Hero, Cards, Sticky Bar) ── */
function initBotonesWhatsApp() {
  document.querySelectorAll('[data-wa-quick]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const customMsg = btn.getAttribute('data-wa-mensaje') || 
        '👋 Hola, JC Academic. Me gustaría recibir asesoría académica especializada en Colombia.';
      abrirWhatsApp(customMsg);
    });
  });
}

/* ── 3. Acordeón Interactivo de FAQs con Accesibilidad WCAG ── */
function initFaqAcordeon() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const estaAbierto = item.classList.contains('open');

      // Cerrar otros acordeones abiertos para mantener orden
      faqItems.forEach(otroItem => {
        if (otroItem !== item) {
          otroItem.classList.remove('open');
          const otroTrigger = otroItem.querySelector('.faq-trigger');
          if (otroTrigger) otroTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Alternar estado del actual
      if (estaAbierto) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    // Accesibilidad por teclado
    trigger.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        trigger.click();
      }
    });
  });
}

/* ── 4. Menú de Navegación Móvil ── */
function initNavMovil() {
  const btnAbrir = document.getElementById('nav-menu-open');
  const btnCerrar = document.getElementById('nav-menu-close');
  const navOverlay = document.getElementById('nav-mobile');
  let elementoPrevio = null;

  if (!btnAbrir || !navOverlay) return;

  function abrirMenu() {
    elementoPrevio = document.activeElement;
    navOverlay.classList.add('open');
    btnAbrir.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    btnCerrar?.focus();
  }

  function cerrarMenu() {
    navOverlay.classList.remove('open');
    btnAbrir.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (elementoPrevio) elementoPrevio.focus();
  }

  btnAbrir.addEventListener('click', abrirMenu);
  btnCerrar?.addEventListener('click', cerrarMenu);

  // Cerrar al pulsar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay.classList.contains('open')) {
      cerrarMenu();
    }
  });

  // Cerrar al hacer clic en cualquier enlace interno
  navOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', cerrarMenu);
  });
}

/* ── 5. Modal Accesible de Ley 1581 (Habeas Data Colombia) ── */
function initModalHabeas() {
  const modal = document.getElementById('modal-habeas');
  const botonesAbrir = document.querySelectorAll('[data-modal-open="habeas"]');
  const botonesCerrar = document.querySelectorAll('[data-modal-close]');
  let ultimoEnfocado = null;

  if (!modal) return;

  function abrirModal() {
    ultimoEnfocado = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Foco en el primer elemento interactivo del modal
    const primerElemento = modal.querySelector('button, [href], input, [tabindex]:not([tabindex="-1"])');
    primerElemento?.focus();
  }

  function cerrarModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (ultimoEnfocado) ultimoEnfocado.focus();
  }

  botonesAbrir.forEach(b => b.addEventListener('click', (e) => {
    e.preventDefault();
    abrirModal();
  }));

  botonesCerrar.forEach(b => b.addEventListener('click', cerrarModal));

  // Cierre por clic fuera del contenedor
  modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModal();
  });

  // Cierre por tecla Escape y trampa de foco
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;

    if (e.key === 'Escape') {
      cerrarModal();
      return;
    }

    if (e.key === 'Tab') {
      const elementosInteractivos = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!elementosInteractivos.length) return;

      const primero = elementosInteractivos[0];
      const ultimo = elementosInteractivos[elementosInteractivos.length - 1];

      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    }
  });
}

/* ── 6. Efecto de Barra Superior en Scroll ── */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.style.background = 'rgba(8, 14, 26, 0.95)';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    } else {
      navbar.style.background = 'rgba(8, 14, 26, 0.85)';
      navbar.style.boxShadow = 'none';
    }
  }, { passive: true });
}

/* ── 7. Revelado de Elementos al Hacer Scroll ── */
function initRevealOnScroll() {
  const elementos = document.querySelectorAll('.reveal-on-scroll');
  if (!elementos.length) return;

  if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    elementos.forEach(el => observador.observe(el));
  } else {
    // Respaldo sin soporte de IntersectionObserver
    elementos.forEach(el => el.classList.add('is-visible'));
  }
}

/* ── Inicialización General del DOM ── */
document.addEventListener('DOMContentLoaded', () => {
  initCotizador();
  initBotonesWhatsApp();
  initFaqAcordeon();
  initNavMovil();
  initModalHabeas();
  initNavbarScroll();
  initRevealOnScroll();
});