# Wishly — Time of My Life 💌

> A deeply personal digital scrapbook and birthday experience, built with love.

---

## What Is This?

This is a private web application — a handcrafted digital keepsake for my girlfriend birthday on **July, 2026**. It is not a template or a generic project. Every word, lyric, and memory inside was written specifically for her.

The app has two main experiences:

| Experience | Route | Description |
|---|---|---|
| **Wrapped for my girlfriend** | `/` | A Spotify Wrapped–style interactive sequence of animated cards, each revealing a memory, stat, or feeling. Plays music as she taps through. |
| **Time of My Life** | `/scrapbook` | A 7-section editorial scrapbook — a full digital zine with a timeline, letters, museum of artifacts, and a closing tribute. |

---

## Design System

Inspired by *Kinfolk* magazine — minimal, editorial, intentional.

| Token | Value |
|---|---|
| Background | `#FAF9F6` Off-White |
| Text | `#1A1A1A` Ink |
| Accent | `#C9967A` Dusty Rose |
| Gold | `#C4A882` Warm Gold |
| Serif Font | Playfair Display |
| Sans Font | Inter |

---

## Tech Stack

- **React 18** + **TypeScript** — component architecture
- **Vite** — instant dev server & build
- **Tailwind CSS** — utility styling
- **Framer Motion** — all animations (Wrapped sequence, section fade-ins)
- **Lucide React** — icons
- **React Router v6** — routing between Wrapped and Scrapbook

---

## Project Structure

```
wishly-app/
├── public/
│   └── private/          # ← YOUR PRIVATE ASSETS GO HERE (git-ignored)
│       ├── .gitkeep
│       ├── content.json  # All the text, memories, letters etc.
│       ├── music/        # Drop your .mp3 files here
│       └── photos/       # Drop your photos here
│
├── src/
│   ├── components/
│   │   └── Nav/          # Top navigation (Wrapped ↔ Scrapbook)
│   ├── contexts/
│   │   ├── ContentContext.tsx  # Fetches & provides content.json
│   │   └── useContent.ts       # Hook to consume the context
│   └── pages/
│       ├── Wrapped/      # The intro sequence
│       └── Scrapbook/    # The 7-section scrapbook
│           └── sections/ # Each section as its own component
│
├── phase 1/
│   ├── PRD.md            # Product Requirements Document
│   └── PRD.pdf           # PDF export
```

---

## Getting Started

### 1. Clone & Install

```sh
git clone https://github.com/HellBus1/wishly-app.git
cd wishly-app
npm install
```

### 2. Add Your Private Content

The `public/private/` folder is **git-ignored** — this is where all your personal content lives:

```sh
# The folder structure to create:
public/private/
├── content.json    # Copy from the template below
├── music/
│   └── your-song.mp3
└── photos/
    └── your-photo.jpg
```

**`content.json` structure:**
```json
{
  "music": [{ "title": "Song Name", "artist": "Artist", "src": "/private/music/your-song.mp3" }],
  "wrapped": [ /* array of { id, subtitle, title, description } */ ],
  "scrapbook": { /* see full schema in src/contexts/ContentContext.tsx */ }
}
```

### 3. Run Locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 4. Build for Production

```sh
npm run build
```

Deploy the `dist/` folder to **Vercel**, **Netlify**, or **GitHub Pages**.

> ⚠️ **Important:** When deploying, do NOT commit `public/private/`. Instead, upload those files manually to the hosting service's file storage, or configure a private CDN.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix lint errors |
| `npm run format` | Run Prettier |

---

## How to Customize the Content

All content lives in `public/private/content.json`. The structure is:

- **`music[]`** — tracks that play during the Wrapped sequence
- **`wrapped[]`** — the cards in the Wrapped sequence (subtitle, title, description)
- **`scrapbook.timeline[]`** — your shared memories (add `imageSrc` to use real photos)
- **`scrapbook.letters[]`** — the expandable letter bodies
- **`scrapbook.museum[]`** — the artifact captions and era tags
- **`scrapbook.magic[]`** — the 20 "ordinary magic" items
- **`scrapbook.closing`** — the final section's gratefuls, protects, and promise

---

## Adding Photos to the Timeline

In `content.json`, add an `imageSrc` field to any timeline moment:

```json
{
  "id": 1,
  "title": "The First Hello",
  "date": "August 2024",
  "feeling": "Butterflies",
  "lyric": "I didn't know I was looking for you until I found you.",
  "imageSrc": "/private/photos/first-hello.jpg"
}
```

---

## License

This project is personal and not intended for redistribution. The base template is MIT-licensed from [HellBus1/ts-react-tailwind-starter](https://github.com/HellBus1/ts-react-tailwind-starter).

---

*Made with love. Happy Birthday. 💌*