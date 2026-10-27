import Image from "next/image";
import { approach, clients, company, values } from "@/lib/data";
import { Icon } from "./Icon";
import Reveal from "./Reveal";
import { Button, SectionHeading } from "./ui";

export function ClientsMarquee() {
  const row = [...clients, ...clients, ...clients, ...clients];
  return (
    <section className="border-y border-ink-100 bg-ink-50 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 lg:flex-row lg:px-8">
        <p className="shrink-0 text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">Who we serve</p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-12">
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

export function ValuesGrid() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Core Values"
          title={<>Six values behind <span className="text-brand-500">every project.</span></>}
          text="The principles that guide how we plan, build, supply and report — on every contract, at every scale."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="group relative bg-white p-8 transition-colors hover:bg-ink-950 lg:p-10">
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={v.icon} className="h-7 w-7" />
                </span>
                <span className="font-display text-sm font-semibold text-ink-300 group-hover:text-ink-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold text-ink-900 group-hover:text-white">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-500 group-hover:text-ink-300">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ApproachSteps() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="grid-lines absolute inset-0" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="Our Approach"
          title={<>From brief to handover, <span className="text-brand-400">in four clear steps.</span></>}
          text="A simple, disciplined process that keeps scope, cost and time under control from day one."
        />
        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="group relative">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-brand-500/50 hover:bg-white/[0.06]">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-500 font-display text-lg font-bold text-white shadow-lg shadow-brand-500/40">
                    {i + 1}
                  </span>
                  {i < approach.length - 1 && <span className="hidden h-px flex-1 bg-gradient-to-r from-brand-500/60 to-transparent lg:block" />}
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-400">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-600">
        <Image src="/images/engineers.jpg" alt="" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-600/95 to-brand-500/70" />
        <div className="relative grid gap-10 p-10 sm:p-14 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:p-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-100 uppercase">One contract · One team · One point of contact</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
              Let’s deliver your next project together.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-brand-100">
              Tell us about your scope, timeline and location — we’ll respond with a clear, written proposal.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <Button href="/contact" variant="dark">Request a Quote</Button>
            <a href={company.phoneHref} className="flex items-center gap-3 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-brand-100">Call us directly</span>
                <span className="font-display text-lg font-semibold">{company.phone}</span>
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
