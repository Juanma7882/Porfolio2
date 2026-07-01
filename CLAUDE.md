# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server (Vite HMR)
pnpm build     # Type-check + production build
pnpm lint      # ESLint
pnpm preview   # Preview production build locally
```

No test suite is configured.

## Architecture

Single-page portfolio app built with React 19 + TypeScript + Vite. Tailwind CSS v4 is integrated via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — configured in [src/styles/index.css](src/styles/index.css)).

**Page sections** (rendered in order in [src/App.tsx](src/App.tsx)):
- `Home` → `AboutMe` → `Projects` → `Technology` → `ContactMe`

Each is a full-screen section identified by an anchor id (`#home`, `#about`, `#projects`, `#technologies`, `#contact`) that the fixed Navbar links to.

**Theming**: Dark mode is toggled via `DarkModeToggle`, which adds/removes the `dark` class on `<html>` and persists to `localStorage`. Tailwind `dark:` variants are used throughout. `App.tsx` also reads the system preference on first load.

**Internationalization**: `i18next` + `react-i18next`. Config lives in [src/assets/language/changeLanguage.ts](src/assets/language/changeLanguage.ts); translation files are at `src/assets/language/english/translation.json` and `src/assets/language/spanish/translation.json`. Default language is English. The Navbar has a toggle button that switches between `en` and `es`.

Text strings in [src/data/proyectos.ts](src/data/proyectos.ts) are i18n keys (e.g. `"projects.restaurant.title"`) — they must exist in both translation files.

**Data layer**: Static data only — no API calls.
- [src/data/proyectos.ts](src/data/proyectos.ts) — array of `Proyecto` objects (typed in [src/types.ts](src/types.ts))
- [src/data/icons.tsx](src/data/icons.tsx) — `technologyIcons` array indexed by position; `proyectos.ts` references icons by their index in this array

**Logo carousel** ([src/pages/components/logo-carrusel/](src/pages/components/logo-carrusel/)):
- `LogoCarousel` renders two infinite-scroll rows (one left, one right) above the Projects section
- `LogoCard` renders each logo using `dangerouslySetInnerHTML` for raw SVG and a Canvas particle effect on hover (`UseParticleCanvas.ts`)
- Logo data (name, SVG string, particle colors) lives in `logos.ts`

## Key conventions

- Project images are served from `public/img/projects/<project-name>/` as `.webp` files
- `Proyecto.titulo` and `Proyecto.descripcion` store i18n keys, not raw strings — always add matching keys to both translation files when adding a project
- `technologyIcons` is looked up by name via `Object.fromEntries` — when adding a new icon, append it to the array and reference it by `nombre` string
