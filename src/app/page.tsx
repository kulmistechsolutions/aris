import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ApproachSteps, ClientsMarquee, CtaBand, ValuesGrid } from "@/components/sections";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import { company, mission, projectTypes, promises, services, stats, vision } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-950">
        <Image
          src="/images/hero-site.jpg"
          alt="AIRIS construction site with cranes and reinforced concrete structure"
          fill
          priority
          sizes="100vw"
          className="-z-20 scale-105 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

        <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-40 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-white/80 uppercase backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />
                General Contracting · Project Implementation · Integrated Services
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 font-display text-[2.6rem] leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Building infrastructure for a{" "}
                <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                  stronger tomorrow.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-300">
                {company.legalName} is your single partner for construction, supply and support services —
                delivering quality projects worldwide, on agreed standards, timelines and specifications.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Start Your Project</Button>
              <Button href="/services" variant="ghost">Explore Services</Button>
            </Reveal>
          </div>
        </div>

        {/* stats strip */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal delay={400} className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.label} className={`py-6 md:py-8 ${i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""} ${i % 2 === 1 ? "border-l border-white/10 pl-6 md:pl-8" : ""}`}>
                  <p className="font-display text-3xl font-bold text-white lg:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs tracking-wider text-ink-400 uppercase">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <ClientsMarquee />

      {/* WHO WE ARE */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/5]">
              <Image src="/images/team-plans.jpg" alt="AIRIS engineers reviewing plans on site" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -right-4 -bottom-8 w-60 animate-float rounded-3xl bg-white p-6 shadow-2xl shadow-ink-900/15 sm:-right-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white">
                <Icon name="globe" className="h-6 w-6" />
              </span>
              <p className="mt-4 font-display text-xl font-bold text-ink-900">Worldwide</p>
              <p className="text-sm text-ink-500">All regions · All project locations</p>
            </div>
            <div className="absolute -top-6 -left-6 -z-10 h-40 w-40 rounded-3xl bg-brand-100" />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title={<>A single partner for <span className="text-brand-500">contracting & delivery.</span></>}
            />
            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                AIRIS is a multi-service company providing general contracting, subcontracting, construction and
                maintenance, procurement, and integrated business services worldwide.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                We work with main contractors, private companies, NGOs, development agencies and institutional
                clients to deliver high-quality projects that meet agreed standards, timelines and specifications.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-10 grid grid-cols-2 gap-4">
              {promises.map((p) => (
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
              <Button href="/about" variant="dark">More About AIRIS</Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ink-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our Services"
              title={<>Six service lines, <span className="text-brand-500">one accountable partner.</span></>}
            />
            <Reveal>
              <Link href="/services" className="group inline-flex items-center gap-2 font-semibold text-brand-600">
                View all services
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10"
                >
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-500 transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-950 text-white transition-colors group-hover:bg-brand-500">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                    <span className="font-display text-4xl font-bold text-ink-100">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold text-ink-900">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-500">{s.summary}</p>
                  <ul className="mt-6 space-y-2 border-t border-ink-100 pt-6">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-ink-600">
                        <Icon name="check" className="h-4 w-4 text-brand-500" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading center eyebrow="Our Purpose" title={<>Direction that <span className="text-brand-500">drives delivery.</span></>} />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-10 lg:p-14">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
              <Eyebrow light>Our Mission</Eyebrow>
              <p className="relative mt-6 font-display text-xl leading-relaxed text-white lg:text-2xl">{mission}</p>
            </Reveal>
            <Reveal delay={150} className="relative overflow-hidden rounded-[2rem] bg-brand-500 p-10 lg:p-14">
              <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                <span className="h-px w-8 bg-white/70" /> Our Vision
              </span>
              <p className="relative mt-6 font-display text-xl leading-relaxed text-white lg:text-2xl">{vision}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <ApproachSteps />

      {/* PROJECT TYPES */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities in Action"
            title={<>Project types <span className="text-brand-500">we deliver.</span></>}
            text="From roads that connect communities to schools and water systems that serve them."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projectTypes.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <Link href="/projects" className="group relative block aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <span className="text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-ink-300 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                      {p.text}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ValuesGrid />
      <CtaBand />
    </>
  );
}
