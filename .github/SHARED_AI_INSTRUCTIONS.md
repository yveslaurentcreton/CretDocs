# Shared AI Instructions

This file contains shared documentation for AI assistants working with this repository. It is referenced by both `CLAUDE.md` and `.github/copilot-instructions.md` - keep all three files in sync.

## Project Overview

CretDocs is a public documentation site ("digital garden") built with Astro 5 and @astrojs/starlight. It aggregates knowledge, tools, and resources into typed content collections. Live at https://docs.creton.dev/

**This is a public repo**: do not add secrets, tokens, or private data.

## Commands

```bash
npm install          # Install dependencies (Node 18+)
npm run dev          # Start dev server with hot reload
npm run build        # TypeScript check + production build
npm run preview      # Preview built static site
```

## Architecture

**Stack**: Astro 5 + Starlight + TypeScript (strict) + Mermaid diagrams

**Key Files**:
- `astro.config.mjs` - Site config, Starlight sidebar, integrations
- `src/content/config.ts` - Zod schemas for all content collections

**Content Model**: 10 collections in `src/content/` with typed frontmatter:
- `docs/` - Starlight documentation (Introduction, Cheatsheets, Guides, Templates)
- `technologies/`, `tools/` - Support `render: true` for detail pages
- `vscodeExtensions/`, `nugetPackages/`, `powershellModules/`, `debianPackages/`, `chromeExtensions/`, `azuredatastudioExtensions/`, `resources/`

**Pages**:
- `src/pages/toolbox/*.astro` - Table views using `getCollection()`, sorted alphabetically by name
- `src/pages/toolbox/technologies/[...slug].astro` - Dynamic detail pages filtered by `data.render`

**Components**: `src/components/` contains OS-specific tab wrappers (`TabsOS.astro`, `TabItemWindows/MacOS/Linux.astro`)

## Content Patterns

Add new collection entries as `.md` files with frontmatter matching the schema in `config.ts`:

```yaml
---
name: Example
description: Optional description
externalLink: https://example.com  # Shows external icon in tables
render: true  # Only for technologies/tools - creates detail page
---
Optional body content (renders on detail page if render: true)
```

For `powershellModules`, include `type: pwsh` or `type: dsc`.

## Conventions

- Use `${import.meta.env.BASE_URL}` prefix for internal links in pages
- External links in tables use `<Icon name='external' size='1rem' />` pattern
- Keep frontmatter aligned to schemas - unknown fields are ignored
- Static assets go in `public/`, site images in `src/assets/`
- Update `astro.config.mjs` sidebar when adding new navigation items
- Maintain alphabetical sorting in tables (sorted by `data.name`)
- Prefer adding new knowledge as content entries over hard-coded pages

## Quick Add Recipes

- **New VS Code extension**: add `src/content/vscodeExtensions/<name>.md` with `name`, `description`, optional `externalLink`, `whenToUse`
- **New technology with details page**: add `src/content/technologies/<name>.md` with `render: true` and content body
- **New PowerShell module**: add `src/content/powershellModules/<name>.md` with `type: pwsh` or `dsc`
