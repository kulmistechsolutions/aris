import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AIRIS General Contracting & Integrated Services Ltd. — +252 611 565 611, info@airisltd.com.",
};

const details = [
  { icon: "user", label: "Chairman", value: company.chairman },
  { icon: "phone", label: "Telephone", value: company.phone, href: company.phoneHref },
  { icon: "mail", label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: "globe", label: "Coverage", value: company.coverage },
  { icon: "doc", label: "Registration No.", value: company.registration },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service = "" } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={<>Let’s deliver your <span className="text-brand-400">next project together.</span></>}
        text="Share your scope of work and we’ll come back to you with a clear plan, agreed costs and realistic timelines — in writing."
        image="/images/team-plans.jpg"
      />

      <section className="bg-ink-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_1.6fr] lg:px-8">
          <Reveal className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-8 lg:p-10">
              <div className="grid-lines absolute inset-0" />
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
              <h2 className="relative font-display text-2xl font-bold text-white">Contact details</h2>
              <ul className="relative mt-8 space-y-6">
                {details.map((d) => {
                  const inner = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-300">
                        <Icon name={d.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs tracking-wider text-ink-400 uppercase">{d.label}</span>
                        <span className="font-medium text-white">{d.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <a href={d.href} className="flex items-center gap-4 transition hover:opacity-80">{inner}</a>
                      ) : (
                        <div className="flex items-center gap-4">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-[2rem] bg-[#25D366] p-8 text-white transition hover:brightness-95"
            >
              <WhatsAppIcon className="h-12 w-12 shrink-0" />
              <span>
                <span className="block font-display text-xl font-bold">Chat on WhatsApp</span>
                <span className="text-sm text-white/85">Fastest way to reach our team</span>
              </span>
              <Icon name="arrow" className="ml-auto h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={120} className="rounded-[2rem] bg-white p-8 shadow-xl shadow-ink-900/5 ring-1 ring-ink-100 lg:p-12">
            <h2 className="font-display text-2xl font-bold text-ink-900 lg:text-3xl">Request a quote</h2>
            <p className="mt-2 mb-8 text-ink-500">Fields marked * are required. We reply to every enquiry.</p>
            <ContactForm initialService={service} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
