# Birr Care — Home Nursing & Elderly Care

Bilingual (Arabic / English) marketing site for **Birr (بر) for Home Nursing and Elderly Care**, a home healthcare service based in Almanial, Cairo.

**Live site:** https://birr-care.vercel.app

## Features

- **Bilingual with RTL support.** Arabic is the default; English is one click away. Text direction and `<html lang>` switch with the language, and the choice is saved in `localStorage`.
- **Light and dark themes.** The choice is saved, and an inline script in `index.html` applies it before React mounts, so the page doesn't flash the wrong theme.
- **Service pages.** Each service (home nursing, elderly care, doctor visits, physiotherapy, IV fluids, urinary catheter, home X-ray) has its own route at `/service/:id`.
- **Quick contact.** Call buttons in the header, phone links in the footer, and a floating WhatsApp button.
- **SEO.** Per-language titles, descriptions, keywords, Open Graph tags and JSON-LD structured data via `react-helmet-async`.
- **Performance and accessibility.** Lazy-loaded sections and routes, and animations that respect `prefers-reduced-motion`.

## Tech Stack

| Area      | Library                     |
| --------- | --------------------------- |
| Framework | React 19 + Vite 8           |
| Routing   | React Router 7              |
| State     | Redux Toolkit + React Redux |
| i18n      | i18next + react-i18next     |
| Animation | Framer Motion               |
| Icons     | lucide-react                |
| SEO       | react-helmet-async          |
| Linting   | Oxlint                      |
| Hosting   | Vercel                      |

## Getting Started

**Prerequisites:** Node.js 20+ and npm.

```bash
git clone https://github.com/MazenAymann/GeriatricCare.git
cd GeriatricCare
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR        |
| `npm run build`   | Build for production into `dist/`         |
| `npm run preview` | Serve the production build locally        |
| `npm run lint`    | Lint the project with Oxlint              |
| `npm run deploy`  | Build and publish `dist/` to GitHub Pages |

## Project Structure

```
├── index.html              # HTML shell, default meta tags, theme/lang bootstrap script
├── public/                 # Static assets: logo, favicons, Google verification file
├── src/
│   ├── main.jsx            # App entry: Redux, Router and Helmet providers
│   ├── App.jsx             # Layout: header, footer, routes, SEO tags, theme/language toggles
│   ├── i18n.js             # English and Arabic translation strings
│   ├── index.css           # Global styles and theme variables
│   ├── components/
│   │   ├── Hero.jsx        # Landing hero section
│   │   ├── Services.jsx    # Services grid
│   │   └── Contact.jsx     # Contact section
│   ├── pages/
│   │   └── ServiceDetail.jsx  # /service/:id detail page
│   ├── data/
│   │   ├── provider.json   # Contact info and the list of services
│   │   └── icons.js        # Maps icon names in provider.json to lucide-react components
│   └── store/
│       ├── store.js        # Redux store
│       └── appSlice.js     # Contact info and services state and selectors
└── vercel.json             # SPA rewrite so client-side routes resolve on refresh
```

## Editing Content

### Contact details

Phone numbers, address and coordinates are in `src/data/provider.json` under `contactInfo`. The first phone number is used for the header **Call now** button and the WhatsApp link.

### Adding a service

1. Add an entry to `services` in `src/data/provider.json`:
   ```json
   { "id": "wound", "icon": "Bandage" }
   ```
2. If the icon isn't already used, import it from `lucide-react` and add it to `serviceIcons` in `src/data/icons.js`.
3. In `src/i18n.js`, add the service's strings under `services` for **both** `en` and `ar`, following the existing `s_<id>_title`, `s_<id>_desc` and `s_<id>_points` keys.

### Translations and SEO

All visible copy is in `src/i18n.js`. The `seo` keys set each language's page title, description and keywords. The defaults in `index.html` are what crawlers see before JavaScript runs, so keep them in sync with the Arabic `seo` strings.

## Deployment

The site is deployed on **Vercel**. Pushing to `main` triggers a production build (`npm run build`, output `dist/`). `vercel.json` rewrites every path to `index.html` so routes like `/service/nursing` work on a hard refresh.

`npm run deploy` publishes to GitHub Pages instead. Note that GitHub Pages has no SPA rewrites, so direct links to `/service/*` would return 404 there.

## Contact

- **Phone / WhatsApp:** 01115276605 · 01095071065
- **Facebook:** https://www.facebook.com/share/187ekL8bWW/
