import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/sections";
import { Button, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { clients, projectTypes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Road construction, school construction and water supply projects delivered by AIRIS.",
};

const referenceFields = ["Project name", "Client", "Location & year", "Scope of work"];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities in Action"
        title={<>Project types <span className="text-brand-400">we deliver.</span></>}
        text="Infrastructure and public works that connect communities, educate the next generation and improve access to basic services."
        image="/images/engineers.jpg"
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-6 px-5 lg:px-8">
          {projectTypes.map((p, i) => (
            <Reveal key={p.title}>
              <div className="group grid overflow-hidden rounded-[2rem] bg-ink-950 lg:grid-cols-2">
                <div className={`relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px] ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="relative flex flex-col justify-center p-10 lg:p-16">
                  <div className="grid-lines absolute inset-0 opacity-60" />
                  <span className="relative font-display text-sm font-semibold tracking-[0.2em] text-brand-400 uppercase">
                    Project type 0{i + 1}
                  </span>
                  <h2 className="relative mt-4 font-display text-3xl font-bold text-white lg:text-4xl">{p.title}</h2>
                  <p className="relative mt-5 text-lg leading-relaxed text-ink-300">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience / references */}
      <section className="bg-ink-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Project Experience"
              title={<>Verified references, <span className="text-brand-500">shared on request.</span></>}
              text="Completed projects, client references and team credentials are presented with verified details and shared during pre-qualification and tender processes."
            />
            <Reveal delay={150} className="mt-10">
              <Button href="/contact?service=references">Request References</Button>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="relative rounded-[2rem] bg-white p-8 shadow-xl shadow-ink-900/5 ring-1 ring-ink-100 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white">
                  <Icon name="doc" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-ink-900">Reference Sheet</p>
                  <p className="text-sm text-ink-500">Provided with every tender submission</p>
                </div>
              </div>
              <dl className="mt-8 divide-y divide-ink-100">
                {referenceFields.map((f) => (
                  <div key={f} className="flex items-center justify-between py-4">
                    <dt className="text-sm font-medium text-ink-600">{f}</dt>
                    <dd className="flex items-center gap-2 text-sm text-ink-400">
                      <Icon name="shield" className="h-4 w-4 text-brand-500" />
                      Verified on request
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center">
            <Eyebrow>Our Clients</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">Built for partners who need reliability.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {clients.map((c, i) => (
              <Reveal key={c} delay={i * 80} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
                <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-ink-100 px-4 py-8 text-center transition hover:border-brand-500 hover:bg-brand-50">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-ink-950 text-white">
                    <Icon name={["building", "grid", "users", "globe", "badge"][i]} className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-display font-semibold text-ink-900">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
