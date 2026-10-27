import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ApproachSteps, CtaBand, ValuesGrid } from "@/components/sections";
import { Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { board, clients, commitment, company, mission, promises, vision } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who AIRIS is, our mission, vision, core values and board of directors.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AIRIS"
        title={<>A single partner for <span className="text-brand-400">contracting & delivery.</span></>}
        text="We combine construction, supply and support services under one agreement — simplifying coordination and keeping delivery on track."
        image="/images/city.jpg"
      />

      {/* Who we are */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Multi-service company, worldwide delivery." />
            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                {company.legalName} is a multi-service company providing general contracting, subcontracting,
                construction and maintenance, procurement, and integrated business services worldwide.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                We work with main contractors, private companies, NGOs, development agencies and institutional
                clients to deliver high-quality projects that meet agreed standards, timelines and specifications.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150} className="rounded-[2rem] bg-ink-50 p-8 lg:p-12">
            <Eyebrow>Where We Work</Eyebrow>
            <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">
              Working across the world, delivering where it matters.
            </h3>
            <p className="mt-4 leading-relaxed text-ink-500">
              AIRIS delivers projects and services worldwide, partnering with clients wherever they operate and
              adapting to local requirements, standards and conditions.
            </p>
            <div className="mt-8 border-t border-ink-200 pt-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">Who we serve</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {clients.map((c) => (
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
      <section className="bg-ink-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading center eyebrow="Our Purpose" title={<>Direction that <span className="text-brand-500">drives delivery.</span></>} />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {[
              { label: "Our Mission", text: mission, icon: "badge" },
              { label: "Our Vision", text: vision, icon: "globe" },
            ].map((b, i) => (
              <Reveal key={b.label} delay={i * 120} className="rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-ink-100 lg:p-12">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white">
                  <Icon name={b.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-8 font-display text-2xl font-bold text-ink-900">{b.label}</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-500">{b.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6 overflow-hidden rounded-[2rem] bg-ink-950 p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <Eyebrow light>Our Commitment</Eyebrow>
                <p className="mt-5 text-lg leading-relaxed text-ink-300">{commitment}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {promises.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 p-5">
                    <p className="font-display text-xl font-bold text-white">{p.title}</p>
                    <p className="text-sm text-brand-300">{p.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ValuesGrid />
      <ApproachSteps />

      {/* Board */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            center
            eyebrow="Organisational Structure"
            title={<>Clear roles, <span className="text-brand-500">clear accountability.</span></>}
            text={`Board of Directors — ${company.legalName}`}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {board.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <div className={`group relative h-full overflow-hidden rounded-3xl p-8 text-center ring-1 transition hover:-translate-y-1 hover:shadow-xl ${i === 0 ? "bg-ink-950 ring-ink-950" : "bg-white ring-ink-100"}`}>
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 font-display text-2xl font-bold text-white shadow-lg shadow-brand-500/30">
                    {m.initials}
                  </div>
                  <h3 className={`mt-6 font-display text-xl font-bold ${i === 0 ? "text-white" : "text-ink-900"}`}>{m.name}</h3>
                  <p className={`mt-1 text-sm font-semibold tracking-wider uppercase ${i === 0 ? "text-brand-300" : "text-brand-600"}`}>{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[21/9]">
              <Image src="/images/engineers.jpg" alt="AIRIS site engineers in branded safety vests" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
              <p className="absolute bottom-6 left-6 max-w-lg font-display text-lg font-semibold text-white sm:bottom-10 sm:left-10 sm:text-2xl">
                Reliable partnerships. Quality services. Effective project delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
