---
title: "ISU Agent"
titleHtml: "ISU <em>Agent</em>"
tagline: "Multimodaler Offline-KI-Agent mit sieben Gesichtern."
num: "02"
version: "v2.46"
status: "Aktiv"
platforms: ["Windows", "Android"]
tech: ["Flutter", "Gemma 4 E2B", "llama.cpp", "MediaPipe", "Obsidian Vault"]
description: "Multimodaler Offline-KI-Agent (Flutter). 7 Screens: Chat, Voice-Call, 360°-Vision, Live-Translator P2P, Obsidian-Vault-Memory."
highlights:
  - "7 aktive Screens — Chat, Call, Translator, Vision, Memory, Settings"
  - "Hybrid-Inferenz: Gemma offline + optional OpenAI/Gemini/Claude"
  - "11 Themes — Aurora, Midnight Ember, Terminal, Paper, …"
  - "Speaker + Face Verification (opt-in, ONNX-basiert)"
  - "360°-Raum-Scan für Sprachlernen"
featured: false
order: 1
gallery:
  - src: "/projects/isu-agent/01.png"
    alt: "ISU Agent · Screenshot 1"
  - src: "/projects/isu-agent/02.png"
    alt: "ISU Agent · Screenshot 2"
  - src: "/projects/isu-agent/03.png"
    alt: "ISU Agent · Screenshot 3"
  - src: "/projects/isu-agent/04.png"
    alt: "ISU Agent · Screenshot 4"
  - src: "/projects/isu-agent/05.png"
    alt: "ISU Agent · Screenshot 5"
  - src: "/projects/isu-agent/06.png"
    alt: "ISU Agent · Screenshot 6"
---

## Was ISU Agent ist

Die Keimzelle, aus der KIPP geforkt wurde. Ein multimodaler KI-Agent für Windows und Android, der Chat, Sprache, Kamera und Memory in einem Interface zusammenbringt — und dabei standardmäßig vollständig offline läuft.

## Sieben Screens

- **Chat** — Multi-Session, Streaming-Ausgabe, Datei-Anhänge, Push-to-Talk, Memory-Integration
- **Call** — Voice-First mit animiertem Avatar, Lipsync, Auto-Listen-Loop und Consultant-Mode
- **Translator** — 11 Sprachpaare, Stilvarianten, Auto-Speak, Auto-Listen
- **Live Translator** — Peer-to-peer zwischen Geräten via UDP + TCP oder Google Nearby (BLE + WiFi-Direct)
- **Vision** — Live-Kamera mit Gemini/GPT/Gemma, Vocab-Overlay, CEFR-Stufen (A1–C2), 360°-Scan
- **Memory** — Browser für Classic-Memory, Obsidian-Vault oder Hybrid
- **Settings** — 5 Kategorien: Theme, Provider, Audio, Memory, Skills

## Hybrid-Inferenz

Gemma 4 E2B läuft standardmäßig lokal — auf Desktop via llama.cpp mit Vulkan, auf Android via MediaPipe LiteRT (~10× schnellerer First-Token als vergleichbare Stacks). Cloud-Provider lassen sich per `@gemma`, `@gpt`, `@gemini`, `@claude` pro Nachricht oder als Default-Backend umschalten.

## Design-System

11 handgemischte Themes, keine System-Dark/Light-Koppelung. Von **Aurora** (iridescentes Violett-Cyan) über **Terminal** (Phosphor-Grün) bis **Paper** (WCAG AAA Reader-Theme) und **Sonnengelb** (Mercedes-AMG-Gelb auf Obsidian). Zusätzlich 9 Call-Avatare von ASCII-Terminal bis GLSL-Liquid-Blob.

## Skill-aware Orchestrator

11 Skills (Code-Dev, Frontend-Designer, Web-Recherche, …), 8 Tools (`save_file`, `read_file`, `web_search`, `generate_image`, `set_avatar`, …). Der Orchestrator routet Prompts regel-basiert zum passenden Provider mit dem zugehörigen Tool-Subset.

## Benutzer-Erkennung (opt-in)

Optionaler Speaker + Face Verification via ONNX (CAM++ für Stimme, OpenCV SFace für Gesicht). Drei-Wege-Verdict: **owner** / **guest** / **needsFace**. Fremde Stimmen landen im Gast-Modus ohne Memory- oder Vault-Zugriff. Modelle werden auf Klick aus den Settings heruntergeladen (nicht in der APK gebündelt), solange kein Download erfolgt, läuft alles im Mock-Modus mit Warn-Banner.

## Vision mit 360°-Raum-Scan

Der User hält das Handy senkrecht und dreht sich langsam im Kreis. Alle 20° Rotation wird ein JPEG gegrabbt und per TFLite-EfficientDet-Lite0 analysiert. Jedes erkannte Objekt bekommt als `WorldChip` ein Kompass-Bearing — nach dem Scan kleben die Zielsprache-Chips live im Kamera-Feed an der Stelle, wo das Objekt physisch steht. Optional parallel eine KI-Analyse (Gemma / Gemini / GPT) für offenes Vokabular jenseits der 80 COCO-Klassen.

## Einsatzszenarien

**Privat (B2C).** Persönlicher KI-Assistent mit vollständiger Offline-Option — kein Abo, keine Cloud-Speicherung, keine Trainings-Rückflüsse. Für Journalist:innen, Autor:innen, Forschende und Entwickler:innen, die Datenhoheit priorisieren. Sprach-Memos werden live transkribiert und nach Obsidian-Struktur organisiert; der 360°-Raum-Scan arbeitet als persönliches Vokabeltraining beim Reisen oder im Homeoffice.

**Kanzlei, Praxis, Beratung (B2B).** Interner Agent für Anwaltskanzleien, Arztpraxen und Beratungshäuser, bei denen Mandanten- oder Patientendaten das Haus nicht verlassen dürfen. Der Live-Translator ermöglicht mehrsprachige Klienten-Gespräche ohne Dritt-Tools. Speaker- und Face-Verification ergänzen oder ersetzen klassische Login-Flows auf Team-Tablets.

## Version 2.46

Seit Frühjahr 2026 aktiv weiterentwickelt. 47.000+ Zeilen Flutter/Dart im Hauptrepo — aus diesem Code entstand KIPP als Fork mit Demenz-Fokus.
