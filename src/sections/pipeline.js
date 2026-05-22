import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export function createPipeline() {
    return `
    <section id="pipeline">
      <div class="pipeline-inner">

<div class="section-header anim-fade-up">
          <p class="section-label">// 02 — Arquitectura</p>
          <h2 class="section-title">Tres componentes,<br>un pipeline</h2>
          <p class="pipeline-subtitle">Cada capa tiene una responsabilidad clara. El agente detecta, el backend procesa, el cliente visualiza.</p>
        </div>

        <div class="pipeline-flow">

            <div class="pipe-step" data-step="0">
            <div class="pipe-step-left">
              <div class="pipe-badge">Capa 01</div>
              <h3 class="pipe-title">Agente Python</h3>
              <p class="pipe-desc">Ejecuta AIDE sobre el sistema Linux monitorizado. Parsea los cambios detectados y los envía al backend vía REST con metadatos completos: hash SHA-256, permisos, tamaño y tipo de evento.</p>
              <div class="pipe-tech-list">
                <span class="pipe-tech">Python 3</span>
                <span class="pipe-tech">AIDE 0.18.6</span>
                <span class="pipe-tech">hashlib</span>
                <span class="pipe-tech">REST</span>
              </div>
            </div>
            <div class="pipe-step-right">
              <div class="pipe-terminal">
                <div class="pipe-terminal-bar">
                  <span class="t-dot red"></span>
                  <span class="t-dot"></span>
                  <span class="t-dot"></span>
                  <span class="t-title">fim_agent.py</span>
                </div>
                <div class="pipe-terminal-body">
                  <p><span class="t-comment"># Ejecutar AIDE y parsear eventos</span></p>
                  <p><span class="t-key">def</span> <span class="t-fn">run_check</span>():</p>
                  <p class="t-indent">result = <span class="t-fn">aide_runner</span>.run()</p>
                  <p class="t-indent">events = <span class="t-fn">parse_events</span>(result)</p>
                  <p class="t-indent"><span class="t-key">for</span> event <span class="t-key">in</span> events:</p>
                  <p class="t-indent2"><span class="t-fn">send_to_backend</span>(event)</p>
                  <p>&nbsp;</p>
                  <p><span class="t-comment"># SHA-256 para ficheros nuevos</span></p>
                  <p><span class="t-green">▶ Enviando 3 eventos...</span></p>
                </div>
              </div>
            </div>
          </div>

          <div class="pipe-connector">
            <div class="pipe-connector-line"></div>
            <div class="pipe-connector-dot"></div>
            <span class="pipe-connector-label">HTTP POST /api/eventos</span>
          </div>

          <div class="pipe-step" data-step="1">
            <div class="pipe-step-left">
              <div class="pipe-terminal">
                <div class="pipe-terminal-bar">
                  <span class="t-dot red"></span>
                  <span class="t-dot"></span>
                  <span class="t-dot"></span>
                  <span class="t-title">FimService.java</span>
                </div>
                <div class="pipe-terminal-body">
                  <p><span class="t-key">public</span> Alert <span class="t-fn">processEvent</span>(EventoDTO dto) {</p>
                  <p class="t-indent">FileEntry entry = <span class="t-fn">buildEntry</span>(dto);</p>
                  <p class="t-indent">Severity sev = <span class="t-fn">evaluate</span>(entry);</p>
                  <p class="t-indent">Alert alert = <span class="t-fn">createAlert</span>(entry, sev);</p>
                  <p class="t-indent">alertRepo.<span class="t-fn">save</span>(alert);</p>
                  <p class="t-indent"><span class="t-green">// Broadcast WebSocket</span></p>
                  <p class="t-indent">broker.<span class="t-fn">broadcast</span>(alert);</p>
                  <p class="t-indent"><span class="t-key">return</span> alert;</p>
                  <p>}</p>
                </div>
              </div>
            </div>
            <div class="pipe-step-right">
              <div class="pipe-badge">Capa 02</div>
              <h3 class="pipe-title">Spring Boot Backend</h3>
              <p class="pipe-desc">Recibe los eventos, evalúa severidad, persiste en SQLite y difunde por WebSocket/STOMP a todos los clientes conectados en tiempo real.</p>
              <div class="pipe-tech-list">
                <span class="pipe-tech">Java 21</span>
                <span class="pipe-tech">Spring Boot 4</span>
                <span class="pipe-tech">SQLite</span>
                <span class="pipe-tech">STOMP</span>
              </div>
            </div>
          </div>

          <div class="pipe-connector">
            <div class="pipe-connector-line"></div>
            <div class="pipe-connector-dot"></div>
            <span class="pipe-connector-label">WebSocket / STOMP broadcast</span>
          </div>

          <div class="pipe-step" data-step="2">
            <div class="pipe-step-left">
              <div class="pipe-badge">Capa 03</div>
              <h3 class="pipe-title">App Flutter</h3>
              <p class="pipe-desc">Recibe los eventos en directo y los renderiza como grafo interactivo con CustomPainter. BLoC pattern para gestión de estado. Línea de tiempo con filtros avanzados.</p>
              <div class="pipe-tech-list">
                <span class="pipe-tech">Flutter 3</span>
                <span class="pipe-tech">Dart</span>
                <span class="pipe-tech">BLoC</span>
                <span class="pipe-tech">CustomPainter</span>
              </div>
            </div>
            <div class="pipe-step-right">
              <div class="pipe-terminal">
                <div class="pipe-terminal-bar">
                  <span class="t-dot red"></span>
                  <span class="t-dot"></span>
                  <span class="t-dot"></span>
                  <span class="t-title">graph_bloc.dart</span>
                </div>
                <div class="pipe-terminal-body">
                  <p><span class="t-key">on</span>&lt;WsAlertReceived&gt;((event, emit) {</p>
                  <p class="t-indent"><span class="t-key">final</span> node = <span class="t-fn">buildNode</span>(event.alert);</p>
                  <p class="t-indent">nodes.<span class="t-fn">add</span>(node);</p>
                  <p class="t-indent"><span class="t-fn">emit</span>(GraphLoaded(nodes));</p>
                  <p>});</p>
                  <p>&nbsp;</p>
                  <p><span class="t-comment">// Nodo CRÍTICO recibido</span></p>
                  <p><span class="t-green">▶ /etc/passwd — ALTA</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}
export function animatePipeline() {

}