# Amritsar Properties website

React + Vite site for Amritsar Properties, D Block, Ranjit Avenue, Amritsar.
All animation is plain CSS plus two small React hooks, so the only dependencies are React and Vite.

## Run it

```bash
npm install
npm run dev        # opens a local preview with live reload
npm run build      # production files go to /dist
npm run preview    # check the production build locally
```

Needs Node 18 or newer.

## Things to fill in (all in `src/data.js`)

- Founder phone numbers. Until real numbers are set, the Call, Copy and WhatsApp buttons stay hidden.
  Use the international format, for example `+91 98765 43210`.
- Founder photos. Copy the photo into `public/` and set `photo: '/gurpreet.jpg'`.
- Founder bios.
- The sample property cards (these are examples, not live listings).

## Publishing

Upload the `dist` folder to any static host: Netlify, Vercel, Cloudflare Pages or GitHub Pages.
The enquiry form prepares the message and offers WhatsApp and copy buttons. To receive form submissions
directly, connect it to a form service such as Formspree or Web3Forms.

## Where the motion lives

- `src/components/Skyline.jsx` and the "skyline motion" block in `src/styles.css`: hero artwork.
- `src/hooks.js`: scroll reveal, scroll progress and header state.
- `src/components/Tilt.jsx`: founder card tilt.
- Animations switch off automatically for visitors who ask their device for reduced motion.
