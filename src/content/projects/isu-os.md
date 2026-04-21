---
title: "ISU-OS"
titleHtml: "ISU-<em>OS</em>"
tagline: "Mini-Betriebssystem mit KI-Agent-Plattform — 40+ Apps."
num: "06"
version: "v2.13.0"
status: "Aktiv"
platforms: ["Windows", "macOS", "Linux"]
tech: ["Flutter", "Node.js Backend", "OpenClaw", "Whisper", "WireGuard", "Cloudflare Tunnel", "ElevenLabs"]
description: "Flutter-Desktop-Anwendung, die ein komplettes Betriebssystem simuliert und eine umfangreiche KI-Agent-Plattform integriert. Multi-Modell-Chat, KI-Videoanrufe, Code-IDEs, Bildgenerierung, KI-Radio — über 40 Apps."
highlights:
  - "Desktop-Shell mit Taskbar, Fenster-Management, Themes, Wallpaper"
  - "Multi-KI-Chat über OpenClaw (Claude, GPT, Gemini, Mistral, Qwen)"
  - "KI-Videoanrufe mit STT/TTS, Kamera und Emotion-Erkennung"
  - "Code-IDEs: Claude Code, Gemini Code, Open Code (remote via SSH)"
  - "WireGuard-VPN, SSH-Tunnel, Cloudflare-Tunnel"
  - "Retina-Scanner-Login mit Gesichtserkennung"
  - "ElevenLabs Media Studio: Voiceover, Musik, SFX, Audio-Isolation"
featured: false
order: 5
gallery:
  - src: "/projects/isu-os/01.png"
    alt: "ISU-OS · Screenshot 1"
  - src: "/projects/isu-os/02.png"
    alt: "ISU-OS · Screenshot 2"
  - src: "/projects/isu-os/03.png"
    alt: "ISU-OS · Screenshot 3"
  - src: "/projects/isu-os/04.png"
    alt: "ISU-OS · Screenshot 4"
  - src: "/projects/isu-os/05.png"
    alt: "ISU-OS · Screenshot 5"
  - src: "/projects/isu-os/06.png"
    alt: "ISU-OS · Screenshot 6"
  - src: "/projects/isu-os/07.png"
    alt: "ISU-OS · Screenshot 7"
  - src: "/projects/isu-os/08.png"
    alt: "ISU-OS · Screenshot 8"
---

## Was ISU-OS ist

ISU-OS ist eine Flutter-Desktop-Anwendung, die ein vollständiges Betriebssystem simuliert und eine umfangreiche KI-Agent-Plattform integriert. Die Anwendung verbindet sich mit einem selbst gehosteten Backend-Server und bietet über 40 integrierte Anwendungen — von Multi-Modell-Chat über Code-IDEs bis zu KI-Videoanrufen mit Emotionserkennung.

## Desktop-Shell

Wie ein echtes Betriebssystem — Taskbar, Fenster-Management, Wallpaper, helle und dunkle Themes mit anpassbaren Farben, Retina-Login zum Entsperren. Deutsch und Englisch. Mehrere Fenster gleichzeitig, verschiebbar, resizeable.

## Integrierte Anwendungen

### KI & Chat
- **Chat** — Multi-Modell über OpenClaw mit Markdown, Code-Highlighting, Medienunterstützung
- **Skill Chat** — mit spezialisierten KI-Agenten
- **Agents & Workflows** — Verwaltung, Ausführung, automatisierte Abläufe

### Videoanrufe
- **Video Call** — KI-Videoanruf mit Kamera, Mikrofon, Echtzeit-TTS/STT
- **Dementia Call** — spezieller Modus für Demenz-Assistenz
- **Social Helper** — Emotions-Erkennung (Kamera + Stimme) in Echtzeit
- **Translator Call** — Live-Übersetzung während des Anrufs

### Code & Entwicklung
- **Claude Code** (lokal oder API), **Gemini Code**, **Open Code** (im OpenClaw-Container)
- Remote-Varianten über SSH: **Claude Server**, **Gemini Server**
- **IDE** mit Syntax-Highlighting, Terminal (PowerShell/Bash) und Python-Auto-Indent
- **Notepad** als leichter Code-Editor

