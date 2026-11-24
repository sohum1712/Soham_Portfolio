# Soham Vaghela – Portfolio

Static portfolio site. No build step, no dependencies (Space Grotesk loads from Google Fonts).

## Structure
- `index.html` – markup and content
- `css/styles.css` – design tokens (dark/light), layout, folder cards, timeline, footer
- `js/main.js` – cursor-reactive code texture, hero portrait scroll tilt, nav flip, menu/theme toggle, timeline wave, copy email, contact form, Ask panel
- `assets/soham.jpg` – portrait

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy
Drag the folder to Vercel, Netlify or Cloudflare Pages (static site, no config needed).

## Edit
- Text and links: `index.html` (search for LinkedIn and LeetCode and replace the `#contact` placeholders)
- Colors: the `:root` variables at the top of `css/styles.css`
- Portrait: replace `assets/soham.jpg`
