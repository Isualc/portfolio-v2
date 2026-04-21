# Claus Hierzer — Portfolio

Portfolio-Website von Claus Hierzer. Entwickelt mit [Astro](https://astro.build) 6 und Tailwind. Fokus: KI-Lösungen für den Pflegebereich, DSGVO-konform und offline-first.

Live: _(nach Vercel-Deploy hier URL eintragen)_

## Stack

- **Astro 6** — static output, keine SSR-Adapter
- **Tailwind 4** via `@tailwindcss/vite`
- **Content Collections** für Projektseiten (`src/content/projects/*.md`)
- **i18n** Deutsch + Englisch (`/` und `/en/`)
- Hosting: Vercel (static)

## Projektstruktur

```
src/
├── layouts/Base.astro              — HTML-Skelett, Font-Loader, Meta-Tags
├── components/
│   ├── Nav.astro, Footer.astro     — Navigation, Language-Toggle
│   ├── Hero.astro                  — Startseiten-Claim + KIPP-Hero-Bild
│   ├── TrustStrip.astro            — Vertrauensmerkmale (DSGVO, Offline, …)
│   ├── Principles.astro            — Vier Arbeitsprinzipien (editorial)
│   ├── StatsStrip.astro            — Kennzahlen-Streifen
│   ├── ProjectIndex.astro          — Projekt-Liste auf Startseite
│   ├── Carousel.astro              — Hero-Carousel auf Detail-Seiten
│   ├── Gallery.astro               — Grid + Lightbox auf Detail-Seiten
│   └── About.astro, Contact.astro  — About + Kontaktformular
├── content/
│   ├── projects/*.md               — 6 Projekt-Markdowns mit Frontmatter
│   └── … schema in ./content.config.ts
├── pages/
│   ├── index.astro                 — Startseite (DE)
│   ├── en/index.astro              — Startseite (EN)
│   └── projekte/[slug].astro       — Dynamische Detail-Seiten
└── styles/global.css               — Design-Tokens + alle Styles
```

## Scripts

```bash
npm run dev       # Dev-Server auf localhost:4321
npm run build     # Static Build nach /dist
npm run preview   # Preview des Builds
```

## Content pflegen

- **Text-Blöcke** (Hero, Prinzipien, About, Footer, Kontakt): in den entsprechenden `src/components/*.astro` direkt in der Locales-Map
- **Projekte:** eine Markdown-Datei pro Projekt in `src/content/projects/` — Frontmatter + Markdown-Body
- **Projekt-Screenshots:** nach `public/projects/<slug>/01.png`, `02.png`, … legen; Referenzen im Frontmatter `gallery:`

## Deployment (Vercel)

1. Repo auf GitHub pushen
2. [vercel.com/new](https://vercel.com/new) → „Import Git Repository" → dieses Repo auswählen
3. Framework-Preset wird automatisch auf **Astro** gesetzt
4. „Deploy" — Erstes Deploy fertig nach ~ 30 s

Custom Domain: Vercel-Dashboard → Settings → Domains → hinzufügen und DNS-Record (CNAME oder ALIAS) beim Registrar setzen.

## Lizenz

Privat / intern. Alle Rechte vorbehalten.
