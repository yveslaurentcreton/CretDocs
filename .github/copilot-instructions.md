# Copilot Instructions

Purpose: This public “digital garden” is built with Astro + Starlight and aggregates knowledge into typed content collections. Keep contributions public-safe (no secrets) and consistent with existing patterns.

## Big picture

- Stack: Astro 5 + @astrojs/starlight, TypeScript strict, content collections via `astro:content` Zod schemas.
- Entry points:
	- Config: `astro.config.mjs` (site/base, Starlight sidebar, Toolbox links)
	- Content model: `src/content/config.ts` (all collection schemas)
	- Aggregation pages: `src/pages/toolbox/**` (table renderers for collections)
	- Docs (Starlight): `src/content/docs/**` using `docsSchema()`
- Hosting: Configured `site: https://yveslaurentcreton.github.io` (GitHub Pages). Internal links in pages use `import.meta.env.BASE_URL` for correctness.

## Developer workflow

- Install: npm install (Node 18+ recommended)
- Dev: npm run dev  → local server with hot reload
- Typecheck/Build: npm run build (runs `astro check` then `astro build`)
- Preview static build: npm run preview
- Images: handled by `sharp` automatically via Astro.

## Content model (frontmatter contracts)

Defined in `src/content/config.ts`. Use these fields exactly; unknown fields are ignored by schema.
- technologies: { name: string; description?: string; externalLink?: string | null; render?: boolean | null }
	- Set `render: true` to generate a details page at `/toolbox/technologies/<slug>`.
- tools: { name; description?; externalLink?; alternativeTo?; render? }
- debianPackages: { name; category? }
- powershellModules: { name; type: 'pwsh' | 'dsc'; description?; externalLink? }
- nugetPackages, azuredatastudioExtensions, chromeExtensions, resources: { name; description?; externalLink? }
- vscodeExtensions: { name; description?; externalLink?; whenToUse?: string | null }

Examples (minimal):
```yaml
---
name: Serilog
description: Structured logging for .NET
externalLink: https://serilog.net
---
```
```yaml
---
name: PSReadLine
type: pwsh
description: Enhanced command line editing
externalLink: https://github.com/PowerShell/PSReadLine
---
```

## Pages and routing patterns

- Toolbox lists live in `src/pages/toolbox/*.astro` and render tables from collections via `getCollection()`.
- Technologies detail routing uses `src/pages/toolbox/technologies/[...slug].astro` with `getStaticPaths()` filtered by `data.render`.
- When building internal links in lists, prefer `${import.meta.env.BASE_URL}` prefixes (see `tools/index.astro`).

## UI components and conventions

- Use Starlight’s Tabs in OS-specific snippets via wrappers in `src/components/`:
	- `TabsOS.astro`, `TabItemWindows.astro`, `TabItemMacOS.astro`, `TabItemLinux.astro` (thin wrappers over Starlight components).
- External links in tables show an “external” icon: `<Icon name='external' size='1rem' />` pattern (see Toolbox pages).
- Assets: put global assets in `public/` (served as-is) and site images in `src/assets/`.

## Conventions and guardrails

- This is a public repo: do not add secrets, tokens, or private data.
- Keep frontmatter aligned to schemas; add fields only if added to `src/content/config.ts`.
- Maintain alphabetical sorting where present (e.g., tools/technologies tables sort by `data.name`).
- Prefer adding new knowledge as content entries over hard-coded pages; use `externalLink` instead of long descriptions when appropriate.
- If you adjust navigation, update Starlight `sidebar` and Toolbox links in `astro.config.mjs`.

## Quick add recipes

- New VS Code extension: add `src/content/vscodeExtensions/<name>.md` with `name`, `description`, optional `externalLink`, `whenToUse`.
- New technology with details page: add `src/content/technologies/<name>.md` with `render: true` and content body, it will appear at `/toolbox/technologies/<slug>` and in the index table.
- New PowerShell module: add `src/content/powershellModules/<name>.md` with `type: pwsh` or `dsc`.

Questions or gaps? Open an issue or suggest updates here; keep instructions concise and grounded in current files.
