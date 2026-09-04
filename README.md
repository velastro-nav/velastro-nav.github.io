# Velastro / 帆星

Company website for Velastro, a concept-stage startup exploring integrated communications and navigation across LEO satellite constellations.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site supports English, German and Chinese.

## Validation and static export

```bash
npm run build
```

The build includes linting and TypeScript checks and exports the website to `out/`. The existing GitHub Pages workflow deploys changes pushed to its configured main branch.

## Content

- `app/i18n.ts`: all translated page content, stage labels and metadata.
- `app/site-config.ts`: founder-approved company name, email and team details.
- `app/page.tsx`: page sections, navigation and conceptual system diagram.
- `app/globals.css`: established monochrome styling and responsive layouts.
- `docs/website-design-audit.zh-CN.md`: audit, design rationale and implementation notes.

The roadmap describes proposed work, not completed milestones. Update stage or product claims only when the company approves the underlying facts.

## Contact

The form prepares a `mailto:` draft addressed to the public company email. Visitors review and send it in their own email app. The website does not send a message or report delivery; a direct email link is also available. No form backend is configured.

## Docker

```bash
docker-compose up --build
```
