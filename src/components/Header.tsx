"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, navLinks } from "@/lib/data";
import { Icon } from "./Icon";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/90 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="relative block h-11 w-[121px]" aria-label="AIRIS home">
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
          {navLinks.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? active
                      ? "text-brand-600"
                      : "text-ink-600 hover:text-ink-900"
                    : active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium ${solid ? "text-ink-700" : "text-white/90"}`}
          >
            <Icon name="phone" className="h-4 w-4" />
            {company.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${
            solid ? "text-ink-900" : "text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[480px] border-t border-ink-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-3 text-base font-medium ${
                pathname === l.href ? "bg-brand-50 text-brand-600" : "text-ink-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 rounded-full bg-brand-500 px-5 py-3 text-center font-semibold text-white"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
