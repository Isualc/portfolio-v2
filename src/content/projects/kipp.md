---
title: "KIPP"
titleHtml: "KIPP"
tagline: "Der Demenzbegleiter, der nie korrigiert."
num: "01"
version: "v1.0.0"
status: "Pilotbetrieb"
platforms: ["Windows", "Android"]
tech: ["Flutter", "Dart", "Gemma 4 E2B", "llama.cpp", "MediaPipe LiteRT"]
description: "Offline-KI-Begleiter für Menschen mit Demenz. Validation nach Naomi Feil, Retrogenese nach Reisberg. Windows & Android, 100 % on-device."
highlights:
  - "Validation nach Naomi Feil"
  - "Retrogenese-Modell (Reisberg GDS/FAST 1–7)"
  - "Peer-to-Peer Live-Translator (15 Sprachen)"
  - "Vereinfachen-Modus für Arztgespräche"
  - "100 % offline — keine Cloud, keine Telemetrie"
featured: false
order: 0
gallery:
  - src: "/projects/kipp/01.png"
    alt: "KIPP · Screenshot 1"
  - src: "/projects/kipp/02.png"
    alt: "KIPP · Screenshot 2"
  - src: "/projects/kipp/03.png"
    alt: "KIPP · Screenshot 3"
  - src: "/projects/kipp/04.png"
    alt: "KIPP · Screenshot 4"
---

## Warum KIPP existiert

Acht Jahre Demenzpflege haben mir gezeigt, was Menschen in dieser Phase brauchen: jemanden, der zuhört, ohne zu korrigieren. Die Tochter, die um 20:30 Uhr anruft, weil ihre Mutter sich nicht erinnert, wo sie ist. Die Pflegekraft, die einer Bewohnerin erklären soll, warum sie ihre schon verstorbenen Eltern nicht besuchen kommen. Für diese Situationen war nichts gemacht, was wir hatten.

KIPP ist kein Medizinprodukt, kein Ersatz für menschliche Betreuung. Es ist ein ruhiges Werkzeug, das im Hintergrund läuft und da ist, wenn es gebraucht wird.

## Die theoretische Basis

Zwei Säulen tragen jede Antwort.

**Validation nach Naomi Feil** — Gefühle werden nie korrigiert. Wenn eine Bewohnerin sagt, sie müsse heim zu ihrer Mutter, ist das ihre Wirklichkeit in diesem Moment. KIPP argumentiert nicht dagegen. Es fragt: „Erzählen Sie mir von Ihrer Mutter."

**Retrogenese-Modell nach Barry Reisberg** — sieben Phasen (GDS/FAST) beschreiben den Rückweg durch die Kognition. Für jede Phase passt KIPP Wortzahl, Fragetypen und Pausenlänge an.

## Reisberg-Phasen im Prompt

| Phase | Kognitiv               | Max. Wörter | Fragen                        | Pausen     |
|------:|------------------------|------------:|-------------------------------|------------|
|     1 | gesunder Erwachsener   |          15 | alle inkl. W-Fragen           | natürlich  |
|     2 | subjektives Vergessen  |          15 | 2-3 max                       | wenige     |
|     3 | Jugendlicher           |          10 | 1 Ja/Nein am Ende             | mehr       |
|     4 | 8-12-jähriges Kind     |          10 | max 1 Ja/Nein, **keine W**    | viele      |
|     5 | 5-7-jähriges Kind      |           7 | max 1 Ja/Nein                 | viele      |
|     6 | 2-4-jähriges Kind      |           5 | **keine**                     | lang       |
|     7 | Säugling (0-18 Mon.)   |         1-5 | **keine** — Alleinunterhalter | sehr lang  |

Default: Phase 4 (einstellbar in den Settings).

## Was auf dem Tablet läuft

