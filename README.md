# Blume Playground

Beispiel-Projekt für [Blume](https://useblume.dev/docs), ein Markdown-first Dokumentations-Framework auf Basis von Astro und Vite: Markdown/MDX in `content/` ablegen, Blume generiert daraus eine fertige Docs-Site mit Navigation, Suche, Theming und Komponenten-Bibliothek.

**Local Dev:** http://localhost:4321

**Deployment:** https://cbossi.github.io/blume-playground/

## Verwendung

```bash
npm install
npm run dev      # Dev-Server mit Hot Reload (http://localhost:4321)
npm run build    # Statischer Build nach dist/
npm run doctor   # Projekt auf Probleme prüfen
```

## Struktur

```txt
├── blume.config.ts   → Titel, Beschreibung, Deployment (base path für GitHub Pages)
├── content/          → alle Doku-Seiten (Markdown/MDX)
│   ├── index.mdx
│   ├── quickstart.mdx
│   └── guides/       → Sidebar-Gruppe, konfiguriert via meta.ts
└── .github/workflows/deploy.yml → Build & Deploy auf GitHub Pages
```

Die Beispiel-Inhalte zeigen die wichtigsten Blume-Features: Frontmatter, Callouts, Code-Blöcke, Mermaid-Diagramme, eingebaute MDX-Komponenten (Cards, Steps, Tabs, Accordions, …) und Sidebar-Konfiguration über `meta.ts`.

## Deployment

Der GitHub-Actions-Workflow baut die Seite und deployt sie auf GitHub Pages (manuell auslösbar über den Actions-Tab). Der base path `/blume-playground` wird nur im Workflow-Build gesetzt (`DEPLOY_TARGET=github-pages`), lokale Builds laufen unter `/`.
