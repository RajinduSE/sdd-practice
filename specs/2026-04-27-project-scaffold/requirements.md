# Requirements — Phase 1: Project Scaffold & Dev Tooling

## Scope

Set up the foundational project structure, tooling, and a minimal running app. No business logic, no database, no real UI — just the skeleton that all future phases build on.

## Decisions

| Decision                 | Choice                          | Rationale                                                                   |
| ------------------------ | ------------------------------- | --------------------------------------------------------------------------- |
| Framework                | Next.js (App Router)            | Full-stack React framework; matches tech-stack spec.                        |
| Language                 | TypeScript                      | End-to-end type safety; matches tech-stack spec.                            |
| Source directory         | `src/`                          | All application source code lives under `src/` to keep the repo root clean. |
| Styling                  | Tailwind CSS (mobile-first)     | Utility-first with responsive breakpoints; all components are mobile-first. |
| Linting                  | ESLint (`next/core-web-vitals`) | Ships with Next.js; covers React + accessibility rules.                     |
| Formatting               | Prettier                        | Consistent style with zero debates.                                         |
| Package manager          | npm                             | Default Node.js package manager; no extra install needed.                   |
| Node version enforcement | None                            | Skipped for now; may revisit later.                                         |
| Pre-commit hooks         | None                            | Skipped for now to keep Phase 1 lean.                                       |
| Test runner              | Vitest                          | Fast, Vite-native runner; matches tech-stack spec.                          |

## Context

- The existing repo contains only `specs/` markdown files and a bare `package.json`. The `create-next-app` scaffold will replace the current `package.json`.
- The `specs/` directory is not inside `src/` — it stays at the project root as a first-class citizen of the repo.
- The placeholder home page is intentionally minimal (clinic name + tagline). Branding and full UI come in later phases.

## Out of Scope

- Database setup (Phase 2).
- API routes (Phase 3).
- Authentication (Phase 4).
- Production deployment configuration.
- CI/CD pipeline.
