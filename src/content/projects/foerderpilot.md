---
title: "Förderpilot"
titleHtml: "<em>Förder</em>pilot"
tagline: "Österreichische Förderanträge, halluzinationsfrei."
num: "03"
version: "v0.2.0"
status: "Aktiv"
platforms: ["Windows"]
tech: ["Flutter", "Dart", "Claude Code CLI", "Playwright", "Oracle APEX", "ASP.NET"]
description: "Desktop-Assistent für österreichische Förderanträge. Wählt nur aus einem geprüften Katalog — keine erfundenen Calls — und füllt FFG-, SFG- und aws-Portalformulare automatisch aus. Die Einreichung bleibt immer beim Nutzer."
highlights:
  - "Fördersuche aus kuratiertem JSON-Katalog (FFG, SFG, aws, EU)"
  - "5-Schritt-Antrags-Wizard"
  - "Portal-Automatisierung: Hybrid, Claude-in-Chrome, Playwright headful"
  - "Deutsche Umlaute hart im System-Prompt verankert"
  - "Nie automatisches Einreichen — User bestätigt manuell"
featured: false
order: 2
gallery:
  - src: "/projects/foerderpilot/01.png"
    alt: "Förderpilot · Screenshot 1"
  - src: "/projects/foerderpilot/02.png"
    alt: "Förderpilot · Screenshot 2"
  - src: "/projects/foerderpilot/03.png"
    alt: "Förderpilot · Screenshot 3"
---

## Worum es geht

Österreichische Förderanträge sind ein eigenes Handwerk. Förderungen finden, Kostenkategorien richtig aufteilen, Pflichtfelder mit den richtigen Texten füllen, Anhänge in genau dem Format hochladen, das das Portal will — das zieht Wochen. Förderpilot ist der Versuch, diesen Prozess strukturiert abzubilden, ohne Halluzination und ohne Lock-in.

## Fördersuche ohne Halluzination

Claude wählt **nur aus einem kuratierten JSON-Katalog** — frei erfundene Calls sind strukturell ausgeschlossen. Ein Live-Verifier prüft per Websuche, ob der Call aktuell noch offen ist. Der Katalog wird quartalsweise aktualisiert.

## Geführte Antragstellung

Fünf-Schritt-Wizard, in dem jeder Button genau einen vorbereiteten Prompt an Claude auslöst:

1. **Projektordner** — Drag & Drop für Businessplan, Kalkulationen, Lebensläufe, Patente
2. **Förderstelle** — aus den Suchergebnissen gewählt
3. **Projektdaten** — Claude extrahiert Stammdaten, Titel, Abstract, Rich-Text-Felder
4. **Prüfung** — Kostenaufteilung und Doppelförderungs-Check
5. **Einreichung** — Portal wird geöffnet, Claude füllt Felder — nie automatisch absenden

## Portal-Automatisierung

Drei Modi auswählbar:

- **Hybrid** (Default): Playwright öffnet Chromium, User kann übernehmen
- **Externes Chrome mit Claude-Addon**: wenn das „Claude in Chrome"-Addon installiert ist
- **Playwright headful**: vollständig automatisiert

Die Integration nutzt die dokumentierten Portal-Architekturen: **SFG (Oracle APEX)** via `apex.item().setValue()`-API, **FFG eCall (ASP.NET)** via DOM-Manipulation mit Postback-Handling.

## Deutsche Umlaute — immer korrekt

Der System-Prompt zwingt Claude zu echten Umlauten (ä/ö/ü/ß). Österreichische Förderportale lehnen ASCII-Ersatz (ae/oe/ue) teilweise ab oder werten ihn als Tippfehler. Hart im Prompt verankert.

## Einsatzszenarien

**Gründer:innen und Freiberufler (B2C).** Einzelunternehmer, Gründungsinteressierte und Freiberufler durchsuchen die österreichische Förderlandschaft, füllen FFG-, SFG- und aws-Anträge strukturiert aus und sparen mehrere tausend Euro an Beratungskosten — ohne ins Halluzinations-Risiko generischer KI-Tools zu laufen.

**Beratung, Kanzleien, Innovationsabteilungen (B2B).** Steuerberatungs- und WKO-Gründungsservice-Kanzleien nutzen Förderpilot als produktives Arbeitstool für ihre Mandant:innen. Unternehmensinterne F&E- und Innovationsabteilungen managen parallele Anträge mit klarer Kosten- und Nachweisaufteilung; der Doppelförderungs-Check verhindert Compliance-Probleme vor der Einreichung.

## Sicherheits-Prinzipien

- Förderpilot klickt **niemals** automatisch „Einreichen"
- Dateien verlassen den Rechner nicht (nur lokal an Claude CLI)
- Session-Tokens werden nicht geloggt

## Bekannte Einschränkungen

| Thema                       | Status                |
|-----------------------------|-----------------------|
| SFG-Datei-Upload (Dropzone) | manueller Upload      |
| FFG CAPTCHA-Login           | manuelles Login       |
| macOS / Linux               | nicht supported       |
| Mehrfach-Antrag parallel    | nicht unterstützt     |
