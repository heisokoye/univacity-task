# Univacity Frontend Developer Technical Assessment

This project recreates the required Figma screens using Ionic Framework with Angular.

## Implemented Scope

### Screens
- Program Search Page
  - Program card listing
  - Active filter chips
  - Filter entry point
- Filter Modal
  - Tuition range controls
  - Institute selection subview
  - Clear/close interactions
- Program Detail Page
  - Detailed program information layout
  - Content sections and UI elements matching provided design intent

### Functional Requirements Covered
- UI implementation for search and detail screens based on the provided Figma.
- Functional filter modal that opens from the search page.
- Navigation from search to detail page using Angular routing.
- Responsive mobile-friendly layout behavior.
- Mock data integration via a dedicated data service.

## Tech Stack

- Ionic Framework 8
- Angular 20
- TypeScript
- SCSS
- Angular standalone components + Angular Router

## Project Structure

- `src/app/pages/search/`  
  Search screen UI and interactions.
- `src/app/pages/program-detail/`  
  Detail screen UI and route-driven data binding.
- `src/app/components/filter-modal/`  
  Filter modal overlay and tuition controls.
- `src/app/components/institutes-view/`  
  Nested institute selection view used by filter workflow.
- `src/app/services/data.ts`  
  Mock data source and read methods.
- `src/app/models/program.ts`  
  TypeScript interface for program objects.
- `src/app/app.routes.ts`  
  Route definitions (`/search`, `/program-detail/:id`).

## Component Architecture

The app uses a modular structure with clear separation of responsibilities:

- **Pages** own full-screen route-level concerns (`SearchPage`, `ProgramDetailPage`).
- **Reusable components** encapsulate feature UI pieces (`FilterModalComponent`, `InstitutesViewComponent`).
- **Service layer** (`Data`) centralizes mock data retrieval, keeping pages presentation-focused.
- **Typed model** (`Program` interface) ensures type safety across page and service communication.

This architecture improves maintainability and allows straightforward extension (for example, replacing mock data with API calls later).

## Routing and Navigation

- Default route redirects to `/search`.
- Search cards navigate to `/program-detail/:id`.
- Detail page reads route parameter and loads a matching program from mock data.

## My Development Process

1. Reviewed assessment requirements and Figma references.
2. Set up Ionic Angular project baseline and routing structure.
3. Implemented core data model (`Program`) and mock data service (`Data`).
4. Built Search Page layout first (header, chips, card list, action row).
5. Added filter modal flow and nested institute selection screen.
6. Connected card tap interactions to detail route with dynamic ID.
7. Implemented Program Detail Page and bound it to route-based data.
8. Refined styling for visual fidelity and mobile responsiveness.
9. Performed manual checks for navigation flow and core interactions.
10. Documented assumptions, decisions, and remaining improvements.

## Setup Instructions

### Prerequisites
- Node.js LTS (18+ recommended)
- npm
- Ionic CLI (optional but recommended)

### Install and Run
```bash
npm install
npm start
```

Then open the local URL shown in terminal (typically `http://localhost:8100`).

### Useful Scripts
```bash
npm run build
npm run lint
npm run test
```

## Design and Implementation Decisions

- Used Ionic components and patterns where they fit naturally (modal, buttons, icons, content layout).
- Used standalone Angular components and lazy-loaded routes for cleaner modern Angular structure.
- Kept mock data local in a service to make migration to real API easier.
- Added typed interfaces to improve correctness and editor support.
- Prioritized responsive spacing and card composition for mobile-first presentation.

## Assumptions

- Assessment focuses on UI behavior and frontend architecture, not backend integration.
- Mock data is acceptable and expected, so no external API calls were implemented.
- Filter modal interaction is required to be functional in opening/closing and state passing; complete filtering logic can be expanded further.
- Best-effort visual matching was applied based on available design interpretation.

## Known Limitations / Areas for Improvement

### Areas for Improvement

- Full filter/sort data transformation logic can be extended beyond current modal interactions
- Some icons/images are represented with local/static placeholders based on available assets
- Accessibility can be strengthened further (expanded ARIA labels, keyboard flows, and screen-reader announcements)
- More exhaustive unit and integration tests can be added for modal state and route transitions
- Empty/error states for invalid program IDs can be enhanced with user-facing fallback messaging
- Certain Ionic icons were replaced with custom SVGs due to compatibility issues, which can be revisited for consistency



## Submission Checklist

- [x] Ionic + Angular implementation
- [x] Program Search Page
- [x] Filter modal integration
- [x] Program Detail Page
- [x] Search-to-detail navigation
- [x] Mock data usage
- [x] README with setup, architecture, assumptions, and limitations

## Figma and References

- Figma design: [Univacity Frontend Tasks](https://www.figma.com/design/MmZCVuOGnwMulbDqkmT6yT/Univacity-FrontendTasks?node-id=0-1&t=JLmh4fYmFFR8UsFr-1)
- Ionic docs: [https://ionicframework.com/docs](https://ionicframework.com/docs)
- Angular docs: [https://angular.io/docs](https://angular.io/docs)
