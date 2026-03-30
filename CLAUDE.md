# Copperline Coffee Roasters

Portfolio project 3 for Andrew's Upwork freelance portfolio.

## Stack
- React 19 + Vite + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite plugin)
- Zustand (cart state with localStorage persistence)
- Framer Motion (page transitions, micro-interactions)
- React Router v6
- React Hook Form + Zod v3 (checkout forms)
- Lucide React (icons)

## Project Structure
- `src/data/` — Static TS data files (products, testimonials)
- `src/store/` — Zustand cart store
- `src/components/ui/` — Shared UI components
- `src/components/layout/` — Navbar, Footer, PageTransition, Layout
- `src/components/home/` — Home page sections
- `src/components/shop/` — Shop filters, sort
- `src/components/product/` — Product detail components
- `src/components/cart/` — Cart items, promo code, order summary
- `src/components/checkout/` — 3-step checkout form components
- `src/pages/` — Page components

## Important Notes
- Tailwind v4: uses `@import "tailwindcss"` in index.css, NOT the old @tailwind directives
- No custom Tailwind colors — uses stone/amber/orange palette from Tailwind defaults
- vercel.json has rewrites only (no build config — Vercel auto-detects Vite)
- Git email: andrew.jenkins88@gmail.com

## Promo Code
- `FIRSTBREW` — 10% off (for testing)

## Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```
