"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, navPaths } from "@/lib/data";
import { type Dict, type Locale, localeNames, locales, localize, stripLocale } from "@/lib/i18n";
import { Icon } from "./Icon";

function LanguageSwitch({
  lang,
  path,
  tone,
  label,
}: {
  lang: Locale;
  path: string;
  tone: "light" | "dark";
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`flex items-center rounded-full p-1 text-xs font-semibold ring-1 transition-colors ${
        tone === "dark" ? "bg-ink-50 ring-ink-200" : "bg-white/10 ring-white/20 backdrop-blur"
      }`}
    >
      {locales.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            href={localize(l, path)}
            scroll={false}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            title={localeNames[l]}
            className={`rounded-full px-3 py-1.5 uppercase transition-all duration-300 ${
              active
                ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                : tone === "dark"
                  ? "text-ink-500 hover:text-ink-900"
                  : "text-white/70 hover:text-white"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}

export default function Header({ lang, nav }: { lang: Locale; nav: Dict["nav"] }) {
  const pathname = usePathname();
  const path = stripLocale(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while the mobile menu is open; Escape closes it.
  useEffect(() => {
    if (!open) return;
    window.lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;
  const links = navPaths.map((p, i) => ({
    href: localize(lang, p),
    label: nav.labels[i],
    active: p === "/" ? path === "/" : path.startsWith(p),
  }));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/90 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link href={localize(lang, "/")} className="relative block h-11 w-[121px] shrink-0" aria-label={nav.home}>
          <Image
            src="/images/logo-white.png"
            alt="AIRIS General Contracting & Integrated Services Ltd."
            fill
            priority
            sizes="121px"
            className={`object-contain transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"}`}
          />
          <Image
            src="/images/logo.png"
            alt=""
            fill
            priority
            sizes="121px"
            className={`object-contain transition-opacity duration-300 ${solid ? "opacity-100" : "opacity-0"}`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors xl:px-4 ${
                solid
                  ? l.active
                    ? "text-brand-600"
                    : "text-ink-600 hover:text-ink-900"
                  : l.active
                    ? "text-white"
                    : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
              {l.active && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500 xl:inset-x-4" />}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className={`hidden items-center gap-2 text-sm font-medium whitespace-nowrap xl:flex ${solid ? "text-ink-700" : "text-white/90"}`}
          >
            <Icon name="phone" className="h-4 w-4" />
            {company.phone}
          </a>
          <LanguageSwitch lang={lang} path={path} tone={solid ? "dark" : "light"} label={nav.language} />
          <Link
            href={localize(lang, "/contact")}
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
          >
            {nav.quote}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch lang={lang} path={path} tone={solid ? "dark" : "light"} label={nav.language} />
          <button
            onClick={() => setOpen((o) => !o)}
            className={`grid h-11 w-11 place-items-center rounded-full ${solid ? "text-ink-900" : "text-white"}`}
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-x-0 top-20 grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col border-t border-ink-100 bg-white px-5 pt-3 pb-6 shadow-2xl shadow-ink-950/10">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                } ${l.active ? "bg-brand-50 text-brand-600" : "text-ink-700 active:bg-ink-50"}`}
              >
                {l.label}
                <Icon name="arrow" className={`h-4 w-4 ${l.active ? "text-brand-500" : "text-ink-300"}`} />
              </Link>
            ))}
            <div className="mt-4 grid gap-3 border-t border-ink-100 pt-5">
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-ink-200 px-5 py-3 font-semibold text-ink-800"
              >
                <Icon name="phone" className="h-4 w-4" />
                {company.phone}
              </a>
              <Link
                href={localize(lang, "/contact")}
                className="rounded-full bg-brand-500 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-brand-500/30"
              >
                {nav.quote}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
