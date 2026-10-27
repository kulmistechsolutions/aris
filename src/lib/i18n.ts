import en, { type Dict } from "./dictionaries/en";
import so from "./dictionaries/so";

export const locales = ["en", "so"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = { en: "English", so: "Soomaali" };

const dictionaries: Record<Locale, Dict> = { en, so };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDict(lang: string): Dict {
  return dictionaries[isLocale(lang) ? lang : defaultLocale];
}

/** Prefix an app path ("/services#x") with the language ("/so/services#x"). */
export function localize(lang: Locale, path: string) {
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** Strip the language prefix from a pathname: "/so/about" → "/about". */
export function stripLocale(pathname: string) {
  return pathname.replace(/^\/(en|so)(?=\/|$)/, "") || "/";
}

export type { Dict };
