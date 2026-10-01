# A little space, just for you ✨

Next.js (App Router) + React + Tailwind CSS. Five pages, one looping background tune.

## Run it
1. Install Node.js 18.17+ (https://nodejs.org)
2. Open this folder in VS Code, then in the terminal:
   ```
   npm install
   npm run dev
   ```
3. Open the address shown (http://localhost:3000).

## Pages
`/` Hello · `/pole-star` · `/creation` · `/moments` · `/blessings`

## Where to change things
- Messages: `app/*/page.js`
- Photos and videos: `public/images`, `public/videos`
- Background tune: `public/audio/bgm.mp3`
- Colours: `tailwind.config.js`

## Music note
Browsers block sound until someone taps the page. A "Tap to open your surprise" screen
handles this and starts the tune; it then loops on every page. The 🎵 button (top right) pauses it.

## Share it online (optional)
Push to GitHub and import the repo on https://vercel.com.
