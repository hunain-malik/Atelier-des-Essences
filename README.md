# Atelier des Essences

> Couture fragrance, co-created.

A modern marketing website for the **YSL Atelier des Essences** concept — a private couture
fragrance atelier where AI, sensory intelligence and craftsmanship converge to compose
one-of-one scents around an individual's biology, mood and memory.

Submitted to **L'Oréal Brandstorm 2026** for YSL Beauty / L'Oréal Luxe.

---

## Stack

A deliberately minimal, build-free stack — fast, deployable anywhere, no toolchain to
maintain.

| Layer | Choice |
|---|---|
| Markup | Static HTML5 |
| Styling | Hand-written CSS (custom design system, CSS variables) |
| Interactions | Vanilla ES6 + IntersectionObserver |
| Type | Cormorant Garamond + Italiana + Inter (Google Fonts) |
| Animations | Custom keyframes, scroll-triggered reveals, marquee, animated counters, particles |
| Deployment | Any static host (Vercel / Netlify / GitHub Pages / S3) |

No npm, no bundler, no framework. Open `index.html` and it runs.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage — hero, manifesto, ritual overview, pillars, tech stack, pricing, rollout, KPIs, FAQ, CTA |
| `pages/experience.html` | Long-form walk-through of the 90-minute Atelier ritual |
| `pages/technology.html` | The neural-to-formula stack — six L'Oréal platforms + four IP white spaces |
| `pages/collective.html` | The annual Collective edition born from aggregated session data |
| `pages/sustainability.html` | Refill-first, made-on-demand, waterless — circular by architecture |
| `pages/book.html` | Booking flow with form, locations grid, what-to-expect aside |

## Design

Inspired by haute-parfumerie editorial: deep matte black (`#0a0807`), aged gold
(`#c9a961`), warm cream (`#f5ede0`), with serif display type (Cormorant Garamond +
Italiana) over an Inter body. Micro-interactions favour stillness and delay over
spectacle — long ease-out-expo curves, soft fades, subtle parallax on hover.

### Motion details
- Page loader with progress bar
- Custom gold cursor with magnetic ring (desktop only, hover-capable pointers)
- Per-word split-text reveal on hero + manifesto
- IntersectionObserver scroll reveals with staggered delays
- Animated counters for KPI metrics
- Floating particle system in hero
- Animated SVG bottle with breathing liquid + pulsing NFC dot
- Infinite marquee under hero
- Step-card parallax on cursor move
- Refill-status pulsing dots on locations
- Fixed nav with backdrop blur on scroll
- Accordion FAQ
- Button background slide-in on hover (Cormorant-style)

## Concept Recap

The brief is to redefine luxury fragrance by transforming **selection** into
**co-creation**. Atelier des Essences is built entirely on technology already deployed
inside L'Oréal:

| Platform | Status |
|---|---|
| YSL Scent-Sation (EEG) | Live in YSL Dubai |
| Osmobloom™ air-capture | Production |
| Perso micro-dispensing | Production |
| ModiFace AI / data | 30+ brand deployments |
| Cell BioPrint | Microfluidic profiling |
| HAPTA accessibility | CES Innovation 2023 |

Four un-patented white spaces unlock the IP moat:

1. **Body-VOC → formula** — using the wearer's own ambient scent as composition input
2. **Closed-loop neural feedback** — EEG-guided iterative composition
3. **Integrated booth system** — sense + AI + dispense + bottle in one sealed environment
4. **EEG-guided creation vs. recommendation** — the conceptual leap from suggesting
   existing scents to composing new ones

## Tier Ladder

```
Free       → ScentID Quiz (universal, digital)
$100–150   → Collective Edition (annual, born from data)
$400–500   → Bespoke Creation (90-minute Atelier session)
$260–350   → Refill (NFC tap, in-store or remote)
```

## Local Preview

```sh
# Any static server works. Two options:
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## File tree

```
.
├── index.html
├── README.md
├── css/
│   └── styles.css         # Full design system — ~1,300 lines
├── js/
│   └── main.js            # Loader, nav, cursor, reveals, FAQ, particles, counters
└── pages/
    ├── experience.html    # The 90-min ritual, minute by minute
    ├── technology.html    # The neural-to-formula stack
    ├── collective.html    # The annual data-born edition
    ├── sustainability.html
    └── book.html          # Reserve a session
```

## Notes on Realism

Beyond the original Brandstorm slides, the website fills several gaps a real launch
would require:

- **Privacy & data ethics** — explicit on-device wipe, GDPR / UAE PDPL / CCPA framing,
  third-party privacy ethics board
- **Aftercare ritual** — daily wear-notes, refill cadence, annual "Reflection" session
- **The Collective methodology** — anonymous aggregation thresholds, master-perfumer
  brief, pre-sold release model
- **Booking & locations** — five-flagship rollout with real flagship addresses
- **FAQ depth** — covering EEG nature, biometric handling, refill mechanics, body
  chemistry change, accessibility, ingredient transparency
- **L'Oréal sustainability alignment** — explicit mapping to For The Future 2030 goals
  and CDP Triple-A status

## Credit

Concept: L'Oréal Brandstorm 2026 submission · YSL Beauty
Build: hand-coded for the submission package, 2026
