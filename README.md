# AIRIS General Contracting & Integrated Services Ltd. — Website

Bilingual (English / Somali) company website built with **Next.js 15**, **Tailwind CSS v4** and **Lenis** smooth scrolling.

- English: `/en` · Somali: `/so` (the root `/` redirects to `/en`)
- Pages: Home, About, Services, Projects, Contact
- Contact form prepares the enquiry for email (info@airisltd.com) or WhatsApp

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

| What | Where |
| --- | --- |
| English text | `src/lib/dictionaries/en.ts` |
| Somali text | `src/lib/dictionaries/so.ts` |
| Phone, email, board members, images | `src/lib/data.ts` |
| Images | `public/images/` |

Both dictionaries share the same shape, so TypeScript flags any text missing from the Somali version.

## Build

```bash
npm run build
npm run start
```
