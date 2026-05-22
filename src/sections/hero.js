import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function createHero() {
    return `
    <section id="hero">
      <p class="hero-label">// File Integrity Monitor — Linux</p>
      <h1 class="hero-title">
        <span class="line-green">Visualiza</span><br>
        <span class="line-white">tu filesystem</span><br>
        <span class="line-green">en tiempo real</span>
      </h1>
      <p class="hero-sub">
        FIM Gráfico convierte los eventos de AIDE en un grafo interactivo
        con alertas en tiempo real vía WebSocket.
      </p>
      <div class="hero-buttons">
        <button class="btn-primary" onclick="window.open('https://github.com/AngelMaroto/TFG-FIM-Grafico/releases/tag/v1.0.0')">
          Descargar
        </button>
        <button class="btn-ghost">Ver demo ↓</button>
      </div>
      <div class="hero-scroll-hint">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  `
}

export function animateHero() {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.to('.hero-label',   { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
        .to('.hero-title',   { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4')
        .to('.hero-sub',     { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .to('.hero-scroll-hint', { opacity: 1, duration: 0.6 }, '-=0.2')
// Hero se desvanece al hacer scroll
    gsap.to('#hero', {
        scrollTrigger: {
            trigger: '.sticky-wrapper',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        },
        opacity: 0,
        scale: 0.95,
        ease: 'none'
    })}