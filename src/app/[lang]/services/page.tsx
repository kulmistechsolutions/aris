import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ApproachSteps, CtaBand } from "@/components/sections";
import { Button, PageHero } from "@/components/ui";
import { serviceMeta } from "@/lib/data";
import { getDict, type Locale, localize } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getDict((await params).lang);
  return { title: t.servicesPage.metaTitle, description: t.servicesPage.metaDescription };
}

export default async function ServicesPage({ params }: Props) {
  const lang = (await params).lang as Locale;
  const t = getDict(lang);

  return (
    <>
      <PageHero
        eyebrow={t.servicesSection.eyebrow}
        title={<>{t.servicesSection.titleA} <span className="text-brand-400">{t.servicesSection.titleB}</span></>}
        text={t.servicesPage.heroText}
        image="/images/hero-site.jpg"
      />

      {/* quick index */}
      <nav className="sticky top-20 z-30 border-b border-ink-100 bg-white/90 backdrop-blur-xl">
        <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 lg:px-8">
          {serviceMeta.map((m, i) => (
            <a
              key={m.slug}
              href={`#${m.slug}`}
              className="shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap text-ink-600 ring-1 ring-ink-100 transition hover:bg-brand-500 hover:text-white hover:ring-brand-500"
            >
              {t.services[i].title}
            </a>
          ))}
        </div>
      </nav>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-5 sm:space-y-24 lg:space-y-32 lg:px-8">
          {serviceMeta.map((m, i) => {
            const s = t.services[i];
            return (
              <article key={m.slug} id={m.slug} className="grid scroll-mt-40 items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Reveal className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                    <Image src={m.image} alt={s.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent" />
                  </div>
                  <span
                    className={`absolute -bottom-6 grid h-16 w-16 place-items-center rounded-2xl bg-brand-500 text-white shadow-xl shadow-brand-500/40 sm:h-20 sm:w-20 sm:rounded-3xl ${
                      i % 2 ? "left-4 sm:-left-4 lg:-left-6" : "right-4 sm:-right-4 lg:-right-6"
                    }`}
                  >
                    <Icon name={m.icon} className="h-7 w-7 sm:h-9 sm:w-9" />
                  </span>
                </Reveal>
                <Reveal delay={120}>
                  <span className="font-display text-5xl font-extrabold text-ink-100 sm:text-6xl">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-1 font-display text-[1.75rem] font-bold text-ink-900 sm:text-3xl lg:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-500 sm:mt-5 sm:text-lg">{s.summary}</p>
                  <ul className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 px-4 py-3 sm:px-5 sm:py-4">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                          <Icon name="check" className="h-4 w-4" />
                        </span>
                        <span className="font-medium text-ink-800">{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href={localize(lang, `/contact?service=${m.slug}`)}>{t.servicesPage.enquire}</Button>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <ApproachSteps t={t} />
      <CtaBand t={t} lang={lang} />
    </>
  );
}
