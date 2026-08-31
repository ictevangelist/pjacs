# Your website, and how to look after it — a guide for Paul

Hello Paul. This document explains, from scratch, what you now own, how it
works, and how to change anything on it yourself — even though you've never
used GitHub or AI before. Take it slowly; none of this is as technical as it
sounds.

---

## 1. What you actually own

Your new website is just a **folder of files** — pages, pictures and styling.
That folder is stored on a service called **GitHub**, inside a thing called a
**repository** (think of it as a shared folder with a full history of every
change ever made, so nothing can ever be lost or broken permanently).

The website itself is **published free of charge** by GitHub through a feature
called **GitHub Pages** — GitHub takes the folder and serves it to the world
as a website. There is no monthly hosting bill for this. Your only ongoing
cost is the domain name (pjacs.co.uk), which you pay your existing domain
company for, same as always.

## 2. The accounts you need (both free to start)

1. **A GitHub account** — [github.com/signup](https://github.com/signup).
   Use your normal email address, pick a username (e.g. `paulanderson-pjacs`)
   and a password. That's it.
2. **A Claude account** — [claude.ai](https://claude.ai). Claude is an AI
   assistant made by a company called Anthropic. It's the "tradesman" that
   built this site, and it's how you'll make changes: you tell it what you
   want in plain English, and it edits the files for you. The free plan is
   fine to start; the paid plan (about £15/month) gives you much more usage
   if you find yourself using it a lot.

## 3. Getting the website folder from Mark

Mark will "transfer" the repository to your GitHub account. You'll get an
**email from GitHub** with a button to accept the transfer — click it within
24 hours. After that, the whole website folder belongs to your account, and
Mark no longer controls it.

## 4. Switching the website on (one-time, 2 minutes)

After the transfer, the "publish this folder as a website" switch needs
turning back on (it doesn't carry over):

1. Go to your repository on GitHub (github.com/YOUR-USERNAME/pjacs).
2. Click **Settings** (top of the page) → **Pages** (left-hand menu).
3. Under **Source**, choose **Deploy from a branch**.
4. Pick the branch named `claude/pauls-carpentry-website-flxsyt` and folder
   `/ (root)`, then **Save**.
5. A couple of minutes later the page shows your website's address. Click
   "Visit site" to see it live.

**To use your own domain (www.pjacs.co.uk):** on that same Pages screen,
type `www.pjacs.co.uk` into the Custom domain box and save. Then log into
your domain company (wherever you pay for pjacs.co.uk) and point the domain
at GitHub — ask Claude "how do I point my domain at GitHub Pages?" and it
will walk you through the exact settings, or your domain company's support
can do it. Finally tick **Enforce HTTPS** on the Pages screen so the site
gets the padlock in browsers, free and automatic.

## 5. How to change anything on the site

This is the part that sounds like magic but is genuinely simple. You don't
edit files or write code. You **talk to Claude**:

1. Go to [claude.ai/code](https://claude.ai/code) and sign in.
2. Connect your GitHub account when it asks (one-time approval — it needs
   permission to see your `pjacs` repository).
3. Start a session on the `pjacs` repository and type what you want, exactly
   as you'd tell a person:
   - *"Change the opening hours line in the footer to say weekends by appointment."*
   - *"Here are three photos of a kitchen I finished in Cheltenham last week —
     add them to the portfolio."* (you can attach photos straight into the chat)
   - *"Add this new customer review: …"*
   - *"Make the About page mention that I now cover Bristol as well."*
4. Claude makes the change and "pushes" it (saves it to GitHub). The live
   website updates itself a minute or two later. Nothing else to do.

If a change comes out wrong, just tell Claude — *"that's not what I meant,
put it back and try it like this…"*. Every change is saved in history, so
anything can always be undone.

## 6. Three one-time jobs to finish the site (ask Claude to help with each)

1. **Contact form activation** — the form sends enquiries to
   paul@pjacs.co.uk through a free service called FormSubmit. The very first
   time someone submits the form, FormSubmit emails you a confirmation link —
   **click it once** and every enquiry after that lands in your inbox. Do a
   test submission yourself on day one.
2. **Google Analytics** — a free Google tool that shows how many people visit
   the site and which pages they read. Follow `SETUP.md` in this folder, or
   just tell Claude: *"set up Google Analytics for my site, here's my
   Measurement ID"* once you've created the free account at
   analytics.google.com.
3. **Google Search Console** — tells Google to list your site properly in
   search results. Again, `SETUP.md` has the steps, and Claude can walk you
   through it in five minutes.

## 7. Things worth knowing

- **Your Google reviews page matters more than you think.** The site shows
  your 5.0 rating from Google. Keep asking happy customers for Google
  reviews — it feeds both the website and your ranking on Google Maps.
- **Photos win jobs.** Any time you finish something you're proud of, take a
  couple of well-lit photos and give them to Claude to add. Recent photos are
  the single best upgrade the site can get.
- **Nothing you do can break things permanently.** GitHub keeps every version
  of every file forever. Worst case, tell Claude "undo my last change".
- **The `README.md` and `SETUP.md` files** in this folder are the more
  technical notes about how the site is put together — you can ignore them,
  or ask Claude to explain any part of them.

## 8. If you get stuck

Open [claude.ai](https://claude.ai), describe the problem in plain English —
including "I don't understand what a repository is" — and ask it to explain
like you've never done this before. That's what it's for. Or ring your
brother.
