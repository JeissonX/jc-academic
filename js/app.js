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
  if (norm.includes('diapositiva') || norm.includes('defensa') || norm.includes('sustentac') || norm.includes('presentac')) {
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

/* ── 1. Inicialización Defensiva del Cotizador Interactivo ── */
function initCotizador() {
  const selTipo = document.getElementById('cot-tipo');
  const selArea = document.getElementById('cot-area');
  const selPlazo = document.getElementById('cot-plazo');
  const inpExtension = document.getElementById('cot-extension');
  const lblExtension = document.getElementById('cot-extension-label');
  const wrapGuion = document.getElementById('cot-guion-wrap');
  const chkGuion = document.getElementById('cot-guion');
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
    const config = obtenerConfigExtension(selTipo ? selTipo.value : '');
    if (lblExtension && config.label) {
      lblExtension.textContent = config.label;
    }
    if (inpExtension && config.placeholder) {
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
    const plazo = (selPlazo && selPlazo.value) ? selPlazo.value : 'Normal (15+ días)';
    
    let extension = (inpExtension && inpExtension.value.trim()) ? inpExtension.value.trim() : 'Por coordinar';
    if (chkGuion && wrapGuion && !wrapGuion.classList.contains('hidden') && chkGuion.checked) {
      extension += ' + Guion de sustentación incluido';
    }

    return [
      `👋 Hola JC Academic, requiero cotizar un trabajo: ${tipo} | Área: ${area} | Extensión: ${extension} | Plazo: ${plazo}`,
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

  // Escuchador seguro para cambio de tipo de encargo
  selTipo.addEventListener('change', () => {
    actualizarCamposExtension();
    refrescarPreview();
  });

  // Escuchadores de eventos para controles reactivos
  [selTipo, selArea, selPlazo, inpExtension, chkGuion].forEach(control => {
    if (control) {
      control.addEventListener('change', refrescarPreview);
      control.addEventListener('input', refrescarPreview);
    }
  });

  // Inicialización defensiva
  actualizarCamposExtension();
  refrescarPreview();

  // Envío seguro a WhatsApp
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
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const customMsg = btn.getAttribute('data-wa-mensaje') || 
          '👋 Hola, JC Academic. Me gustaría recibir asesoría académica especializada en Colombia.';
        abrirWhatsApp(customMsg);
      });
    }
  });
}

/* ── 3. Acordeón Nativo de FAQs (HTML5 <details>) ── */
function initFaqNative() {
  const detailsList = document.querySelectorAll('details.faq-native');
  if (!detailsList.length) return;

  detailsList.forEach(targetDetail => {
    targetDetail.addEventListener('toggle', () => {
      if (targetDetail.open) {
        detailsList.forEach(otherDetail => {
          if (otherDetail !== targetDetail && otherDetail.open) {
            otherDetail.open = false;
          }
        });
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay.classList.contains('open')) {
      cerrarMenu();
    }
  });

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

    const primerElemento = modal.querySelector('button, [href], input, [tabindex]:not([tabindex="-1"])');
    primerElemento?.focus();
  }

  function cerrarModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (ultimoEnfocado) ultimoEnfocado.focus();
  }

  botonesAbrir.forEach(b => {
    if (b) {
      b.addEventListener('click', (e) => {
        e.preventDefault();
        abrirModal();
      });
    }
  });

  botonesCerrar.forEach(b => {
    if (b) b.addEventListener('click', cerrarModal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModal();
  });

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

/* ── 7. Revelado Progresivo en Scroll ── */
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
    elementos.forEach(el => el.classList.add('is-visible'));
  }
}

/* ── Inicialización Segura del DOM ── */
document.addEventListener('DOMContentLoaded', () => {
  try { initCotizador(); } catch (err) { console.error('Error initCotizador:', err); }
  try { initBotonesWhatsApp(); } catch (err) { console.error('Error initBotonesWhatsApp:', err); }
  try { initFaqNative(); } catch (err) { console.error('Error initFaqNative:', err); }
  try { initNavMovil(); } catch (err) { console.error('Error initNavMovil:', err); }
  try { initModalHabeas(); } catch (err) { console.error('Error initModalHabeas:', err); }
  try { initNavbarScroll(); } catch (err) { console.error('Error initNavbarScroll:', err); }
  try { initRevealOnScroll(); } catch (err) { console.error('Error initRevealOnScroll:', err); }
});