- **Call-Screen** — Sprach-Gespräch mit VAD (Voice Activity Detection), pipelined TTS, mindestens 8 anpassbare Themes
- **Live-Translator P2P** — zwischen Angehörigen und Pflegenden, 15 Sprachen, offline über WLAN oder Bluetooth
- **Normal-Translator** mit „Vereinfachen"-Modus: Arztjargon → Alltagssprache → Zielsprache
- **Vision** — Anwesenheits- und Positionserkennung im Zimmer: Ist der Bewohner da oder nicht? Sitzt, steht, liegt im Bett — oder am Boden? Bei Sturz oder Abwesenheit zur Unzeit wird das Pflegepersonal informiert.
- **Memory** — eigens entwickeltes Memory-System für Biografie-Profile und Session-Logs. Keine Fremdabhängigkeit, keine Cloud, kein Vendor-Lock-in.

## Einsatzszenarien

**Zu Hause (B2C).** Angehörige nutzen KIPP auf einem Tablet im Wohnbereich — als ruhigen Begleiter für die Demenzerkrankte Mutter, den Vater, die Partnerin, wenn sie selbst gerade nicht am Platz sein können. Abendroutine, Vorlesen, Validation-Gespräche in phasengerechter Sprache, Übersetzung von Arztbriefen in Alltagssprache.

**In der Pflegeeinrichtung (B2B).** Stationäre Einrichtungen deployen KIPP auf zimmergebundenen Tablets. Die Vision-Komponente erkennt Anwesenheit und Position — fehlende Personen, Lage am Boden oder ungewöhnliche Dauer außerhalb des Betts lösen eine Benachrichtigung an das Pflegepersonal aus. Der Live-Translator senkt Sprachbarrieren in multilingual besetzten Teams. Alle Daten bleiben auf dem Gerät — das Haus behält die DSGVO-Kontrolle.

## Prompt-Architektur

Jede Antwort wird aus fünf Bausteinen zusammengesetzt:

| Baustein     | Quelle                             | Inhalt                                           |
|--------------|------------------------------------|--------------------------------------------------|
| 1. Rolle     | `KippPromptStore.base`             | Validation vor Realitätsorientierung             |
| 2. Regeln    | `KippPromptStore.regeln`           | Ton, Pausen, Satzlänge pro Phase                 |
| 3. Phase     | `KippPromptStore.phase(N)`         | Reisberg 1-7 — je nach Einstellung               |
| 4. Situation | `KippPromptStore.situation(...)`   | `zuhause` vs. `stationaer`                       |
| 5. Patient   | `PatientProfile.toPromptContext()` | Name, Anrede, Biografie                          |

## Technische Architektur

| Plattform  | Backend                          | Modell                   |
|------------|----------------------------------|--------------------------|
| Windows    | llamadart (llama.cpp + Vulkan)   | Gemma 4 E2B GGUF         |
| Android    | flutter_gemma (MediaPipe LiteRT) | Gemma 4 E2B `.task`      |
| Hardware   | Tablet ≥ 6 GB RAM                | Modell-Download ~4 GB    |

Cloud-Provider (OpenAI, Gemini, Anthropic) sind **optional** — KIPP ist als rein lokale App gedacht, damit Patient-Daten nie das Gerät verlassen.

## Hartcodierte Kernregeln

1. Validation vor Realitätsorientierung — nie korrigieren
2. Gefühle sind immer wahr, auch wenn Fakten nicht stimmen
3. Keine „warum?"-Fragen, kein Belehren, kein Bagatellisieren
4. Keine Emojis, kein Markdown — wird per TTS vorgelesen
5. Erwähnt nie, KI zu sein — KIPP ist „Ihr Begleiter"

## Was KIPP nicht ist

KIPP ersetzt keine medizinische Beratung und keine qualifizierte Pflege. Bei Krisen (Suizid-Äußerung, akute Symptome) muss eine echte Person übernehmen. KIPP ist kein Notfall-System — die Anwesenheitsmeldung ergänzt die Pflege, sie ersetzt sie nicht.
