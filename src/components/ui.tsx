import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import Reveal from "./Reveal";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase ${
        light ? "text-brand-300" : "text-brand-600"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-brand-300" : "bg-brand-500"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-ink-300" : "text-ink-500"}`}>{text}</p>
      )}
    </Reveal>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "dark";
}) {
  const styles = {
    primary: "bg-brand-500 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600",
    ghost: "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/15",
    dark: "bg-ink-900 text-white hover:bg-ink-800",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition ${styles}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-40 pb-24 lg:pt-48 lg:pb-32">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-brand-900/40" />
      <div className="grid-lines absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
