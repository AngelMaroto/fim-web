import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const screenshots = [
    { id: 1, file: '/screenshots/screenshot-1.png', title: 'Grafo de nodos', desc: 'Visualización en tiempo real del filesystem con código de colores por severidad' },
    { id: 2, file: '/screenshots/screenshot-2.png', title: 'Línea de tiempo', desc: 'Timeline completa con eventos FIM, slider temporal y filtros avanzados' },
    { id: 3, file: '/screenshots/screenshot-3.png', title: 'Pantalla principal', desc: 'Vista general de la aplicación con grafo interactivo y panel de alertas' },
]

export function createDemo() {
    return `
    <section id="demo">
      <div class="demo-inner">

<div class="section-header anim-fade-up">
          <p class="section-label">// 04 — Demo</p>
          <h2 class="section-title">La app en acción</h2>
          <p class="demo-subtitle">Capturas reales de FIM Gráfico monitorizando un servidor Ubuntu.</p>
        </div>

        <div class="demo-grid">
          ${screenshots.map((s, i) => `
<div class="demo-card anim-fade-up anim-delay-${i+1}">
              <div class="demo-card-img-wrap">
                <img src="${s.file}" alt="${s.title}" class="demo-card-img" loading="lazy" />
                <div class="demo-card-overlay">
                  <button class="demo-zoom-btn" data-src="${s.file}" data-title="${s.title}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                    </svg>
                    Ver completo
                  </button>
                </div>
              </div>
              <div class="demo-card-info">
                <span class="demo-card-num">0${s.id}</span>
                <div>
                  <h3 class="demo-card-title">${s.title}</h3>
                  <p class="demo-card-desc">${s.desc}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>

      <!-- Lightbox -->
      <div class="lightbox" id="lightbox">
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-content">
          <button class="lightbox-close">✕</button>
          <p class="lightbox-title"></p>
          <img class="lightbox-img" src="" alt="" />
        </div>
      </div>

    </section>
  `
}

export function animateDemo() {
    const lightbox = document.getElementById('lightbox')
    const lightboxImg = lightbox.querySelector('.lightbox-img')
    const lightboxTitle = lightbox.querySelector('.lightbox-title')

    document.querySelectorAll('.demo-zoom-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            lightboxImg.src = btn.dataset.src
            lightboxTitle.textContent = btn.dataset.title
            lightbox.classList.add('active')
            gsap.fromTo('.lightbox-content',
                { scale: 0.92, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' }
            )
        })
    })

    const closeLightbox = () => {
        gsap.to('.lightbox-content', {
            scale: 0.92, opacity: 0, duration: 0.25, ease: 'power3.in',
            onComplete: () => lightbox.classList.remove('active')
        })
    }

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox)
    lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox)
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeLightbox()
    })
}