### Medien & Kreativ
- **Content Creator** — Multi-Plattform-Content mit KI-Text, Media Studio (Bild, Voiceover, Musik, SFX, Audio-Isolation), Social-Media-Accounts
- **Bildgenerierung** — Gemini, Imagen, OpenClaw
- **Galerie · Bildeditor · Medieneditor · Videoplayer · Recorder**
- **Voice Clone** — Stimmenklonen und TTS

### KI-Radio
- **Radio** — KI-moderiertes Radio mit DJ-Moderation zwischen Songs, YouTube-Download, Playlist-Verwaltung

### Produktivität
- **Dashboard, Taschenrechner, Tasks, Dateien, Downloader, Browser, Terminal, Telegram**

## Architektur

```
ISU-OS (Flutter Desktop)
    │
    ├── Direkte Verbindung (LAN)
    ├── SSH-Tunnel (verschlüsselt)
    ├── Cloudflare-Tunnel (öffentlich)
    └── WireGuard-VPN
            │
            ▼
    Backend-Server
            ├── ISU-OS API (REST + WebSocket)
            ├── OpenClaw (KI-Agent-Plattform)
            ├── Whisper STT Server
            ├── Voice Clone Server
            └── Ollama (lokale Modelle, optional)
```

## Verbindungsmodi

| Modus             | Beschreibung                                           |
|-------------------|--------------------------------------------------------|
| **Direkt (LAN)**  | Lokale IP-Adresse im selben Netzwerk                   |
| **SSH-Tunnel**    | Verschlüsselte Portweiterleitung über SSH              |
| **Cloudflare**    | Öffentlicher Zugang über Cloudflare Zero Trust         |
| **WireGuard VPN** | Verschlüsseltes VPN für sicheren Remote-Zugang         |

## KI-Modelle

Über API-Keys konfigurierbar:

- **Anthropic Claude** — Chat, Code, Videoanrufe, Content Creator
- **Google Gemini** — Chat, Code, Bildgenerierung, Emotionserkennung
- **OpenClaw** — Multi-Modell-Routing, eigene Modelle
- **ElevenLabs** — TTS, Voiceover, Musik, Sound-Effekte, Audio-Isolation

## Einsatzszenarien

**Tech-affine Privatpersonen (B2C).** Self-hosted KI-OS auf dem eigenen Heimserver — Zugriff von jedem Gerät via WireGuard-VPN oder Cloudflare-Tunnel. Eine datenschutzfreundliche Alternative zu ChatGPT Desktop, Claude Desktop oder Perplexity, ohne Abo-Kosten pro Modell und ohne Daten an Drittanbieter.

**IT-Häuser, Medienbüros, Agenturen (B2B).** Kleine IT-Firmen betreiben ISU-OS als internen KI-Arbeitsplatz für ihre Teams oder weißgelabelt für Endkund:innen. Medien- und Marketing-Agenturen nutzen den Content Creator mit ElevenLabs-Integration für Voiceover, Musik und Sound-Effekte direkt in einer Oberfläche. Der Retina-Login und die WireGuard-Kopplung lösen übliche Remote-Work-Sicherheitsprobleme mit.

## Sicherheit

- **WireGuard VPN** — verschlüsselte Tunnel-Verbindung
- **SSH-Tunnel** — Portweiterleitung über SSH
- **Cloudflare Tunnel** — Zero-Trust-Zugang ohne offene Ports
- **Retina Login** — Gesichtserkennung zum Entsperren
- **API-Key-Verwaltung** — lokale Speicherung in SharedPreferences
- Alle Verbindungen verschlüsselt (TLS / SSH / WireGuard)

## Technologie-Stack

**Client (Flutter Desktop)** — Provider für State, `media_kit` für Video, `just_audio` für Audio, `flutter_code_editor` + highlight, `camera`, `window_manager`, `fl_chart`, `flutter_animate`.

**Backend** — Node.js REST + WebSocket (ISU-OS API), OpenClaw als Docker-Plattform, Whisper STT, Voice Clone, optional Ollama für lokale LLMs, WireGuard, Cloudflare Tunnel.
