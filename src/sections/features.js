import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const visuals = [
    // 01 Grafo interactivo — red de nodos
    `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="feat-svg">
    <line x1="160" y1="110" x2="80" y2="60" stroke="#00ff9f" stroke-width="1" opacity="0.3"/>
    <line x1="160" y1="110" x2="240" y2="60" stroke="#00ff9f" stroke-width="1" opacity="0.3"/>
    <line x1="160" y1="110" x2="80" y2="160" stroke="#00ff9f" stroke-width="1" opacity="0.3"/>
    <line x1="160" y1="110" x2="240" y2="160" stroke="#00ff9f" stroke-width="1" opacity="0.3"/>
    <line x1="80" y1="60" x2="40" y2="30" stroke="#00ff9f" stroke-width="1" opacity="0.2"/>
    <line x1="240" y1="60" x2="290" y2="30" stroke="#00ff9f" stroke-width="1" opacity="0.2"/>
    <line x1="80" y1="160" x2="40" y2="190" stroke="#00ff9f" stroke-width="1" opacity="0.2"/>
    <line x1="240" y1="160" x2="290" y2="190" stroke="#00ff9f" stroke-width="1" opacity="0.2"/>
    <circle cx="160" cy="110" r="18" fill="rgba(0,255,159,0.15)" stroke="#00ff9f" stroke-width="1.5"/>
    <circle cx="160" cy="110" r="6" fill="#00ff9f"/>
    <circle cx="80" cy="60" r="10" fill="rgba(0,255,159,0.1)" stroke="#00ff9f" stroke-width="1"/>
    <circle cx="80" cy="60" r="4" fill="#00ff9f" opacity="0.8"/>
    <circle cx="240" cy="60" r="10" fill="rgba(255,0,102,0.1)" stroke="#ff0066" stroke-width="1"/>
    <circle cx="240" cy="60" r="4" fill="#ff0066" opacity="0.9"/>
    <circle cx="80" cy="160" r="10" fill="rgba(0,255,159,0.1)" stroke="#00ff9f" stroke-width="1"/>
    <circle cx="80" cy="160" r="4" fill="#00ff9f" opacity="0.8"/>
    <circle cx="240" cy="160" r="10" fill="rgba(255,0,102,0.1)" stroke="#ff0066" stroke-width="1"/>
    <circle cx="240" cy="160" r="4" fill="#ff0066" opacity="0.9"/>
    <circle cx="40" cy="30" r="5" fill="rgba(0,255,159,0.5)" stroke="#00ff9f" stroke-width="0.5"/>
    <circle cx="290" cy="30" r="5" fill="rgba(0,255,159,0.5)" stroke="#00ff9f" stroke-width="0.5"/>
    <circle cx="40" cy="190" r="5" fill="rgba(0,255,159,0.5)" stroke="#00ff9f" stroke-width="0.5"/>
    <circle cx="290" cy="190" r="5" fill="rgba(0,255,159,0.5)" stroke="#00ff9f" stroke-width="0.5"/>
    <text x="152" y="114" font-size="8" fill="#00ff9f" font-family="monospace">/etc</text>
  </svg>`,

    // 02 Alertas — terminal con logs
    `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="feat-svg">
    <rect x="20" y="20" width="280" height="180" rx="4" fill="rgba(0,255,159,0.03)" stroke="rgba(0,255,159,0.2)" stroke-width="1"/>
    <rect x="20" y="20" width="280" height="28" rx="4" fill="rgba(0,255,159,0.08)"/>
    <circle cx="40" cy="34" r="5" fill="#ff0066" opacity="0.8"/>
    <circle cx="58" cy="34" r="5" fill="rgba(255,255,255,0.2)"/>
    <circle cx="76" cy="34" r="5" fill="rgba(255,255,255,0.2)"/>
    <text x="100" y="39" font-size="9" fill="rgba(0,255,159,0.5)" font-family="monospace">fim-monitor — bash</text>
    <text x="35" y="72" font-size="10" fill="rgba(0,255,159,0.4)" font-family="monospace">$ aide --check --config=/etc/aide.conf</text>
    <text x="35" y="92" font-size="10" fill="#ff0066" font-family="monospace">⚠  MODIFIED: /etc/passwd</text>
    <text x="35" y="110" font-size="10" fill="#ff0066" font-family="monospace">⚠  MODIFIED: /etc/ssh/sshd_config</text>
    <text x="35" y="128" font-size="10" fill="rgba(0,212,255,0.8)" font-family="monospace">+  NEW: /etc/cron.d/backdoor</text>
    <text x="35" y="146" font-size="10" fill="rgba(0,255,159,0.6)" font-family="monospace">✓  OK: /etc/hosts</text>
    <text x="35" y="164" font-size="10" fill="rgba(0,255,159,0.6)" font-family="monospace">✓  OK: /etc/fstab</text>
    <text x="35" y="182" font-size="10" fill="rgba(255,255,255,0.3)" font-family="monospace">Sending alerts via WebSocket...</text>
    <rect x="35" y="188" width="8" height="12" fill="#00ff9f" opacity="0.8"/>
  </svg>`,

    // 03 Timeline — línea de tiempo
    `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="feat-svg">
    <line x1="40" y1="110" x2="280" y2="110" stroke="rgba(0,255,159,0.2)" stroke-width="1"/>
    <circle cx="70" cy="110" r="6" fill="#00ff9f" opacity="0.9"/>
    <line x1="70" y1="110" x2="70" y2="75" stroke="rgba(0,255,159,0.4)" stroke-width="1" stroke-dasharray="3,3"/>
    <rect x="30" y="50" width="80" height="22" rx="2" fill="rgba(0,255,159,0.08)" stroke="rgba(0,255,159,0.3)" stroke-width="0.5"/>
    <text x="70" y="65" font-size="8" fill="#00ff9f" font-family="monospace" text-anchor="middle">09:14 MODIFIED</text>
    <circle cx="140" cy="110" r="6" fill="#ff0066" opacity="0.9"/>
    <line x1="140" y1="110" x2="140" y2="148" stroke="rgba(255,0,102,0.4)" stroke-width="1" stroke-dasharray="3,3"/>
    <rect x="100" y="148" width="80" height="22" rx="2" fill="rgba(255,0,102,0.08)" stroke="rgba(255,0,102,0.3)" stroke-width="0.5"/>
    <text x="140" y="163" font-size="8" fill="#ff0066" font-family="monospace" text-anchor="middle">09:22 CRITICAL</text>
    <circle cx="210" cy="110" r="6" fill="rgba(0,212,255,0.9)"/>
    <line x1="210" y1="110" x2="210" y2="75" stroke="rgba(0,212,255,0.4)" stroke-width="1" stroke-dasharray="3,3"/>
    <rect x="170" y="50" width="80" height="22" rx="2" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.3)" stroke-width="0.5"/>
    <text x="210" y="65" font-size="8" fill="#00d4ff" font-family="monospace" text-anchor="middle">09:31 NEW FILE</text>
    <circle cx="265" cy="110" r="4" fill="rgba(0,255,159,0.4)"/>
    <text x="40" y="195" font-size="8" fill="rgba(255,255,255,0.2)" font-family="monospace">HOY — 3 eventos detectados</text>
  </svg>`,

    // 04 Multiplataforma — ventanas OS
    `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="feat-svg">
    <rect x="20" y="30" width="130" height="90" rx="4" fill="rgba(0,255,159,0.05)" stroke="rgba(0,255,159,0.25)" stroke-width="1"/>
    <rect x="20" y="30" width="130" height="18" rx="4" fill="rgba(0,255,159,0.1)"/>
    <text x="85" y="43" font-size="7" fill="rgba(0,255,159,0.6)" font-family="monospace" text-anchor="middle">Windows</text>
    <rect x="170" y="30" width="130" height="90" rx="4" fill="rgba(0,255,159,0.05)" stroke="rgba(0,255,159,0.25)" stroke-width="1"/>
    <rect x="170" y="30" width="130" height="18" rx="4" fill="rgba(0,255,159,0.1)"/>
    <text x="235" y="43" font-size="7" fill="rgba(0,255,159,0.6)" font-family="monospace" text-anchor="middle">macOS</text>
    <rect x="95" y="130" width="130" height="90" rx="4" fill="rgba(0,255,159,0.05)" stroke="rgba(0,255,159,0.25)" stroke-width="1"/>
    <rect x="95" y="130" width="130" height="18" rx="4" fill="rgba(0,255,159,0.1)"/>
    <text x="160" y="143" font-size="7" fill="rgba(0,255,159,0.6)" font-family="monospace" text-anchor="middle">Linux</text>
    <text x="85" y="80" font-size="20" fill="rgba(0,255,159,0.15)" font-family="monospace" text-anchor="middle">⊞</text>
    <text x="235" y="80" font-size="20" fill="rgba(0,255,159,0.15)" font-family="monospace" text-anchor="middle"></text>
    <text x="160" y="178" font-size="20" fill="rgba(0,255,159,0.15)" font-family="monospace" text-anchor="middle">🐧</text>
    <line x1="150" y1="75" x2="170" y2="75" stroke="rgba(0,255,159,0.3)" stroke-width="1" stroke-dasharray="3,2"/>
    <line x1="160" y1="120" x2="160" y2="130" stroke="rgba(0,255,159,0.3)" stroke-width="1" stroke-dasharray="3,2"/>
  </svg>`,

    // 05 AIDE — escudo con hash
    `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="feat-svg">
    <path d="M160 30 L220 55 L220 120 C220 155 160 185 160 185 C160 185 100 155 100 120 L100 55 Z" fill="rgba(0,255,159,0.05)" stroke="rgba(0,255,159,0.3)" stroke-width="1.5"/>
    <path d="M160 45 L205 65 L205 118 C205 145 160 168 160 168 C160 168 115 145 115 118 L115 65 Z" fill="none" stroke="rgba(0,255,159,0.1)" stroke-width="1"/>
    <text x="160" y="95" font-size="9" fill="rgba(0,255,159,0.5)" font-family="monospace" text-anchor="middle">SHA-256</text>
    <text x="160" y="110" font-size="7" fill="rgba(0,255,159,0.35)" font-family="monospace" text-anchor="middle">a3f8c2d1e9b4...</text>
    <text x="160" y="123" font-size="7" fill="rgba(0,255,159,0.35)" font-family="monospace" text-anchor="middle">7f2e1a9c4b8d...</text>
    <text x="160" y="145" font-size="8" fill="#00ff9f" font-family="monospace" text-anchor="middle">AIDE 0.18.6</text>
    <circle cx="160" cy="75" r="3" fill="#00ff9f" opacity="0.6"/>
  </svg>`,

    // 06 Instalación — terminal con progreso
    `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="feat-svg">
    <rect x="20" y="20" width="280" height="180" rx="4" fill="rgba(0,255,159,0.03)" stroke="rgba(0,255,159,0.2)" stroke-width="1"/>
    <rect x="20" y="20" width="280" height="28" rx="4" fill="rgba(0,255,159,0.08)"/>
    <text x="100" y="39" font-size="9" fill="rgba(0,255,159,0.5)" font-family="monospace">install.sh</text>
    <text x="35" y="68" font-size="9" fill="rgba(0,255,159,0.4)" font-family="monospace">$ sudo bash install.sh</text>
    <text x="35" y="86" font-size="9" fill="rgba(255,255,255,0.5)" font-family="monospace">[✓] Instalando AIDE...</text>
    <text x="35" y="102" font-size="9" fill="rgba(255,255,255,0.5)" font-family="monospace">[✓] Configurando systemd...</text>
    <text x="35" y="118" font-size="9" fill="rgba(255,255,255,0.5)" font-family="monospace">[✓] Inicializando base de datos...</text>
    <text x="35" y="134" font-size="9" fill="#00ff9f" font-family="monospace">[→] Backend URL: 192.168.1.135:8080</text>
    <rect x="35" y="150" width="250" height="6" rx="3" fill="rgba(255,255,255,0.05)"/>
    <rect x="35" y="150" width="210" height="6" rx="3" fill="rgba(0,255,159,0.4)"/>
    <text x="35" y="175" font-size="9" fill="rgba(0,255,159,0.7)" font-family="monospace">Instalación completada ✓</text>
  </svg>`,
]

