import en, { type Dict } from "./dictionaries/en";

// The site is English only. Pages still live under /en so another language
// can be added later by adding a dictionary and a locale here.
export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dict> = { en };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDict(lang: string): Dict {
  return dictionaries[isLocale(lang) ? lang : defaultLocale];
}

/** Prefix an app path ("/services#x") with the language ("/en/services#x"). */
export function localize(lang: Locale, path: string) {
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** Strip the language prefix from a pathname: "/en/about" → "/about". */
export function stripLocale(pathname: string) {
  return pathname.replace(/^\/en(?=\/|$)/, "") || "/";
}

export type { Dict };
