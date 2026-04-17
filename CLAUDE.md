# CLAUDE.md

Context for Claude Code sessions working on this repo.

## Project overview

Marketing website for **Dudley Services, Inc.** — a family-owned vermiculite and asbestos abatement company based in Woburn, MA, in business since 1987. This site replaces two aging Wix sites (`dudleyservices.com` and `vermiculiteremoval.com`) that are being consolidated.

The site is **intentionally simple**: a single `index.html` with inline CSS and no build step. This is deliberate — the owner (not a developer) needs to be able to make small text edits without tooling, and deploying is just "push to main and Netlify rebuilds."

Do not introduce a build system, framework, or package manager unless explicitly asked. No React, no Tailwind, no bundlers.

## Architecture

```
index.html    ← entire site (markup + <style> + minimal <script>)
logo.svg      ← brand logo, referenced from <img> tags
netlify.toml  ← deploy config
```

CSS uses custom properties defined in `:root` for theming. All colors go through those tokens — do not hardcode hex values elsewhere in the CSS.

Typography uses Google Fonts (Fraunces, Inter Tight, JetBrains Mono) loaded via `<link>` tags. Do not swap these without discussing — the serif/sans pairing is intentional.

## Design principles

- **Bold & confident, not loud.** The company has 40 years and 20,000+ projects. The design should feel established, not startup-y.
- **Numbers do the talking.** "20K+", "40", license number, etc. are repeated intentionally as trust signals.
- **Blue/white palette pulled from the logo.** Do not introduce new accent colors without a reason.
- **Generous whitespace, editorial typography.** This is not a template-y contractor site.
- **Preserve personality.** The "Dude Discount" and "The Dude abides" quote are intentionally kept — the owner likes them and customers remember them.

## Key content/brand elements

- **BEST** = Bulk Extraction System Technology (proprietary vacuum system, key differentiator)
- **VESPA** = Vermiculite Estimating Software Program Application (in-house estimating tool)
- **ZAI Trust** = Zonolite Attic Insulation Trust (customers may be eligible for ~$5k rebate)
- **Mass Save Turnkey Solutions Program** = new 2026 partnership, up to 100% coverage for eligible properties
- **License number AC000112** — always include when discussing credentials
- **Founded 1987** — always include

## When making changes

- **Copy changes**: Keep them voice-consistent. The tone is matter-of-fact, confident, no marketing fluff.
- **Structural changes**: Keep the section order unless asked. Sections are numbered §01–§05 and that numbering is visible in the design.
- **Responsive breakpoints**: `1024px` and `640px`. Test both before shipping.
- **Accessibility**: Alt text on images, semantic HTML, sufficient color contrast. The dark sections (top bar, BEST, footer) need white text to maintain WCAG AA.

## Known follow-ups

See `README.md` roadmap section for the backlog. The big ones:

1. Wire the estimate form to a real backend (Formspree, Netlify Forms, or the eventual CRM)
2. Replace placeholder testimonials with verified ones
3. Add real project photos (currently the BEST section has no imagery)
4. Open Graph tags for when this gets shared via SMS/social
5. Schema.org LocalBusiness markup for SEO

## What NOT to do

- Don't add analytics or tracking without asking
- Don't change the phone number, email, or license number
- Don't replace the logo
- Don't introduce frameworks/bundlers
- Don't add emoji to copy — tone is professional
- Don't quote customer reviews verbatim beyond what's already in the file without verifying they're public reviews

## Questions to ask the user before major changes

- Changing brand voice or copy tone
- Adding/removing sections
- Changing color palette or typography
- Adding external services (analytics, chat widgets, popups)
- Wiring up the form to a backend (needs decision on where submissions go)
