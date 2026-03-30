# Sairavi Ganesh — Portfolio

Personal developer portfolio built with a terminal/cyberpunk bento-grid aesthetic. Features a dark theme with amber accents, animated terminal card, live clock status bar, and responsive layout.

## Tech Stack

- **Framework** — Next.js 16 (App Router, Turbopack)
- **Language** — TypeScript 5.7
- **Styling** — Tailwind CSS 3 + shadcn/ui (Radix UI primitives)
- **Icons** — Lucide React
- **Fonts** — Space Grotesk, JetBrains Mono, Inter (via `next/font`)
- **Package Manager** — pnpm

## Project Structure

```
├── app/
│   ├── globals.css        # Theme tokens, animations (scanlines, cursor blink, glow)
│   ├── layout.tsx         # Root layout + font config + metadata
│   └── page.tsx           # Main page — bento grid composition
├── components/
│   ├── bento-card.tsx     # Base card wrapper (scanlines, hover border)
│   ├── status-bar.tsx     # Sticky header with live clock + mobile nav
│   ├── identity-card.tsx  # Name, bio, LinkedIn/GitHub/Resume/Email links
│   ├── terminal-card.tsx  # Animated typewriter terminal widget
│   ├── experience-cards.tsx
│   ├── project-cards.tsx
│   ├── education-card.tsx
│   ├── skills-grid.tsx
│   ├── volunteer-card.tsx
│   ├── contact-card.tsx
│   └── ui/                # shadcn/ui generated components
├── public/
│   ├── images/profile.png
│   └── resume.pdf         # ← Add your resume here
└── hooks/
```

## Getting Started

**Install dependencies**

```bash
pnpm install
```

**Run dev server**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

**Build for production**

```bash
pnpm build
pnpm start
```

## Customization

All content lives directly in the component files — no CMS or external data source.

| What to update | File |
|---|---|
| Name, bio, social links | `components/identity-card.tsx` |
| GitHub URL (2 places) | `components/identity-card.tsx`, `components/contact-card.tsx` |
| Resume PDF | Drop file at `public/resume.pdf` |
| Work experience | `components/experience-cards.tsx` |
| Projects + GitHub links | `components/project-cards.tsx` |
| Education | `components/education-card.tsx` |
| Skills | `components/skills-grid.tsx` |
| Volunteer / extracurriculars | `components/volunteer-card.tsx` |
| Terminal lines | `components/terminal-card.tsx` — edit the `lines` array |
| Theme colors | `app/globals.css` — edit the CSS custom properties under `:root` |
| Profile photo | Replace `public/images/profile.png` |

## Deployment

The project is ready to deploy on [Vercel](https://vercel.com) — just connect your GitHub repo and it deploys automatically on every push to `main`.

```bash
# Or deploy via CLI
npx vercel
```

## License

MIT — free to use as a template. Attribution appreciated but not required.
