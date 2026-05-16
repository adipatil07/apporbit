# AppOrbit — Startup Portfolio Website

> Launching ideas into orbit.

A modern, light-themed startup portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**.

---

## Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Framework  | Next.js 15 (App Router) |
| Language   | TypeScript              |
| Styling    | Tailwind CSS v4         |
| Font       | Inter (Google Fonts)    |
| Deployment | Vercel                  |
| CI         | GitHub Actions          |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout (Navbar + Footer + metadata)
│   ├── page.tsx                 # Homepage — composes all sections
│   └── globals.css              # Global base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky responsive navbar
│   │   └── Footer.tsx           # Site footer
│   ├── sections/
│   │   ├── Hero.tsx             # Hero + animated stats counters
│   │   ├── Services.tsx         # Services grid
│   │   ├── Work.tsx             # Featured projects
│   │   ├── Stack.tsx            # Tech stack grid
│   │   ├── About.tsx            # About + founder card
│   │   ├── Process.tsx          # 4-step process timeline
│   │   └── Contact.tsx          # Contact form (client component)
│   └── ui/
│       ├── Button.tsx           # Button (primary / ghost / outline, sm/md/lg)
│       ├── SectionTag.tsx       # Section label chip
│       └── AnimatedCounter.tsx  # IntersectionObserver-based counter
├── data/
│   ├── projects.ts              # Project definitions
│   ├── services.ts              # Service definitions
│   └── stack.ts                 # Tech stack items
└── lib/
    └── utils.ts                 # cn() — clsx + tailwind-merge
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# 1. Clone
git clone https://github.com/YOUR_USERNAME/apporbit.git
cd apporbit

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command         | Description               |
|-----------------|---------------------------|
| `npm run dev`   | Start dev server (port 3000) |
| `npm run build` | Production build          |
| `npm run start` | Run production build      |
| `npm run lint`  | ESLint                    |

---

## Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Add environment variables from `.env.example`
4. Click **Deploy**

Every push to `main` → production deploy. Pull requests → preview URL.

### Environment Variables

```bash
cp .env.example .env.local
```

See `.env.example` for all variables (contact form provider, analytics, etc.).

---

## CI/CD

GitHub Actions runs on push to `main`/`develop` and on all PRs:

- ESLint
- TypeScript type-check (`tsc --noEmit`)
- Next.js production build

See [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

---

## Customization

| What               | Where                                    |
|--------------------|------------------------------------------|
| Projects           | `src/data/projects.ts`                   |
| Services           | `src/data/services.ts`                   |
| Tech stack         | `src/data/stack.ts`                      |
| Brand color        | Replace `indigo` with any Tailwind color |
| Contact form logic | `src/components/sections/Contact.tsx`    |
| SEO metadata       | `src/app/layout.tsx`                     |

---

## License

MIT © [Aditya Patil](mailto:aditya.patil@littersoft.com) — AppOrbit
