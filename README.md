# PJA Carpentry Services — website

A modern, fast, fully static website for PJA Carpentry Services (Paul Anderson),
Gloucester — rebuilt in 2026 from the previous pjacs.co.uk site.

No build step, no frameworks, no database: plain HTML + CSS + a little vanilla
JavaScript. Upload the files to any web host (or serve via GitHub Pages) and it
works.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, services overview, featured work, testimonials |
| `services.html` | Kitchens, bedrooms, bespoke carpentry, major projects, maintenance |
| `portfolio.html` | Filterable gallery of real project photos with lightbox |
| `testimonials.html` | 16 genuine client testimonials from the previous site |
| `about.html` | Paul's background, values, service area |
| `contact.html` | Contact form (delivers to paul@pjacs.co.uk) |
| `privacy.html` / `cookies.html` | UK GDPR privacy policy & cookie policy |
| `thanks.html` | Post-submission thank-you page |
| `404.html` | Not-found page |

Assets live in `assets/` (css, js, images). All project photos were taken from
the previous site, rotation-corrected and optimised for the web (max 1600 px,
progressive JPEG).

## Before go-live — checklist

1. **Google Analytics** — put the real GA4 Measurement ID in
   `assets/js/consent.js` (see `SETUP.md`). Analytics only loads after cookie
   consent, as UK law requires.
2. **Contact form** — the form posts to FormSubmit for delivery to
   `paul@pjacs.co.uk`. The **first** submission triggers a one-time activation
   email to Paul's inbox — he must click the link in it once (see `SETUP.md`).
3. **HTTPS** — the old site's certificate has lapsed. Renew or re-issue the
   certificate with the hosting provider before launch (Let's Encrypt is free);
   the privacy policy promises HTTPS.
4. **Verify details** — the site currently shows: email paul@pjacs.co.uk;
   "30+ years" experience; "£2m public liability insurance" (from the old
   site — confirm the current figure); founding year 2010. Phone numbers and
   the street address were deliberately removed at Mark's request — contact
   is via the form only.
5. **Limited company details** — if the business trades as a limited company,
   UK law requires the registered name, number and office address on the
   website. Add them to the footer once confirmed.
6. **Search Console / Site Kit** — see `SETUP.md`.

## Editing tips

- The gallery is a plain list of `<figure class="work-item">` blocks in
  `portfolio.html` — copy one, set `data-category`, drop a new optimised photo
  into `assets/images/`, done.
- Testimonials are `<article class="quote-card">` blocks — add freely.
