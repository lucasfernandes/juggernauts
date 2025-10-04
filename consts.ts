export type route = { title: string; href: string };

export const routes: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Fantasy Contests", href: "#fantasy-contests" },
  { title: "Whitepaper", href: "#" },
  { title: "Contact Us", href: "#contact-us" },
];

export const partners = [
  "/chirpley-logo.svg",
  "/samurai-logo.svg",
  "/slance-logo.svg",
];

export const socials = [
  {
    title: "Twitter",
    src: "/twitter.svg",
    href: "https://x.com/0xJuggernauts",
    target: "blank",
  },
  {
    title: "Linkedin",
    src: "/linkedin.svg",
    href: "https://www.linkedin.com/company/juggernautssports",
    target: "blank",
  },
  {
    title: "Telegram",
    src: "/telegram.svg",
    href: "https://t.me/JuggernautsSports",
    target: "blank",
  },
  {
    title: "Email",
    src: "/email.svg",
    href: "mailto:hello@juggernauts.io",
    target: "blank",
  },
];

export const docs = [
  {
    title: "Medium",
    href: "https://medium.com/juggernauts-sports",
  },
  {
    title: "Whitepaper",
    href: "#",
  },
  {
    title: "Pitch Deck",
    href: "#",
  },
];
