import Image from "next/image";
import Link from "next/link";
import { company, navLinks, services } from "@/lib/data";
import { Icon } from "./Icon";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image src="/images/logo-white.png" alt={company.legalName} width={180} height={66} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-400">
              A multi-service company providing general contracting, subcontracting, construction and
              maintenance, procurement, and integrated business services worldwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {company.pillars.map((p) => (
                <span key={p} className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-300">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="user" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  {company.chairman}
                  <span className="block text-xs text-ink-500">Chairman</span>
                </span>
              </li>
              <li>
                <a href={company.phoneHref} className="flex gap-3 transition hover:text-white">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex gap-3 transition hover:text-white">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="globe" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {company.coverage} coverage
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName} All rights reserved.
          </p>
          <p className="tracking-widest uppercase">Reliable · Quality · Delivery</p>
        </div>
      </div>
    </footer>
  );
}
