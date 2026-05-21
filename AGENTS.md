# Publieople Homepage

Personal homepage for 人民公仆 (Publieople).

## Tech Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- shadcn/ui (new-york style)
- magicui (animated components)
- framer-motion
- Source Sans 3 (Google Fonts)

## Key Files
- `SPEC.md` — Product specification
- `PLAN.md` — Implementation plan
- `.specify/memory/constitution.md` — Project constitution
- `app/globals.css` — All theme CSS variables
- `app/page.tsx` — Main page

## Commands
- `npm run dev` — Development server
- `npm run build` — Production build
- `npx shadcn@latest add <component>` — Add shadcn component

## Theme System
CSS variables in globals.css with `:root[data-theme="xxx"]` selectors.
Register with `@theme inline` for Tailwind v4 compatibility.
First theme: stripe. Extensible with more themes later.

## WSL Notes
- Project in WSL native filesystem: ~/projects/homepage
- HTTP proxy: http://127.0.0.1:7890
- Avatar source: /mnt/e/Pictures/Saved Pictures/2631792752F139A8AECF95A02DBCF0081E5142EB69.png
