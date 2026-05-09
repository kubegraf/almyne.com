# almyne.com

Marketing site for **Almyne** — LifeOS for what matters most.

Live: https://kubegraf.github.io/almyne.com/

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. Vite is configured with `base: "/almyne.com/"` so
asset paths resolve correctly under the path-based GitHub Pages URL.

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.

## Editing content

Each section is a focused component under `src/components/`:

- `Hero.tsx` — headline, CTAs, product preview
- `ProductStory.tsx` — old way vs. new way
- `Features.tsx` — six surfaces
- `HowItWorks.tsx` — three steps
- `SocialProof.tsx` — stats, quotes, badges
- `UseCases.tsx` — busy parents, solo pros, multi-gen, travellers
- `Pricing.tsx` — Free / Pro / Family tiers
- `FinalCTA.tsx` — closing email capture

Brand tokens live in `src/index.css` under `@theme`. Tweak `--color-brand`
and `--color-accent` to repaint the site.
