import Image from "next/image";
import { company, valueIcons } from "@/lib/data";
import { type Dict, type Locale, localize } from "@/lib/i18n";
import { Icon } from "./Icon";
import Reveal from "./Reveal";
import { Button, SectionHeading } from "./ui";

export function ClientsMarquee({ t, label }: { t: Dict; label: string }) {
  const row = [...t.clients, ...t.clients, ...t.clients, ...t.clients];
  return (
    <section className="border-y border-ink-100 bg-ink-50 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 lg:flex-row lg:px-8">
        <p className="shrink-0 text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">{label}</p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex w-max animate-marquee gap-12">
            {row.map((c, i) => (
              <span key={i} className="flex items-center gap-3 font-display text-lg font-semibold whitespace-nowrap text-ink-700">
                <span className="h-2 w-2 rotate-45 bg-brand-500" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValuesGrid({ t }: { t: Dict }) {
  const v = t.values;
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={v.eyebrow}
          title={<>{v.titleA} <span className="text-brand-500">{v.titleB}</span></>}
          text={v.text}
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {v.items.map((item, i) => (
            <Reveal key={i} delay={i * 80} className="group relative bg-white p-6 transition-colors duration-300 hover:bg-ink-950 sm:p-8 lg:p-10">
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={valueIcons[i]} className="h-7 w-7" />
                </span>
                <span className="font-display text-sm font-semibold text-ink-300 group-hover:text-ink-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink-900 group-hover:text-white sm:mt-8">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-500 group-hover:text-ink-300">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ApproachSteps({ t }: { t: Dict }) {
  const a = t.approach;
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 sm:py-24 lg:py-32">
      <div className="grid-lines absolute inset-0" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow={a.eyebrow}
          title={<>{a.titleA} <span className="text-brand-400">{a.titleB}</span></>}
          text={a.text}
        />
        <ol className="mt-10 grid gap-3 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {a.steps.map((s, i) => (
            <Reveal as="li" key={i} delay={i * 120} className="group relative">
              <div className="flex h-full gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:border-brand-500/50 hover:bg-white/[0.06] sm:block sm:p-8">
                <div className="flex shrink-0 items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-500 font-display text-lg font-bold text-white shadow-lg shadow-brand-500/40 sm:h-12 sm:w-12">
                    {i + 1}
                  </span>
                  {i < a.steps.length - 1 && <span className="hidden h-px flex-1 bg-gradient-to-r from-brand-500/60 to-transparent lg:block" />}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white sm:mt-8 sm:text-2xl">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-400 sm:mt-3 sm:text-base">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CtaBand({ t, lang }: { t: Dict; lang: Locale }) {
  return (
    <section className="bg-white px-5 py-16 sm:py-24 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-600">
        <Image src="/images/engineers.jpg" alt="" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-600/95 to-brand-500/70" />
        <div className="relative grid gap-8 p-7 sm:p-14 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:p-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-100 uppercase">{t.cta.kicker}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-bold text-balance text-white sm:text-4xl lg:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-brand-100">{t.cta.text}</p>
          </div>
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <Button href={localize(lang, "/contact")} variant="dark">{t.cta.button}</Button>
            <a href={company.phoneHref} className="flex items-center gap-3 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-brand-100">{t.cta.call}</span>
                <span className="font-display text-lg font-semibold">{company.phone}</span>
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
