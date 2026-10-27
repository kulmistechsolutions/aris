import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/sections";
import { Button, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { clientIcons, projectImages } from "@/lib/data";
import { getDict, type Locale, localize } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getDict((await params).lang);
  return { title: t.projectsPage.metaTitle, description: t.projectsPage.metaDescription };
}

export default async function ProjectsPage({ params }: Props) {
  const lang = (await params).lang as Locale;
  const t = getDict(lang);
  const p = t.projectsPage;

  return (
    <>
      <PageHero
        eyebrow={t.projects.eyebrow}
        title={<>{t.projects.titleA} <span className="text-brand-400">{t.projects.titleB}</span></>}
        text={p.heroText}
        image="/images/engineers.jpg"
      />

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-4 px-5 sm:space-y-6 lg:px-8">
          {t.projects.types.map((type, i) => (
            <Reveal key={i}>
              <div className="group grid overflow-hidden rounded-[2rem] bg-ink-950 lg:grid-cols-2">
                <div className={`relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px] ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={projectImages[i]} alt={type.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-16">
                  <div className="grid-lines absolute inset-0 opacity-60" />
                  <span className="relative font-display text-sm font-semibold tracking-[0.2em] text-brand-400 uppercase">
                    {t.projects.typeLabel} 0{i + 1}
                  </span>
                  <h2 className="relative mt-4 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{type.title}</h2>
                  <p className="relative mt-4 text-base leading-relaxed text-ink-300 sm:mt-5 sm:text-lg">{type.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience / references */}
      <section className="bg-ink-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              eyebrow={p.refEyebrow}
              title={<>{p.refTitleA} <span className="text-brand-500">{p.refTitleB}</span></>}
              text={p.refText}
            />
            <Reveal delay={150} className="mt-8 sm:mt-10">
              <Button href={localize(lang, "/contact?service=references")}>{p.refButton}</Button>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="relative rounded-[2rem] bg-white p-6 shadow-xl shadow-ink-900/5 ring-1 ring-ink-100 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-500 text-white">
                  <Icon name="doc" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-ink-900">{p.sheetTitle}</p>
                  <p className="text-sm text-ink-500">{p.sheetSub}</p>
                </div>
              </div>
              <dl className="mt-6 divide-y divide-ink-100 sm:mt-8">
                {p.sheetFields.map((f) => (
                  <div key={f} className="flex flex-col gap-1 py-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
                    <dt className="text-sm font-medium text-ink-600">{f}</dt>
                    <dd className="flex items-center gap-2 text-sm text-ink-400">
                      <Icon name="shield" className="h-4 w-4 text-brand-500" />
                      {p.verified}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center">
            <Eyebrow>{p.clientsEyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-[1.85rem] leading-tight font-bold text-balance text-ink-900 sm:text-4xl">{p.clientsTitle}</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-5">
            {t.clients.map((c, i) => (
              <Reveal key={c} delay={i * 80} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
                <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-ink-100 px-3 py-7 text-center transition duration-300 hover:border-brand-500 hover:bg-brand-50 sm:px-4 sm:py-8">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-ink-950 text-white">
                    <Icon name={clientIcons[i]} className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-display text-sm font-semibold text-ink-900 sm:text-base">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand t={t} lang={lang} />
    </>
  );
}
