# Dudley Services — Website

Marketing website for **Dudley Services, Inc.** — vermiculite and asbestos abatement specialists serving Eastern and Central Massachusetts since 1987.

**Live preview:** [dudley-website-preview.netlify.app](https://dudley-website-preview.netlify.app)

---

## What this is

A static HTML/CSS website replacing the existing Wix sites at `dudleyservices.com` and `vermiculiteremoval.com`. Built as a single `index.html` with an inline stylesheet and a single SVG logo — no build step, no framework, no dependencies.

The goal for now is **preview and iterate fast**. Once the design is locked, we'll decide whether to keep it as a static site or migrate to a CMS (Webflow, Sanity, etc.) depending on how often content needs to change.

## File structure

```
.
├── index.html       # The entire site — markup + styles + minimal JS
├── logo.svg         # Brand logo (used in nav + footer)
├── netlify.toml     # Netlify build/deploy configuration
├── CLAUDE.md        # Context for Claude Code sessions
├── .gitignore
└── README.md
```

## Local development

No build step required. Just open the file:

```bash
# Option 1: Open directly in a browser
open index.html

# Option 2: Serve locally (nicer for testing, matches production)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

The site is already connected to Netlify at `dudley-website-preview.netlify.app`.

### Auto-deploy from GitHub (recommended)

1. In Netlify, link this repo to the site (Site settings → Build & deploy → Link repository)
2. Every push to `main` will auto-deploy
3. Pull requests will get their own preview URLs

### Manual drag-and-drop (current method)

Zip `index.html` + `logo.svg` and drag onto [app.netlify.com/drop](https://app.netlify.com/drop).

## Design system

The palette is pulled directly from the company logo:

| Token          | Hex       | Usage                                  |
| -------------- | --------- | -------------------------------------- |
| `--blue`       | `#66a1c3` | Primary brand blue, CTAs, accents      |
| `--blue-light` | `#98b4c2` | Secondary blue, hover states           |
| `--blue-dark`  | `#4a82a3` | Button hover                           |
| `--blue-deep`  | `#1f3a52` | Dark sections (top bar, BEST, footer)  |
| `--ink`        | `#2a3744` | Primary text, headlines                |
| `--ink-2`      | `#3a3a3a` | Body text (matches logo charcoal)      |
| `--paper`      | `#fbfbfb` | Page background                        |
| `--paper-2`    | `#f2f5f8` | Subtle section differentiation         |

Typography:
- **Display:** Fraunces (serif) — for headlines
- **Body:** Inter Tight (sans-serif)
- **Mono:** JetBrains Mono — for eyebrows, metadata, and the VESPA section

All fonts are loaded from Google Fonts.

## Roadmap

- [ ] Replace placeholder testimonial quotes with verified customer reviews (currently sourced from Angi/HomeAdvisor/Yelp public reviews)
- [ ] Swap out placeholder BEST process visuals with real before/after project photos
- [ ] Wire the estimate form to a real backend (currently shows a demo alert)
- [ ] Add Open Graph / social share meta tags
- [ ] Add Google Analytics / tag manager
- [ ] Point `dudleyservices.com` DNS at Netlify
- [ ] Add redirects from `vermiculiteremoval.com`
- [ ] Schema.org markup for local business SEO
- [ ] About page with Sam + company history
- [ ] Dedicated service pages (separate URLs for SEO)

## Company information

- **License:** MA Asbestos Contractor AC000112
- **Phone:** 617-981-4280
- **Email:** dudleyservices@gmail.com
- **Address:** 150-L New Boston St, Woburn, MA 01801
