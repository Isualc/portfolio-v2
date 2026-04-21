---
title: "getAIjob"
titleHtml: "getAI<em>job</em>"
tagline: "Harvard-Style CV, Anschreiben, Autofill und Bewerbungs-Tracking."
num: "04"
version: "v0.1.0"
status: "Aktiv"
platforms: ["Windows"]
tech: ["Flutter", "Dart", "Claude Code CLI", "Playwright", "PDF + DOCX-Export"]
description: "Flutter-Desktop-App für Bewerbungen. Harvard-Style CV (PDF + DOCX), Anschreiben, Multi-Portal-Jobsuche, Portal-Autofill und Tracking."
highlights:
  - "Harvard-Style CV aus Fragebogen ODER bestehendem CV-Upload"
  - 'Auf-Harvard-Style-umschreiben — Action + Kontext + Ergebnis'
  - "Export als PDF und DOCX (Arial, 2,5 cm Ränder)"
  - "Job-Suche über Indeed, Karriere.at, LinkedIn, Glassdoor"
  - "Portal-Autofill via Playwright — nie automatisch absenden"
  - "Bewerbungs-Tracking mit Status-Pipeline"
featured: false
order: 3
gallery:
  - src: "/projects/getaijob/01.png"
    alt: "getAIjob · Screenshot 1"
  - src: "/projects/getaijob/02.png"
    alt: "getAIjob · Screenshot 2"
  - src: "/projects/getaijob/03.png"
    alt: "getAIjob · Screenshot 3"
  - src: "/projects/getaijob/04.png"
    alt: "getAIjob · Screenshot 4"
  - src: "/projects/getaijob/05.png"
    alt: "getAIjob · Screenshot 5"
  - src: "/projects/getaijob/06.png"
    alt: "getAIjob · Screenshot 6"
  - src: "/projects/getaijob/07.png"
    alt: "getAIjob · Screenshot 7"
---

## Worum es geht

Als ich selbst 2024 bei CodersBay mit der Umschulung angefangen habe, war mir die bestehende Job-Suche in Österreich zu bruchstückhaft. AMS-Portal hier, karriere.at dort, LinkedIn noch einmal separat, und am Ende trotzdem manuelle Anschreiben, weil nichts wusste, was in meinem Lebenslauf stand. getAIjob ist der Versuch, den Bewerbungsprozess einmal strukturiert durchzubauen — aggregierte Suche, Matching-Score, Harvard-Style-Lebenslauf und eine klare Pipeline.

## Harvard-Style Lebenslauf

Zwei Eingabewege: ein **Fragebogen** mit acht Feldern (Claude generiert den Rest) oder ein **CV-Upload** als PDF, DOCX oder TXT. Liegt der hochgeladene Lebenslauf in anderem Stil vor, formuliert der Button **„Auf Harvard-Style umschreiben"** alle Bullet-Points nach Harvard-Standard neu:

- Action-Verben (entwickelt, geleitet, optimiert …)
- Keine Vollsätze, keine Pronomen
- Struktur: **Action + Kontext + Ergebnis** — mit Metriken wo möglich
- Reverse-chronologisch
- Deutsche Umlaute strikt (ä/ö/ü/ß) — nicht ae/oe/ue

Zwei Varianten werden automatisch erkannt: **Harvard-Resume** (Industry, 1 Seite) oder **Harvard-CV** (akademisch, mehrseitig) — basierend auf Publikationen und Lehrerfahrung im Profil. Manuell übersteuerbar.

Export als **PDF UND DOCX** in Arial, 2,5 cm Rändern, sauberen Sektionsüberschriften.

## Anschreiben

Passendes Anschreiben zu einer konkreten Stellenausschreibung in max. 1 Seite, 3-4 Absätzen. Keine Floskeln, keine Superlative, nur Fakten aus dem Profil.

## Job-Suche (Multi-Portal)

Claude durchsucht per **WebSearch** Indeed, Karriere.at, LinkedIn, Glassdoor und weitere und matched die Treffer gegen das Profil. Jeder Treffer kommt mit verifizierter URL, Passgenauigkeit und Begründung.

## Autofill auf Bewerbungsportalen

URL einer Bewerbungsseite einfügen — getAIjob öffnet den Browser (Playwright oder externes Chrome mit Claude-Addon) und füllt die Felder basierend auf dem Profil. **Sicherheit:** Die App drückt **niemals** automatisch „Bewerbung senden".

## Bewerbungs-Tracking

Alle laufenden Bewerbungen in einem Tab: Titel, Unternehmen, Standort, Datum, Status — Entwurf / Gesendet / Gespräch / Zusage / Absage / Zurückgezogen.

## Einsatzszenarien

**Jobsuchende, Berufswechsler (B2C).** Berufsumsteiger:innen und Absolvent:innen bauen in Minuten einen Harvard-Style-Lebenslauf aus einem bestehenden PDF oder einem 8-Felder-Fragebogen, schreiben Anschreiben pro Position und tracken Bewerbungen über die Pipeline — ohne Lebenslauf-Layout-Gefummel in Word.

**AMS, Karriere-Coaching, HR (B2B).** Arbeitsmarkt-Berater:innen und Karrierecoachs unterstützen ihre Klient:innen direkt in getAIjob: ein Tool, ein Prozess, reproduzierbares Qualitätslevel. HR-Teams können die Portal-Automation für interne Talent-Pools adaptieren; Outplacement-Dienstleister verkürzen die Time-to-Interview ihrer Kandidat:innen messbar.

## Harvard-Style — die harten Regeln

Erzwungen im System-Prompt:

**Bullet-Points**
- Starten mit Action-Verb
- Keine Vollsätze, keine Pronomen
- Action + Kontext + Ergebnis (mit Metriken wo möglich)
- Max. 25 Wörter

**Layout**
- Arial 10-12pt, Zeilenabstand 1,0-1,15, Ränder 2,5 cm
- Überschriften fett, Großbuchstaben oder Title Case
- Keine Farbverläufe, keine Fotos, keine Text-Boxen

**Reihenfolge (Resume)**
Kontakt → Summary → Bildung → Erfahrung → Skills → Sprachen → Sonstiges

## Claude-Integration

- **CLI (Default)** — Aufruf via `node.exe cli.js` statt `claude.cmd` (umgeht einen Windows-Batch-Parser-Bug bei Multiline-Prompts)
- Prompt via **stdin** (`--input-format text`), robust für Prompts jeder Länge
- System-Prompt via `--append-system-prompt` erzwingt Harvard-Regeln und Umlaut-Korrektheit
- Modell-Auswahl in den Einstellungen: Opus 4.7 (1M-Kontext für große CV-Überarbeitungen), Sonnet 4.6, Haiku 4.5 als schnelle Variante

## Bekannte Einschränkungen

| Thema                          | Status      | Hinweis                                            |
|--------------------------------|-------------|----------------------------------------------------|
| macOS / Linux                  | nicht       | Aktuell nur Windows                                |
| Vollautomatisches Autofill     | Skelett     | Playwright startet, Feld-Befüllung kommt in v0.2  |
| Job-Suche-Qualität             | abhängig    | Manche Portale blockieren WebSearch                |
| DOCX-Formatierung              | basic       | Arial, Bullets, Fett — keine erweiterten Stile     |
