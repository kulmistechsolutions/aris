import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ApproachSteps, CtaBand } from "@/components/sections";
import { Button, PageHero } from "@/components/ui";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "General contracting, subcontracting, procurement & supply, construction & maintenance, IT & digital and integrated business services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Six service lines, <span className="text-brand-400">one accountable partner.</span></>}
        text="One contract. One team. One point of contact. Combining construction, supply and support services under a single agreement simplifies coordination and keeps delivery on track."
        image="/images/hero-site.jpg"
      />

      {/* quick index */}
      <nav className="sticky top-20 z-30 border-b border-ink-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 lg:px-8">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap text-ink-600 ring-1 ring-ink-100 transition hover:bg-brand-500 hover:text-white hover:ring-brand-500"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-5 lg:space-y-32 lg:px-8">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-40 items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <Reveal className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <Image src={s.image} alt={s.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent" />
                </div>
                <span className={`absolute -bottom-6 grid h-20 w-20 place-items-center rounded-3xl bg-brand-500 text-white shadow-xl shadow-brand-500/40 ${i % 2 ? "-left-4 lg:-left-6" : "-right-4 lg:-right-6"}`}>
                  <Icon name={s.icon} className="h-9 w-9" />
                </span>
              </Reveal>
              <Reveal delay={120}>
                <span className="font-display text-6xl font-extrabold text-ink-100">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 lg:text-4xl">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-500">{s.summary}</p>
                <ul className="mt-8 grid gap-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 px-5 py-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className="font-medium text-ink-800">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href={`/contact?service=${s.slug}`}>Enquire about this service</Button>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <ApproachSteps />
      <CtaBand />
    </>
  );
}
