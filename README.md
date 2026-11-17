# Thiệu Vy Portfolio – source package

One-page static website (HTML + CSS + JavaScript). No server, database or build step is required.

## Structure
```
thieuvy-portfolio/
├── index.html          Page markup (all sections)
├── 404.html            "Page not found" page
├── css/style.css       All styles
├── js/main.js          All scripts: project data, skills diagram, role filter, lightbox, menu, copy buttons
├── assets/             Images (jpg/png) used by the page
│   └── docs/           PDF scripts opened from the Khế Ước project
├── robots.txt          Allows search engines to index the page
├── _headers            Cache and security headers (Netlify / Cloudflare Pages)
└── README.md
```

## Where to edit
- Text of the About, Education, Experience, Awards, Journey, Contact sections: `index.html`
- Project cards (titles, roles, team size, body, results, image captions, links): the `projects` array and `CAP` map near the top of `js/main.js`
- Skills diagram and role filter: `CATS`, `N` (nodes), `E` (links) and `ROLES` in `js/main.js`
- Colors and fonts: variables at the top of `css/style.css`
- Images: replace the file in `assets/` keeping the same name, or update the name in `js/main.js` / `index.html`

## Notes
- Fonts (Playfair Display, Be Vietnam Pro, Great Vibes) load from Google Fonts, so visitors need Internet access. To self-host them, download the font files and replace the `<link>` in `index.html` with `@font-face` rules.
- The contact "Copy" buttons need HTTPS (or localhost) to use the clipboard; hosting providers give HTTPS automatically.
- The page has no form, search bar or back-end. Contact is by copied phone/email and links to Facebook and Instagram.
- Optional, not included: a favicon (`favicon.ico` / `<link rel="icon">`) and a social preview image (`og:image`, needs the full public URL).
- To preview locally: run `python3 -m http.server 8000` in this folder and open http://localhost:8000
