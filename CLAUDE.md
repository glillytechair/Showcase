# Showcase App — AI Context & Instructions

This is a Next.js app deployed on Vercel that showcases Tech Department updates for New England Tech Air. Recipients receive a link in an email and land on a polished animated feature page.

**Live repo:** https://github.com/glillytechair/Showcase  
**Stack:** Next.js 14 (App Router) · Framer Motion · Tailwind CSS · TypeScript  
**Deploy:** Every `git push` to `main` auto-deploys on Vercel (~30 seconds)

---

## How to add a new showcase

### Step 1 — Add images or videos

Drop files into `/public/` in the repo root. Use lowercase, no spaces:
- Images: `.png` or `.jpg`
- Videos: `.mp4` or `.mov`

Reference them in code as `/your-filename.png` (root-relative, no `/public` prefix).

### Step 2 — Add an entry to `src/data/features.ts`

Copy this template and fill in every field:

```ts
{
  id: '4',                          // increment from the last entry
  slug: 'your-slug',                // URL: /feature/your-slug — lowercase, hyphens only
  appName: 'AppName',               // The application this belongs to (e.g. "QuoteGen", "StockSync")
  featureName: 'Feature Name',      // The specific feature — OMIT if tag is 'New Application'
  title: 'AppName — Feature Name',  // Display title. For New Applications just use the app name.
  subtitle: 'One sentence that describes the value in plain language.',
  description: 'Two or three paragraphs. What it is, what problem it solves, how it works.',
  date: '2026-07-01',               // ISO date — used for sorting newest/oldest
  tag: 'New Feature',               // See tag options below
  department: 'Estimating',         // e.g. CAD, Inventory, Estimating, Reporting, Mobile
  highlights: [
    'Short bullet — lead with the capability, follow with the benefit',
    'Keep each bullet to one line if possible',
  ],
  media: [
    { type: 'image', url: '/your-image1.png', caption: 'Description shown below the image' },
    { type: 'video', url: '/your-video.mp4',  caption: 'Optional caption' },
  ],
},
```

**Place new entries at the top of the array** so they appear newest-first by default.

### Step 3 — Commit and push

```bash
git add src/data/features.ts public/your-image1.png public/your-image2.png
git commit -m "Add [Feature Name] showcase for [AppName]"
git push
```

Vercel deploys automatically. The new page is live at `/feature/your-slug`.

---

## Tag options

| Tag | Color | When to use |
|---|---|---|
| `New Application` | Teal | A brand-new app being introduced for the first time |
| `New Feature` | Blue | A new capability added to an existing app |
| `Enhancement` | Purple | An improvement to an existing feature |
| `Fix` | Green | A bug fix or reliability improvement |
| `Integration` | Amber | A new connection to an external system |
| `Performance` | Cyan | A speed, reliability, or efficiency improvement |

---

## appName vs featureName — the key distinction

- **New Application** (e.g. StockSync, CADash): set `appName` only, omit `featureName`, use `tag: 'New Application'`
- **Feature of an existing app** (e.g. QuoteGen → Report Reader): set both `appName` and `featureName`, use any other tag

The home page grid shows `AppName` bold with `FeatureName` below it. The list view shows `AppName · FeatureName` inline.

---

## Existing showcases

| id | slug | appName | featureName | Tag |
|---|---|---|---|---|
| 1 | `inventory-tracker` | StockSync | — | New Application |
| 2 | `cadash` | CADash | — | New Application |
| 3 | `report-reader` | QuoteGen | Report Reader | New Feature |

Always use the next available `id` number when adding a new entry.

---

## File structure reference

```
src/
  data/features.ts        ← ADD NEW ENTRIES HERE
  types/index.ts          ← Feature type definition (add new tags here if needed)
  app/
    page.tsx              ← Home page grid + list view
    feature/[slug]/
      page.tsx            ← Static route generator + metadata
      FeatureShowcase.tsx ← Individual feature page layout
  components/
    FeatureCard.tsx       ← Grid view card
    FeatureRow.tsx        ← List view row
    MediaViewer.tsx       ← Image/video viewer with thumbnails + lightbox
    AnimatedSection.tsx   ← Scroll-triggered fade-in wrapper
    GridBackground.tsx    ← Animated dark grid + glow orbs
public/                   ← DROP IMAGES AND VIDEOS HERE
```

---

## Adding a new tag

If you need a tag that doesn't exist yet:

1. Add it to the union type in `src/types/index.ts`
2. Add a CSS class in `src/app/globals.css` following the existing `.tag-X` pattern
3. Add it to the `tagClass` map in `src/components/FeatureCard.tsx`
4. Add it to the `tagClass` map in `src/components/FeatureRow.tsx`
5. Add color values to `tagColors` and `tagTextColors` in `src/app/feature/[slug]/FeatureShowcase.tsx`

---

## Design rules — do not change these

- Background is always `#070810` (near-black) — do not introduce white or light backgrounds
- All cards use `.glass` + `.glass-hover` CSS classes for consistent glassmorphism
- Animations use Framer Motion — keep entrance delays staggered at `index * 0.1`
- The media viewer container is fixed at `560px` height with `object-contain` — images are never cropped
- Captions always appear **below** the image container, never overlaid on top