export function createFeatures() {
    const items = [
        { num: '01', title: 'Grafo interactivo', desc: 'Visualiza el árbol de directorios como nodos con color por severidad. Zoom, pan y filtros en tiempo real.', tag: 'Visualización' },
        { num: '02', title: 'Alertas en tiempo real', desc: 'WebSocket/STOMP broadcast instantáneo de cada cambio detectado por AIDE en tu servidor Linux.', tag: 'WebSocket' },
        { num: '03', title: 'Línea de tiempo', desc: 'Navega los eventos FIM por fecha, tipo y severidad. Filtra por ruta o rango temporal.', tag: 'Análisis' },
        { num: '04', title: 'Multiplataforma', desc: 'App Flutter que corre en Windows, macOS y Linux. Conecta con cualquier servidor configurado.', tag: 'Flutter' },
        { num: '05', title: 'Motor AIDE', desc: 'Basado en AIDE 0.18.6 GPL v2. Robusto, probado y sin dependencias de agentes propietarios.', tag: 'Open Source' },
        { num: '06', title: 'Instalación sencilla', desc: 'Script bash para el servidor y app cliente autocontenida. Configura en minutos con el wizard interactivo.', tag: 'DevOps' },
    ]

    return `
    <section id="features">
      <div class="features-inner">
        <div class="section-header">
          <p class="section-label">// 01 — Características</p>
          <h2 class="section-title">Todo lo que necesitas<br>para auditoría FIM</h2>
        </div>
      </div>

      <div class="feat-cards">
        ${items.map((item, i) => `
          <div class="feat-big-card ${i % 2 === 1 ? 'reverse' : ''}">
            <div class="feat-big-text">
              <div class="feat-big-meta">
                <span class="feat-big-num">${item.num}</span>
                <span class="feat-tag">${item.tag}</span>
              </div>
              <h3 class="feat-big-title">${item.title}</h3>
              <p class="feat-big-desc">${item.desc}</p>
            </div>
            <div class="feat-big-visual">
              ${visuals[i]}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `
}

export function animateFeatures() {
    gsap.from('#features .section-header', {
        scrollTrigger: { trigger: '#features .section-header', start: 'top 80%' },
        y: 60, opacity: 0, duration: 0.9, ease: 'power3.out'
    })

    document.querySelectorAll('.feat-big-card').forEach((card, i) => {
        const reverse = card.classList.contains('reverse')
        const text = card.querySelector('.feat-big-text')
        const visual = card.querySelector('.feat-big-visual')

        gsap.from(text, {
            scrollTrigger: { trigger: card, start: 'top 80%' },
            x: reverse ? 80 : -80,
            opacity: 0, duration: 0.9, ease: 'power3.out'
        })
        gsap.from(visual, {
            scrollTrigger: { trigger: card, start: 'top 80%' },
            x: reverse ? -80 : 80,
            opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.15
        })
    })
}