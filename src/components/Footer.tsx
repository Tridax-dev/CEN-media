import Reveal from "./Reveal";
import Logo from "./Logo";
import { bookingHref, navLinks, siteConfig } from "../config";

export function FinalCTA() {
  return (
    <section className="border-t border-line py-24 text-center md:py-36">
      <Reveal className="mx-auto max-w-[1280px] px-5">
        <h2 className="display-section">YOUR BRAND<br />DESERVES<br />TO BE SEEN.</h2>
        <a href={bookingHref} className="mt-10 inline-flex h-14 items-center bg-brand px-10 font-extrabold text-white transition-colors hover:bg-brand-dark">LET'S TALK →</a>
        <p className="mt-6 text-sm text-muted">Strategy. Creativity. Execution.</p>
      </Reveal>
    </section>
  );
}

const social = [
  { label: "Instagram", href: siteConfig.instagram },
  { label: "TikTok", href: siteConfig.tiktok },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "X", href: siteConfig.twitter },
];

export default function Footer() {
  const col = "space-y-3 text-white/70 [&_a:hover]:text-white";
  return (
    <footer className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Logo className="h-32 md:h-48" />
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          <nav aria-label="Company"><h3 className="label mb-4">Company</h3><ul className={col}>{navLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul></nav>
          <div><h3 className="label mb-4">Contact</h3><ul className={col}><li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li><li>{siteConfig.phone}</li><li>{siteConfig.location}</li></ul></div>
          <nav aria-label="Social"><h3 className="label mb-4">Social</h3><ul className={col}>{social.map((s) => <li key={s.label}><a href={s.href}>{s.label}</a></li>)}</ul></nav>
        </div>
        <p className="mt-16 border-t border-white/15 pt-6 text-sm text-white/50">© 2026 {siteConfig.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
