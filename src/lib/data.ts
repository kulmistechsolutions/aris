// All content is taken from the AIRIS Company Profile.

export const company = {
  name: "AIRIS",
  legalName: "AIRIS General Contracting & Integrated Services Ltd.",
  tagline: "Building infrastructure for a stronger tomorrow",
  pillars: ["Reliable Partnerships", "Quality Services", "Effective Project Delivery"],
  chairman: "Said Mohomed Adan",
  phone: "+252 611 565 611",
  phoneHref: "tel:+252611565611",
  whatsappHref: "https://wa.me/252611565611",
  email: "info@airisltd.com",
  coverage: "Worldwide",
  registration: "After official registration",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "6", label: "Service lines" },
  { value: "Global", label: "Operating reach" },
  { value: "5", label: "Client types" },
  { value: "1", label: "Single partner" },
];

export const clients = [
  "Main Contractors",
  "Private Companies",
  "NGOs",
  "Development Agencies",
  "Institutional Clients",
];

export const mission =
  "To provide dependable and professional construction and integrated services that contribute to the socio-economic development of communities, while adhering to the highest standards of quality, safety, professionalism and sustainability.";

export const vision =
  "To become a trusted and recognised company worldwide, known for reliable contracting, professional project delivery, innovation and high-quality integrated services.";

export const commitment =
  "We aim to build lasting relationships with clients and partners by understanding project needs, maintaining professional standards, respecting written agreements, and working toward safe, timely and quality delivery.";

export const promises = [
  { title: "Safe", sub: "by procedure" },
  { title: "Timely", sub: "by agreement" },
  { title: "Quality", sub: "by specification" },
  { title: "Transparent", sub: "by reporting" },
];

export const values = [
  { title: "Quality", text: "Delivering work in line with agreed specifications and standards.", icon: "badge" },
  { title: "Integrity", text: "Acting honestly and transparently in all business dealings.", icon: "handshake" },
  { title: "Safety", text: "Respecting workplace safety procedures and applicable requirements.", icon: "shield" },
  { title: "Innovation", text: "Using practical ideas and suitable technology to improve efficiency.", icon: "bulb" },
  { title: "Collaboration", text: "Working constructively with clients, contractors, suppliers and communities.", icon: "users" },
  { title: "Accountability", text: "Keeping clear records, reporting progress and honouring commitments.", icon: "clipboard" },
] as const;

export const approach = [
  { title: "Understand", text: "We start by understanding the full scope of work." },
  { title: "Confirm", text: "Resources and responsibilities are confirmed up front." },
  { title: "Agree", text: "Costs and timelines are agreed in writing." },
  { title: "Deliver", text: "Open communication through delivery and handover." },
];

export const services = [
  {
    slug: "general-contracting",
    title: "General Contracting",
    icon: "building",
    image: "/images/hero-site.jpg",
    summary: "End-to-end delivery of buildings, civil works and infrastructure, managed by one accountable team.",
    items: ["Building construction", "Civil works", "Infrastructure development"],
  },
  {
    slug: "subcontracting",
    title: "Subcontracting",
    icon: "layers",
    image: "/images/engineers.jpg",
    summary: "Reliable specialist capacity for main contractors who need work done to specification and on time.",
    items: ["Civil and structural works", "Finishing works", "Project support services"],
  },
  {
    slug: "procurement",
    title: "Procurement & Supply",
    icon: "truck",
    image: "/images/road.jpg",
    summary: "Sourcing and delivery of the materials, equipment and supplies that keep projects moving.",
    items: ["Construction materials", "Equipment supply", "Office and operational supplies"],
  },
  {
    slug: "construction-maintenance",
    title: "Construction & Maintenance",
    icon: "wrench",
    image: "/images/school.jpg",
    summary: "Keeping buildings and facilities safe, functional and fit for purpose throughout their life.",
    items: ["Building maintenance", "Renovation and rehabilitation", "Facility services"],
  },
  {
    slug: "it-digital",
    title: "IT & Digital Services",
    icon: "monitor",
    image: "/images/city.jpg",
    summary: "Practical digital tools that help organisations work, communicate and report more efficiently.",
    items: ["Website development", "Digital solutions", "System support"],
  },
  {
    slug: "integrated-business",
    title: "Integrated Business Services",
    icon: "grid",
    image: "/images/team-plans.jpg",
    summary: "Logistics, operations and project management support that ties every workstream together.",
    items: ["Logistics support", "Operational services", "Project management support"],
  },
] as const;

export const projectTypes = [
  {
    title: "Road Construction",
    text: "Roads and civil works that connect communities and support economic activity.",
    image: "/images/road.jpg",
  },
  {
    title: "School Construction",
    text: "Educational and public buildings built to agreed specifications.",
    image: "/images/school.jpg",
  },
  {
    title: "Water Supply Projects",
    text: "Water supply works that improve access to a basic service.",
    image: "/images/water.jpg",
  },
];

export const board = [
  { initials: "SM", name: "Said Mohomed Adan", role: "Chairman & Board Member" },
  { initials: "AM", name: "Abdulahi Mohumed Farah", role: "Board Member" },
  { initials: "AA", name: "Abdirahman Ali Aadan", role: "Board Member" },
];
