# Validation — Phase 1: Project Scaffold & Dev Tooling

## How to know this phase succeeded and can be merged

### 1. Dev server starts

- `npm run dev` starts without errors.
- Navigating to `http://localhost:3000` returns a 200 response.

### 2. Placeholder page renders

- The home page displays the clinic name ("AgentClinic") and a tagline.
- The page is styled with Tailwind CSS (not raw unstyled HTML).

### 3. Folder structure is correct

- `src/app/` exists and contains the App Router layout and home page.
- `src/components/` exists (may be empty or contain a placeholder).
- `src/lib/` exists (may be empty or contain a placeholder).
- `tests/` exists at the project root and contains all test files.
- `specs/` remains at the project root, outside `src/`.

### 4. Linting passes

- `npm run lint` exits with code 0 and no warnings.

### 5. Formatting is consistent

- Running Prettier across the project produces no changes (all files already formatted).

### 6. TypeScript compiles

- `npx tsc --noEmit` exits with code 0 (no type errors).

### 7. Tests pass

- `npm test` exits with code 0.
- At least one smoke test exists and passes.

### 8. Clean repo

- No leftover default `create-next-app` boilerplate (stock images, example API routes, default CSS that isn't used).
- `package.json` contains only the dependencies actually needed.
