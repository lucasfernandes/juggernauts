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
  },
  {
    title: "Linkedin",
    src: "/linkedin.svg",
    href: "https://www.linkedin.com/company/juggernautssports",
  },
  {
    title: "Telegram",
    src: "/telegram.svg",
    href: "https://t.me/JuggernautsSports",
  },
  { title: "Email", src: "/email.svg", href: "#" },
];
