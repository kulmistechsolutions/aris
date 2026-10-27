import { company } from "@/lib/data";
import { WhatsAppIcon } from "./Icon";

export default function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3 sm:right-6 sm:bottom-6 sm:p-3.5 text-white shadow-xl shadow-black/20 transition hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
