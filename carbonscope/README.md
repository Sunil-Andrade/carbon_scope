# CarbonScope

A redesigned environmental action workspace built with React 19, React Router, and Vite. Forest green, warm ivory, nature imagery, responsive layouts, and motion that respects `prefers-reduced-motion`.

## Run

```sh
npm ci
npm run dev
```

Production check: `npm run build`. Code check: `npm run lint`.

## Entry and session flow

- `/` is the public introduction page. It explains the purpose, workflow, supported action categories, and evidence model before asking visitors to join.
- `/register` creates a local demonstration profile and then sends the visitor to `/login`.
- `/login` opens the workspace only when the entered email matches the profile saved on that device.
- Workspace routes redirect signed-out visitors to `/login`. The session lasts for the current browser tab and can be ended from the sidebar.
- This is a frontend demonstration session, not secure authentication. Production use requires the backend to provide identity, password/session handling, authorization, and account recovery.

## Screens

- `/`: public marketing and product-introduction page.
- `/dashboard`: signed-in overview, calculated metrics, selectable chart period, category distribution, recent actions, CSV export.
- `/submit`: three-step submission with field validation, a saved draft, image/PDF evidence, review, and local persistence.
- `/status` and `/verification`: search, status filters, sorting, pagination, details, and filtered CSV export.
- `/wallet`: illustrative credit balance and sample allocation history.
- `/explore`: activity categories and an explanation of the contribution workflow.
- `/register`: create a local profile; `/login`: start a local demo session; `/settings`: edit the active profile.

## Functional scope

This is a fully interactive **local frontend demo**, not a production verification or authentication system. It starts with ten clearly labeled sample records. Metrics, chart totals, and wallet history derive from those records. New submissions are saved with `Pending` status and zero credits/verified impact. No real carbon credits are issued, traded, or certified.

Profiles, submissions, and drafts use browser local storage (`cs-profile`, `cs-actions`, `cs-draft`). No passwords are collected. Evidence is a PNG, JPEG, or PDF of at most 2 MB and is kept in local storage with the submission. Browser quota errors are shown to the user without claiming a successful save. Evidence is not included in saved drafts; add it in step two. Data does not sync between devices, browsers, or origins.

The existing `src/services` API helpers are preserved for future integration. The redesigned demo does not call them. They still describe the original backend at `http://localhost:8080/api/v1`; connect them only after confirming the actual API contract, session/authentication behavior, storage, and verification workflow.

## Source map

- `src/App.jsx`: routes, page components, shared interface components, and local state orchestration.
- `src/data.js`: sample records, formatting, local storage reads, and CSV export.
- `src/styles.css`: responsive visual system and animation.
- `src/main.jsx`: application entry point.
- `public/forest.png` and `public/planting.png`: generated project-owned visual assets.

Images are served locally. Google Fonts supplies Manrope and DM Sans; the app falls back to sans-serif if fonts cannot load. Deployments need SPA route fallback to `index.html`.

## Verification performed

- Production build and ESLint pass.
- Desktop and phone layout inspected in the browser; mobile table overflow corrected.
- Required fields, evidence-required validation, draft persistence after reload, combined status/location filtering, and detail dialog checked.
- Completed the production upload-to-submission journey with a synthetic PNG: evidence preview, review confirmation, submission, `Pending` status, updated counts, and persistence after a full reload. The initial development file-picker automation stalled; the production retry succeeded. PDF/JPEG variations and storage-quota failure paths were not exercised in the browser.

See `IMAGE-PROMPTS.md` for image provenance and prompts.
