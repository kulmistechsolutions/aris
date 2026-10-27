import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { company, serviceMeta } from "@/lib/data";
import { getDict } from "@/lib/i18n";

type Props = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ service?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getDict((await params).lang);
  return { title: t.contactPage.metaTitle, description: t.contactPage.metaDescription };
}

export default async function ContactPage({ params, searchParams }: Props) {
  const t = getDict((await params).lang);
  const c = t.contactPage;
  const { service = "" } = await searchParams;

  const details = [
    { icon: "user", label: c.labels.chairman, value: company.chairman },
    { icon: "phone", label: c.labels.phone, value: company.phone, href: company.phoneHref },
    { icon: "mail", label: c.labels.email, value: company.email, href: `mailto:${company.email}` },
    { icon: "globe", label: c.labels.coverage, value: c.coverage },
    { icon: "doc", label: c.labels.registration, value: c.registration },
  ];
  const serviceOptions = serviceMeta.map((m, i) => ({ value: m.slug, label: t.services[i].title }));

  return (
    <>
      <PageHero
        eyebrow={c.heroEyebrow}
        title={<>{c.heroTitleA} <span className="text-brand-400">{c.heroTitleB}</span></>}
        text={c.heroText}
        image="/images/team-plans.jpg"
      />

      <section className="bg-ink-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:gap-8 lg:grid-cols-[1fr_1.6fr] lg:px-8">
          <Reveal className="flex flex-col gap-4 sm:gap-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-7 sm:p-8 lg:p-10">
              <div className="grid-lines absolute inset-0" />
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
              <h2 className="relative font-display text-2xl font-bold text-white">{c.detailsTitle}</h2>
              <ul className="relative mt-8 space-y-6">
                {details.map((d) => {
                  const inner = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-300">
                        <Icon name={d.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs tracking-wider text-ink-400 uppercase">{d.label}</span>
                        <span className="font-medium break-words text-white">{d.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={d.icon}>
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
              className="group flex items-center gap-4 rounded-[2rem] bg-[#25D366] p-6 text-white transition hover:brightness-95 sm:gap-5 sm:p-8"
            >
              <WhatsAppIcon className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" />
              <span>
                <span className="block font-display text-lg font-bold sm:text-xl">{c.whatsappTitle}</span>
                <span className="text-sm text-white/85">{c.whatsappSub}</span>
              </span>
              <Icon name="arrow" className="ml-auto h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={120} className="rounded-[2rem] bg-white p-6 shadow-xl shadow-ink-900/5 ring-1 ring-ink-100 sm:p-8 lg:p-12">
            <h2 className="font-display text-2xl font-bold text-ink-900 lg:text-3xl">{c.formTitle}</h2>
            <p className="mt-2 mb-8 text-ink-500">{c.formNote}</p>
            <ContactForm t={t.form} services={serviceOptions} initialService={service} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
