// Language-neutral facts from the AIRIS Company Profile.
// All translatable text lives in src/lib/dictionaries.

export const company = {
  name: "AIRIS",
  legalName: "AIRIS General Contracting & Integrated Services Ltd.",
  chairman: "Said Mohomed Adan",
  phone: "+252 611 565 611",
  phoneHref: "tel:+252611565611",
  whatsappHref: "https://wa.me/252611565611",
  email: "info@airisltd.com",
};

export const navPaths = ["/", "/about", "/services", "/projects", "/contact"] as const;

// Same order as `services` in each dictionary.
export const serviceMeta = [
  { slug: "general-contracting", icon: "building", image: "/images/hero-site.jpg" },
  { slug: "subcontracting", icon: "layers", image: "/images/engineers.jpg" },
  { slug: "procurement", icon: "truck", image: "/images/road.jpg" },
  { slug: "construction-maintenance", icon: "wrench", image: "/images/school.jpg" },
  { slug: "it-digital", icon: "monitor", image: "/images/city.jpg" },
  { slug: "integrated-business", icon: "grid", image: "/images/team-plans.jpg" },
] as const;

// Same order as `values.items` in each dictionary.
export const valueIcons = ["badge", "handshake", "shield", "bulb", "users", "clipboard"] as const;

// Same order as `projects.types` in each dictionary.
export const projectImages = ["/images/road.jpg", "/images/school.jpg", "/images/water.jpg"] as const;

// Same order as `clients` in each dictionary.
export const clientIcons = ["building", "grid", "users", "globe", "badge"] as const;

export const board = [
  { initials: "SM", name: "Said Mohomed Adan", chair: true },
  { initials: "AM", name: "Abdulahi Mohumed Farah", chair: false },
  { initials: "AA", name: "Abdirahman Ali Aadan", chair: false },
];
