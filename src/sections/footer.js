export function createFooter() {
    return `
    <footer id="footer">
      <div class="footer-inner">

        <div class="footer-top">
          <div class="footer-brand">
            <p class="footer-logo">FIM // Gráfico</p>
            <p class="footer-tagline">File Integrity Monitor para sistemas Linux.<br>Visualización en tiempo real de eventos AIDE.</p>
          </div>

          <div class="footer-links">
            <div class="footer-col">
              <p class="footer-col-title">Navegación</p>
              <ul>
                <li><a href="#features">Características</a></li>
                <li><a href="#pipeline">Arquitectura</a></li>
                <li><a href="#install">Instalación</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <p class="footer-col-title">Proyecto</p>
              <ul>
                <li><a href="https://github.com/AngelMaroto/TFG-FIM-Grafico" target="_blank">GitHub</a></li>
                <li><a href="https://github.com/AngelMaroto/TFG-FIM-Grafico/releases" target="_blank">Releases</a></li>
                <li><a href="https://github.com/AngelMaroto/TFG-FIM-Grafico/issues" target="_blank">Issues</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <p class="footer-col-title">Stack</p>
              <ul>
                <li><a href="https://aide.github.io/" target="_blank">AIDE 0.18.6</a></li>
                <li><a href="https://spring.io/projects/spring-boot" target="_blank">Spring Boot</a></li>
                <li><a href="https://flutter.dev" target="_blank">Flutter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <p class="footer-copy">© 2025 Ángel Maroto García</p>
            <p class="footer-tutor">Desarrollador multiplataforma</p>
          </div>
          <div class="footer-bottom-right">
            <span class="footer-status">
              <span class="footer-status-dot"></span>
              Open Source — GPL v2
            </span>
          </div>
        </div>

      </div>
    </footer>
  `
}