# Setup guide — analytics, Site Kit, contact form, hosting

## 1. Google Analytics 4

1. Go to [analytics.google.com](https://analytics.google.com) and sign in with
   the Google account that should own the data (Paul's ideally).
2. **Admin → Create → Property** — name it "PJA Carpentry Joinery Services", country
   United Kingdom, currency GBP.
3. Add a **Web data stream** for `https://www.pjacs.co.uk` and copy the
   **Measurement ID** (looks like `G-ABC123XYZ`).
4. Open `assets/js/consent.js` and replace:

   ```js
   var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
   ```

   with the real ID. That's it — the site already includes the gtag snippet,
   Consent Mode v2, IP anonymisation, and a `generate_lead` event fired on
   contact-form submission.

> **Privacy note:** analytics only loads after a visitor clicks "Accept
> analytics" in the cookie banner. This is required under UK GDPR/PECR — don't
> bypass it.

## 2. Google Search Console (+ site verification)

1. Go to [search.google.com/search-console](https://search.google.com/search-console),
   add a **URL prefix** property for `https://www.pjacs.co.uk`.
2. Choose the **HTML tag** verification method and copy the
   `google-site-verification` meta tag.
3. Paste it into the `<head>` of `index.html` (there's a placeholder comment
   marking the spot).
4. Once verified, submit `https://www.pjacs.co.uk/sitemap.xml` under
   **Sitemaps**.

## 3. Google Site Kit

Site Kit is Google's **WordPress plugin** — it can't run on a static site like
this one, and it isn't needed: this site already wires up everything Site Kit
would (Analytics tag + Search Console verification, steps 1–2 above).

If the site is ever moved onto WordPress, install **Site Kit by Google** from
the plugin directory, click "Start setup", and connect Search Console and
Analytics with the same Google account as above — then remove the hand-rolled
gtag code so it isn't counted twice.

## 4. Contact form (FormSubmit → paul@pjacs.co.uk)

The form in `contact.html` posts to `https://formsubmit.co/paul@pjacs.co.uk` —
a free relay service that emails each submission; no server code needed.

**One-time activation:** the first time someone submits the form, FormSubmit
sends an activation email to paul@pjacs.co.uk. Paul must click the confirm
link once; every submission after that is delivered normally. Do a test
submission after go-live and activate straight away.

**Optional hardening (recommended):** after activation, FormSubmit's email
shows a random alias for the address (like `formsubmit.co/a1b2c3d4...`).
Swap the form's `action` to that alias so the email address never appears in
the page source — one small edit in `contact.html`.

The form already includes a honeypot field for spam bots, a GDPR consent
checkbox, and redirects to `thanks.html` after sending (the `_next` hidden
field — update it if the domain ever changes).

**Alternative:** if you'd rather use Formspree, create a form at
[formspree.io](https://formspree.io) pointing at paul@pjacs.co.uk and change
the form `action` to the endpoint they give you. Nothing else needs to change.

## 5. Hosting & HTTPS

The current pjacs.co.uk certificate has **lapsed** — browsers show warnings.
Fix before launch:

- If the existing host offers Let's Encrypt, enable auto-renewal — free.
- Or host this repo on **GitHub Pages** (Settings → Pages → deploy from
  branch), add `www.pjacs.co.uk` as the custom domain (this creates a `CNAME`
  file), point the domain's DNS (`CNAME www → ictevangelist.github.io`, plus
  the four `A` records for the apex), and tick "Enforce HTTPS" — certificates
  are issued and renewed automatically.

After launch, confirm `https://www.pjacs.co.uk` loads with a padlock and that
`http://` and the bare domain both redirect to it.
