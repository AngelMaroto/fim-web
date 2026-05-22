# FIM Gráfico — File Integrity Monitor

> Visualiza tu filesystem Linux como un grafo interactivo en tiempo real.

🌐 **[fim-web.vercel.app](https://fim-web.vercel.app)**

---

## ¿Qué es FIM Gráfico?

FIM Gráfico es una aplicación multiplataforma de monitorización de integridad de archivos (FIM) para sistemas Linux. Convierte los eventos detectados por AIDE en un grafo de nodos interactivo con alertas en tiempo real vía WebSocket.

Desarrollado como TFG del ciclo DAM (IFC02S) — Ángel Maroto García.

## Stack

| Capa | Tecnología |
|---|---|
| Agente | Python 3 + AIDE 0.18.6 |
| Backend | Java 21 + Spring Boot 4 + SQLite |
| Cliente | Flutter 3 + Dart + BLoC |
| Comunicación | REST API + WebSocket/STOMP |

## Características

- 🔴 **Grafo interactivo** — árbol de directorios con color por severidad
- ⚡ **Tiempo real** — broadcast WebSocket de cada evento AIDE
- 📅 **Línea de tiempo** — filtra eventos por fecha, tipo y severidad
- 💻 **Multiplataforma** — Windows, Android (Flutter)
- 🛡️ **Motor AIDE** — SHA-256, permisos, detección NEW/MODIFIED/DELETED

## Instalación

### Servidor (Linux)

```bash
wget https://raw.githubusercontent.com/AngelMaroto/TFG-FIM-Grafico/main/install.sh
sudo bash install.sh
```

### Cliente

Descarga desde [Releases](https://github.com/AngelMaroto/TFG-FIM-Grafico/releases/tag/v1.0.0):

- **Windows** — `fim-monitor-windows.zip` → ejecuta `fim_monitor_flutter.exe`
- **Android** — `app-release.apk`

## Repositorio principal

El código fuente completo está en:
**[github.com/AngelMaroto/TFG-FIM-Grafico](https://github.com/AngelMaroto/TFG-FIM-Grafico)**

---
