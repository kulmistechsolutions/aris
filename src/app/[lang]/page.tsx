import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ApproachSteps, ClientsMarquee, CtaBand, ValuesGrid } from "@/components/sections";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import { company, projectImages, serviceMeta } from "@/lib/data";
import { getDict, type Locale, localize } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Locale;
  const t = getDict(lang);
  const to = (path: string) => localize(lang, path);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-950">
        <Image
          src="/images/hero-site.jpg"
          alt={t.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-20 animate-kenburns object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/95 via-ink-950/75 to-ink-950/20 max-lg:bg-ink-950/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium tracking-wider text-white/80 uppercase backdrop-blur sm:px-4 sm:text-xs">
                <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-brand-400" />
                <span className="sm:hidden">{t.hero.pillShort}</span>
                <span className="hidden sm:inline">{t.hero.pillLong}</span>
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-[2.35rem] leading-[1.08] font-extrabold tracking-tight text-balance text-white min-[400px]:text-[2.6rem] sm:mt-7 sm:text-6xl lg:text-7xl">
                {t.hero.titleA}{" "}
                <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                  {t.hero.titleB}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:mt-7 sm:text-lg">
                {company.legalName} {t.hero.text}
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-8 flex flex-col gap-3 min-[420px]:flex-row sm:mt-10 sm:gap-4">
              <Button href={to("/contact")}>{t.hero.primary}</Button>
              <Button href={to("/services")} variant="ghost">{t.hero.secondary}</Button>
            </Reveal>
          </div>
        </div>

        {/* stats strip */}
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <Reveal delay={400} className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
            {t.stats.map((s, i) => (
              <div
                key={i}
                className={`py-5 md:py-8 ${i % 2 === 1 ? "border-l border-white/10 pl-5 md:pl-8" : ""} ${i === 2 ? "md:border-l md:border-white/10 md:pl-8" : ""} ${i > 1 ? "max-md:border-t max-md:border-white/10" : ""}`}
              >
                <p className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{s.value}</p>
                <p className="mt-1 text-[11px] tracking-wider text-ink-400 uppercase sm:text-xs">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <ClientsMarquee t={t} label={t.about.whoWeServe} />

      {/* WHO WE ARE */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/5]">
              <Image src="/images/team-plans.jpg" alt={t.who.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute right-3 -bottom-8 w-52 animate-float rounded-3xl bg-white p-5 shadow-2xl shadow-ink-900/15 sm:w-60 sm:p-6 lg:-right-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white">
                <Icon name="globe" className="h-6 w-6" />
              </span>
              <p className="mt-4 font-display text-xl font-bold text-ink-900">{t.who.worldwide}</p>
              <p className="text-sm text-ink-500">{t.who.worldwideSub}</p>
            </div>
            <div className="absolute -top-4 -left-4 -z-10 hidden h-40 w-40 rounded-3xl bg-brand-100 lg:block lg:-top-6 lg:-left-6" />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow={t.who.eyebrow}
              title={<>{t.who.titleA} <span className="text-brand-500">{t.who.titleB}</span></>}
            />
            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-ink-500 sm:text-lg">{t.who.p1}</p>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{t.who.p2}</p>
            </Reveal>
            <Reveal delay={200} className="mt-10 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
              {t.promises.map((p) => (
                <div key={p.title} className="flex items-center gap-3 rounded-2xl border border-ink-100 p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-display font-bold text-ink-900">{p.title}</span>
                    <span className="text-sm text-ink-500">{p.sub}</span>
                  </span>
                </div>
              ))}
            </Reveal>
            <Reveal delay={300} className="mt-10">
              <Button href={to("/about")} variant="dark">{t.who.more}</Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ink-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={t.servicesSection.eyebrow}
              title={<>{t.servicesSection.titleA} <span className="text-brand-500">{t.servicesSection.titleB}</span></>}
            />
            <Reveal>
              <Link href={to("/services")} className="group inline-flex items-center gap-2 py-2 font-semibold text-brand-600">
                {t.servicesSection.viewAll}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceMeta.map((m, i) => {
              const s = t.services[i];
              return (
                <Reveal key={m.slug} delay={(i % 3) * 100}>
                  <Link
                    href={to(`/services#${m.slug}`)}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10 sm:p-8"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-500 transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="flex items-start justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-950 text-white transition-colors group-hover:bg-brand-500">
                        <Icon name={m.icon} className="h-7 w-7" />
                      </span>
                      <span className="font-display text-4xl font-bold text-ink-100">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-500">{s.summary}</p>
                    <ul className="mt-6 space-y-2 border-t border-ink-100 pt-6">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-2 text-sm text-ink-600">
                          <Icon name="check" className="h-4 w-4 shrink-0 text-brand-500" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            center
            eyebrow={t.purpose.eyebrow}
            title={<>{t.purpose.titleA} <span className="text-brand-500">{t.purpose.titleB}</span></>}
          />
          <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-2">
            <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-7 sm:p-10 lg:p-14">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
              <Eyebrow light>{t.purpose.missionLabel}</Eyebrow>
              <p className="relative mt-5 font-display text-lg leading-relaxed text-white sm:text-xl lg:text-2xl">{t.purpose.mission}</p>
            </Reveal>
            <Reveal delay={150} className="relative overflow-hidden rounded-[2rem] bg-brand-500 p-7 sm:p-10 lg:p-14">
              <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                <span className="h-px w-8 bg-white/70" /> {t.purpose.visionLabel}
              </span>
              <p className="relative mt-5 font-display text-lg leading-relaxed text-white sm:text-xl lg:text-2xl">{t.purpose.vision}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <ApproachSteps t={t} />

      {/* PROJECT TYPES */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={<>{t.projects.titleA} <span className="text-brand-500">{t.projects.titleB}</span></>}
            text={t.projects.text}
          />
          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
            {t.projects.types.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <Link href={to("/projects")} className="group relative block aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[4/5]">
                  <Image src={projectImages[i]} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <span className="text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-ink-300 transition-all duration-500 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-32 md:group-hover:opacity-100">
                      {p.text}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ValuesGrid t={t} />
      <CtaBand t={t} lang={lang} />
    </>
  );
}
