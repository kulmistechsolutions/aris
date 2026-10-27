import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ApproachSteps, CtaBand, ValuesGrid } from "@/components/sections";
import { Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { board, company } from "@/lib/data";
import { getDict, type Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getDict((await params).lang);
  return { title: t.about.metaTitle, description: t.about.metaDescription };
}

export default async function AboutPage({ params }: Props) {
  const lang = (await params).lang as Locale;
  const t = getDict(lang);
  const a = t.about;

  return (
    <>
      <PageHero
        eyebrow={a.heroEyebrow}
        title={<>{t.who.titleA} <span className="text-brand-400">{t.who.titleB}</span></>}
        text={a.heroText}
        image="/images/city.jpg"
      />

      {/* Who we are */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionHeading eyebrow={t.who.eyebrow} title={a.whoTitle} />
            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-ink-500 sm:text-lg">
                {company.legalName} {a.p1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{t.who.p2}</p>
            </Reveal>
          </div>
          <Reveal delay={150} className="rounded-[2rem] bg-ink-50 p-7 sm:p-8 lg:p-12">
            <Eyebrow>{a.whereEyebrow}</Eyebrow>
            <h3 className="mt-4 font-display text-xl font-bold text-ink-900 sm:text-2xl">{a.whereTitle}</h3>
            <p className="mt-4 leading-relaxed text-ink-500">{a.whereText}</p>
            <div className="mt-8 border-t border-ink-200 pt-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">{a.whoWeServe}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.clients.map((c) => (
                  <span key={c} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-700 ring-1 ring-ink-200">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission vision */}
      <section className="bg-ink-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            center
            eyebrow={t.purpose.eyebrow}
            title={<>{t.purpose.titleA} <span className="text-brand-500">{t.purpose.titleB}</span></>}
          />
          <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-2">
            {[
              { label: t.purpose.missionLabel, text: t.purpose.mission, icon: "badge" },
              { label: t.purpose.visionLabel, text: t.purpose.vision, icon: "globe" },
            ].map((b, i) => (
              <Reveal key={b.icon} delay={i * 120} className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-ink-100 sm:p-10 lg:p-12">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white">
                  <Icon name={b.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink-900 sm:mt-8">{b.label}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{b.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4 overflow-hidden rounded-[2rem] bg-ink-950 p-7 sm:mt-6 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-10">
              <div>
                <Eyebrow light>{t.purpose.commitmentLabel}</Eyebrow>
                <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">{t.purpose.commitment}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {t.promises.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 p-4 sm:p-5">
                    <p className="font-display text-lg font-bold text-white sm:text-xl">{p.title}</p>
                    <p className="text-sm text-brand-300">{p.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ValuesGrid t={t} />
      <ApproachSteps t={t} />

      {/* Board */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            center
            eyebrow={a.boardEyebrow}
            title={<>{a.boardTitleA} <span className="text-brand-500">{a.boardTitleB}</span></>}
            text={`${a.boardText} — ${company.legalName}`}
          />
          <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3">
            {board.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <div className={`group relative h-full overflow-hidden rounded-3xl p-8 text-center ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${m.chair ? "bg-ink-950 ring-ink-950" : "bg-white ring-ink-100"}`}>
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 font-display text-2xl font-bold text-white shadow-lg shadow-brand-500/30">
                    {m.initials}
                  </div>
                  <h3 className={`mt-6 font-display text-xl font-bold ${m.chair ? "text-white" : "text-ink-900"}`}>{m.name}</h3>
                  <p className={`mt-1 text-sm font-semibold tracking-wider uppercase ${m.chair ? "text-brand-300" : "text-brand-600"}`}>
                    {m.chair ? a.chairRole : a.memberRole}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 overflow-hidden rounded-[2rem] sm:mt-16">
            <div className="relative aspect-[4/3] sm:aspect-[21/9]">
              <Image src="/images/engineers.jpg" alt={a.bannerAlt} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
              <p className="absolute right-6 bottom-6 left-6 max-w-lg font-display text-lg font-semibold text-white sm:bottom-10 sm:left-10 sm:text-2xl">
                {a.banner}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand t={t} lang={lang} />
    </>
  );
}
