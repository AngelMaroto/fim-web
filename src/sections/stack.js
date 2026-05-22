import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const technologies = [
    { name: 'Python', category: 'Agente', color: '#3776AB' },
    { name: 'AIDE 0.18.6', category: 'Agente', color: '#00ff9f' },
    { name: 'Java 21', category: 'Backend', color: '#f89820' },
    { name: 'Spring Boot', category: 'Backend', color: '#6DB33F' },
    { name: 'SQLite', category: 'Backend', color: '#003B57' },
    { name: 'WebSocket', category: 'Backend', color: '#00d4ff' },
    { name: 'STOMP', category: 'Backend', color: '#00d4ff' },
    { name: 'Flutter', category: 'Cliente', color: '#02569B' },
    { name: 'Dart', category: 'Cliente', color: '#0175C2' },
    { name: 'BLoC', category: 'Cliente', color: '#ff6b6b' },
    { name: 'CustomPainter', category: 'Cliente', color: '#02569B' },
    { name: 'REST API', category: 'Integración', color: '#ff9500' },
    { name: 'systemd', category: 'Infraestructura', color: '#00ff9f' },
    { name: 'Ubuntu Server', category: 'Infraestructura', color: '#E95420' },
    { name: 'VirtualBox', category: 'Infraestructura', color: '#183A61' },
]

const categoryColors = {
    'Agente': '#00ff9f',
    'Backend': '#00d4ff',
    'Cliente': '#ff6b6b',
    'Integración': '#ff9500',
    'Infraestructura': '#bf00ff',
}

export function createStack() {
    return `
    <section id="stack">
      <div class="stack-inner">

<div class="section-header anim-fade-up">
<div class="stack-categories anim-fade-up anim-delay-2">
<div class="stack-grid anim-fade-up anim-delay-3">
          <p class="section-label">// 03 — Stack</p>
          <br>
          <h2 class="section-title">Tecnologías</h2>
        </div>

        <div class="stack-categories">
          ${Object.entries(categoryColors).map(([cat, color]) => `
            <button class="stack-filter active" data-category="${cat}" style="--cat-color: ${color}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <div class="stack-grid">
          ${technologies.map((tech, i) => `
            <div class="stack-pill" data-category="${tech.category}" style="--tech-color: ${categoryColors[tech.category]}">
              <span class="stack-pill-dot"></span>
              <span class="stack-pill-name">${tech.name}</span>
              <span class="stack-pill-cat">${tech.category}</span>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `
}

export function animateStack() {
        document.querySelectorAll('.stack-filter').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active')
                const activeFilters = [...document.querySelectorAll('.stack-filter.active')]
                    .map(b => b.dataset.category)
                document.querySelectorAll('.stack-pill').forEach(pill => {
                    if (activeFilters.includes(pill.dataset.category)) {
                        gsap.to(pill, { opacity: 1, scale: 1, duration: 0.3 })
                        pill.style.pointerEvents = 'auto'
                    } else {
                        gsap.to(pill, { opacity: 0.15, scale: 0.95, duration: 0.3 })
                        pill.style.pointerEvents = 'none'
                    }
                })
            })
        })
    }