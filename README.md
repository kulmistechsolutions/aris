# AIRIS General Contracting & Integrated Services Ltd. — Website

Company website built with **Next.js 15**, **Tailwind CSS v4** and **Lenis** smooth scrolling.

- Pages live under `/en` (the root `/` redirects there; old `/so` links redirect to English)
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
| Phone, email, board members, images | `src/lib/data.ts` |
| Images | `public/images/` |


## Build

```bash
npm run build
npm run start
```
