# Roadmap

Small, incremental phases. Each phase should be shippable on its own.

---

## Phase 1 — Project Scaffold & Dev Tooling

- Initialize Next.js project with TypeScript.
- Configure ESLint, Prettier, and `tsconfig`.
- Set up Vitest for testing.
- Set up folder structure (`src/app/`, `src/components/`, `src/lib/`, `specs/`).
- Establish responsive, mobile-first layout foundations with Tailwind CSS.
- Verify dev server runs and a placeholder home page renders.

## Phase 2 — Core Features (Data, API, & UI)

- Choose and configure the database.
- Define models: **Agent**, **Ailment**, **Therapy**, **Appointment**.
- Seed the database with sample ailments and therapies.
- CRUD endpoints for appointments.
- Link appointments to agents and therapies.
- Basic input validation and error handling.
- Authenticated staff layout.
- Staff views: agent list, appointment list, ailment/therapy management.
- Responsive tables/lists that work on mobile and desktop.
- Wire staff dashboard to the API.
- Public-facing pages: browse ailments, view therapies, book an appointment.
- Responsive booking flow optimized for both mobile and desktop.
- Confirmation and status pages.

## Phase 3 — Polish & Marketing Page

- Landing / marketing page with branding and copy.
- Final responsive design audit across all viewports.
- Accessibility review.
- Final QA and deploy.
