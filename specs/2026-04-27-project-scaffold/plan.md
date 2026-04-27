# Plan — Phase 1: Project Scaffold & Dev Tooling

## 1. Initialize Next.js with TypeScript

- Run `npx create-next-app@latest` with the App Router, TypeScript, and `src/` directory options.
- Ensure the generated project uses the `src/` folder for all source code (`src/app/`, `src/components/`, `src/lib/`).
- Verify `tsconfig.json` is present and configured correctly.

## 2. Install & Configure Tailwind CSS

- Install Tailwind CSS, PostCSS, and Autoprefixer.
- Generate `tailwind.config.ts` and `postcss.config.mjs`.
- Add Tailwind directives to the global stylesheet (`src/app/globals.css`).

## 3. Configure ESLint & Prettier

- Confirm the Next.js-provided ESLint config (`next/core-web-vitals`).
- Install Prettier and `eslint-config-prettier`.
- Add `.prettierrc` with project defaults (single quotes, trailing commas, 2-space indent).
- Add format and lint scripts to `package.json`.

## 4. Set Up Folder Structure

- Create the following directories under `src/`:
  - `src/app/` — Next.js App Router pages and layouts.
  - `src/components/` — reusable React components.
  - `src/lib/` — shared utilities, constants, types.
- Keep `specs/` at the project root (already exists).

## 5. Build Main Layout Component

- Create a shared layout shell with three subcomponents, each in its own file under `src/components/`:
  - `src/components/header.tsx` — site logo/name and placeholder navigation.
  - `src/components/footer.tsx` — copyright line and clinic tagline.
  - `src/components/main-content.tsx` — wraps page content in a `<main>` with consistent padding and min-height.
- Compose them in the root layout (`src/app/layout.tsx`) so every page inherits header/main/footer.

## 6. Build Placeholder Home Page

- Replace the default Next.js home page with a minimal placeholder.
- Display the clinic name ("AgentClinic") and a tagline.
- Apply basic Tailwind styling so the page doesn't look broken.

## 7. Install & Configure Vitest

- Install Vitest and `@vitejs/plugin-react` as dev dependencies.
- Create `vitest.config.ts` with React plugin and path aliases matching `tsconfig.json`.
- Add `test` and `test:watch` scripts to `package.json`.
- Create a root-level `tests/` directory for all test files (tests live outside `src/`).
- Write a smoke test to verify the test runner works (e.g., assert `1 + 1 === 2`).

## 8. Verify & Clean Up

- Run `npm run dev` — confirm the dev server starts and the placeholder page renders.
- Run `npm run lint` — confirm zero warnings / errors.
- Remove any leftover boilerplate files from `create-next-app` that aren't needed.
