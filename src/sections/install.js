import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function createInstall() {
    return `
    <section id="install">
      <div class="install-inner">

        <div class="section-header anim-fade-up">
          <p class="section-label">// 05 — Instalación</p>
          <h2 class="section-title">En marcha<br>en minutos</h2>
          <p class="install-subtitle">Dos paquetes independientes. Uno para el servidor Linux, otro para el cliente de escritorio o móvil.</p>
        </div>

        <div class="install-grid">

          <div class="install-card anim-fade-left" id="install-server">
            <div class="install-card-header">
              <div class="install-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <div>
                <p class="install-card-label">Paquete 01</p>
                <h3 class="install-card-title">Servidor</h3>
              </div>
            </div>
            <p class="install-card-desc">Instala el agente Python y el backend Spring Boot en tu servidor Linux con un solo script interactivo. Sin descargar ZIPs — directo desde GitHub.</p>

            <div class="install-steps">
              <div class="install-step">
                <span class="install-step-num">1</span>
                <div>
                  <p class="install-step-title">Descarga el script instalador</p>
                  <div class="code-block">
                    <code>wget https://raw.githubusercontent.com/AngelMaroto/TFG-FIM-Grafico/main/install.sh</code>
                    <button class="copy-btn" data-copy="wget https://raw.githubusercontent.com/AngelMaroto/TFG-FIM-Grafico/main/install.sh">⧉</button>
                  </div>
                </div>
              </div>
              <div class="install-step">
                <span class="install-step-num">2</span>
                <div>
                  <p class="install-step-title">Ejecuta el instalador con permisos root</p>
                  <div class="code-block">
                    <code>sudo bash install.sh</code>
                    <button class="copy-btn" data-copy="sudo bash install.sh">⧉</button>
                  </div>
                </div>
              </div>
              <div class="install-step">
                <span class="install-step-num">3</span>
                <div>
                  <p class="install-step-title">El wizard configura todo automáticamente</p>
                  <p class="install-step-desc">Instala dependencias, descarga el código, genera los ficheros de configuración de forma interactiva y configura los servicios systemd.</p>
                </div>
              </div>
            </div>

            <div class="install-card-footer">
              <span class="install-req">Ubuntu 20.04+ / Debian 11+</span>
              <span class="install-req">Python 3.8+</span>
              <span class="install-req">Java 21+</span>
            </div>
          </div>

          <div class="install-card anim-fade-right" id="install-client">
            <div class="install-card-header">
              <div class="install-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
                </svg>
              </div>
              <div>
                <p class="install-card-label">Paquete 02</p>
                <h3 class="install-card-title">Cliente</h3>
              </div>
            </div>
            <p class="install-card-desc">App Flutter autocontenida para Windows y Android. Solo introduce la URL del backend al arrancar por primera vez.</p>

            <div class="install-steps">
              <div class="install-step">
                <span class="install-step-num">1</span>
                <div>
                  <p class="install-step-title">Descarga la app para tu plataforma</p>
                  <div class="install-os-btns">
                    <button class="os-btn" onclick="window.open('https://github.com/AngelMaroto/TFG-FIM-Grafico/releases/download/v1.0.0/fim-monitor-windows.zip')">
                      Windows .zip
                    </button>
                    <button class="os-btn" onclick="window.open('https://github.com/AngelMaroto/TFG-FIM-Grafico/releases/download/v1.0.0/app-release.apk')">
                      Android .apk
                    </button>
                  </div>
                </div>
              </div>
              <div class="install-step">
                <span class="install-step-num">2</span>
                <div>
                  <p class="install-step-title">Windows — descomprime y ejecuta</p>
                  <p class="install-step-desc">Descomprime el ZIP y ejecuta <code style="color:var(--neon-green);font-size:0.8rem">fim_monitor_flutter.exe</code>. No requiere instalación.</p>
                </div>
              </div>
              <div class="install-step">
                <span class="install-step-num">3</span>
                <div>
                  <p class="install-step-title">Android — instala el APK</p>
                  <p class="install-step-desc">Activa "Instalar desde fuentes desconocidas" en ajustes y abre el APK descargado.</p>
                </div>
              </div>
              <div class="install-step">
                <span class="install-step-num">4</span>
                <div>
                  <p class="install-step-title">Introduce la URL del backend</p>
                  <div class="code-block">
                    <code>http://&lt;IP-SERVIDOR&gt;:8080</code>
                    <button class="copy-btn" data-copy="http://192.168.1.135:8080">⧉</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="install-card-footer">
              <span class="install-req">Windows 10+</span>
              <span class="install-req">Android 6.0+</span>
            </div>
          </div>

        </div>

        <div class="install-cta anim-fade-up">
          <p class="install-cta-text">¿Quieres ver todos los assets de la release? Encuéntralos en GitHub.</p>
          <button class="btn-primary" onclick="window.open('https://github.com/AngelMaroto/TFG-FIM-Grafico/releases/tag/v1.0.0')">
            Ver release v1.0.0 ↗
          </button>
        </div>

      </div>
    </section>
  `
}

export function animateInstall() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            navigator.clipboard.writeText(btn.dataset.copy)
            const original = btn.innerHTML
            btn.innerHTML = '✓'
            btn.style.color = '#00ff9f'
            setTimeout(() => {
                btn.innerHTML = original
                btn.style.color = ''
            }, 1500)
        })
    })
}