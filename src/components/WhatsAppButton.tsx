import { company } from "@/lib/data";
import { WhatsAppIcon } from "./Icon";

export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AIRIS on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-xl shadow-black/20 transition hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
