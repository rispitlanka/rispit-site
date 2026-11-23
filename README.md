# Rispit website

Next.js site built from the Rispit design canvas (desktop 1440px + mobile 390px artboards).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## How it works

- `design/*.dc.html` — the design source files, exported from the canvas.
- `scripts/compile-dc.mjs` — compiles each design file into a React component in
  `components/dc/` and collects their styles into `app/dc.css`. It runs automatically
  before `dev` and `build`. **Don't edit `components/dc/` by hand**; edit the design file
  and recompile, or replace a generated component with a hand-written one.
- `lib/routes.mjs` — maps each artboard (desktop + mobile pair) to a URL. Links between
  artboards in the design are rewritten to these URLs.
- `lib/links.mjs` — where the design's placeholder links go (`#linkedin`, `#whatsapp`,
  `#video`, add-to-calendar…). Fill in the empty strings with real URLs; empty = link stays inert.
  Blog share buttons (X, LinkedIn, copy link) already work.
- `components/Responsive.jsx` — shows the desktop design at >= 1024px and the mobile design
  below. Between 1024–1280px the desktop layout is scaled down slightly.
- `components/CookieConsent.jsx` — the cookie banner, remembered in localStorage.

## Pages

| URL | Desktop | Mobile |
| --- | --- | --- |
| `/` | Home | MobHome |
| `/services/*` (8 pages) | Service* | MobService* |
| `/portfolio`, `/portfolio/kestrel-health` | Portfolio, CaseStudy | MobPortfolio, MobCaseStudy |
| `/blog`, `/blog/how-to-scope-your-mvp` | BlogList, BlogPost | MobBlog, MobBlogPost |
| `/contact`, `/thank-you` | Contact, ThankYou | MobContact, MobThankYou |
| `/privacy`, `/terms` | Privacy, Terms | MobPrivacy, MobTerms |
| 404 | NotFound | MobNotFound |
| `/christmas` | HomeXmas | none (desktop design at all widths) |

## Every screen: `/screens`

`/screens` lists all 63 artboards from the design (pages, sections, navbar dropdown
states, unused testimonial/tech variants, emails, favicon and share-image boards). Each
opens at its design size with prev/next navigation. It's hidden from search engines; delete
`app/screens` if you don't want it on the live site.

## Emails

`emails/build.mjs` builds the three email designs (booking confirmation, 1-hour call
reminder, newsletter) as email-safe HTML: tables, inline styles and PNG icons
(`public/email/`), because Gmail and Outlook don't support the flexbox and SVG the design uses.

- Preview: `/emails/booking-confirmation.html`, `/emails/call-reminder.html`, `/emails/newsletter.html`
- To send: paste `emails/dist/*.html` into your booking/newsletter tool. Image URLs there are
  absolute, built from `NEXT_PUBLIC_SITE_URL` (default `https://rispit.com`), so images
  only load once the site is deployed at that address.
- Replace `[bracketed]` words and links with your tool's merge tags (e.g. `{{first_name}}`).

## Favicon and share image

`app/icon.png`, `app/apple-icon.png` and `app/opengraph-image.png` / `twitter-image.png`
come from the Favicon and Social share boards; Next.js adds the tags automatically.

## Before launch (from the designer's notes)

- Fill in the empty links in `lib/links.mjs` (social profiles, WhatsApp, map, case-study
  video/app/site, add-to-calendar).
- Replace every `[bracketed]` placeholder: email, phone, dates, client names, results.
- Client logos, product screenshots, testimonials and blog posts are placeholders.
- Forms currently redirect to `/thank-you` without sending anything. Connect them to
  your email/CRM (`dcFormSubmit` in `components/dc-runtime.jsx`).
- The booking widget is visual only: connect Calendly or Cal.com.
- Legal pages are a starting draft. Have a lawyer review them.
- The Christmas promo bar is on by default (`promo` prop on the navbar design).

## Running a production build next to `npm run dev`

Both use `.next` by default and will break each other. For a side-by-side production test:
`NEXT_DIST_DIR=.next-prod npm run build && NEXT_DIST_DIR=.next-prod npx next start -p 3001`

## Technology logos

`public/logos/*.svg` are the official tool logos used wherever the design had a dashed
"logo slot":

- "Technologies We Use" orbit on the home page (`design/TechB.dc.html`, mobile in `design/MobHome.dc.html`)
- the "Built with" stack on all 8 service pages and the case study (desktop + mobile)
- the unused `Tech` variant (only visible in `/screens`)

Sources: [devicon](https://github.com/devicons/devicon) (MIT) for full-colour logos, and
[Simple Icons](https://simpleicons.org) (CC0) in each brand's official colour for OpenAI, Claude,
LangChain, Shopify, Stripe, PayPal, Google Analytics, Expo, Framer, Maze and Loom. Logos remain
trademarks of their owners. **Pinecone** and **FigJam** have no logo in either set, so they show a
letter tile: drop `pinecone.svg` / `figjam.svg` into `public/logos/` and add them to the `logos`
map in `design/ServiceAI.dc.html` / `design/ServiceUIUX.dc.html` to use real ones.

To change a stack, edit the `stack` list in that page's design file (each name must be a key
in its `logos` map, or it gets a letter tile) and add any new SVG to `public/logos/`.
