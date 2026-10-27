import Image from "next/image";
import Link from "next/link";
import { company, navPaths, serviceMeta } from "@/lib/data";
import { type Dict, type Locale, localize } from "@/lib/i18n";
import { Icon } from "./Icon";

export default function Footer({ lang, t }: { lang: Locale; t: Dict }) {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-24 sm:pt-20 sm:pb-10 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Image src="/images/logo-white.png" alt={company.legalName} width={180} height={66} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-400">{t.footer.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.pillars.map((p) => (
                <span key={p} className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-300">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase">{t.footer.company}</h4>
            <ul className="mt-4 space-y-1.5 text-sm">
              {navPaths.map((p, i) => (
                <li key={p}>
                  <Link href={localize(lang, p)} className="inline-block py-1 transition hover:text-white">
                    {t.nav.labels[i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase">{t.footer.services}</h4>
            <ul className="mt-4 space-y-1.5 text-sm">
              {serviceMeta.map((s, i) => (
                <li key={s.slug}>
                  <Link href={localize(lang, `/services#${s.slug}`)} className="inline-block py-1 transition hover:text-white">
                    {t.services[i].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase">{t.footer.contact}</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="user" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  {company.chairman}
                  <span className="block text-xs text-ink-500">{t.footer.chairman}</span>
                </span>
              </li>
              <li>
                <a href={company.phoneHref} className="flex gap-3 py-1 transition hover:text-white">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex gap-3 py-1 transition hover:text-white">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="globe" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {t.footer.coverage}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName} {t.footer.rights}
          </p>
          <p className="tracking-widest uppercase">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
